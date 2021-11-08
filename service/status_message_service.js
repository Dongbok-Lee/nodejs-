import e from 'express';
import * as status_message from '../query/status_messagequery.js'

export const create_Status_Message = insertForm => {
    try{
        console.log(insertForm);
        return status_message.insert(insertForm)
    }catch(e){
        console.error(e);
        return e;
    }
    
}

export const delete_Status_Message = id => {
    try {
        return status_message.deleteById(id)
    } catch (e) {
        console.error(e);
        return e;
    }
   
}

export const update_Status_Message = id => {
    try {
        return status_message.updateById(id)
    } catch (e) {
        console.error(e);
        return e;
    }
    
}

export const get_Status_Message = id => {
    try {
        return status_message.findById(id)
    } catch (e) {
        console.error(e);
        return e;
    }

}