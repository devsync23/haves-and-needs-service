import { model, Schema } from 'mongoose'
import User from '../users/user.model'

// const Service = new Schema({
//     serviceType: String,
//     timeStart: Date,
//     timeEnd: Date,
//     priceBid: Number
// })

const Goods = new Schema({
    item: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    condition: {
        type: String,
        require: true
    }
})

// const needTypeSchema = new Schema({
//     service: {
//         type: Service,
//         required: function () {
//             return !this.goods
//         }
//     },
//     goods: {
//         type: Goods,
//         required: function () {
//             return !this.service
//         }
//     }
// })

const NeedsSchema = new Schema({
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
    goods: {
        type: Goods,
        require: true
    },
    exchangeNeeds: {
        type: Boolean,
        require: true
    }
}, {
    timestamps: true
})

export default model('Need', NeedsSchema)