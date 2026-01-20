import requests
import json
import sys
import time

def search_portal(portal_name, base_url, queries):
    api_url = f"{base_url}/api/v3/search"
    results = {}

    print(f"\n=== Searching {portal_name} ===")

    for term in queries:
        params = {
            "q": term,
            "filter[type]": "Feature Service",
            "page[size]": 5
        }

        try:
            response = requests.get(api_url, params=params)
            response.raise_for_status()
            data = response.json()

            items = data.get("data", [])
            print(f"Query '{term}': Found {len(items)} items.")

            term_results = []
            for item in items:
                attrs = item.get("attributes", {})
                name = attrs.get("name", "Unknown")
                owner = attrs.get("owner", "Unknown")
                snippet = attrs.get("snippet", "")
                url = item.get("links", {}).get("itemPage", "")
                source_url = attrs.get("url", "")
                updated = attrs.get("modified", 0)
                tags = attrs.get("tags", [])

                res = {
                    "name": name,
                    "owner": owner,
                    "url": url,
                    "source_url": source_url,
                    "updated": updated,
                    "snippet": snippet
                }
                term_results.append(res)
                print(f"  - {name} (Owner: {owner})")
                print(f"    URL: {url}")

            results[term] = term_results
            time.sleep(0.5)

        except Exception as e:
            print(f"Error searching '{term}' on {portal_name}: {e}")

    return results

if __name__ == "__main__":
    # City of Cape Town
    cct_url = "https://odp-cctegis.opendata.arcgis.com"
    cct_queries = [
        "Official Suburbs",
        "Wards",
        "Informal Settlements",
        "Zoning",
        "Water",
        "Sanitation",
        "MyCiTi",
        "Transport",
        "Police",
        "Fire Station",
        "Clinic",
        "School",
        "Flood",
        "Coastal",
        "Land Use"
    ]

    # Western Cape Government
    wcg_url = "https://wcg-opendataportal-westerncapegov.hub.arcgis.com"
    wcg_queries = [
        "Health Facilities",
        "Education Facilities",
        "Schools",
        "Informal Settlements",
        "Flood",
        "River",
        "Wetland",
        "Roads"
    ]

    cct_results = search_portal("City of Cape Town", cct_url, cct_queries)
    wcg_results = search_portal("Western Cape Government", wcg_url, wcg_queries)

    all_results = {"CCT": cct_results, "WCG": wcg_results}

    with open("portal_results.json", "w") as f:
        json.dump(all_results, f, indent=2)
