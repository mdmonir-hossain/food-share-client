import { Helmet } from "react-helmet";
import Banner from "../../Components/Header/Banner/Banner";
import SuccessStories from "../../Components/SuccessStories/SuccessStories";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Foods from "../../Components/Foods/Foods";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <Foods></Foods>
      <SuccessStories></SuccessStories>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
