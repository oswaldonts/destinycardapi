const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventoryItemSchema = new Schema({
  "displayProperties": {
    "description": {
      "type": "String"
    },
    "name": {
      "type": "String"
    },
    "icon": {
      "type": "String"
    }
  },
  "screenshot": {
    "type": "String"
  },
  "flavorText": {
    "type": "String"
  },
  "inventory": {
    "tierTypeName": {
      "type": "String"
    },
  },
  "equippingBlock": {
    "ammoType": {
      "type": "Number"
    }
  },
  "itemType": {
    "type": "Number"
  },
  "itemSubType": {
    "type": "Number"
  },
  "classType": {
    "type": "Number"
  },
  "defaultDamageType": {
    "type": "Number"
  },
}, { collection: 'inventory_items' });

const InventoryItem = mongoose.model('InventoryItem', InventoryItemSchema);

module.exports = InventoryItem;
