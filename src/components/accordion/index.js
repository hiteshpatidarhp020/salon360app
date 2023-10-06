import { Accordion } from "react-bootstrap";
import style from "./accordion.module.css";

import "./accordion.css";
import Text from "../text";
import { Component } from "react";
const AccordionC = () => {
  return (
    <div>
      <Text
        color="#FFF"
        appearance="heading_l_medium"
        lineHeight="38.5px"
        text="Frequently asked questions (FAQs)"
        className="mb-4 mt-5"
      />
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Text
              appearance="body_l_regular"
              text="How do I create a campaign"
            />
          </Accordion.Header>
          <Accordion.Body className="accordion-items-list">
            <Text text="To create an offer, please follow these simple steps:" />
            <ol className="ps-4 ">
              <li>
                <Text text="Log in to your salon management app and navigate to the Offers section." />
              </li>
              <li>
                <Text text="Click on the Create Offer button." />
              </li>
              <li>
                <Text text="Enter the details of your offer, such as the offer name, description, discount percentage, and validity period." />
              </li>
              <li>
                <Text text="Select the services or products that will be included in the offer." />
              </li>
              <li>
                <Text text="Set any additional conditions for the offer, such as a minimum purchase amount or specific days of the week the offer will be valid." />
              </li>
              <li>
                <Text text="Choose the channels through which the offer will be promoted, such as email marketing or social media." />
              </li>
              <li>
                <Text text="Preview the offer and make any necessary adjustments." />
              </li>
              <li>
                <Text text="Save the offer and make it live." />
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <Text
              appearance="body_l_regular"
              text="How do I create a campaign"
            />
          </Accordion.Header>
          <Accordion.Body className="accordion-items-list">
            <Text text="To create an offer, please follow these simple steps:" />
            <ol className="ps-4 ">
              <li>
                <Text text="Log in to your salon management app and navigate to the Offers section." />
              </li>
              <li>
                <Text text="Click on the Create Offer button." />
              </li>
              <li>
                <Text text="Enter the details of your offer, such as the offer name, description, discount percentage, and validity period." />
              </li>
              <li>
                <Text text="Select the services or products that will be included in the offer." />
              </li>
              <li>
                <Text text="Set any additional conditions for the offer, such as a minimum purchase amount or specific days of the week the offer will be valid." />
              </li>
              <li>
                <Text text="Choose the channels through which the offer will be promoted, such as email marketing or social media." />
              </li>
              <li>
                <Text text="Preview the offer and make any necessary adjustments." />
              </li>
              <li>
                <Text text="Save the offer and make it live." />
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <Text
              appearance="body_l_regular"
              text="How do I create a campaign"
            />
          </Accordion.Header>
          <Accordion.Body className="accordion-items-list">
            <Text text="To create an offer, please follow these simple steps:" />
            <ol className="ps-4 ">
              <li>
                <Text text="Log in to your salon management app and navigate to the Offers section." />
              </li>
              <li>
                <Text text="Click on the Create Offer button." />
              </li>
              <li>
                <Text text="Enter the details of your offer, such as the offer name, description, discount percentage, and validity period." />
              </li>
              <li>
                <Text text="Select the services or products that will be included in the offer." />
              </li>
              <li>
                <Text text="Set any additional conditions for the offer, such as a minimum purchase amount or specific days of the week the offer will be valid." />
              </li>
              <li>
                <Text text="Choose the channels through which the offer will be promoted, such as email marketing or social media." />
              </li>
              <li>
                <Text text="Preview the offer and make any necessary adjustments." />
              </li>
              <li>
                <Text text="Save the offer and make it live." />
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AccordionC;
