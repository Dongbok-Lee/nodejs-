import mongoose from 'mongoose';

const {Schema} = mongoose;
const Badge_info = new Schema(
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
    {collection: 'Badge_info'}
);

export const model = mongoose.model('Badge_info', Badge_info);