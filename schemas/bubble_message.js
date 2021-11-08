import mongoose from 'mongoose';

const {Schema} = mongoose;
const bubble_messageSchema = new Schema(
    {
        user_id: {
            type: String,
            unique: true,
            required: [true, 'user_id is Required!'],
        },
        message: {
            type: String,
            required: [true, 'message is Required!']
        },
        update_time: {
            type: Date,
            required: [true,'update_time is Required!']
        },
    },
    {collection: 'bubble_message'}
);

export const model = mongoose.model('bubble_message', bubble_messageSchema);