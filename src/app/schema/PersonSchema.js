const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const mongoosePaginate = require('mongoose-paginate-v2');

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: false,
    unique: true
  },
  birthDay: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false,
    unique: true
  },
  password: {
    type: String,
    required: false,
    select: false
  },
  canDrive: {
    type: String,
    required: false,
    enum: ['yes', 'no']
  }
});

PersonSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

PersonSchema.plugin(mongoosePaginate);
const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;
