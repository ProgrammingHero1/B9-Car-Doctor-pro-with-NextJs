"use client";
import SocialSignin from "@/components/shared/SocialSignin";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const SignUpPage = () => {
  const handleSignUp = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const resp = await fetch("https://car-doctor-pro-nine.vercel.app/signup/api", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    if (resp.status === 200) {
      event.target.reset();
    }
  };

  return (
    <div className="container px-24 mx-auto py-24">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            height="540"
            width="540"
            alt="login image"
          />
        </div>
        <div className="border-2 p-12">
          <h6 className="text-3xl font-semibold text-primary text-center mb-12">
            Sign Up
          </h6>
          <form onSubmit={handleSignUp} action="">
            <label htmlFor="email">Name</label> <br />
            <input
              type="text"
              name="name"
              placeholder="your name"
              className="mt-3 w-full input input-bordered"
            />
            <br /> <br />
            <label htmlFor="email">Email</label> <br />
            <input
              type="text"
              name="email"
              placeholder="your email"
              className="mt-3 w-full input input-bordered"
            />
            <br /> <br />
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              name="password"
              placeholder="your password"
              className="w-full mt-3 input input-bordered"
            />
            <br />
            <button
              type="submit"
              className="w-full btn btn-primary mt-12 text-lg"
            >
              Sign Up
            </button>
          </form>
          <div>
            <h6 className="my-12 text-center">or sign in with</h6>
            <SocialSignin />
            <h6 className="my-12 text-center">
              Already have account ?{" "}
              <Link className="text-primary font-semibold" href={"/login"}>
                Sign In
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
