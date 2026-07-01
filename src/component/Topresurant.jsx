


function Topresurent({ data }) {

  

  


   return (
    <div>

      
         <div className="w-full">

      <div  className ="" >
           <h1 className="w-[35%] mt-2 font-bold text-xl flex items-center justify-center">What's on your mind?</h1>

      </div>
      
         
       <div className="w-[75%] h-[300px]  flex mx-auto mt-3 overflow-x-auto border border-gray-300" >
         { data.map((resturant) => (
              <div className="flex-shrink-0 mx-2 w-[290px]" key={resturant.info.id}>
                <div  className = "bg-black overline h-[20px]">
                <img
        className="  w-[290px] h-[200px] rounded-xl border-b-2"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${resturant?.info?.cloudinaryImageId}`}
        alt={resturant.action?.text || resturant.id}
      
      />
   
      
       
        <h1 className="text-xl font-bold">{resturant.info.name}</h1>
        <p className="text-gray-600">{resturant.info.areaName}</p>
        <p className="text-green-600 font-bold">{resturant.info.avgRating}</p>
        <p className="text-gray-600">{resturant.info.externalRating}</p>
        <p className="text-gray-600">{resturant.info.cuisines?.join(", ")}</p>

           </div>

        </div>
        
            
       
      
             

            ))}
      

      
        

            
           
      </div>

  

      </div>


      

      
         <div className="w-full h-full gap-1 mx-2 my-5">

      
         
       <div className="  flex  justify-center items-center mt-3  flex-wrap  gap-5 mx-2  " >
         { data.map((resturant) => (
              <div className="flex-shrink-0 mx-2 w-[290px]" key={resturant.info.id}>
                <div  className = " border border-white hover:shadow-lg hover:bg-blend-color-dodge hover:shadow-blue-700  hover:scale-105 rounded-xl">
                <img
        className="  w-[290px] h-[200px]   rounded-2xl border-b-2"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${resturant?.info?.cloudinaryImageId}`}
        alt={resturant.action?.text || resturant.id}
      
      />
   
      
       
        <h1 className="text-xl font-bold">{resturant.info.name}</h1>
        <p className="text-gray-600">{resturant.info.areaName}</p>
        <p className="text-green-600 font-bold">{resturant.info.avgRating}</p>
        <p className="text-gray-600">{resturant.info.externalRating}</p>
        <p className="text-gray-600">{resturant.info.cuisines?.join(", ")}</p>

           </div>

        </div>
        
            
       
      
             

            ))}
      

      
        

            
           
      </div>

  

      </div>

       
      </div>
      
    
    

  

    

      

       
    


      
    
    

  

    

  );
}


   

  
export default Topresurent;
