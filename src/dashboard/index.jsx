import React, { useEffect, useState } from 'react';
import AddResume from './Components/AddResume';
import GlobalApi from './../../service/GlobalApi';
import { useUser } from '@clerk/clerk-react';
import ResumeCardItem from './Components/ResumeCardItem';

function Dashboard() {
  const [resumeList, setResumeList] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ add loading state
  const { user } = useUser();

  const getResumeList = () => {
    setLoading(true);
    GlobalApi.GetUserResume(user?.primaryEmailAddress?.emailAddress)
      .then((resp) => {
        console.log(resp.data.data);
        setResumeList(resp.data.data);
        setLoading(false); // ✅ done loading
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    if (user) getResumeList();
  }, [user]); // ✅ fix useEffect syntax

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start Creating AI Resume For Your Next Job</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <AddResume />

        {loading
          ? Array.from({ length: 3 }).map((_, idx) => (
              <ResumeCardItem key={idx} loading={true} />
            ))
          : resumeList.map((resume, index) => (
              <ResumeCardItem
                resume={resume}
                key={index}
                refreshData={getResumeList}
              />
            ))}
      </div>
    </div>
  );
}

export default Dashboard;
