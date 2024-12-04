import { BASE_URL } from "../App";
import Button from "./Button";

function Background({ data }) {
  return (
    <div className="mt-5 bg-[url('bg.png')] w-full h-full  justify-between  grid grid-rows-4 grid-flow-col gap-4">
      {data?.map((food) => (
        <div key={food.name} className="bg-white w-80 h-40 flex ">
          <div>
           <img src={BASE_URL + food.image}></img>
          </div>
          <div>
          <div>
              <h3>{food.name}</h3>
              <p>{food.text}</p>
          </div>
          <Button lable= {`$${food.price}.00`}/>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default Background;
