import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input } from './index';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ❌ Your code was incorrect here  
  // You wrote: const [register, handleSubmit] = useForm();
  // ✔ Correct syntax:
  const { register, handleSubmit } = useForm();

  const [error, setError] = useState("");

  const signUp = async (data) => {
    setError("");
    try {
      const user = await authService.createAccount(data);

      if (user) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          dispatch(login(currentUser));
          navigate("/");
        }
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">

        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">myLogo</span>
        </div>

        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>

        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link to="/login" className="font-medium text-primary hover:underline">
            Sign In
          </Link>
        </p>

        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(signUp)} className="mt-8">
          <div className="space-y-5">

            {/* Name */}
            <Input
              label="Full Name:"
              placeholder="Enter Your Name"
              {...register("name", { required: true })}
            />

            {/* Email */}
            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                validate: (value) =>
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                  "Invalid email address",
              })}
            />

            {/* Password */}
            <Input
              label="Password:"
              type="password"
              placeholder="Enter Your Password"
              {...register("password", { required: true })}
            />

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default Signup;