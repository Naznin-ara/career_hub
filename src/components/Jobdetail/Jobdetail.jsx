import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

import { setjobItem } from "../utility/utility";

const Jobdetail = () => {
    const jobs= useLoaderData();
    const [jobdetail, setJobdetail] = useState([]);
    const {id} = useParams();
    const intid = parseInt(id);


    useEffect(()=>{
        const details = jobs.find(item => item.id === parseInt(id));
        setJobdetail(details)

    }, [])

    const handleapplybtn =() =>{
       setjobItem(intid)

    }
    console.log(jobdetail)
    return (
        <div className="max-w-screen-xl mx-auto min-h-screen ">
            <div className=''>
                <h1 className="text-center text-5xl font-bold mt-10">Job Details</h1>

            </div>
            
              
                    <div className="grid grid-cols-4 gap-4 my-20 h-[500px]" >
                         <div className="col-span-3 bg-gray-100 p-8">
                            <h1 className="text-xl font-bold ">Job description: <span className="text-lg font-normal">{jobdetail.job_description}</span> </h1>
                            <h1 className="text-xl font-bold  mt-6">Job responsiblity: <span className="text-lg font-normal">{jobdetail.job_responsibility}</span> </h1>
                            <h1 className="text-xl font-bold  mt-6">Educational Requirements: <br /><span className="text-lg font-normal">{jobdetail.educational_requirements}</span> </h1>
                            <h1 className="text-xl font-bold  mt-6">Experience: <br /><span className="text-lg font-normal">{jobdetail.experiences
}</span> </h1>

                      </div>
                      <div className="bg-gray-100 p-4">
                        <h1 className="text-lg font-bold border-b-2 border-[#7575751B] p-4">Job details</h1>
                        <h1 className="text-lg font-medium p-4">Salary: <span className="font-normal">{jobdetail.salary}</span> </h1>
                        <h1 className="text-lg font-medium px-4">Job title: <span className="font-normal">{jobdetail.job_title}</span> </h1>
                        <h1 className="text-lg font-bold border-b-2 border-[#7575751B] p-4 mt-4">Contact Information</h1>
                        <h1 className="text-lg font-medium px-4 mt-2">Phone: <span className="font-normal">{jobdetail?.contact_information?.phone}</span> </h1>
                        <h1 className="text-lg font-medium px-4 mt-2">Email: <span className="font-normal">{jobdetail?.contact_information?.email}</span> </h1>
                        <h1 className="text-lg font-medium px-4 mt-2">Address: <span className="font-normal">{jobdetail?.contact_information?.address}</span> </h1>
                       <Link to={`/applied/${jobdetail.id}`}><button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full mt-8 text-white" onClick={handleapplybtn}>Apply Now</button></Link>

                        </div>


                    </div>
                   
                
            
        </div>
    );
};

export default Jobdetail;