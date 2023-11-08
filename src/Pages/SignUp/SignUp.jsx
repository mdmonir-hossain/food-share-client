import { Helmet } from "react-helmet";
import { Button, Label, TextInput } from "flowbite-react";
import signupanimation from "../../assets/signup.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const { signupUser } = useContext(AuthContext);
  const [error, setError] = useState();
  const [UserSuccess, setUserSuccess] = useState();

  const handleUserSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, photo, name);
    if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      toast(
        "Minimum six characters, at least one capital letter and one special character"
      );
      return;
    }
    setError("");
    signupUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUserSuccess(result.user);
        if (result.user) {
          toast("User Create successfully");
        }
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("Profile updated successfully"))
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
    if (error) {
      toast(error);
    }
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 60 }}
        className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center items-center"
      >
        <Helmet>
          <title> Sign Up</title>
        </Helmet>

        <div className="flex-1 lg:ml-3 lg:px-10 lg:py-20 justify-center items-center  rounded-lg ">
          <h1 className="text-3xl text-center">Sign Up</h1>
          <form
            onSubmit={handleUserSignUp}
            className="flex max-w-md flex-col gap-4"
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput
                name="name"
                id="name"
                type="text"
                placeholder="Your Name"
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
                name="email"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                name="password"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="photo" value="Your Photo" />
              </div>
              <TextInput
                name="photo"
                id="photo"
                type="text"
                placeholder="Your photo URL"
                required
              />
            </div>
            <Button type="submit">Sign Up</Button>
          </form>
          <hr className="w-3/4 mt-2" />
          <div className="flex gap-4 mt-2">
            <h1>Alraedy Account?</h1>
            <Link to="/Login" className="text-sky-500">
              Sign in
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 2, type: "tween" }}
          className="flex-1"
        >
          <Lottie animationData={signupanimation}></Lottie>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignUp;
