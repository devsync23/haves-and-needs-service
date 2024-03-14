import { model, Schema } from 'mongoose'
import User from '../users/user.model'

const NeedSchema = new Schema({
    user: {
        type: User,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    zip: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },

}, {
    timestamps: true
})

export default model('Need', NeedSchema)