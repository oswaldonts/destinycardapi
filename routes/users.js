var express = require('express');
var router = express.Router();
const axios = require('axios');

const InventoryItem = require('../models/InventoryItem');

const item = require('../item-piece-of-mind.json');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let inventoryItems = await InventoryItem.find({});
  let newInventoryItems = new Array();

  // DestinyAmmunitionType
  const ammoType = {
    0: {
      "name": "",
      "icon": ""
    },
    1: {
      "name": "Primary",
      "icon": "/common/destiny2_content/icons/dc4bb9bcdd4ae8a83fb9007a51d7d711.png"
    },
    2: {
      "name": "Special",
      "icon": "/common/destiny2_content/icons/b6d3805ca8400272b7ee7935b0b75c79.png"
    },
    3: {
      "name": "Heavy",
      "icon": "/common/destiny2_content/icons/b6d3805ca8400272b7ee7935b0b75c79.png"
    },
  }

  // DamageType
  const damageType = {
    0: {
      "name": "",
      "icon": ""
    },
    1: {
      "name": "Kinetic",
      "icon": "/common/destiny2_content/icons/DestinyDamageTypeDefinition_3385a924fd3ccb92c343ade19f19a370.png"
    },
    2: {
      "name": "Arc",
      "icon": "/common/destiny2_content/icons/DestinyDamageTypeDefinition_092d066688b879c807c3b460afdd61e6.png"
    },
    3: {
      "name": "Solar",
      "icon": "/common/destiny2_content/icons/DestinyDamageTypeDefinition_2a1773e10968f2d088b97c22b22bba9e.png"
    },
    4: {
      "name": "Void",
      "icon": "/common/destiny2_content/icons/DestinyDamageTypeDefinition_ceb2f6197dccf3958bb31cc783eb97a0.png"
    }
  }

  // DestinyClass
  const classType = {
    0: "Titan",
    1: "Hunter",
    2: "Warlock",
    3: "Unknown",
  }

  // DestinyItemType
  const itemType = {
    0: "",
    1: "",
    2: "Armor",
    3: "Weapon",
  }

  // DestinyItemSubType

  inventoryItems.map((inventoryItem, index) => {
    let newInventoryItem = {
      "name": inventoryItem.displayProperties.name,
      "icon": inventoryItem.displayProperties.icon,
      "screenshot": inventoryItem.screenshot,
      "text": inventoryItem.flavorText,
      "tier": inventoryItem.inventory.tierTypeName,
      "ammoType": ammoType[inventoryItem.equippingBlock.ammoType],
      "trait": inventoryItem.sockets.socketEntries[0].singleInitialItemHash,
      "type": itemType[inventoryItem.itemType],
      "subType": inventoryItem.itemTypeDisplayName,
      "class": classType[inventoryItem.classType],
      "damageType": damageType[inventoryItem.defaultDamageType],
    }

    newInventoryItems.push(newInventoryItem)
  });

  res.status(200).json(newInventoryItems);
  // try {
  //   // const inventory = new InventoryItem();
  //   // let inventory = await InventoryItem.find();

  //   // res.status(200).json(inventory)

  //   let item = await axios.get('https://www.bungie.net/Platform/Destiny2/Manifest/DestinyInventoryItemDefinition/3216652511/',{
  //     headers:{
  //       "x-api-key": 'e74e1d2138c44b4d9e3d0887cce78172',
  //     },
  //   })
  //   .then(response => response.data.Response)

  //   const inventory = new InventoryItem(item);
  //   inventory.save();

  //   res.status(200).json(item);
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json(error);
  // }
});

router.post('/', async function(req, res, next) {
  // try {
  //   const inventory = new InventoryItem(item);
  //   inventory.save();

  //   res.status(200).json(item);
  // } catch (error) {
  //   res.status(500).json(error);
  // }
});

module.exports = router;
