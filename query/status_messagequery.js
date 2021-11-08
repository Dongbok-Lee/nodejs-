import status_message from '../schemas/status_message.js';

export const insert = insertForm => {
    try {
        return status_message.create(insertForm);
    } catch (e){
        console.error(e);
        return e;
    }
}

export const findById = id =>{
    try {
        return status_message.findOne({user_id: id});
    } catch (e){
        console.error(e);
        return e;
    }
}

export const updateById = (id, msg)=>{
    try {
        const UDate = Date.now();
        return status_message.findByIdAndUpdate({user_id: id},{message: msg},{updatedDate: UDate});
    } catch (e){
        console.error(e);
        return e;
    }
}

export const deleteById = (user_id) =>{
    try {
        return status_message.findByIdAndDelete({user_id});
    } catch(e) {
        console.error(e);
        return e;
    }
}