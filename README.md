# Destiny Card API

This is a project that serves some information from Destiny 2 items.

To open the project use the following link [destinycardapi.azurewebsites.net](https://destinycardapi.azurewebsites.net).

This app worked together with [Destiny Card App](https://github.com/oswaldtzh/destinycardapp).

## How to Install

To run the project use the following commands.

### `npm install`

This will install all dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## How to Use

This app uses Bungie's Destiny 2 API to search information for an specific item and then saves it in the database. Also it uses Azure Cosmos DB API for MongoDB.

You can use two endpoints (for now)

GET /inventoryItems\
This will show all information stored in the database

It uses the following query params\
`itemType`\
with the following values `itemType=2` for weapons, `itemType=3` for armors\
`classType`\
with the following values `classType=0` for titan, `classType=1` for hunter, `classType=2` for warlock\

POST /inventoryItems\
This is used to insert data in the database

It uses the following query params\
`hash`\
Hash is the id for the item in bungie api, you can get it from several apps like [data.destinysets.com](https://data.destinysets.com), [light.gg](https://light.gg)
