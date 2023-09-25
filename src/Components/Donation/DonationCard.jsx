import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const DonationCard = ({ donate }) => {
  const {id, image, title, category, card_bg_color, category_bg_color, text_button_bg_color,} = donate;

  return (
    <div>
     <Link to={`/details/${id}`}>
     <div style={{ backgroundColor: card_bg_color }} className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-full"
            src={image}
            alt="Shoes"
          />
        </figure>
       
        <div className="card-body">
        <div className="card-actions">
            <button style={{ backgroundColor: category_bg_color, color: text_button_bg_color}} className="px-4 py-2 rounded-lg font-semibold">{category}</button>
          </div>
          <h2 style={{ color: text_button_bg_color }} className="card-title">{title}</h2>
        </div>
      </div>
     </Link>
    </div>
  );
};

DonationCard.propTypes = {
  donate: PropTypes.object
}
export default DonationCard;
