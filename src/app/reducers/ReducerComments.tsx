import { listCommentsType } from "../types/listCommentsType";

type AddComment = {
    type: 'add'
    payload: {
        comment: string;
    }
}

type RemodeComment = {
    type: 'remove',
    payload: {
        id: string;
    }
}

type EditComment = {
    type: 'editText'
    payload: {
        id: number,
        comment: string
    }
}


type ListActions = AddComment | RemodeComment | EditComment;

export const ReducerComments = (list: listCommentsType[] , action:ListActions) => {
    
    switch (action.type) {
        case 'add':
                return [...list, {
                    id: list.length + 1,
                    comment: action.payload.comment
                }]
        
        
        default:
            return list;
    }

};