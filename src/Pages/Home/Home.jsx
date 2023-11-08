import { Helmet } from "react-helmet";
import Banner from "../../Components/Header/Banner/Banner";
import SuccessStories from "../../Components/SuccessStories/SuccessStories";
import ContactUs from "../../Components/ContactUs/ContactUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <SuccessStories></SuccessStories>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
