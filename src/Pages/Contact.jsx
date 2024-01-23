import React, { useState } from 'react'

export default function Contact() {

  const addFormUrl = "http://localhost:3000/addForm";

  var [name, setName] = useState();
  var [email, setEmail] = useState();
  var [phoneNumber, setPhoneNumber] = useState();
  var [messag, setmessag] = useState();
  var [intrest, setIntrest] = useState();

  const[message,setMessage]=useState()
  const[isLoading,setIsLoading] = useState(false)

  const addForm=(e) =>{
    e.preventDefault();
    setIsLoading(false)
    console.log(name,email,phoneNumber,message,intrest)
    const body = {
      name:name,
      email:email,
      phoneNumber:phoneNumber,
      message:messag,
      intrest:intrest
    }
      
  
    fetch(addFormUrl,{
      method:"Post",
      body:JSON.stringify(body),
      headers:{
        "Content-Type":"application/json",
      },
    }).then((response) => response.json())
    .then((json)=>{
      setMessage(json.message)
    }).catch(error=>{
      setIsLoading(false)
      setMessage("Internal Error")
    }).finally(()=>{
      setIsLoading(false)
    

    })
    
  }




  return (
    <div className='flex justify-center h-[80vh] pt-10'>
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Name
            </label>
            <input  value={name}
        onChange={(t)=>setName(t.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Email
            </label>
            <input  value={email}
        onChange={(t)=>setEmail(t.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="abc@gmail.com" />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Phone Number
            </label>
            <input  value={phoneNumber}
        onChange={(t)=>setPhoneNumber(t.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder='Enter Number'/>
            
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              Message
            </label>
            <input  value={messag}
        onChange={(t)=>setmessag(t.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Enter Message" />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              Intrest
            </label>
            <div >
              <input  value={intrest}
        onChange={(t)=>setIntrest(t.target.value)} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder='Enter Intrest'>

              </input>
              
            </div>
          </div>
         
        </div>
        <div >
        {<button className="text-white w-40 bg-blue-600 hover:bg-blue-800 ml-8 mt-4 transition-all ease-in}" onClick={addForm}>Submit</button>}
      </div>
       
      </form>
      
    </div>
  )
}
