import { Pencil, Trash2 } from "lucide-react";
import { useReducer } from "react";
import { listCommentsType } from "../types/listCommentsType";

type CommentsProp = {
    listComments: listCommentsType[],
    removeComments: (id:number) => void
};




export const Comments = ({listComments, removeComments}:CommentsProp) => {    
    
    

    return (
        <ul>
        {listComments.map((item) => (
            <li 
            key={item.id}
            className=" flex md:mt-10 mt-2 bg-gray-900 md:p-5 p-2 rounded-md">
                <div className="md:mr-5 mr-2">
                    <div className="w-10 h-10 border border-green-500 rounded-full overflow-hidden cursor-pointer">
                    <img
                        className="w-full h-full "
                        src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?_gl=1*1hdmgsr*_ga*NjYyODU5OTIwLjE3MzEwMTc4MzY.*_ga_8JE65Q40S6*czE3NTg5NzA2MTQkbzE3JGcxJHQxNzU4OTcwNjkxJGo0NyRsMCRoMA.." 
                        alt="Homem de boné, na rua." />
                    </div>
                </div>
                
                
                <div className="w-full">
                
                
                <div className="flex items-center justify-between max-w-5xl">
                    <h1 className="md:text-[20px] text-[14px] text-gray-400 font-bold cursor-pointer">
                        BrunoDev
                    </h1>

                    <div className="flex">
                        <button 
                        className="rounded-full cursor-pointer md:mr-5 mr-2 hover:text-sky-500">
                            <Pencil className="w-5 md:w-8  " />
                        </button>
                        <button 
                        onClick={() => removeComments(item.id)}
                        className="rounded-full cursor-pointer px-1 py-1 md:mr-5 mr-2 hover:text-red-800/80">
                            <Trash2 className="w-5 md:w-8" />
                        </button>
                    </div>
                </div>
                    
                    <p className="md:mt-5  mt-1 min-w-0 max-w-[95%] md:max-w-4xl  break-words text-gray-300">
                        {item.comment}
                    </p>
                    

                </div>
            </li>
        ))}
        </ul>
       
        
    )
};