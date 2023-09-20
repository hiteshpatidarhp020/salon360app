import React from "react";
import PropTypes from "prop-types";
/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Container = ({
  inline,
  direction,
  shrink,
  wrap,
  justifyContent,
  gap,
  alignItems,
  grow,
  position,
  positionLeft,
  animation,
  positionRight,
  positionTop,
  positionBottom,
  boxShadow,
  fullWidth,
  width,
  height,
  color,
  background = "#242834",
  margin,
  padding,
  textAlign,
  borderStyle,
  border,
  outLine,
  borderWidth,
  borderBottom,
  borderTop,
  borderLeft,
  borderColor,
  borderRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  borderTopRightRadius,
  borderTopLeftRadius,
  opacity,
  zIndex,
  marginRight,
  marginLeft,
  marginBottom,
  marginTop,
  paddingRight,
  paddingLeft,
  paddingBottom,
  paddingTop,
  transform,
  overflow,
  children,
}) => {
  const containerStyles = css`
    display: ${inline || "flex"};
    flex-direction: ${direction};
    flex-shrink: ${shrink};
    flex-wrap: ${wrap};
    justify-content: ${justifyContent};
    gap: ${gap};
    align-items: ${alignItems};
    flex-grow: ${grow};
    -webkit-flex-grow: ${grow};
    position: ${position};
    left: ${positionLeft};
    animation: ${animation};
    right: ${positionRight};
    top: ${positionTop};
    bottom: ${positionBottom};
    box-shadow: ${boxShadow};
    width: ${fullWidth ? "100%" : width ? `${width}` : "auto"};
    height: ${height ? `${height}` : "auto"};
    max-width: ${fullWidth ? "100%" : ""};
    color: ${color};
    background: ${background || ""};
    margin: ${margin};
    padding: ${padding};
    text-align: ${textAlign};
    border-style: ${borderStyle};
    border: ${border};
    outline: ${outLine};
    border: ${borderWidth};
    border-bottom: ${borderBottom};
    border-top: ${borderTop};
    border-left: ${borderLeft};
    border-color: ${borderColor};
    border-radius: ${borderRadius};
    border-bottom-right-radius: ${borderBottomRightRadius};
    border-bottom-left-radius: ${borderBottomLeftRadius};
    border-top-right-radius: ${borderTopRightRadius};
    border-top-left-radius: ${borderTopLeftRadius};
    opacity: ${opacity};
    z-index: ${zIndex};
    margin-right: ${marginRight};
    margin-left: ${marginLeft};
    margin-bottom: ${marginBottom};
    margin-top: ${marginTop};
    padding-right: ${paddingRight};
    padding-left: ${paddingLeft};
    padding-bottom: ${paddingBottom};
    padding-top: ${paddingTop};
    transform: ${transform};
    overflow: ${overflow};
  `;
  return (
    <div>
      <div css={containerStyles}>{children}</div>
    </div>
  );
};

export default Container;
