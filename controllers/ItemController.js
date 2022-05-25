const axios = require('axios');

const Item = require('../models/Item');

const classType = require('../enums/ClassType');
const itemType = require('../enums/ItemType');
const itemSubType = require('../enums/ItemSubType');
const damageType = require('../enums/DamageType');
const ammoType = require('../enums/AmmoType');

async function index(req, res, next) {
  let itemFilter = {itemType: req.query.itemType}

  if (req.query.itemType != 3 && req.query.classType) {
    itemFilter.classType = req.query.classType;
  }

  let items = await Item.find(itemFilter);
  let newItems = [];

  items.map((item, index) => {
    let newItem = {
      "name": item.displayProperties.name,
      "icon": item.displayProperties.icon,
      "screenshot": item.screenshot,
      "text": item.flavorText,
      "tier": item.inventory.tierTypeName,
      "ammoType": ammoType[item.equippingBlock.ammoType],
      "type": itemType[item.itemType],
      "subType": itemSubType[item.itemSubType],
      "class": classType[item.classType],
      "damageType": damageType[item.defaultDamageType],
    }

    newItems.push(newItem);
  });

  res.status(200).json(newItems);
}

async function store(req, res, next) {
  try {
    const bungieItem = await axios.get(`https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/${req.body.hash}`,{
      headers:{
        "x-api-key": process.env.BUNGIE_X_API_KEY,
      },
    })
    .then(response => response.data.Response)

    const item = new Item(bungieItem);
    item.save();

    res.status(200).send(item)
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {index, store}