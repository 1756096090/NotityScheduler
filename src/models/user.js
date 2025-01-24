const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definimos el esquema de Usuario
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, 
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'], 
      required: true,
    },
    dni: {
      type: String,
      required: true,
      unique: true, 
    },
    password: {
      type: String,
      required: true,
    },
    birthDate: {
      type: String,
      required: true,
    },
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role',
      required: true,
    },
    specialistId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Specialist', 
    },
    hasAccess: {
      type: Boolean,
      default: true, 
    },
  },
  { timestamps: true } 
);

// Creamos el modelo de Usuario
const User = mongoose.model('User', userSchema);

module.exports = User;
