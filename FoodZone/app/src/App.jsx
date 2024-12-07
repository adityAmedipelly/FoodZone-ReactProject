import { useEffect, useState } from "react"
import Button from "./components/Button"
import SearchFile from "./components/SearchFile"

 export const BASE_URL = "http://localhost:9000"
function App(){
  const [load, setload ] = useState(false)
  const [ data,setdata] = useState(null)
  const [error,seterror] = useState(null)
  const [search,setsearch] = useState(null)
  const [selected,setselected] = useState("all")


 useEffect(()=>{

  const fetchdata = async () =>{

    try {
  
      const responce = await fetch(BASE_URL)
  
      const json = await responce.json()
      setdata(json)
      setsearch(json)
      setload(false)
   
    
      
    } catch (error) {
      seterror("unbale to featch data")
      
    }
  }
  fetchdata()
 },[]) 

 const searchfood = (e) =>{
  const serchvalue = e.target.value
  console.log(serchvalue)

  if(serchvalue === ""){
    setsearch(null)
  }
  const filter = data?.filter((food) =>
  food.name.toLowerCase().includes(serchvalue.toLowerCase()))
  setsearch(filter)

 }

 const filterfood = (type) => {
  if(type === "all"){
    setsearch(data)
    setselected("all")
    return;
  }
  const filter = data?.filter((food) =>
    food.type.toLowerCase().includes(type.toLowerCase())
)
   setsearch(filter)
   setselected(type)
  
 }
 

  if(error) return <div>{error}</div>
  if(load)  return <div>"loding..."</div>

  

  return(
     <div className="bg-slate-800 w-screen h-screen ">
      <div className="flex justify-between  ">
        <div className="mt-5 ml-20"> 
          <img src="logo.svg"></img>
        </div>
        <div>
          <input onChange={searchfood} placeholder="search food...." type="text" className="bg-transparent border-solid border-2 border-red-500 text-center mt-10 mr-56 w-56 rounded h-10 text-white"></input>
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-16">
        <Button onClick={() => filterfood("all")} lable={"All"}/>
        <Button onClick={() => filterfood("breakfast")} lable={"Breakfast"}/>
        <Button onClick={() =>filterfood("lunch")}lable={"Lunch"}/>      
        <Button onClick={() =>filterfood("dinner")} lable={"Dinner"}/>
      </div>
      <SearchFile data = {search}/>
     </div>
  )
}
export default App