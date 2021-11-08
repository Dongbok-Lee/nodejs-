import * as status_message from '../query/status_messagequery.js'

export const create_Status_Message = insertForm => {
    return status_message.insert(insertForm)
}

export const delete_Status_Message = id => {
    return status_message.deleteById(id)
}

export const update_Status_Message = id => {
    return status_message.updateById(id)
}

export const get_Status_Message = id => {
    return status_message.findById(id)
}