const { Schema, model } = require('mongoose');
const employeeSchema = require('./Employee');
const dateFormat = require('../utils/dateFormat');

const crewSchema = new Schema(
  {
    crewInfo: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    employees: [employeeSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

/*
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);
*/

module.exports = Crew;
