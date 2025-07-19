import { Loader2, PlusIcon, PlusSquare } from 'lucide-react'
import React, { useState } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/clerk-react';
import GlobalApi from './../../../service/GlobalApi';
import { useNavigate } from 'react-router';

uuidv4(); 
  

function AddResume() {
  

    const [OpenDilog, SetOpenDialog]=useState(false)
    const [resumeTitle,setResumeTitle]= useState('')
    const {user}= useUser();
    const [loading,setloading]=useState(false)
    const navigation=useNavigate()
    const OnCreate=async()=>{
      setloading(true)
        const uuid=uuidv4();
        const data={
                data:{
                  title:resumeTitle,
                  resumeid:uuid,
                  useremail:user?.primaryEmailAddress?.emailAddress,
                  username:user?.fullName
                }
                
        }
        
    GlobalApi.CreateNewResume(data).then(resp=>{
      console.log(resp.data.data.documentId);
      if(resp){
        setloading(false)
        navigation('/dashboard/resume/'+resp.data.data.documentId+"/edit")
      }

    },(error)=>{
      setloading(false)
    })

    }
    
  return (
    <div className="py-4">
      <div
        className="p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all
        hover:shadow-md hover:cursor-pointer border-dashed"
      onClick={()=>{SetOpenDialog(true)}} >
        <PlusSquare />
      </div>

      <Dialog open={OpenDilog} onOpenChange={SetOpenDialog}>

       
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
                <span>Add Title For Your Resume</span>
                <input className='bg-white my-2 w-80 h-8 ' placeholder='Ex.Full Stack Resume'  onChange={(e)=>{setResumeTitle(e.target.value)}}/>
                
                </DialogDescription>
            <div className='flex justify-end gap-4 '>
                <button variant='ghost' className='bg-secondary' onClick={()=>{SetOpenDialog(false)}} >Cancel</button>
                <button disabled={!resumeTitle||loading} className='bg-primary' onClick={()=>{OnCreate()}}>
                  {loading?
                  <Loader2 className='animate-spin'/>:'Create'  
                }
                </button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume