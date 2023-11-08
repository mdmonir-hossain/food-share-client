

import { Helmet } from "react-helmet";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import Lottie from "lottie-react";
import contractusanimation from "../../assets/contractus.json";
const ContactUs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center items-center mt-10">
      <div className="flex-1 lg:ml-3 lg:px-10 lg:py-20 justify-center items-center ">
        <h1 className="text-3xl text-center font-extrabold">Contact Us</h1>
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="Your email"
              required
            />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Your message" />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
        <hr className="w-3/4 mt-2" />
      </div>
      <div className="flex-1">
        <Lottie animationData={contractusanimation}></Lottie>
      </div>
    </div>
  );
};

export default ContactUs;
