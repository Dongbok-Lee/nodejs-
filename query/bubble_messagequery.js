import * as bubble_message from '../schemas/bubble_message.js';
const model = status_message.model;

export const insert = insertForm => {
    try {
        return model.create(insertForm);
    } catch (e){
        console.error(e);
        return e;
    }
};

export const findById = id =>{
    try {
        return model.findOne({user_id: id});
    } catch (e){
        console.error(e);
        return e;
    }
};

export const updateById = (id, msg)=>{
    try {
        const UDate = Date.now();
        return model.findByIdAndUpdate({user_id: id},{message: msg},{updatedDate: UDate});
    } catch (e){
        console.error(e);
        return e;
    }
};

export const deleteById = (id) =>{
    try {
        return model.findByIdAndDelete({user_id: id});
    } catch(e) {
        console.error(e);
        return e;
    }
};