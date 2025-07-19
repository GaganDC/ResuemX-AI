import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

function ResumeCardItem({resume}) {
  return (
    <Link to={'/dashboard/resume/'+resume.documentId+'/edit'}>
    <div    className='pt-4 gap-5'    >
        <div className='p-14  bg-secondary flex justify-center items-center h-[280px] border border-primary rounded-lg hover:scale-105 transition-all shadow-md'>
            <Notebook/>
        </div>
        <h2 className='text-center'>{resume.title}</h2>
    </div>
    </Link>
  )
}

export default ResumeCardItem