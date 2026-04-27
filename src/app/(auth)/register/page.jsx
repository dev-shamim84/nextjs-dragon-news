"use client";
import { authClient } from "@/lib/auth-client.";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegisterFunc = async (userData) => {
    const { name, photoUrl, email, password } = userData;
    const { data, error } = await authClient.signUp.email({
      name: name,
      photoUrl: photoUrl,
      email: email,
      password: password,
      callbackURL: "/",
    });
    if (data) {
      alert("register successfully");
      redirect("/login");
    }
    if (error) {
      alert(`${error.message}`);
    }
  };
  return (
    <div>
      <div className="container mx-auto flex justify-center items-center">
        <div className="bg-slate-100 shadow rounded-lg px-10 py-5 mt-20 ">
          <h2 className="font-bold text-2xl mb-5 text-center">Register Now</h2>
          <form onSubmit={handleSubmit(handleRegisterFunc)}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Name</legend>
              <input
                type="text"
                className="input"
                placeholder="Enter your email"
                {...register("name", {
                  required: "Name field is required",
                })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Photo Url</legend>
              <input
                type="text"
                className="input"
                placeholder="Enter your photo url"
                {...register("photoUrl", {
                  required: "PhotoUrl field is required",
                })}
              />
              {errors.photoUrl && (
                <p className="text-red-500">{errors.photoUrl.message}</p>
              )}
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="text"
                className="input"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email field is required",
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password field is required",
                })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </fieldset>
            <button className="btn w-full bg-slate-800 text-white">
              Register
            </button>
          </form>
          <p className="text-center mt-5">
            Already Have An Account ?{" "}
            <Link className="text-purple-500" href="/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
