import "./SingleRV.css";
import PropTypes from "prop-types";
import { Avatar, Image } from "antd";

/**
 *
 * @param {{ id: string, attributes: {}, imageUrl: string}} RVData
 */
const SingleRV = ({ id, attributes, imageUrl }) => {
  return (
    <div key={id} className="rv-container">
      <div className="img">
        <Avatar
          size={200}
          shape={"square"}
          src={<Image src={imageUrl} style={{ width: 180 }} />}
        />
      </div>
      <div className="name-type-container">
        <div>{attributes.name}</div>
        <div><b>Vehicle Type:</b> {attributes.display_vehicle_type}</div>
      </div>
    </div>
  );
};

SingleRV.propTypes = {
  id: PropTypes.string,
  attributes: PropTypes.object,
  imageUrl: PropTypes.string,
};
export default SingleRV;
