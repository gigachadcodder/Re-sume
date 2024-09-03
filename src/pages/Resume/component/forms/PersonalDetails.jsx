import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'

const PersonalDetails = () => {

    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext)
    const handleInputChange=(e)=>{
        const {name, value} = e.target;
        setResumeInfo({
            ...resumeInfo,
            [name]:value
        })
    }
    const onSave=(e)=>{
         e.prevent.Default();
         enableNext(true)
    }

  return (

    <div className='p-5 shadow-lg rounded-lg border-t-2 border-purple-500'>
      <h2 className='font-bold text-lg'>Personal Details</h2>
      <p>Get Started with the basic information</p>

        <form onSubmit={onSave}>
            <div className='grid grid-cols-2 mt-5 gap-3'>
                <div>
                    <label className='text-sm'> First Name</label>
                    <Input name='firstName' required onChange={handleInputChange}/>
                </div>
                <div>
                    <label className='text-sm'> Last Name</label>
                    <Input name='lastName' required onChange={handleInputChange}/>
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'> Job Title</label>
                    <Input name='jobTitle' required onChange={handleInputChange}/>
                </div>
                <div className='col-span-2'>
                    <label className='text-sm'> Address</label>
                    <Input name='Address ' required onChange={handleInputChange}/>
                </div>
                <div>
                    <label className='text-sm'>Phone</label>
                    <Input name='Phone' required onChange={handleInputChange}/>
                </div>
                <div>
                    <label className='text-sm'> Email</label>
                    <Input name='Email' required onChange={handleInputChange}/>
                </div>
                <div className='mt-3 flex justify-end'>
                    <Button>Save</Button>
                </div>

            </div>
        </form>


    </div>
  )
}

export default PersonalDetails
