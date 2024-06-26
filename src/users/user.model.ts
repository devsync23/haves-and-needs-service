import { model, Schema } from 'mongoose'

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  zip: {
    type: String,
    require: true,
  },
}, {
  timestamps: true
});

export default model('User', UserSchema)
