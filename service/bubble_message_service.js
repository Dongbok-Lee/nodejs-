import * as bubble from '../query/bubble_messagequery.js'

export const create_Bubble_Message = insertForm => {
    return bubble.insert(insertForm)
}

export const delete_Bubble_Message = id => {
    return bubble.deleteById(id)
}

export const update_Bubble_Message = id => {
    return bubble.updateById(id)
}

export const get_Bubble_Message = id => {
    return  bubble.findById(id)
}