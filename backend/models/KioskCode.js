const mongoose = require("mongoose");
const { Schema } = mongoose;

const KioskContentSchema = new Schema({
  KioskContent: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const KioskCodeSchema = new Schema({
  KioskCode: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
  lastSynced: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
    default: false,
  },
  kioskContent: [KioskContentSchema],
  date: {
    type: Date,
    default: Date.now,
  },
});

const KioskCode = mongoose.model("KioskCode", KioskCodeSchema);

module.exports = KioskCode;