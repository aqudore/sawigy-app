
import { useState } from "react";


function OnmyMind({ data }) {

  const [value, setValue] = useState(10);

  



 
  function handlenext() 
   {  
       
            setValue((prevValue) => prevValue + 31);
        
            
         
       
     
    }
    
    


  

  function handleprevious(){
   setValue((prevValue) => prevValue - 31);
    
    
    
  }

    
   
 
   

   return (
    <div className="w-full ">

      <div  className ="" >
           <h1 className="w-[35%] mt-2 font-bold text-xl flex items-center justify-center">What's on your mind?</h1>

           <div  className=" flex flex-row items-end  cursor-pointer justify-end w-[90%] " > 
             <img onClick={handlenext} className="w-10 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_syLESw9t0QuXYpzPU1YD9llibfjkEXfQEtJS36EQRg&s=10" alt="" />
              <img onClick={handleprevious} className="w-10" src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAXVBMVEX///8AAAB2dnbi4uLs7Oz29vbx8fHR0dHm5ubBwcHf398EBATIyMjLy8sODg7p6ekXFxe7u7sdHR0qKiqZmZmAgIAwMDA7Ozs2NjZTU1ONjY2zs7PY2NhYWFiTk5P8LOSDAAAA9ElEQVRoge2YbQ6CMBAFWRREUEQQ/ELvf0zRYPcXIMKYmOwcYPKyLe0rnmcYhmEYhjFM7Z8vS8h9lScx4g5ebkkWhHwrLYR99ZbLDrCnAmbX6ER2tSfR/PaNZgf2u9sxkgKT0ewJkF3tGWpPAftas4eoHci+d/Y8mN+u2XNgMmx2tRfoqhYD2cODP5aycvaq1x7LNHrtx4lyOXXbo6nuJnvnqqJydCzsgqJb8Rs+/4jGQ37+5MFFHrm/yT3/NUde0GS1IEsRWefIIkpWaLL8o8+WzLnnf3DVYG6dCvKEJt3tocL8WGgu8vJ2B2qnYRiGYRj/zgOQ0QpWtLAW/QAAAABJRU5ErkJggg==" alt="" />
           
            </div>
      </div>
      
         
       <div className="w-[75%]  flex mx-auto mt-3 overflow-hidden border-b-2 border-gray-300" >

      
         
          <div  style={{ translate :`${value}%` }} className="flex  gap-4 duration-1000">
            {

             data.map((item) => (
             <img key={item.id} className="w-30 " src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`} alt={item.action?.text || item.id} />
            ))}

          </div>

          

          {/* restored content area */}
      </div>

  

    </div>
  );
}

export default OnmyMind;
