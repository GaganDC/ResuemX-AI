import React from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeinfoContext } from "@/context/ResumeinfoContext";
import GlobalApi from "../../../../service/GlobalApi";
import { toast } from "sonner";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Brain, LoaderCircle } from "lucide-react";
function Summeries({enabledNext}) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeinfoContext);
  const [Summeries, setSummeries] = useState();
  
      const [loading,setLoading] =useState(false);
      const params = useParams();
      console.log(params.resumeId)

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
      data:{
        summery:Summeries
      }
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
            
            <Button type="Button"
              variant="outline"
              size="sm"
              className=" border-primary text-primary flex gap-2" 
            >
             <Brain/> Generate from AI
            </Button>
          </div>
          <Textarea
            className="mt-7"
            required
            onChange={(e) => setSummeries(e.target.value)}
          />
          <div className="mt-2 flex justify-end">
             <Button type="submit" disabled={loading}>
            {loading?<LoaderCircle className="animate-spin"/>:'save'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Summeries;
