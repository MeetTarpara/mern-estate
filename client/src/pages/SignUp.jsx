import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import OAuth from "../components/OAuth";


export default function SignUp() {
  //FOR Data change
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  //for not reload when subbmit pressed
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const res = await fetch("/api/auth/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });
  //   const data = await res.json();
  //   if (data.success == false) {
  //     setErrors(data.errors);
  //     setLoading(false);
  //     return;
  //   }
  //   setLoading(false);
  //   console.log(data);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success == false) {
        setLoading(false);
        setErrors(data.error);
        return;
      }
      setLoading(false);
      setError(null);
      console.log(data);
      navigate('/sign-in');
    } 
    catch (error) {
      setLoading(false);
      setError(error.message);
    }
    
  };


  //   e.preventDefault();
  //   try {
  //     setLoading(true);
  //     const res = await fetch('/api/auth/signup', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //     if (data.success === false) {
  //       setLoading(false);
  //       setError(data.message);
  //       return;
  //     }
  //     setLoading(false);
  //     setError(null);
  //     navigate('/sign-in');
  //   } catch (error) {
  //     setLoading(false);
  //     setError(error.message);
  //   }
  // };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className=" text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="userName"
          onChange={handleChange}
        ></input>

        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        ></input>

        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        ></input>

        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          onClick={handleSubmit}
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <OAuth/>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Already have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
