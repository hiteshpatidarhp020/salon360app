import styled, { css } from "styled-components";
const theme = {
  fontSizes: {
    heading_l_medium: "30px",
    heading_m_medium: "22px",
    heading_s_medium: "20px",
    body_l_medium: "18px",
    body_m_medium: "16px",
    body_s_medium: "14px",
  },
  fontWeights: {
    medium: "500",
    regular: "400",
  },
};

const textStyles = {
  heading_l_medium: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.heading_l_medium || "30px"};
    font-weight: ${theme?.fontWeights?.medium || "500"};
  `,
  heading_m_medium: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.heading_m_medium || "22px"};
    font-weight: ${theme?.fontWeights?.medium || "500"};
  `,
  heading_s_medium: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.heading_s_medium || "20px"};
    font-weight: ${theme?.fontWeights?.medium || "500"};
  `,
  body_l_medium: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.body_l_medium || "18px"};
    font-weight: ${theme?.fontWeights?.medium || "500"};
  `,
  body_m_medium: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.body_m_medium || "18px"};
    font-weight: ${theme?.fontWeights?.medium || "500"};
  `,
  body_s_medium: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.body_s_medium || "18px"};
    font-weight: ${theme?.fontWeights?.medium || "500"};
  `,
  heading_l_regular: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.heading_l_regular || "30px"};
    font-weight: ${theme?.fontWeights?.regular || "400"};
  `,
  heading_m_regular: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.heading_m_regular || "22px"};
    font-weight: ${theme?.fontWeights?.regular || "400"};
  `,
  heading_s_regular: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.heading_s_regular || "20px"};
    font-weight: ${theme?.fontWeights?.regular || "400"};
  `,
  body_l_regular: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.body_l_regular || "18px"};
    font-weight: ${theme?.fontWeights?.regular || "400"};
  `,
  body_m_regular: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.body_m_regular || "16px"};
    font-weight: ${theme?.fontWeights?.regular || "400"};
  `,
  body_s_regular: css`
    font-family: "DM Sans";
    font-size: ${theme?.fontSizes?.body_s_regular || "14px"};
    font-weight: ${theme?.fontWeights?.regular || "400"};
  `,
};

const StyledText = styled.div`
  ${(props) => textStyles[props.appearance]};
  color: ${(props) => props.color || "inherit"};
`;

const Text = ({ text, appearance, color }) => {
  return (
    <StyledText appearance={appearance} color={color}>
      {text}
    </StyledText>
  );
};

export default Text;
