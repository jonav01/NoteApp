import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ErrorContainer from "./ErrorContainer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/userActions";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setisValidEmail] = useState(true);
  const [isValidPassword, setisValidPassword] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [userInfo]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setisValidEmail(true);
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
  const handlePasswordOnBlur = () => {
    if (!password.length > 5 || password === "") {
      console.log(password.length);
      setisValidPassword(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div className="block align-middle justify-center w-screen h-screen bgcustomImage p-[10rem]">
      <div className="block bg-slate-100 px-40 py-12 m-auto w-1/2">
        <h1 className="text-xl font-semibold mb-12">Login Here</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4 text-[1.4rem] font-serif">E-mail:</label>
          <input
            type="text"
            placeholder="Enter email"
            className="w-full px-6 py-2 mb-4 text-base bg-slate-300"
            value={email}
            onBlur={handleEmailOnBlur}
            onChange={handleEmailChange}
          />
          {!isValidEmail && (
            <p className="my-2 text-red-700">Please Enter a valid email</p>
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
          {loading ? (
            <Loader />
          ) : (
            <button
              type="submit"
              className="w-[8rem] mt-6 px-4 py-2 text-[1.4rem]
           bg-cyan-300 rounded-full transition-all scale-125
           hover:scale-100
           "
            >
              Log In
            </button>
          )}
        </form>
        {error !== "" && <ErrorContainer err={error} />}
      </div>
    </div>
  );
}

export default Login;
