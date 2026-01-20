# Cape Town GIS Data Sources

This document contains a curated list of official and alternative GIS datasets for Cape Town, focused on urban planning, service delivery, and infrastructure analysis.

**Official Sources:**
- **City of Cape Town Open Data Portal (CCT ODP):** [https://odp-cctegis.opendata.arcgis.com/](https://odp-cctegis.opendata.arcgis.com/)
- **Western Cape Government Open Data Portal (WCG ODP):** [https://wcg-opendataportal-westerncapegov.hub.arcgis.com/](https://wcg-opendataportal-westerncapegov.hub.arcgis.com/)

**Coordinate System Note:** Most datasets from these portals are provided in **WGS84 (EPSG:4326)** or **Web Mercator (EPSG:3857)** (via the "Download" or "GeoJSON" options). For strict spatial analysis, check the metadata of each file.

## 1. Administrative Boundaries

| Dataset | Source URL | Format | License | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Suburb Boundaries** | [Official Suburbs (CCT)](https://odp-cctegis.opendata.arcgis.com/datasets/cityofct::official-suburbs/about) | GeoJSON, Shapefile | Open Data Policy | Official City of Cape Town suburbs (last updated ~2019/2020). |
| **Ward Boundaries** | [Official Ward Boundaries 2016-2021 (CCT)](https://odp-cctegis.opendata.arcgis.com/search?q=Wards) | GeoJSON, Shapefile | Open Data Policy | Check for "2021" version for current municipal wards. |
| **District Boundaries** | [Subcouncils (CCT)](https://odp-cctegis.opendata.arcgis.com/datasets/cityofct::official-subcouncils/about) | GeoJSON, Shapefile | Open Data Policy | "Official Subcouncils" represent the administrative districts. |

## 2. Informal Settlements & Housing

| Dataset | Source URL | Format | License | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Informal Settlements (CCT)** | [Informal Settlements Programme (CCT)](https://odp-cctegis.opendata.arcgis.com/search?q=Informal%20Settlements) | GeoJSON, Shapefile | Open Data Policy | Polygon layer of recognized informal settlements. |
| **Informal Settlements (WCG)** | [Informal Settlements Cape Town (WCG)](https://gis.westerncape.gov.za/portal/home/item.html?id=f6fd6ea27f914c90b554ef5d6fd092e7) | Feature Service | WCG Policy | Detailed "Areas of Informality" including backyarders and high density areas. **Highly Recommended**. |
| **Housing Projects** | [Housing Projects (CCT)](https://odp-cctegis.opendata.arcgis.com/search?q=Housing) | GeoJSON | Open Data Policy | Planned and active housing developments. |

## 3. Transport Infrastructure

| Dataset | Source URL | Format | License | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **MyCiTi Bus Routes** | [MyCiTi Bus Routes (CCT)](https://odp-cctegis.opendata.arcgis.com/datasets/cityofct::integrated-rapid-transit-irt-system-myciti-bus-routes/about) | GeoJSON | Open Data Policy | Network lines for the IRT system. |
| **MyCiTi Bus Stops** | [MyCiTi Bus Stops (CCT)](https://odp-cctegis.opendata.arcgis.com/datasets/cityofct::integrated-rapid-transit-irt-system-myciti-bus-stops/about) | GeoJSON | Open Data Policy | Point locations of all IRT stops. |
| **Taxi Routes** | [Taxi Routes (CCT)](https://odp-cctegis.opendata.arcgis.com/datasets/cityofct::taxi-routes/about) | GeoJSON | Open Data Policy | Minibus taxi routes (mapped ~2019). |
| **Rail / Train Stations** | [Station Deck / Transport Hubs (CCT)](https://odp-cctegis.opendata.arcgis.com/search?q=Transport) | GeoJSON | Open Data Policy | *Alternative:* Use OpenStreetMap (OSM) for complete Metrorail station points (`railway=station`). |
| **Road Network** | [TCT Road Centreline (CCT)](https://odp-cctegis.opendata.arcgis.com/datasets/cityofct::tct-road-centerline/about) | GeoJSON | Open Data Policy | Official road network centerlines. |

## 4. Services & Social Infrastructure

| Dataset | Source URL | Format | License | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Health Facilities** | [DOH Facilities Viewer (WCG)](https://wcg-opendataportal-westerncapegov.hub.arcgis.com/datasets/wcg-department-of-health-specialised-facilities-/about) | Feature Service | WCG Policy | Includes Clinics, Hospitals, CDC (Community Day Centres) for both WCG and CCT. |
| **Education (Schools)** | [WC Education Department Facilities (WCG)](https://wcg-opendataportal-westerncapegov.hub.arcgis.com/search?q=Education) | Map/Feature Service | WCG Policy | Locations of all public schools. |
| **Libraries/Community** | [Community Facilities (CCT)](https://odp-cctegis.opendata.arcgis.com/search?q=Community) | GeoJSON | Open Data Policy | Look for "Facilities" or "Libraries" in the CCT search. |
| **Police Stations** | *Not official CCT dataset* | N/A | N/A | **Recommendation:** Use OpenStreetMap (`amenity=police`). The official SAPS data is not openly available as a clean shapefile. |
| **Crime Statistics** | [SAPS Crime Stats](https://www.saps.gov.za/services/crimestats.php) | PDF/Excel | Public | Aggregated by precinct. No point-level incident data available publicly. |

## 5. Environment & Hazards

| Dataset | Source URL | Format | License | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Flood Risk / Coastal** | [Coastal Management Map (WCG)](https://wcg-opendataportal-westerncapegov.hub.arcgis.com/search?q=Coastal) | Feature Service | WCG Policy | Includes Coastal Management Lines and flood risk zones. |
| **Rivers & Wetlands** | [WCG Biodiversity / Wetlands](https://wcg-opendataportal-westerncapegov.hub.arcgis.com/search?q=Wetland) | Feature Service | WCG Policy | "Wetland mapping datasets" or similar environmental layers. |
| **Parks / Open Space** | [Zoned Public Open Spaces (CCT)](https://odp-cctegis.opendata.arcgis.com/search?q=Open%20Space) | GeoJSON | Open Data Policy | |

## 6. Land Use & Planning

| Dataset | Source URL | Format | License | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Zoning** | [Zoning Scheme (CCT)](https://odp-cctegis.opendata.arcgis.com/datasets/cityofct::zoning/about) | GeoJSON, Shapefile | Open Data Policy | Detailed zoning polygons (Residential, Commercial, etc.). Large dataset. |
| **Land Use** | [Cape Town CBD / Land Use (CCT)](https://odp-cctegis.opendata.arcgis.com/search?q=Land%20Use) | GeoJSON | Open Data Policy | Various layers for specific planning areas (CBD, LFTEA). |
| **Building Footprints** | *Not official CCT dataset* | N/A | N/A | **Recommendation:** Use OpenStreetMap (`building=*`) or [Microsoft Building Footprints](https://github.com/microsoft/GlobalMLBuildingFootprints). |

## 7. Utilities (Water, Sanitation, Electricity)

*Note: Detailed utility network data (pipes, cables) is often restricted for security reasons.*

| Dataset | Source URL | Format | License | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Water Access (Communal)**| *Restricted / Unavailable* | N/A | N/A | **Priority Gap:** Official "Standpipe" locations are not on the open portal. **Alt:** Use OSM (`man_made=water_tap` or `amenity=drinking_water`). |
| **Sanitation (Toilets)** | *Restricted / Unavailable* | N/A | N/A | **Priority Gap:** Portable toilet locations are not public. **Alt:** Use OSM (`amenity=toilets`). |
| **Waste / Recycling** | [Solid Waste Facilities (CCT)](https://odp-cctegis.opendata.arcgis.com/search?q=Waste) | GeoJSON | Open Data Policy | Drop-off facilities and landfill sites might be available. |
| **Electricity** | *Restricted* | N/A | N/A | **Alt:** Use OSM for major substations/lines (`power=substation`, `power=line`). |

## Missing Data Strategy

For the critical missing datasets (Water Access, Sanitation, Police), the following approach is recommended for the application:

1.  **OpenStreetMap (OSM):** Use the Overpass API to query for `amenity=toilets`, `man_made=water_tap`, `water_source=*`, and `amenity=police`. The coverage in informal settlements varies but is often the best available open source.
2.  **Proxy Indicators:** Use the "Informal Settlements" attributes. The WCG "Areas of Informality" dataset often contains attributes regarding *service levels* (e.g., "Services: Partial", "Water: Communal") even if it doesn't map the exact points.
3.  **National Sources:** Check the Department of Water and Sanitation (DWS) national databases for major infrastructure, though local reticulation is usually municipal.
