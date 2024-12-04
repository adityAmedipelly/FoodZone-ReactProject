import Button from "./Button"
import Background from "./Background"

function Narbar({data}) {
  return (
    <>
    <div className='bg-slate-700 w-screen h-screen overflow-hidden '>
      <div className='flex justify-between'>
        <img src='logo.svg' className='ml-16 '/>
        <input placeholder='search food ....' type='text' className='bg-transparent border-solid border-2 border-red-500 rounded w-72 h-10 mr-48 mt-14 text-center '/>
      </div>
      <div className="flex items-center justify-center gap-3 mt-10 mr-48">
        <Button lable={"All"} />
        <Button lable={"Breakfast"} />
        <Button lable={"Lunch"} />
        <Button lable={"Dinner"} />
      </div>
    </div>
    <div>
      <Background data = {data}/>
    </div>
    </>
   
  )
}

export default Narbar
