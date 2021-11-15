import mongoose from 'mongoose';

const {Schema} = mongoose;
const User_info = new Schema(
    {
        student_num: {
            type: Number,
            unique: true,
            required: [true, 'student is Required!'],
        },
        college_num: {
            type: Number,
            unique: true,
            required: [true, 'college is Required!'],
        },
        oauth_accessToken: {
            type: String,
            required: [true,'token is Required'],
        },
        oauth: {
            type: String,
            required: [true,'oauth is Required']
        },
        create_time: {
            type: Date,
            required: [true,'create_time is Required!']
        },
    },
    {collection: 'User_info'}
);

export const model = mongoose.model('User_info', User_info);