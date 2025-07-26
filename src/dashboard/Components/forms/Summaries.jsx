import React from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeinfoContext } from "@/context/ResumeinfoContext";
import GlobalApi from "../../../../service/GlobalApi";
import { toast } from "sonner";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Brain, LoaderCircle } from "lucide-react";
import { AIChatSession } from "../../../../service/AIModal";
const prompt="Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format"

function Summeries({ enabledNext }) {
  
  const { resumeInfo, setResumeInfo } = useContext(ResumeinfoContext);
  const [Summeries, setSummeries] = useState();

  const [loading, setLoading] = useState(false);
  const params = useParams();

  const [aiGeneratedSummeryList, setAiGenerateSummeryList] = useState();
  console.log(params.resumeId);

 const GenerateSummeryFromAI=async()=>{
        setLoading(true)
        const PROMPT=prompt.replace('{jobTitle}',resumeInfo?.jobTitle);
        console.log(PROMPT);
        console.log('type:', typeof aiGeneratedSummeryList);
console.log('value:', aiGeneratedSummeryList);

        const result=await AIChatSession.sendMessage(PROMPT);
        console.log(JSON.parse(result.response.text()))
      const resText = await result.response.text();
      const parsed = JSON.parse(resText);
      setAiGenerateSummeryList(parsed); // assuming parsed is the array


        setLoading(false);
    }


  useEffect(() => {
    Summeries &&
      setResumeInfo({
        ...resumeInfo,
        summery: Summeries,
      });
  }, [Summeries]);

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      data: {
        summery: Summeries,
      },
    };
    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        console.log(resp);
        enabledNext(true);
        setLoading(false);
        toast("Details updated!");
      },
      (error) => {
        setLoading(false);
      }
    );
  };
  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Personal Detail</h2>
        <p>Get Started with the basic information</p>
        <form className="mt-5" onSubmit={onSave}>
          <div className="flex justify-between items-end">
            <label>Add Summary</label>
            <genButton/>
             <Button variant="outline" onClick={()=>GenerateSummeryFromAI()} 
                type="button" size="sm" className="border-primary text-primary flex gap-2"> 
                <Brain className='h-4 w-4' />  Generate from AI</Button>
                
                
          </div>
           <Textarea className="mt-5 h-40 " required 
            value={Summeries}
                defaultValue={Summeries ?Summeries :resumeInfo?.summery}
            onChange={(e)=>setSummeries(e.target.value)}
            />
          <div className="mt-2 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "save"}
            </Button>
          </div>
        </form>
      </div>
       {Array.isArray(aiGeneratedSummeryList) && aiGeneratedSummeryList.length > 0 && (
  <div className='my-5'>
    <h2 className='font-bold text-lg'>Suggestions</h2>
    {aiGeneratedSummeryList.map((item , index) => (
      <div
        key={index}
        onClick={() => setSummeries(item?.summery)}
        className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'
      >
        <h2 className='font-bold my-1 text-primary'>Level: {item?.experience_level}</h2>
        <p>{item?.summary}</p>
      </div>
    ))}
  </div>
)}

    </div>
  );
}

export default Summeries;