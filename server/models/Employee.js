const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const employeeSchema = new Schema(
  {
    employeeBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    employeeNumber: {
      type: Number,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = employeeSchema;
