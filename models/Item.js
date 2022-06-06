const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
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
}, { collection: 'items' });

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
