import { useEffect, useState } from "react";


const Catagorylist = () => {
    const [catagory, setCatagory] = useState([]);

    useEffect(()=>{
        fetch('catagories.json')
        .then(res=>res.json())
        .then(data=>setCatagory(data))
    },[])
    return (
        <div className=" max-w-screen-xl mx-auto">
            <h1 className="text-5xl text-center my-6 font-bold ">Job Category List</h1>
            <p className="text-center text-base">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex gap-4 my-10">
            {
                catagory.map(item => <div className="flex flex-col justify-start items-center pt-6 rounded-md w-96 h-[200px] bg-base-100 shadow-md" key={item.id}>
                <figure><img src={item.logo}/></figure>
                <div className="card-body">
                  <h2 className="card-title">{item.category_name}</h2>
                  <p>{item.availability}</p>
                 
                </div>
              </div>)
            }
            </div>
           
        </div>
    );
};

export default Catagorylist;