import React from "react";

const ExperiencePreview = ({ resumeInfo }) => {
  return (
    <div className="my-6 ">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{ color: resumeInfo?.themeColor }}>
        Proffesional Experience
      </h2>
      <hr  />
      {resumeInfo?.experience.map((experience, index) =>(
        <div className="my-5" key={index}>
            <h2 className="text-sm font-bold" style={{color: resumeInfo?.themeColor}}>{experience?.title}</h2>
            <h2 className="text-xs flex justify-between">{experience?.companyName}, {experience?.city}, {experience?.state} 
                <span>
                    {experience?.startDate} - {experience?.currentlyWorking?'Present':experience.endDate}
                </span>
            </h2>
            <p className="text-xs my-2">
                {experience.workSummery}
            </p>
        </div>
      ))}
    </div>
  );
};

export default ExperiencePreview;
