import { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Home/Button";
import { logo } from "../../assets/Home";
import { BASE_URL } from "../../../src/Service/helper";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(`${BASE_URL}/login`, credentials);
      dispatch(hideLoading());
      if (response.data.success) {
        localStorage.setItem("token", response.data.authToken);
        message.success("Login successfully!!!");
        navigate("/Dashboard");
      } else {
        message.error("Login failed");
      }
    } catch (err) {
      console.log(err);
      message.error("Login failed");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgotPassword");
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-900"
        >
          <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
          Anokhi पहल
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 border-double border-4 border-cyan-500">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={credentials.email}
                  onChange={onChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={credentials.password}
                  onChange={onChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <Button
                text="Sign in"
                styles="w-full bg-primary-600"
                func={handleSubmit}
              />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Forgot Password?{" "}
                <a
                  href="#"
                  onClick={handleForgotPassword}
                  className="font-medium hover:underline text-cyan-800"
                >
                  Click here to reset
                </a>
              </p>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet?{" "}
                <a
                  href="/signup"
                  className="font-medium hover:underline text-cyan-800"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
