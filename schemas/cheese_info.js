import mongoose from 'mongoose';

const {Schema} = mongoose;
const Cheese_info = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: [true, 'student is Required!'],
        },
        Description: {
            type: String,
            unique: true,
            required: [true, 'student is Required!'],
        },
        Create_Time: {
            type: Date,
            unique: true,
            required: [true, 'student is Required!'],
        },
    },
    {collection: 'Cheese_info'}
);

export const model = mongoose.model('Cheese_info', Cheese_info);