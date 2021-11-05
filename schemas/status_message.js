import mongoose from 'mongoose';

const model = mongoose.model;

const {Schema} = mongoose;
const status_messageSchema = new Schema(
    {
        user_id: {
            type: String,
            unique: true,
            required: [true, 'user_id is Required!'],
        },
        messege: {
            type: String,
            required: [true, 'message is Required!']
        },
        update_time: {
            type: Date,
            required: [true,'update_time is Required!']
        },
    },
    {collection: 'status_message'}
);

module.exports = mongoose.model('status_message' , status_messageSchema);