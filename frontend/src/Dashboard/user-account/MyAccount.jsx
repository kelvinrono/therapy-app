import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import Profile from "./Profile";
import MyBooking from "./MyBooking";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loaders/Loading";
import Error from "../../components/Error/Error";


const MyAccount = () => {
  const [tab, setTab] = useState("bookings");

  const { dispatch } = useContext(authContext);

  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}users/profile/me`);

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}

        {error && !loading && <Error errMessage={error} />}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primary">
                  <img
                    src={userData.photo}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </figure>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-textColor font-bold">
                  {userData.name}
                </h3>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  {userData.email}
                </p>
              </div>

              <div className="mt-[50px] md:mt-[100px]">
                <button
                  onClick={logoutHandler}
                  className="w-full bg-textColor text-[#fff] p-3 text-[16px] leading-7 rounded-md"
                >
                  Logout
                </button>
                <button className="w-full bg-red-600 mt-4 text-[#fff]  p-3 text-[16px] leading-7 rounded-md">
                  Delete Account
                </button>
              </div>
            </div>

            <div className="md:col-span-2 md:px-[30px]">
              <div>
                <button
                  onClick={() => setTab("bookings")}
                  className={`${
                    tab === "bookings" && "bg-primary text-white font-normal"
                  } p-2 mr-5 px-5 rounded-md text-textColor font-semibold text-[16px] leading-7
    border border-solid border-primary`}
                >
                  My Bookings
                </button>
                <button
                  onClick={() => setTab("settings")}
                  className={`${
                    tab === "settings" && "bg-primary text-white font-normal"
                  } py-2 px-5 rounded-md text-textColor font-semibold text-[16px] leading-7
    border border-solid border-primary`}
                >
                  Profile Settings
                </button>
              </div>

              {tab === "bookings" && <MyBooking />}
              {tab === "settings" && <Profile user={userData} />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyAccount;
