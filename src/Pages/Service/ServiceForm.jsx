import React, { useState } from 'react'
import { Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
const ServiceForm = () => {
    const [title,SetTitle] = useState('');
    const [description,SetDescription] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        try {
            if(!title || !description){
                alert('Please fill in all fields');
                return;
                }

                console.log('Title : ',title , 'Description : ',description);
                alert('Successfully created a new service')
                SetTitle('')
                SetDescription('')

        } catch (error) {
            console.log(error)
        }
    }
   
  return (
    <div className="w-full min-h-screen bg-gray-50">
        <div className="flex flex-row items-center justify-between p-6">
        <h2 className="text-2xl font-semibold flex items-center">
          <Settings className="w-6 h-6 mr-2 ml-4 text-yellow-600" />
          Services
        </h2>
        </div>
        <form onSubmit={handleSubmit} className='w-1/2 mx-auto  p-6 rounded shadow shadow-yellow-400'>
        <h1 className='text-2xl font-semibold text-center my-2'>Add New Service</h1>
        <hr className='w-1/2 mx-auto border  border-yellow-400' />
            <div className='mb-4'>
                <label className='block my-2 text-lg font-semibold text-gray-700' htmlFor="title">Title</label>
                <input type="text" 
                className='w-full p-3 rounded-md border-2 outline-none focus:border-yellow-400 border-gray-400' 
                placeholder='Enter service title........'
                value={title}
                onChange={(e)=>SetTitle(e.target.value)}
                name="title" id="title" />
            </div>
            <div>
                <label className='block my-2 text-lg font-semibold text-gray-600' htmlFor="description">Description</label>
                 <textarea   className='w-full p-3  rounded-md border-2 outline-none focus:border-yellow-400 border-gray-400'
                 placeholder='Enter service description........'
                 value={description}
                 onChange={(e)=>SetDescription(e.target.value)}
                 name="description" id="description" rows={1}  ></textarea>
            </div>
            <div className='flex justify-between items-center font-semibold p-2'>
            <button className='w-36 my-4 p-3 hover:bg-yellow-500 bg-yellow-400 text-white  rounded-md border text-center'>Add</button>
            <Link to='/Service' className='text-center p-3 bg-blue-600 rounded-md hover:bg-blue-500 text-white'>Go Back</Link>
            </div>
        </form>
      
    </div>
  )
}

export default ServiceForm