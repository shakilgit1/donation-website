import { useEffect, useState } from "react";
import DonationPage from "../../Components/DonationPage/DonationPage";

const Donation = () => {
  const [items, setItems] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isShowAll, setIsShowAll] = useState(false);

  useEffect(() => {
    const getFromLS = JSON.parse(localStorage.getItem("donate"));
    if (getFromLS) {
      setItems(getFromLS);
    } else {
      setNotFound("no data found");
    }
  }, []);


  return (
    <div className="w-10/12 mx-auto py-14">
      {notFound ? (
        <p className="text-center text-2xl font-bold h-[60vh] flex items-center justify-center">{notFound}</p>
      ) : (
        <div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">

            {
            isShowAll? items.map((donate) => (
              <DonationPage key={donate.id} donate={donate}></DonationPage>
            )) : items.slice(0,4).map((donate) => (
              <DonationPage key={donate.id} donate={donate}></DonationPage>
            ))

            }

          </div>

         {
          items.length > 4 && <div className="text-center mt-8">
          <button onClick={() => setIsShowAll(!isShowAll)} className={isShowAll? `hidden` : `btn text-white bg-[#009444] capitalize`}>{isShowAll? 'See less' : 'See All'}</button>
        </div>
         }
        </div>
      )}
    </div>
  );
};

export default Donation;
