import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from './Resume/component/FormSection';
import ResumePreview from './Resume/component/ResumePreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import dummy from '@/data/dummy';

const EditResume = () => {
    const params = useParams();
    const [resumeInfo, setResumeInfo] = useState();
    useEffect(()=>{
      setResumeInfo(dummy)
    },[])

  return (
    <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10' >
        {/* form section */}
        <FormSection/>
        {/* Preview Section */}
        <ResumePreview/>
    </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume
