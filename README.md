

<img src="https://media.giphy.com/media/DMUFPG2niG1TW/giphy.gif" alt="earth" style= "border-radius: 360px"/>


# World Tour
Data-driven regional statistics app of the world

### Description
"World Tour" allows users to take a satellite journey to both familiar and foreign lands of Earth. You can randomly teleport or get specific in your search for regional data.

Please see the deployed site here: https://worldtourapp.netlify.app/

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


|     Type     |     Name           | Description                                |
|:------------:| :--------------:   | :----------------------------------------- |
|    Library   |   Styled Components| Allows me to write CSS directly in my component files for semantic tags that carry style.|
|    Library   |   React Router     | Used to navigate through pages in the app  |
|    Library   |   React Test Renderer| Allows me to render React components to JSON format for testing |
|    Library   |   Jest Styled Components | For snapshot testing. A set of utilities for testing Styled Components with Jest |
|    Library   |   React Count-up   | Used for number animation  (https://github.com/glennreyes/react-countup)      |


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

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|     App      | functional |   y   |   n   | Holds all the Routes also holds the api call.                    |
|  Header/Nav  | functional |   y   |   n   | Links to the Home, About, Contact, and 'Explorer' components    |
|     Home     | functional |   n   |   y   | takes total sum data from API for all countries/regions           |
|     About    | functional |   n   |   n   | Static page with overview of the app                            |
|    Contact   | functional |   n   |   n   | Static page with contact information (i.e. email, github)       |
| Explorer pg. | functional |   y   |   y   | List of unique regions  and houses a random country generator   |
|  Region pg.  | functional |   n   |   y   | Dynamic pg. showing region selected by the user ex.("/region/Americas")   |
| Countries pg.| functional |   n   |   y   | Dynamic pg. showing country selected by the user ex.("/country/Canada")  |


### Time Estimates

> Time necessary to build the application: 

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Installing          |    H     |     15 mins    |      30 mins  |      30m     |
| App.js / Calling API|    H     |     5 hrs      |      30 mins  |      30m     |
| Header/Nav/Footer   |    H     |     4 hrs      |      9 hrs    |      9h      |
| Home                |    L     |     4 hrs      |      2 hrs    |      2h      |
| About               |    L     |     2 hrs      |      10 mins  |      10m     |
| Contact             |    L     |     2 hrs      |      10 mins  |      10m     |
| Explorer pg.        |    H     |     6 hrs      |      2.5 hrs  |      2.5h    |
| Region pg.          |    M     |     6 hrs      |      1 hr     |      1h      |
| Countries pg.       |    H     |     6 hrs      |      6 hrs    |      6h      |
| Testing or Storybook|    H     |     3 hrs      |        6 hrs  |      6h      |
| Styling/Responsive Design|  L  |     6 hrs      |      13 hrs   |      13h     |
| TOTAL               |    --    |    44 hrs      |     41 hrs    |     41 hrs   |

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

>The following descibes a random country generator styled using styled-components.
>The output box is unclickable until the 'Random button' is clicked. State for clickable is then 'true'

```
  const [country, updateCountry] = useState('--?--')
  const [clickable, updateClickable] = useState(false)

  function handleRandomBtn(e) {
    const countryCount = countries.length
    const randomNumber = Math.floor(Math.random() * countryCount)
    const randomCountry = countries.filter((country, i) => countries.indexOf(country) === randomNumber)
    
    updateClickable(true)
    updateCountry(randomCountry)

/////==== RETURN() ====/////

<RandomSection>

  <RandoBtn onClick= {(e) => handleRandomBtn()}>Visit a Random Country</RandoBtn>
  
  <RandoBox>
    <CountryLink to={`/country/${country}`} style={clickable ? { pointerEvents: "" } : { pointerEvents: "none" }}>
      <RandoCountry>{country}</RandoCountry>
    </CountryLink>
  </RandoBox>
  
</RandomSection>
```

## Change Log

- Header is now stately due to the hamburger menu functionality
- Explorer is now stately due the random country function
- Added a Footer


