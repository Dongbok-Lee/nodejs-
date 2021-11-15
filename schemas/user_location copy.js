import mongoose from 'mongoose';

const {Schema} = mongoose;
const User_bedge = new Schema(
    {
        bedge: {
            type: Number,
            unique: true,
            required: [true, 'bedge is Required!'],
        },

        update_time: {
            type: Number,
            required: [true,'time is Required!']
        },
    },
    {collection: 'User_bedge'}
);

export const model = mongoose.model('User_bedge', User_bedge);