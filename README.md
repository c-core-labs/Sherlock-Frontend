# Sherlock Geospatial Search and Discovery (Front End)

[![Netlify Status](https://api.netlify.com/api/v1/badges/791fc191-034c-429e-b604-19e1f265d1ac/deploy-status)](https://app.netlify.com/sites/sherlock-frontend/deploys)

https://sherlock-frontend.c-core.app/

## About the project

Sherlock is a geospatial search and discovery tool based on Elastic Search, STAC, and React.

This project exists in three parts:

1. This front end application
2. A compatible Elastic search index, [documented here]()
3. The STAC api [found here](https://github.com/c-core-labs/stac-api)

This project was built with the support of the [NRCAN GeoConnections program](https://www.nrcan.gc.ca/nrcan/transparency/reporting-accountability/plans-performance-reports/geoconnections-program-voted/20876)

## Demo

A demo of this project is available [here](https://sherlock-frontend.c-core.app/?CloudFilter=%5B0%2C100%5D):

Out index contains links to our own publically available assets, the Landsat STAC, and the ESA Coperincus mission catalog.

## Getting Started

### Prerequisites:

1. STAC-API

   The STAC API is available [here](https://github.com/c-core-labs/stac-api).

2. A compliant Elasticsearch Index, index documentation available here.

### Installation:

To install the front end application:

1. Clone this repo
2. Set env variables, an env.example file has been provided
3. In the project directory you can run:

    `yarn start`

    Launches the test runner in the interactive watch mode.\
    See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

    `yarn build`

    Launches the test runner in the interactive watch mode.\
    See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

    For full instructions, please see the [documentation in create react app](https://github.com/facebook/create-react-app)

4. Happy searching!

## Add-on Tools
Sherlock is designed to be interoperable with containerized add-on tools to facilitate common geospatial data operations in the cloud.

* [Sherlock Wind](https://github.com/c-core-labs/sherlock-wind) - Retrieve ERA5 reanalysis wind vector data from a STAC item or Sherlock identifier.
* [Sherlock COG](#) - Convert raster data to Cloud Optimized GeoTIFF from a STAC item or Sherlock identifier.
* [Sherlock SNAP](https://github.com/c-core-labs/sherlock-snap) - Process synthetic aperture radar (SAR) data with the ESA's SNAP Toolbox from a STAC item or Sherlock identifier.
