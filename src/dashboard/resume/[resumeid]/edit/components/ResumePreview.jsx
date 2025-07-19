import PersonalDetailPreview from '@/dashboard/Components/preview/PersonalDetailPreview'
import React from 'react'
import { ResumeinfoContext } from '@/context/ResumeinfoContext'
import { useContext } from 'react'
import SummeryPreview from '@/dashboard/Components/preview/SummeryPreview'
import ExperiencePreview from '@/dashboard/Components/preview/ExperiencePreview'
import EducationalPreview from '@/dashboard/Components/preview/EducationalPreview'
import SkillsPreview from '@/dashboard/Components/preview/SkillsPreview'

function ResumePreview() {

    
    const {resumeInfo,setResumeInfo}=useContext(ResumeinfoContext)
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
        borderColor:resumeInfo?.themeColor
    }}>
        {/* Personal Detail  */}
            <PersonalDetailPreview resumeInfo={resumeInfo} />
        {/* Summery  */}
            <SummeryPreview resumeInfo={resumeInfo} />
        {/* Professional Experience  */}
           {resumeInfo?.experience?.length>0&& <ExperiencePreview resumeInfo={resumeInfo} />}
        {/* Educational  */}
        {resumeInfo?.education?.length>0&&   <EducationalPreview resumeInfo={resumeInfo} />}
        {/* Skilss  */}
        {resumeInfo?.skills?.length>0&&    <SkillsPreview resumeInfo={resumeInfo}/>}
    </div>
  )
}

export default ResumePreview