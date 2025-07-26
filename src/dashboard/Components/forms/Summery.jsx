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
const prompt = `Job Title: {jobTitle} — Based on this job title, give me a list of 3 summaries for 3 experience levels in this order:
1. Fresher
2. Mid
3. Senior

Each summary should be 3-4 lines long. Return an array of objects in JSON format with:
- "summary"
- "experience_level"`


function Summery({enabledNext}) {
    const {resumeInfo,setResumeInfo}=useContext(ResumeinfoContext);
    const [summery,setSummery]=useState();
    const [loading,setLoading]=useState(false);
    const params=useParams();
    const [aiGeneratedSummeryList,setAiGenerateSummeryList]=useState();
    useEffect(()=>{
        summery&&setResumeInfo({
            ...resumeInfo,
            summery:summery
        })
    },[summery])

 const GenerateSummeryFromAI = async () => {
  try {
    setLoading(true);
    const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle);
    const result = await AIChatSession.sendMessage(PROMPT);

    const resText = await result.response.text();
    console.log('Raw AI Response:', resText); // <--- Important debug log

    const parsed = JSON.parse(resText);

    if (!Array.isArray(parsed)) {
      console.error('Expected an array but got:', parsed);
      toast("AI response was not in the expected format.");
      return;
    }

    const normalized = parsed.map((item) => ({
      summary: item.summery || item.summary || '',
      experience_level: item.experience_level || '',
    }));

    setAiGenerateSummeryList(normalized);
  } catch (error) {
    console.error("AI Response Error:", error);
    toast("Failed to generate summary from AI");
  } finally {
    setLoading(false);
  }
};



    const onSave=(e)=>{
        e.preventDefault();
       
        setLoading(true)
        const data={
            data:{
                summery:summery
            }
        }
        GlobalApi.UpdateResumeDetail(params?.resumeId,data).then(resp=>{
            console.log(resp);
            enabledNext(true);
            setLoading(false);
            toast("Details updated")
        },(error)=>{
            setLoading(false);
        })
    }
    return (
    <div>
         <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Summery</h2>
        <p>Add Summery for your job title</p>

        <form className='mt-7' onSubmit={onSave}>
            <div className='flex justify-between items-end'>
                <label>Add Summery</label>
                <Button variant="outline" onClick={()=>GenerateSummeryFromAI()} 
                type="button" size="sm" className="border-primary text-primary flex gap-2"> 
                <Brain className='h-4 w-4' />  Generate from AI</Button>
            </div>
            <Textarea className="mt-5 h-52" required
            value={summery}
                defaultValue={summery?summery:resumeInfo?.summery}
            onChange={(e)=>setSummery(e.target.value)}
            />
            <div className='mt-2 flex justify-end'>
            <Button type="submit"
                disabled={loading}>
                    {loading?<LoaderCircle className='animate-spin' />:'Save'}
                    </Button>
            </div>
        </form>
        </div>

        
       {aiGeneratedSummeryList&& <div className='my-5'>
            <h2 className='font-bold text-lg'>Suggestions</h2>
            {aiGeneratedSummeryList?.map((item,index)=>(
                <div key={index} 
                onClick={()=>setSummery(item?.summary)}
                className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'>
                    <h2 className='font-bold my-1 text-primary'>Level: {item?.experience_level}</h2>
                    <p>{item?.summary}</p>
                </div>
            ))}
        </div>}

    </div>
  )
}

export default Summery