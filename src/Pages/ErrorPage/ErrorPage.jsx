
import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet';
import error404 from "../../assets/404.json"
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
      <div>
        <Helmet>
          <title>404 Not Found</title>
        </Helmet>
        <div className="container mx-auto relative">
          <Lottie animationData={error404}></Lottie>
          <Link to='/'>
            <Button
              color="gray"
              className="absolute right-0  left-0 -mt-[300px] text-5xl font-extrabold  "
            >
              {" "}
              Go to Home
            </Button>
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;