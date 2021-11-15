import mongoose from 'mongoose';

const {Schema} = mongoose;
const status_messageSchema = new Schema(
    {
        user_id: {
            type: String,
            unique: true,
            required: [true, 'user_id is Required!'],
        },
        message: {
            type: String,
            required: [false]
        },
        update_time: {
            type: Date,
            required: [true,'update_time is Required!']
        },
    },
    {collection: 'status_message'}
);

export const model = mongoose.model('status_message' , status_messageSchema);