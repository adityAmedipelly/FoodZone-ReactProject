import { useEffect, useState } from "react"
import Narbar from "./compontes/Narbar"


export const BASE_URL = "http://localhost:9000"

function App(){

  const [ data , setdata] = useState()
  const [loder, setloader] = useState(false)
  const [error,seterror] = useState(null)

useEffect(()=>{
  const fetchdata=async()=>{
    setloader(true)
  try {
    const response = await fetch(BASE_URL)
    const dataValue = await response.json()
    setdata(dataValue)
    setloader(false)
  }catch (error) {
    seterror("data can loded")
    
  }
  }
  fetchdata()

},[])

 if(error) return <div>{error}</div>
 if(loder ) return <div>loding....</div>



  return(
     <>
     <Narbar data = {data || []}/>
     </>
  )
}
export default App