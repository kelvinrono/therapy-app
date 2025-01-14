import { useState, useContext } from "react";
import {  Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import { authContext } from "../context/AuthContext";
import HashLoader from "react-spinners/HashLoader";

const Login = () => {
  const [formData, setFomrData] = useState({
    email: "",
    password: "",
  });

  const[loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { dispatch } = useContext(authContext)

  const handleChange = (e) => {
    setFomrData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message)
      }

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: result.data,
          token: result.token,
          role: result.role
        }
      })

      console.log(result, 'login data')

      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 sm:text-center">
        <h3 className="text-textColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primary"> Welcome</span> Back{" "}
        </h3>

        <form className="py-4 md:py-0 sm:p-5" onSubmit={submitHandler}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-b border-solid border-primary focus:outline-none focus:border-b-primary text-[16px] leading-7 text-textColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border-b border-solid border-primary focus:outline-none focus:border-b-primary text-[16px] leading-7 text-textColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>

          <div className="mt-7">
            <button type="submit" className="w-full bg-primary text-white text-[18px] leading-[30px] border border-solid border-primary rounded-lg px-4 py-3 hover:text-primary hover:bg-white">
            {loading ? (
                    <HashLoader size={35} color="#ffffff" />
                  ) : (
                    "Login"
                  )}
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account? <Link to='/register' className="text-primary font-medium ml-1">Register</Link>
            </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
