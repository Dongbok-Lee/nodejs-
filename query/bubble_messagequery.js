import bubble_message from '../schemas/bubble_message';

export const insert = insertForm => {
    try {
        return bubble_message.create(insertForm);
    } catch (e){
        console.error(e);
        return e;
    }
};

export const findById = user_id =>{
    try {
        return bubble_message.findOne({user_id});
    } catch (e){
        console.error(e);
        return e;
    }
};

export const updateById = (user_id, message)=>{
    try {
        var Date = Date.now();
        return bubble_message.findByIdAndUpdate({user_id},{message},{Date});
    } catch (e){
        console.error(e);
        return e;
    }
};

export const deleteById = (user_id) =>{
    try {
        return bubble_message.findByIdAndDelete({user_id});
    } catch(e) {
        console.error(e);
        return e;
    }
};