import bubble_message from '../schemas/bubble_message.js';

export const insert = insertForm => {
    try {
        return bubble_message.create(insertForm);
    } catch (e){
        console.error(e);
        return e;
    }
};

export const findById = id =>{
    try {
        return bubble_message.findOne({user_id: id});
    } catch (e){
        console.error(e);
        return e;
    }
};

export const updateById = (id, msg)=>{
    try {
        const UDate = Date.now();
        return bubble_message.findByIdAndUpdate({user_id: id},{message: msg},{updatedDate: UDate});
    } catch (e){
        console.error(e);
        return e;
    }
};

export const deleteById = (id) =>{
    try {
        return bubble_message.findByIdAndDelete({user_id: id});
    } catch(e) {
        console.error(e);
        return e;
    }
};