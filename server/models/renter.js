/* eslint-disable no-use-before-define */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const renterSchema = new Schema({
  name: { type: String,
          required: true,
          minlength: 2,
        },
  money: { type: Number, min: 1000 },
  complaints: { type: Number, min: 0, max: 3, default: 0 },
  apartment: { type: mongoose.Schema.ObjectId, ref: 'Apartment' },
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Renter', renterSchema);
