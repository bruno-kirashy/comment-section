import { listCommentsType } from "../types/listCommentsType";

type AddComment = {
    type: 'add'
    payload: {
        comment: string;
    }
}

type RemoveComment = {
    type: 'remove',
    payload: {
        id: number;
    }
}

type EditComment = {
    type: 'editText'
    payload: {
        id: number,
        comment: string
    }
}


type ListActions = AddComment | RemoveComment | EditComment;

export const ReducerComments = (list: listCommentsType[] , action:ListActions) => {
    
    switch (action.type) {
        case 'add':
                return [...list, {
                    id: list.length + 1,
                    comment: action.payload.comment
                }]
         
        case 'remove':
                return list.filter(t => t.id !== action.payload.id);
        
        default:
            return list;
    }

};