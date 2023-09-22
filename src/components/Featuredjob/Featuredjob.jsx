import { useEffect, useState } from "react";
import { GrLocation} from 'react-icons/gr';
import { AiOutlineDollar} from 'react-icons/ai';
import { Link } from "react-router-dom";

const Featuredjob = () => {
    const [jobs, setJobs] = useState([]);
    const [length,datalength] = useState(4);

    const handleShowAllbtn =() =>{
        datalength(jobs.length)
    }
    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-5xl my-4 font-bold text-center">Featured Jobs</h1>
            <p className="text-base text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid justify-items-center gap-4 my-10 grid-cols-2 mx-auto max-w-screen-xl">
                {
                    jobs.slice(0,length).map(job => <div className="card pb-10 pt-14 bg-base-100 shadow-xl h-[350px] w-[500px] flex flex-col justify-center items-start" key={job.id} >
                    <img src={job?.logo} className="w-[200px] pl-10 pt-8"/>
                    <div className="px-10 pt-4 pb-10 flex flex-col gap-2">
                      <h2 className="card-title">{job.job_title}</h2>
                      <p className="text-[#757575]">{job.company_name}</p>
                      <div className="flex gap-4 my-2">
                      <button className="px-6 py-2 text-blue-600 border-2 border-blue-500">{job.remote_or_onsite}</button>
                       <button className="px-6 py-2 text-blue-600 border-2 border-blue-500">{job.job_type}</button>
                      </div>
                      <div className="flex justify-start gap-10 items-center">
                        <div className="flex gap-2 justify-center items-center">
                             <GrLocation></GrLocation>
                             <p>{job.location}</p>
                        </div>
                        <div className="flex gap-2 justify-center items-center">
                            <AiOutlineDollar></AiOutlineDollar>
                             <p>{job.salary}</p>
                        </div>
                       
                      </div>
                      <div className="card-actions justify-start">
                        <Link to={`/job/${job.id}`}><button className="btn text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 ">View Details</button></Link>
                        
                      </div>
                    </div>
                  </div> )
                }
            </div>
            <div className={`w-full text-center  mb-10 ${length == jobs.length && 'hidden'}`}>
            <button className="btn text-lg px-10 border-none mx-auto text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 " onClick={handleShowAllbtn}>See All</button>
            </div>
            
        </div>
    );
};

export default Featuredjob;