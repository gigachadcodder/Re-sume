import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDetailsPreview from './preview/PersonalDetailsPreview'
import SummaryPreview from './preview/SummaryPreview'
import ExperiencePreview from './preview/ExperiencePreview'


const ResumePreview = () => {

    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext)

  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{borderColor:resumeInfo?.themeColor}}>
        {/* personal details */}
            <PersonalDetailsPreview resumeInfo = {resumeInfo}/>
        {/* Summary */} 
        <SummaryPreview resumeInfo = {resumeInfo}/>
        {/* Professinal Experience */}
        <ExperiencePreview resumeInfo={resumeInfo}/>
        {/* Educational */}

        {/* Skills */}
    </div>
  )
}

export default ResumePreview
