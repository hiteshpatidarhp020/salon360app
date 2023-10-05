import { Image } from "react-bootstrap";

import "./img-background.css";
import { Icon } from "../icon/icon";
const ImgBackground = ({ icon }) => {
  return (
    <div className="image-container mb-2">
      <Image src="/images/backimg.svg" alt="Image" fluid />
      <div className="icon-container">
        <Icon ic={icon} />
      </div>
    </div>
  );
};
export default ImgBackground;
