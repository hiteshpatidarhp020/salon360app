import React from "react";

import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./knowmore.css";

import IcAppoinment from "../../design-system/icons/IcAppoinment";
import IcVectorrefferal from "../../design-system/icons/IcVectorrefferal";
import Text from "../text";
import { Icon } from "../icon/icon";
import ImgBackground from "../img-background";
import IcServices from "../../design-system/icons/IcServices";
import IcPackages from "../../design-system/icons/IcPackages";
import IcPlans from "../../design-system/icons/IcPlans";
import IcReports from "../../design-system/icons/IcReports";
import IcCampaigns from "../../design-system/icons/IcCampaigns";

const Knowmore = () => {
  return (
    <Container className="knowmaincontainer ">
      <Text
        className="knowtext"
        text="Know more about our Features"
        appearance="heading_l_medium"
        color="white"
        width="320px"
      />
      <Row className="knowboxes">
        <Col lg={4} md={6} className="mb-4">
          <Card className="knowcard">
            <Card.Body className="knowboxes">
              <Card.Title>
                <ImgBackground icon={<IcAppoinment />} />
                <Text
                  className="knowtext"
                  text="Appoinment"
                  appearance="body_l_regular"
                  color="white"
                />
              </Card.Title>
              <Card.Text>
                <Text
                  className="knowtext"
                  text="Allow customers to book appointments on channel, view
                availability, and receive confirmation notifications."
                  appearance="body_s_regular"
                  color="rgba(255, 255, 255, 0.7)"
                />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="knowcard">
            <Card.Body className="knowboxes">
              {/*<BackgroundIcon icon={<IcAppoinment />} />*/}
              <Card.Title className="bg-knowcard">
                <ImgBackground icon={<IcServices />} />
                <Text
                  className="knowtext"
                  text="Services"
                  appearance="body_l_regular"
                  color="white"
                />
              </Card.Title>
              <Card.Text>
                <Text
                  className="knowtext"
                  text="Create a catalogue for your clients covering a broad range of
                services to choose from."
                  appearance="body_s_regular"
                  color="rgba(255, 255, 255, 0.7)"
                />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="knowcard">
            <Card.Body className="knowboxes">
              <ImgBackground icon={<IcPackages />} />
              <Card.Title>
                <Text
                  className="knowtext"
                  text="Packages"
                  appearance="body_l_regular"
                  color="white"
                />
              </Card.Title>
              <Card.Text>
                <Text
                  className="knowtext"
                  text="Create customized packages for your clients and run discount
                offers to increase customer retention."
                  appearance="body_s_regular"
                  color="rgba(255, 255, 255, 0.7)"
                />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="knowcard">
            <Card.Body className="knowboxes">
              <Card.Title>
                <ImgBackground icon={<IcCampaigns />} />
                <Text
                  className="knowtext"
                  text="Campaigns"
                  appearance="body_l_regular"
                  color="white"
                />
              </Card.Title>
              <Card.Text>
                <Text
                  className="knowtext"
                  text="Send promotional offers, newsletters, and other marketing
                messages to customers, as well as to track the effectiveness of
                these campaigns."
                  appearance="body_s_regular"
                  color="rgba(255, 255, 255, 0.7)"
                />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="knowcard">
            <Card.Body className="knowboxes">
              <Card.Title>
                <ImgBackground icon={<IcPlans />} />
                <Text
                  className="knowtext"
                  text="Plans"
                  appearance="body_l_regular"
                  color="white"
                />
              </Card.Title>
              <Card.Text>
                <Text
                  className="knowtext"
                  text="Enrol into an annual subscription to leverage all the unlimited benefits for smooth functioning of your business"
                  appearance="body_s_regular"
                  color="rgba(255, 255, 255, 0.7)"
                />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="knowcard">
            <Card.Body className="knowboxes">
              <Card.Title>
                <ImgBackground icon={<IcReports />} />
                <Text
                  className="knowtext"
                  text="Reports"
                  appearance="body_l_regular"
                  color="white"
                />
              </Card.Title>
              <Card.Text>
                <Text
                  className="knowtext"
                  text="Track your key business metrics with detailed business reports. Get trend analysis of your best selling products & services"
                  appearance="body_s_regular"
                  color="rgba(255, 255, 255, 0.7)"
                />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Knowmore;
