import React from 'react'
import Header from '@/components/ui/custom/Header'
import { Button } from '@/components/ui/button'
import { ResumeinfoContext } from '@/context/ResumeinfoContext'
import { useState } from 'react'
import { useParams } from 'react-router'
import ResumePreview from '@/dashboard/resume/[resumeid]/edit/components/ResumePreview'
import { useEffect } from 'react'
import { RWebShare } from 'react-web-share'
import GlobalApi from '../../../../service/GlobalApi'

function ViewResume() {
  const [resumeInfo, setResumeInfo] = useState(null)
  const { resumeId } = useParams()

  useEffect(() => {
    if (!resumeId) return
    GlobalApi.GetResumeById(resumeId)
      .then(resp => {
        setResumeInfo(resp.data.data)
      })
      .catch(err => {
        console.error("Failed to load resume:", err)
      })
  }, [resumeId])

  const HandleDownload = () => {
    window.print()
  }

  // ✅ Prevent crashing before resume data is ready
  if (!resumeInfo) {
    return <div className="text-center mt-20">Loading your resume...</div>
  }

  return (
    <ResumeinfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id="no-print">
        <Header />
        <div className="my-10 mx-10 md:mx-20 lg:mx-36">
          <h2 className="text-center text-2xl font-medium">
            Congrats! Your Ultimate AI generated Resume is ready!
          </h2>
          <p className="text-center text-gray-400">
            Now you can download or share your unique resume link.
          </p>

          <div className="flex justify-between px-44 my-10">
            <Button onClick={HandleDownload}>Download</Button>
            <RWebShare
              data={{
                text: "Hello Everyone, This is my resume. Please check it out!",
                url: `${import.meta.env.VITE_BASE_URL}/my-resume/${resumeId}/view`,
                title: `${resumeInfo.firstName} ${resumeInfo.lastName}'s Resume`,
              }}
              onClick={() => console.log("Shared successfully!")}
            >
              <Button>Share</Button>
            </RWebShare>
          </div>
        </div>
      </div>

      <div className="my-10 mx-10 md:mx-20 lg:mx-36">
        <div id="print-area">
          <ResumePreview />
        </div>
      </div>
    </ResumeinfoContext.Provider>
  )
}

export default ViewResume