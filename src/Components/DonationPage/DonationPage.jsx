
import PropTypes from "prop-types";

const DonationPage = ({ donate }) => {
    const {image, title, category, card_bg_color, text_button_bg_color, price} = donate;

  return (
    <div>
      <div style={{ backgroundColor: card_bg_color }} className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img  className="h-full"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
         <div className="">
         <button style={{ backgroundColor: card_bg_color, color: text_button_bg_color}} className="px-2 py-1 rounded-lg text-xs">{category}</button>
         </div>
          <p className="text-xl font-bold">{title}</p>
          <p style={{color: text_button_bg_color}} className="font-bold"> ${price}</p>
          <div className="card-actions">
          <button style={{backgroundColor: text_button_bg_color}} className=" border-none text-white capitalize text-lg px-6 py-1 md:py-3 rounded-lg">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

DonationPage.propTypes = {
  donate: PropTypes.object
}

export default DonationPage;
