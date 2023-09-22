
import myimage from "../../assets/images/user.png";

const Banner = () => {
    return (
        <div className="w-full bg-gray-100">
              <div className="hero min-h-screen max-w-screen-xl mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={myimage} className="max-w-xl rounded-lg " />
    <div>
      <h1 className="text-7xl font-bold">One Step <br />Closer To Your <br /><span className="text-blue-500">Dream Job</span></h1>
      <p className="py-6 w-[300px]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

        </div>
      
    );
};

export default Banner;