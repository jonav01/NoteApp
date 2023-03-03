import React, { useState } from "react";
import { useNavigate } from "react-router";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import ErrorContainer from "./ErrorContainer";

function SignUp() {
  // All form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [reTypedPassword, setreTypedPassword] = useState("");

  //All form validation states
  const [isValidEmail, setisValidEmail] = useState(true);
  const [isValidName, setisValidName] = useState(true);
  const [isValidPhone, setisValidPhone] = useState(true);
  const [isValidRetypedPassword, setisValidRetypedPassword] = useState(true);
  const [isValidPassword, setisValidPassword] = useState(true);

  //Loading state
  const [loading, setLoading] = useState(false);
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setisValidEmail(true);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
    setisValidName(true);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setisValidPhone(true);
  };
  const handleRetypedPasswordChange = (e) => {
    setreTypedPassword(e.target.value);
    setisValidRetypedPassword(true);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setisValidPassword(true);
  };
  const handleEmailOnBlur = () => {
    if (!email.includes("@") || email === "") {
      setisValidEmail(false);
    }
  };
  const handleNameOnBlur = () => {
    if (name === "") {
      setisValidName(false);
    }
  };
  const handlePhoneOnBlur = () => {
    if (phone.length + 1 < 10 || phone === "") {
      setisValidPhone(false);
    }
  };
  const handlePasswordOnBlur = () => {
    if (!password.length > 5 || password === "") {
      setisValidPassword(false);
    }
  };
  const handleRetypedPasswordOnBlur = () => {
    if (!(password === reTypedPassword) || password === "") {
      console.log(password.length);
      setisValidPassword(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      isValidEmail &&
      isValidPassword &&
      isValidName &&
      isValidPhone &&
      isValidRetypedPassword
    ) {
      const formData = {
        email,
        phone,
        password,
        name,
      };
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8080/api/users", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // body data type must match "Content-Type" header
        });
        if (!response.ok) {
          throw new Error("Email already exists !");
        } else {
          const responseData = await response.json();
          console.log(responseData);
          navigate("/");
        }
      } catch (err) {
        setLoading(false);
        console.log(err.message);
        setSignupError(err.message);
      }
    }
  };
  return (
    <div className="block align-middle justify-center w-full h-max bgcustomImage p-[10rem]">
      <div className="block bg-slate-100 px-40 py-12 m-auto w-1/2">
        <h1 className="text-xl font-semibold mb-12">SignUp Here</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4 text-[1.4rem] font-serif">
            Full name:
          </label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full px-6 py-2 mb-4 text-base bg-slate-300"
            value={name}
            onBlur={handleNameOnBlur}
            onChange={handleNameChange}
          />
          {!isValidName && (
            <p className="my-2 text-red-700">Please Enter a valid name</p>
          )}
          <label className="block mb-4 text-[1.4rem] font-serif">
            Phone number:
          </label>
          <input
            type="number"
            placeholder="Enter your phone"
            className="w-full px-6 py-2 mb-4 text-base bg-slate-300"
            value={phone}
            onBlur={handlePhoneOnBlur}
            onChange={handlePhoneChange}
          />
          {!isValidPhone && (
            <p className="my-2 text-red-700">
              Phone number should be atleast 10digits long
            </p>
          )}
          <label className="block mb-4 text-[1.4rem] font-serif">E-mail:</label>
          <input
            type="text"
            placeholder="Register your email"
            className="w-full px-6 py-2 mb-4 text-base bg-slate-300"
            value={email}
            onBlur={handleEmailOnBlur}
            onChange={handleEmailChange}
          />
          {!isValidEmail && (
            <p className="my-2 text-red-700">Please Enter a valid email</p>
          )}
          {signupError !== "" && (
            <p className="my-2 text-red-700">This email is already under use</p>
          )}
          <label className="block mb-4 text-[1.4rem] font-serif ">
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-6 py-2 text-base bg-slate-300"
            value={password}
            onBlur={handlePasswordOnBlur}
            onChange={handlePasswordChange}
          />
          {!isValidPassword && (
            <p className="my-2 text-red-700">Please Enter a valid Password</p>
          )}
          <label className="block mb-4 text-[1.4rem] font-serif ">
            Retype Password:
          </label>
          <input
            type="password"
            placeholder="Re-type your entered password"
            className="w-full px-6 py-2 text-base bg-slate-300"
            value={reTypedPassword}
            onBlur={handleRetypedPasswordOnBlur}
            onChange={handleRetypedPasswordChange}
          />
          {!isValidRetypedPassword && (
            <p className="my-2 text-red-700">
              Please retype your password correctly
            </p>
          )}
          <button
            type="submit"
            className="w-[8rem] mt-6 px-4 py-2 text-[1.4rem]
           bg-cyan-300 rounded-full transition-all scale-125
           hover:scale-100
           "
          >
            SignUp
          </button>
          {loading && <Loader />}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
