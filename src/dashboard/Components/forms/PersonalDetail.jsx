import { ResumeinfoContext } from "../../../context/ResumeinfoContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import GlobalApi from "../../../../service/GlobalApi";
import { LoaderCircle } from "lucide-react";
function PersonalDetail({enabledNext}) {
    const {resumeInfo,setResumeInfo} = useContext(ResumeinfoContext)
    const [formData,setFormData] = useState();
    const [loading,setLoading] =useState(false);
    
  const params =useParams() ;
  useEffect(()=>{
    console.log(params)

  },[])
    const onSave=(e)=>{
      e.preventDefault();
      setLoading(true)
      const data={
        data:formData
      }
      GlobalApi.UpdateResumeDetail(params?.resumeId,data).then(resp=>{
          console.log(resp)  
          enabledNext(true)
          setLoading(false)
          toast("Details updated!")
      },(error)=>{
        setLoading(false)
      })


    }
    const handleInputChange=(e)=>{
       enabledNext(false)
      const {name,value} = e.target;
      setFormData({
        ...formData,
        [name]:value
      })
      
      setResumeInfo({
        ...resumeInfo,
        [name]:value
      })

    }
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Detail</h2>
      <p>Get Started with the basic information</p>
      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3 ">
            <div>
                <label className="text-sm">First Name</label>
                <Input type="text" placeholder="" defaultValue={resumeInfo?.firstName} required name="firstName" onChange={handleInputChange}  />
            </div>
            <div>
                <label className="text-sm">Last Name</label>
               <Input placeholder="" required name="lastName" defaultValue={resumeInfo?.lastName}  onChange={handleInputChange}/>
            </div>
            <div className="col-span-2">
                <label className="text-sm">Job Title</label>
                <Input type="text" placeholder="" required defaultValue={resumeInfo?.jobTitle}  name="jobTitle" onChange={handleInputChange}  />
            </div>
            <div className="col-span-2">
                <label className="text-sm">Address</label>
               <Input placeholder="" required name="address" defaultValue={resumeInfo?.address}   onChange={handleInputChange}/>
            </div>
            <div>
                <label className="text-sm">phone</label>
                <Input type="text" placeholder="" required defaultValue={resumeInfo?.phone}  name="phone" onChange={handleInputChange}  />
            </div>
            <div>
                <label className="text-sm">Email</label>
               <Input placeholder="" required name="email" defaultValue={resumeInfo?.email}  onChange={handleInputChange}/>
            </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading?<LoaderCircle className="animate-spin"/>:'save'}
            </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetail;
