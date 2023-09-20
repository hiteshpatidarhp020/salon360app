import Container from "../components/container/index";
import Text from "../components/text";
import style from "./dashboard.module.css";
const Dashboard = ({ item }) => {
  return (
    <Container background="#191921" height="100vh" inline={true}>
      <Text text="App Details" appearance="heading_s_medium" color="white" />
    </Container>
  );
};
export default Dashboard;
