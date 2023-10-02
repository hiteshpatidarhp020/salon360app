import { Icon } from "../icon/icon";
import style from "./button.module.css";
import PropTypes from "prop-types";

const ButtonComponent = ({
  size,
  paddingLeft,
  gap,
  justifyContent,
  prefix,
  suffix,
  label,
  className,
}) => {
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
    className: className,
    gap: gap,
    justifyContent: justifyContent,
    paddingLeft: paddingLeft,
  };

  return (
    <div className={`${style.btnbox} ${className}`} style={btnboxStyle}>
      <Icon ic={prefix} />
      <label>{label}</label>
      <Icon ic={suffix} />
    </div>
  );
};

ButtonComponent.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  className: PropTypes.string,
};

export default ButtonComponent;
