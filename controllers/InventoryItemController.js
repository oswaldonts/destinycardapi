const axios = require('axios');

const InventoryItem = require('../models/InventoryItem');

const classType = require('../enums/ClassType');
const itemType = require('../enums/ItemType');
const itemSubType = require('../enums/ItemSubType');
const damageType = require('../enums/DamageType');
const ammoType = require('../enums/AmmoType');

async function index(req, res, next) {
  let inventoryItems = await InventoryItem.find({itemType: req.query.itemType});
  let newInventoryItems = [];

  inventoryItems.map((inventoryItem, index) => {
    let newInventoryItem = {
      "name": inventoryItem.displayProperties.name,
      "icon": inventoryItem.displayProperties.icon,
      "screenshot": inventoryItem.screenshot,
      "text": inventoryItem.flavorText,
      "tier": inventoryItem.inventory.tierTypeName,
      "ammoType": ammoType[inventoryItem.equippingBlock.ammoType],
      "type": itemType[inventoryItem.itemType],
      "subType": itemSubType[inventoryItem.itemSubType],
      "class": classType[inventoryItem.classType],
      "damageType": damageType[inventoryItem.defaultDamageType],
    }

    newInventoryItems.push(newInventoryItem);
  });

  res.status(200).json(newInventoryItems);
}

async function store(req, res, next) {
  try {
    const item = await axios.get(`https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/${req.query.hash}/`,{
      headers:{
        "x-api-key": process.env.BUNGIE_X_API_KEY,
      },
    })
    .then(response => response.data.Response)

    const inventory = new InventoryItem(item);
    inventory.save();

    res.status(200).send(inventory)
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
}

module.exports = {index, store}