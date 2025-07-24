import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router'
import FormSection from './components/FormSection';
import ResumePreview from './components/ResumePreview';
import { ResumeinfoContext } from '@/context/ResumeinfoContext';
import dummy from '@/data/dummy';
import GlobalApi from '../../../../../service/GlobalApi';

function EditResume() {
  
  const {resumeId}=useParams();
  const [resumeInfo,setResumeInfo]=useState();
  
  useEffect(()=>{
      GetResumeInfo();
  },[])

  const GetResumeInfo=()=>{
        GlobalApi.GetResumeById(resumeId).then(resp=>{
          console.log(resp.data.data);
          setResumeInfo(resp.data.data)
        })
    }
  
  return (
  
    <div className='grid grid-col-1 md:grid-cols-2 p-10 gap-10'>
      <ResumeinfoContext.Provider value={{resumeInfo,setResumeInfo}}>
        {/*For section */}

        <FormSection/>

        {/* preview section*/}
        <ResumePreview/>
       </ResumeinfoContext.Provider>
    </div>
  
  )

}

export default EditResume 