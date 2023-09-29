import { Icon } from "../icon/icon";
import style from "./button.module.css";
import PropTypes from "prop-types";

const Button = ({ size, icon, label }) => {
  let width;
  let fontSize;
  if (size === "large") {
    width = "240px";
    fontSize = "20px";
  } else if (size === "medium") {
    width = "206px";
    fontSize = "16px";
  } else {
    width = "108px";
    fontSize = "14px";
  }

  const btnboxStyle = {
    width: width,
    fontSize: fontSize,
  };

  return (
    <div className={style.btnbox} style={btnboxStyle}>
      <label>{label}</label>
      <Icon ic={icon} />
    </div>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Button;
