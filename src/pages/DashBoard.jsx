import AddResume from '@/components/custom/AddResume';
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import GlobalApi from './../../service/GlobalApi';
import { useUser } from '@clerk/clerk-react';
import ResumeItemCard from '@/components/custom/ResumeItemCard';

const DashBoard = () => {
  const { user } = useUser();
  const [resumeList , setResumeList] = useState([])


  useEffect(() => {
    if (user) {
      GetResumeList();
    }
  }, [user]);

  const GetResumeList = () => {
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
      .then(resp => {
        console.log(resp.data);
        setResumeList(resp.data.data);
      })
      .catch(error => {
        console.error("Error fetching resumes:", error);
      });
  };

  return (
    <div className='p-10 md:px-20 lg:px-30 '>
      <h2 className='font-bold text-3xl'>
        My Resume
      </h2>
      <p>Start Creating AI resume for your next job role</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5'>
        <AddResume />
        {resumeList.length > 0 &&resumeList.map((resume,index)=>(
          <ResumeItemCard resume = {resume} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
