

function Nav(){

    return (

    <div className="w-full bg-white shadow-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
            
         <div className="flex items-center gap-7">
             <div>
                <img className="w-15" src="data:image/png;base64,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" alt="" />
              </div>

           <div className="flex items-center gap-3">
              <p className="text-black shadow-md">Other</p>
              <h1  className="text-orange-400 text-2xl px-1">v</h1>
            </div>
              
          </div>
       

               <div  className="flex items-center gap-10">

                  <div className="flex items-center gap-5">
                    <p className="text-black font-bold text-2xl">*</p>
                     <p className="text-black hover:text-red-300">Swiggy Corporate</p>
                  </div>

                <div className="flex items-center gap-5">
                  <p className="text-black font-bold text-2xl">+</p>
                  <p className="text-black">Search</p>
               </div>

                <div className="flex items-center gap-5">
                  <p className="text-black font-bold text-2xl">-</p>
                   <p className="text-black">Offer</p>
               </div>

                <div className="flex items-center gap-5">
                  <p className="text-black font-bold text-xl">Help</p>
               </div>

                <div className="flex items-center gap-5">
                  <p className="text-black font-bold text-2xl">$</p>
                  <p className="text-black hover:text-red-500">Sign In</p>
               </div>





        </div>
              
        </div>




     
     
    </div>
);
  

    }


export default Nav