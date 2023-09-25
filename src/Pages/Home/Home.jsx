import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import DonationCard from "../../Components/Donation/DonationCard";

const Home = () => {
   const donations = useLoaderData();
//    console.log(donations);

    return (
        <div>
            <Banner></Banner>
            <div className="w-10/12 mx-auto my-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {
               donations?.map(donate => <DonationCard donate={donate} key={donate.id}></DonationCard>)
             }

            </div>
        </div>
    );
};

export default Home;