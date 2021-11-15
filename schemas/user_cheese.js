import mongoose from 'mongoose';

const {Schema} = mongoose;
const User_cheese = new Schema(
    {
        user_id: {
            type: Number,
            unique: true,
            required: [true, 'user_id is Required!'],
        },
        my_cheese: {
            type: Number,
            required: [true, 'message is Required!']
        },
        get_cheese: {
            type: Array,
            required: [true,'update_time is Required!']
        },
        update_time: {
            type: date,
            required: [true,'update_time is Required!']
        },
    },
    {collection: 'User_cheese'}
);

export const model = mongoose.model('User_cheese', User_cheese);