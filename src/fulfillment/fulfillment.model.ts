import { model, Schema, Types } from "mongoose";

const fulfillmentSchema = new Schema(
    {
        fulfilledItem: {
            type: {
                type: Schema.Types.ObjectId,
                ref: {
                    type: [Schema.Types.ObjectId],
                    refPath: 'model_type'
                },
                model_type: {
                    type: String,
                    enum: ['Need', 'Have']
                }
            }
        },
        fulfilledBy: {
            type: Types.ObjectId,
            ref: "User",
            require: true
        },
        fulfillmentDate: {
            type: Date,
            default: () => Date.now()
        },
    },
    {
        timestamps: true,
    }
);

export default model('fulfillment', fulfillmentSchema)
