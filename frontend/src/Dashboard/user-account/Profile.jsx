import {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";

const Profile = ({user}) => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
  });

  useEffect(() => {
    setFormData({name: user.name, email: user.email, photo: user.photo, gender: user.gender})
  },[user])

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInput = async (event) => {
    const file = event.target.files[0];

    const data = await uploadImageToCloudinary(file);

    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}users/${user._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message)
      }

      setLoading(false);
      toast.success(data.message);
      navigate("/users/profile/me");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  
  return (
    <div className="mt-10">
      <form onSubmit={submitHandler}>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full pr-4 py-3 border-b border-solid border-primary focus:outline-none focus:border-b-primary text-[16px] leading-7 text-textColor placeholder:text-textColor cursor-pointer"
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full pr-4 py-3 border-b border-solid border-primary focus:outline-none focus:border-b-primary text-[16px] leading-7 text-textColor placeholder:text-textColor cursor-pointer"
            aria-readOnly
            readOnly
          />
        </div>


        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primary flex items-center justify-center">
              <img
                src={formData.photo}
                alt=""
                className="w-[50px] h-[50px] rounded-full"
              />
            </figure>
          )}

          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              onChange={handleFileInput}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              accept=".jpg, .jpeg, .png"
            />
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-primary text-white font-semibold rounded-lg truncate cursor-pointer"
            >
              {selectedFile ? selectedFile.name : "Upload Photo"}
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            disabled={loading && true}
            type="submit"
            className="w-full bg-primary text-white text-[18px] leading-[30px] border border-solid border-primary rounded-lg px-4 py-3 hover:text-primary hover:bg-white"
          >
            {loading ? <HashLoader size={25} color="#ffffff" /> : "Update Profile"}
          </button>
        </div>


      </form>
    </div>
  );
};

export default Profile;
