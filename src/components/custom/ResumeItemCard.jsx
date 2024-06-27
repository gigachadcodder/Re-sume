import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ResumeItemCard = ({resume}) => {
  return (
    <Link to={'/dashboard/resume/'+resume.resumeId+'/edit'}>
        <div className=' p-14 bg-secondary flex justify-center items-center h-[280px] rounded-lg 
        hover:scale-105 transition-all hover:shadow-md shadow-primary'>
            <Notebook/>
        </div>
        <h2 className='text-center my-1 '>
            {resume.title}
        </h2>
    </Link>
  )
}

export default ResumeItemCard
