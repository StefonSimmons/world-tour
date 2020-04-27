https://media.giphy.com/media/glvyCVWYJ21fq/giphy.gif

# World Tour
Data-driven regional statistics app for the world

### Description
"World Tour" allows users to take a satellite journey to both familiar and foreign lands of Earth. You can randomly teleport or get specific in your search for regional data.

### Wireframes

>Desktop, tablet and mobile views of "World Tour".


Tablet & Desktop View (via whimsical.com)

- https://whimsical.com/CC4ydoTbrLM2gbxUnfUBfR

Mobile View (via whimsical.com)

- https://whimsical.com/Q3mpp9nnWd3sYnECgM1E2k

### MVP

- Content (JSX/HTML) and styling (CSS) resembling the wireframes presented. 
- Accessible "Home", "Explorer, "About" and "Contact" pages
- Accessible regional detail page
- Accessible country detail pages via randomly generated result and via the regional detail page.
- GET API data on total statistics from all countries ('world data' -Home pg), total stats per region ('region details' -region pg.), and country stats (-country pg.).

### Post MVP

- Add search-bar/functionality to the region details page so user can search for countries
- Create a JSON file with country and region descriptions and images to be passed into the app for more robust learning experience
- Add a map widget to country and region details page

### Supporting Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | Used to navigate through pages in the app  |

### REST Countries API 

> API(s) consumed for 'World Tour', including API snippet.

|Quality Docs? | Website                        | Query                                             |
|:-----------: | :----------------------------: | :------------------------------------------------:|
|     yes      | https://restcountries.eu/      | https://restcountries.eu/rest/v2/name/hong%20kong |

API SNIPPET

```
[
    {
        "name": "Hong Kong",
        "topLevelDomain": [
            ".hk"
        ],
        "alpha2Code": "HK",
        "alpha3Code": "HKG",
        "callingCodes": [
            "852"
        ],
        "capital": "City of Victoria",
        "altSpellings": [
            "HK",
            "香港"
        ],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "population": 7324300,
        "latlng": [
            22.25,
            114.16666666
        ],
        "demonym": "Chinese",
        "area": 1104.0,
        "gini": 53.3,
        "timezones": [
            "UTC+08:00"
        ],
        "borders": [
            "CHN"
        ],
        "nativeName": "香港",
        "numericCode": "344",
        "currencies": [
            {
                "code": "HKD",
                "name": "Hong Kong dollar",
                "symbol": "$"
            }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "zh",
                "iso639_2": "zho",
                "name": "Chinese",
                "nativeName": "中文 (Zhōngwén)"
            }
        ],
        "translations": {
            "de": "Hong Kong",
            "es": "Hong Kong",
            "fr": "Hong Kong",
            "ja": "香港",
            "it": "Hong Kong",
            "br": "Hong Kong",
            "pt": "Hong Kong",
            "nl": "Hongkong",
            "hr": "Hong Kong",
            "fa": "هنگ‌کنگ"
        },
        "flag": "https://restcountries.eu/data/hkg.svg",
        "regionalBlocs": [],
        "cioc": "HKG"
    }
]
```

### Component Hierarchy

- (via whimsical) https://whimsical.com/7rNjWCZaadmmdsGFpA94FS

### Component Breakdown

> 

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|     App      | class      |   y   |   n   | Holds all the Routes also hols the api call                     |
|  Header/Nav  | functional |   n   |   n   | Links to the Home, About, Contact, and 'Explorer' Components    |
|     Home     | functional |   n   |   y   | takes total sum data from API for all countries                 |
|     About    | functional |   n   |   n   | Static page with overview of the app                            |
|    Contact   | functional |   n   |   n   | Static page with contact information (i.e. email, github)       |
| Explorer pg. | functional |   n   |   y   | Static page of mapped regions                                   |
|  Region pg.  | class      |   y   |   y   | Dynamic pg. showing different regions ex.("/region/Americas")   |
| Countries pg.| class      |   y   |   y   | Dynamic pg. showing different countries ex.("/country/Canada")  |


### Component Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| App / Calling API   |    H     |     5 hrs      |        -      |      -      |
| Header/Nav          |    H     |     4 hrs      |        -      |      -      |
| Home                |    L     |     4 hrs      |        -      |      -      |
| About               |    L     |     2 hrs      |        -      |      -      |
| Contact             |    L     |     2 hrs      |        -      |      -      |
| Explorer pg.        |    H     |     6 hrs      |        -      |      -      |
| Region pg.          |    M     |     6 hrs      |        -      |      -      |
| Countries pg.       |    H     |     6 hrs      |        -      |      -      |
| Testing or Storybook|    H     |     3 hrs      |        -      |      -      |
| Styling             |    L     |     6 hrs      |        -      |      -      |
| TOTAL               |    --    |    44 hrs      |        -      |     TBD     |

### Helper Functions

> Use this section to document all helper functions– generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| - | - |

### SWOT Analysis

#### Strengths:
- CSS
- JSX
- high-order functions

#### Weaknesses:
- Testing or Storybook

#### Opportunites:
- Able to challenge myself on logistics
- Using Testing or Storybook
- Able to create a dynamic component-based app in React

#### Threats:
- Passing Props from Regional to Country Details

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.



