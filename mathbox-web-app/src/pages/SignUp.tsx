import * as React from "react";
import { Button } from "../components/Button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ReactComponent as Google } from "../assets/img/google.svg";

export default function SignUp() {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values: any) => console.log(values);
  return (
    <div className="bg-gray-100 p-4 pt-40 h-screen justify-center align-middle flex">
      <div className="flex flex-col w-full max-w-md">
        <h1 className="text-5xl text-gray-800 font-bold text-center">
          Create your Account
        </h1>
        <div className="flex flex-col justify-center mt-10">
          <form
            className="m-auto flex flex-col w-full p-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <span className="mb-1 text-center text-red-500">
              {errors.email && errors.email.message}
            </span>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="mb-3 text-base font-normal py-1 px-4 rounded-lg border-2 border-gray-400 shadow-lg focus:outline-none focus:shadow-outline focus:border-opacity-0 hover:border-opacity-0 hover:shadow-outline placeholder-gray-400"
              ref={register({
                required: "email required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            <span className="mb-1 text-center text-red-500">
              {errors.password && errors.password.message}
            </span>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="mb-3 text-base font-normal py-1 px-4 rounded-lg border-2 border-gray-400 shadow-lg focus:outline-none focus:shadow-outline focus:border-opacity-0 hover:border-opacity-0 hover:shadow-outline placeholder-gray-400"
              autoComplete="bg-gray-100 shadow-outline"
              ref={register({
                required: "password required",
              })}
            />
            <Button className="mt-3 bg-gray-800 text-gray-100">Sign Up</Button>
            <label className="mt-1 text-gray-500 text-center">
              already have an account?&nbsp;
              <Link className="underline text-gray-700" to="/signin">
                Sign In here.
              </Link>
            </label>
          </form>
          <span className="text-center text-gray-500">or</span>
          <div className="m-auto flex flex-col w-full p-4">
            <Button className="flex flex-row justify-center">
              <span className="ml-4">
                <Google className="w-5 h-5 mt-2 mr-4"></Google>
              </span>
              <span>Sign In With Google</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
