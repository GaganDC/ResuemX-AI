
import React from 'react'
import ThemeColor from './ThemeColor';

import PersonalDetail from '@/dashboard/Components/forms/PersonalDetail'
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { useState } from 'react';
import { ArrowLeft,ArrowRight,Home,LayoutGrid } from 'lucide-react'
import Summeries from '@/dashboard/Components/forms/Summaries';
import Experience from '@/dashboard/Components/forms/Experience';
import Education from '@/dashboard/Components/forms/Education';
import Skills from '@/dashboard/Components/forms/Skills';

function FormSection() {
    
  const [activeFormIndex,setActiveFormIndex]=useState(5);
  const [enabledNext, setEnabledNext] = useState(false)
  return (
    <div>
       <div className='flex justify-between items-center'>
            <Button variant="outline" size="sm" className="flex-gap-2"><LayoutGrid/>Theme</Button>
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
             : activeFormIndex==5?<Skills  enabledNext={(v)=>setEnabledNext(v)} />: null}
              
                {/*Summary */}

                {/* Experience */}

                {/*Educational Detaila */}

                {/* Skills */}
    </div>
  )
}

export default FormSection