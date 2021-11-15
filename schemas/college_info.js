import mongoose from 'mongoose';

const {Schema} = mongoose;
const College_info = new Schema(
    {
        student_num: {
            type: Number,
            unique: true,
            required: [true, 'student is Required!'],
        },
    },
    {collection: 'College_info'}
);

export const model = mongoose.model('College_info', College_info);