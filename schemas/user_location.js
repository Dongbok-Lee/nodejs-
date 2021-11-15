import mongoose from 'mongoose';

const {Schema} = mongoose;
const User_location = new Schema(
    {
        x: {
            type: Number,
            unique: true,
            required: [true, 'x is Required!'],
        },
        y: {
            type: Number,
            unique: true,
            required: [true, 'y is Required!'],
        },
        time: {
            type: Number,
            required: [true,'time is Required!']
        },
    },
    {collection: 'User_location'}
);

export const model = mongoose.model('User_location', User_location);