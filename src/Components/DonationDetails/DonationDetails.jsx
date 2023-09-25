
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonateDetails from "./DonateDetails";

const DonationDetails = () => {
    const [donation, setDonation] = useState({});
    const {id} = useParams();
    const idInt = parseInt(id);
    const donations = useLoaderData();

    useEffect(()=> {
        const FindDonation = donations.find((donate) => donate.id === idInt);
        setDonation(FindDonation);

    }, [idInt, donations])
    

  return (
    <div>
        
       <div className="w-10/12 mx-auto py-6">
        <DonateDetails donation={donation}></DonateDetails>
       </div>
    </div>
  );
};


export default DonationDetails;
