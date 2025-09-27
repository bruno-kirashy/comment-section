"use client"
import { useState, useReducer } from "react";
import { Comments } from "./Components/Comments";
import { ReducerComments } from "./reducers/ReducerComments";





const App = () => {

  const [comment, setComment] = useState<string>('');
  const [listComments, dispatch] = useReducer(ReducerComments, []);
  const [numberCharacters, setNumberCharacters] = useState<number>(250);

  const lockCharacters = () => {
    if (250 <= comment.length) {
      
    }
  }

  

  const addComments = () => {
        if (comment.trim() === '') return false;
        dispatch({
            type: 'add',
            payload: {comment}
        });
        setComment('');
  }
  

  return (
    <section className="w-screen h-screen px-2 overflow-x-hidden">
      <div className="max-w-5xl mx-auto p-5 border border-gray-500/50 rounded-2xl ">
        <h1 className="text-2xl mb-5">
          Comentários ({listComments.length})
        </h1>
        <div className="flex border-b border-gray-400/20 pb-5">
            <div className="mr-5">
                <div className="w-10 h-10 border border-green-500 rounded-full overflow-hidden cursor-pointer">
                  <img
                    className="w-full h-full "
                    src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?_gl=1*1hdmgsr*_ga*NjYyODU5OTIwLjE3MzEwMTc4MzY.*_ga_8JE65Q40S6*czE3NTg5NzA2MTQkbzE3JGcxJHQxNzU4OTcwNjkxJGo0NyRsMCRoMA.." 
                    alt="Homem de boné, na rua." />
                </div>
            </div>
            
            
            <div className="w-full">
              <textarea 
              className="w-full border border-gray-500/50 px-2 py-1 rounded-md mb-5 resize-y overflow-y-hidden"
              placeholder="Adicione um comentário..."
              name="" id="" rows={4} maxLength={250}
              onChange={(e) => {setComment(e.target.value), lockCharacters()}}
              value={comment}
              >

              </textarea>
              
              <div className={`flex items-between justify-between max-w-5xl ${250 <= comment.length ? 'text-red-500' : 'text-white' }`}>
                <p>
                  {250 - comment.length} caracteres restantes.
                </p>
                <button  
                onClick={() => addComments()}
                className="text-white border border-gray-500/50 rounded-md cursor-pointer hover:bg-gray-800 hover:opacity-85 transition-all duration-300 px-4 py-1 mr-5">
                  
                  Enviar
                </button>
              </div>
            </div>
        </div>

        <Comments listComments={listComments} />
      </div>
      
    </section>
  )
}


export default App;