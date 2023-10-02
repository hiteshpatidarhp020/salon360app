import { Accordion } from "react-bootstrap";
import style from "./accordion.module.css";
const AccordionC = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className={style.accordionItems}>
        <Accordion.Header bsPrefix="primary" className={style.accordionHeader}>
          How do I create a campaign
        </Accordion.Header>
        <Accordion.Body className={style.accordionBody}>
          <ul> To create an offer at, please follow these simple steps: </ul>
          <li>
            1.Log in to your salon management app and navigate to the "Offers"
            section.
          </li>
          <li>2. Click on the "Create Offer" button.</li>

          <li>
            3.Enter the details of your offer, such as the offer name,
            description, discount percentage, and validity period.
          </li>
          <li>
            4.Select the services or products that will be included in the
            offer.
          </li>
          <li>
            5. Set any additional conditions for the offer, such as minimum
            purchase amount or specific days of the week the offer will be
            valid.
          </li>
          <li>
            6.Choose the channels through which the offer will be promoted, such
            as email marketing or social media.
          </li>
          <li>7 Preview the offer and make any necessary adjustments.</li>
          <li>8 Save the offer and make it live </li>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className={style.accordionItems}>
        <Accordion.Header className={style.accordionHeader}>
          How can I customize the packages?
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionC;
