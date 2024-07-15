import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import React, { useState } from "react";
import axios from "axios";
import { ROLES } from "../../constants/Dashboard";
import "react-datepicker/dist/react-datepicker.css";
import { BASE_URL } from "../../Service/helper";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    regnumber: "",
    phone: "",
    role: "",
    photo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(credentials).forEach(key => {
      formData.append(key, credentials[key]);
    });

    axios
      .post(`${BASE_URL}/createUser`, formData)
      .then((res) => {
        console.log(res);

        if (res.data === "Mentor Added") {
          alert("User Register Successfully");
          setCredentials({
            name: "",
            email: "",
            password: "",
            regnumber: "",
            phone: "",
            role: "",
            photo: "",
          });
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onPhotoChange = (e) => {
    setCredentials({ ...credentials, photo: e.target.files[0] });
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white rounded-xl shadow-lg">
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Signup</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={credentials.name}
            onChange={onChange}
          />
        </div>
  
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={credentials.email}
            onChange={onChange}
          />
        </div>
  
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={credentials.phone}
            onChange={onChange}
          />
        </div>
  
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
  
        <div>
          <label htmlFor="regnumber" className="block text-sm font-medium text-gray-700">Registration Number</label>
          <input
            type="text"
            name="regnumber"
            id="regnumber"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={credentials.regnumber}
            onChange={onChange}
          />
        </div>
  
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
          <select
            name="role"
            id="role"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={credentials.role}
            onChange={onChange}
          >
            <option value="">Select Role</option>
            {Object.values(ROLES).map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
  
        <div className="col-span-2">
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo</label>
          <input
            type="file"
            name="photo"
            accept=".png, .jpg, .jpeg"
            onChange={onPhotoChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
          />
        </div>
      </div>
  
      <div className="mt-8 flex justify-end space-x-4">
        <button
          type="button"
          className="text-sm font-semibold text-gray-700 hover:text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  </div>
  
  );
};

export default Signup;
