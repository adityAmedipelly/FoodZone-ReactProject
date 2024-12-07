import { BASE_URL } from "../App"
import Button from "./Button"

function SearchFile({data}) {
  return (
    <div className=" min-w-full min-h-full mt-7 bg-[url('/bg.png')] bg-cover">
    <div className="flex flex-wrap items-center justify-center gap-5 ">
      {
        data?.map((food)=>(
            <div key={food.name} className="border-solid border-2 border-cyan-600 rounded-2xl w-96 h-40 flex mt-5 bg-gray-700	 " >
               <div>
                <img src={BASE_URL+food.image} className="w-72 h-28 mt-5"></img>
               </div>
               <div className="ml-5">
                <div className="text-white">
                    <h3 className="mt-2">{food.name}</h3>
                    <p className="mt-2">{food.text}</p>
                </div>
                <div className="ml-40 mt-1">
                <Button lable={`$${food.price}.00`}  />
                </div>
               </div>
            </div>

        ))
      }
    </div>
  </div>
  )
}

export default SearchFile
