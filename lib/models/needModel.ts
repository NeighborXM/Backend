import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const NeedSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter your first name'
  },
  lastName: {
    type: String,
    required: 'Enter your last name'
  },
  phoneNumber: {
    type: String,
    required: 'Enter your phone number'
  },
  email: {
    type: String,
    required: 'Enter your email address (primary)'
  },
  location: {
    
  },
  timeDate: {

  },
  requestType: {
    //Enumerator - (Food Assistance, Emergency Assistance, Mental Health, Pastoral Care, Prayer (In Order))
  },
  description: {
    type: String,
    maxLength: 100
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})
