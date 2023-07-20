import Button from "../Button";
import MainCanvas from "../MainCanvas";

const HomePage = () => {
  return (<>
    <Button>
      Accept
    </Button>
    <Button type="secondary">
      Decline
    </Button>
    <MainCanvas />
  </>);
};

export default HomePage;