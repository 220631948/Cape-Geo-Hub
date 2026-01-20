import { useState, useEffect, useCallback } from 'react';
import localforage from 'localforage';
import type { FeatureCollection, Geometry, GeoJsonProperties } from 'geojson';

// Initialize localforage
localforage.config({
  name: 'CapeTownGeoHub',
  storeName: 'geo_data_cache',
});

interface CacheItem<T extends GeoJsonProperties = GeoJsonProperties> {
  data: FeatureCollection<Geometry, T>;
  timestamp: number;
  url: string;
  feature_count: number;
}

interface UseGeoDataOptions {
  /** Cache duration in milliseconds. Default: 7 days */
  cacheDuration?: number;
  /** Skip cache and force fetch */
  skipCache?: boolean;
}

interface UseGeoDataResult<T extends GeoJsonProperties = GeoJsonProperties> {
  data: FeatureCollection<Geometry, T> | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
  isCached: boolean;
}

const DEFAULT_CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

export function useGeoData<T extends GeoJsonProperties = GeoJsonProperties>(
  url: string,
  options: UseGeoDataOptions = {}
): UseGeoDataResult<T> {
  const [data, setData] = useState<FeatureCollection<Geometry, T> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [isCached, setIsCached] = useState<boolean>(false);

  const { cacheDuration = DEFAULT_CACHE_DURATION, skipCache = false } = options;

  const fetchData = useCallback(async (force = false) => {
    if (!url) return;

    setLoading(true);
    setError(null);

    try {
      // 1. Check Cache (if not forcing)
      if (!skipCache && !force) {
        try {
          const cachedItem = await localforage.getItem<CacheItem<T>>(url);

          if (cachedItem) {
            const age = Date.now() - cachedItem.timestamp;
            if (age < cacheDuration) {
              // Cache hit and valid
              setData(cachedItem.data);
              setIsCached(true);
              setLoading(false);
              return;
            } else {
              // Cache expired
              console.debug(`[useGeoData] Cache expired for ${url}`);
              await localforage.removeItem(url);
            }
          }
        } catch (cacheErr) {
          console.warn('[useGeoData] Cache read error:', cacheErr);
          // Proceed to fetch
        }
      }

      // 2. Network Request
      console.debug(`[useGeoData] Fetching ${url}`);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch GeoJSON: ${response.status} ${response.statusText}`);
      }

      const jsonData = (await response.json()) as FeatureCollection<Geometry, T>;

      // Basic validation to ensure it looks like GeoJSON
      if (!jsonData.type || jsonData.type !== 'FeatureCollection') {
        throw new Error('Invalid GeoJSON: Root must be FeatureCollection');
      }

      // 3. Update State
      setData(jsonData);
      setIsCached(false);

      // 4. Update Cache
      try {
        const cacheItem: CacheItem<T> = {
          data: jsonData,
          timestamp: Date.now(),
          url,
          feature_count: jsonData.features.length,
        };
        await localforage.setItem(url, cacheItem);
      } catch (cacheWriteErr) {
        console.warn('[useGeoData] Cache write error:', cacheWriteErr);
      }

    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error fetching GeoJSON'));
    } finally {
      setLoading(false);
    }
  }, [url, cacheDuration, skipCache]);

  // Initial fetch
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback(async () => {
    await fetchData(true);
  }, [fetchData]);

  return { data, loading, error, refetch, isCached };
}
