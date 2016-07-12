/* eslint-disable no-use-before-define */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  name: { type: String,
          validate: { validator: duplicateAptNameValidator } },
});

function duplicateAptNameValidator(name, cb) {
  this.model('Apartment').find({ name }, (err, apartments) => {
    cb(!apartments.length);
  });
}

module.exports = mongoose.model('Apartment', apartmentSchema);
