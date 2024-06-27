import React from 'react'

const SummaryPreview = ({resumeInfo}) => {
  return (
    <div>
      <p className='text-xs'>{resumeInfo?.summery}</p>
    </div>
  )
}

export default SummaryPreview
