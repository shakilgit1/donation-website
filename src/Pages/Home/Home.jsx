import { useLoaderData } from "react-router-dom";
import DonationCard from "../../Components/Donation/DonationCard";
import { useState } from "react";

const Home = () => {
  const donations = useLoaderData();
  const [searchData, setSearchData] = useState(donations);
  const [searchValue, setSearchValue]= useState('');

  const handleSearch = (e) => {
    e.preventDefault()
    if(searchValue.length == 0){
        setSearchData(donations)
        return;
    }
    const filterData = donations.filter(category => category.category.toLowerCase() === searchValue.toLowerCase());
    setSearchData(filterData);
  }

  //    console.log(donations);


  return (
    <div>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/DVxx3GB/banner.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-90 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-black">
              I Grow By Helping People In Need
            </h1>
            <form onSubmit={handleSearch} className="flex justify-center">
              <input
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                className="w-full max-w-xs border-2 border-[#DEDEDE] text-black rounded-l-lg px-4 py-2"
                type="text"
                name="text"
                placeholder="Search here...."
              ></input>

              <button className="text-white bg-[#FF444A] px-4 py-2 rounded-r-lg">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto my-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {searchData?.map((donate) => (
          <DonationCard donate={donate} key={donate.id}></DonationCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
