import { Pencil, Trash2 } from "lucide-react";






export const Comments = () => {
    return (
       <div className="flex mt-10 bg-gray-900 p-5 rounded-md">
            <div className="mr-5">
                <div className="w-10 h-10 border border-green-500 rounded-full overflow-hidden cursor-pointer">
                  <img
                    className="w-full h-full "
                    src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?_gl=1*1hdmgsr*_ga*NjYyODU5OTIwLjE3MzEwMTc4MzY.*_ga_8JE65Q40S6*czE3NTg5NzA2MTQkbzE3JGcxJHQxNzU4OTcwNjkxJGo0NyRsMCRoMA.." 
                    alt="Homem de boné, na rua." />
                </div>
            </div>
            
            
            <div className="w-full">
              
              
              <div className="flex items-between justify-between max-w-5xl">
                <h1 className="text-[20px] text-gray-200/85 cursor-pointer">
                    Usuario123
                </h1>

                <div className="flex">
                    <button 
                    className="rounded-full cursor-pointer mr-5">
                        <Pencil />
                    </button>
                    <button 
                    className="rounded-full cursor-pointer px-1 py-1 mr-5">
                        <Trash2 />
                    </button>
                </div>
              </div>

                <p className="mt-5">
                Loram impson lonam de milijnd quadn man lion ein dm mdn sin lianed nalif milain siluniszian semineal, lifundion maiverik, dasise.
                </p>

            </div>
       </div>
        
    )
};