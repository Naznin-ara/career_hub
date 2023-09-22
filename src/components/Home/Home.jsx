
import Banner from '../Banner/Banner';
import Catagorylist from '../Catagorylist/Catagorylist';
import Featuredjob from '../Featuredjob/Featuredjob';

const Home = () => {
    return (
        <div className='min-h-screen mx-auto'>
            <Banner></Banner>
            <Catagorylist></Catagorylist>
            <Featuredjob></Featuredjob>
        </div>
    );
};

export default Home;