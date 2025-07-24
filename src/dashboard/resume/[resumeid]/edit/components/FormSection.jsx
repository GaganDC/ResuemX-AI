
import React from 'react'
import ThemeColor from './ThemeColor';

import PersonalDetail from '@/dashboard/Components/forms/PersonalDetail'
import { Button } from '@/components/ui/button';
import { Link, Navigate, useParams } from 'react-router';
import { useState } from 'react';
import { ArrowLeft,ArrowRight,Home,LayoutGrid } from 'lucide-react'
import Summeries from '@/dashboard/Components/forms/Summaries';
import Experience from '@/dashboard/Components/forms/Experience';
import Education from '@/dashboard/Components/forms/Education';
import Skills from '@/dashboard/Components/forms/Skills';
import ViewResume from '@/my-resume/[resumeId]/view';

function FormSection() {
    
  const [activeFormIndex,setActiveFormIndex]=useState(1);
  const [enabledNext, setEnabledNext] = useState(true)
  const {resumeId} = useParams()
  return (
    <div>
       <div className='flex justify-between items-center'>
        <div className='flex gap-5'>
            <Link to={"/dashboard"}>
          <Button><Home/></Button>
          </Link>
          <ThemeColor/>
         
          </div>
          <div className='flex gap-2'>
            {activeFormIndex>1&& <Button size="sm" className="" onClick={()=>setActiveFormIndex(activeFormIndex-1)}><ArrowLeft/></Button>}
            <Button 
            disabled={!enabledNext}
            className="flex gap-2" size="sm" onClick={()=>setActiveFormIndex(activeFormIndex+1)}>
              Next 
            <ArrowRight/></Button>
          
          </div>
                
          </div>
          {/*Personal Details */}
             {activeFormIndex==1?  <PersonalDetail enabledNext={(v)=>setEnabledNext(v)} /> 
             
             :activeFormIndex==2?<Summeries enabledNext={(v)=>setEnabledNext(v)}/>
             :activeFormIndex==3?<Experience enabledNext={(v)=>setEnabledNext(v)}/>
             :activeFormIndex==4?<Education  enabledNext={(v)=>setEnabledNext(v)}/>
             : activeFormIndex==5?<Skills  enabledNext={(v)=>setEnabledNext(v)} />
             : activeFormIndex==6?<Navigate to={'/my-resume/'+resumeId+'/view/'}/>: null}
              
                {/*Summary */}

                {/* Experience */}

                {/*Educational Detaila */}

                {/* Skills */}
    </div>
  )
}

export default FormSection