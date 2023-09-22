import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getjobItem } from "../utility/utility";
import { GrLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const AppliedJob = () => {
  const job = useLoaderData();
  const { id } = useParams();
  const [appliedjob, setAppliedjob] = useState([]);
  const [displayjob, setDisplayjob] = useState([]);

  useEffect(() => {
    const jobapply = getjobItem();
    if (job.length > 0) {
      const apply = job.filter((item) => jobapply.includes(item.id));
      setAppliedjob(apply);
      setDisplayjob(apply);
      console.log(apply);
    }
  }, []);

  const handlefilter = (filter) =>{
   if(filter == 'All'){
    setDisplayjob(appliedjob)
   }else if(filter === 'Remote'){
    const remotejob = appliedjob.filter(item => item.remote_or_onsite == 'Remote');
    setDisplayjob(remotejob)
   }else if(filter === 'Onsite'){
    const Onsitejob = appliedjob.filter(item => item.remote_or_onsite == 'Onsite');
    setDisplayjob(Onsitejob)
   }
   
  }

  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
      

      <div className="">
        <h1 className="text-center text-5xl font-bold mt-10">Applied Job</h1>
        <div className="w-full text-center ">
        <details className="dropdown my-10"  >
        <summary className="m-1 btn px-6 btn-primary" >filter</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52" >
          <li onClick={() => handlefilter('All')}>
            <a>All</a>
          </li>
          <li onClick={() => handlefilter('Remote')}>
            <a>Remote</a>
          </li>
           <li onClick={() => handlefilter('Onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>

        </div>
       
      </div>
      <div>
        {displayjob.map((item) => (
          <div
            key={item.id}
            className="my-10 rounded-md w-full h-[250px] shadow-md  flex justify-between items-center"
          >
            <div className="flex gap-4 justify-center items-center">
              <img
                src={item.logo}
                alt=""
                className="p-20 ml-10 bg-gray-100 rounded-lg"
              />
              <div>
                <h2 className="card-title">{item.job_title}</h2>
                <p className="text-[#757575]">{item.company_name}</p>
                <div className="flex gap-4 my-2">
                  <button className="px-6 py-2 text-blue-600 border-2 border-blue-500">
                    {item.remote_or_onsite}
                  </button>
                  <button className="px-6 py-2 text-blue-600 border-2 border-blue-500">
                    {item.job_type}
                  </button>
                </div>
                <div className="flex justify-start gap-10 items-center">
                  <div className="flex gap-2 justify-center items-center">
                    <GrLocation></GrLocation>
                    <p>{item.location}</p>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <AiOutlineDollar></AiOutlineDollar>
                    <p>{item.salary}</p>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div className="card-actions justify-start mr-10">
              <Link to={`/job/${item.id}`}>
                <button className="btn text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
