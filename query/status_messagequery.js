import status_message from '../schemas/status_message';

export const insert = insertForm => {
    try {
        return status_message.create(insertForm);
    } catch (e){
        console.error(e);
        return e;
    }
}

export const findById = user_id =>{
    try {
        return status_message.findOne({user_id});
    } catch (e){
        console.error(e);
        return e;
    }
}

export const updateById = (user_id, message)=>{
    try {
        var Date = Date.now();
        return status_message.findByIdAndUpdate({user_id},{message},{Date});
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