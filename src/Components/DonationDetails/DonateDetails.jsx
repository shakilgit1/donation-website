import PropTypes from 'prop-types';
import swal from 'sweetalert';

const DonateDetails = ({ donation }) => {
  const {id, image, title, description, price, text_button_bg_color } = donation;
//   console.log(donation);

const handleDonate = () => {
    const storedArray = [];
    const getFromLS = JSON.parse(localStorage.getItem('donate'));

    if(!getFromLS){
        storedArray.push(donation);
        localStorage.setItem('donate', JSON.stringify(storedArray));
        swal("Good job!", "You successfully donated", "success");
    }
    else{
        const isExist = getFromLS.find(item => item.id === id);
        if(!isExist){
            storedArray.push(...getFromLS, donation);
            localStorage.setItem('donate', JSON.stringify(storedArray));
            swal("Good job!", "You successfully donated", "success");
        }
        else{
            swal("Sorry!", "You have already donated this one", "error");
        }
    }
}

  return (
    <div className='mb-12 mx-auto'>
      <div className="card card-compact">

      <div className="relative">
      <figure>
        <img className="w-full  md:h-[80vh]"
          src={image}
        />

        <div className='absolute w-full py-2 md:p-12 opacity-60 bg-black mt-[160px] md:mt-[400px] lg:mt-[400px] xl:mt-[400px] 2xl:mt-[600px] bg-blend-overlay'>
        <div className="card-actions">
        <button onClick={handleDonate} style={{backgroundColor: text_button_bg_color}} className="btn border-none text-white ml-10">Donate ${price}</button>
        </div>
        </div>
     
      </figure>
      </div>
   
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <p>{description}</p>
       
      </div>
    </div>
    </div>
  );
};

DonateDetails.propTypes = {
    donation: PropTypes.object
}

export default DonateDetails;
