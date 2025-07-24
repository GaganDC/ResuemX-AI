import React, { useEffect, useState } from 'react'
import AddResume from './Components/AddResume'
import GlobalApi from './../../service/GlobalApi'
import { useUser } from '@clerk/clerk-react'
import ResumeCardItem from './Components/ResumeCardItem'

function Dashboard() {
  const [ResumeList, setResumeList ] = useState([])
  const {user} = useUser()
  useEffect(()=>{
    user &&GetResumeList(),[user]
  })
  const GetResumeList=()=>{
    GlobalApi.GetUserResume(user?.primaryEmailAddress?.emailAddress)
    .then(resp =>{
      
      console.log(resp.data.data)
      setResumeList(resp.data.data)
    })
  }
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating AI Resume For Your Next Job</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        <AddResume/>
        {ResumeList.length > 0 && ResumeList.map((resume, index) => (
      
        <ResumeCardItem resume={resume} key={index} />
  ))}

      </div>
    </div>
  )
}

export default Dashboard