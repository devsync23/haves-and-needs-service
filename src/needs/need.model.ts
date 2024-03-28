import { model, Schema, Types } from 'mongoose'
import User from '../users/user.model'

const NeedSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: "User",
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
    fulfilled: {
        type: Boolean,
        // require: true
    }

}, {
    timestamps: true
})

export default model('Need', NeedSchema)
