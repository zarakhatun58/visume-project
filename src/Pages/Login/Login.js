import React from "react";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router";
import { useLocation } from "react-router";

const Login = () => {
  const {
    signInWithGoogle,
    user,
    setUser,
    saveUser,
    logOut,
    setIsLoading,
    handleEmailLogin,
  } = useAuth();
  const { handleSubmit, reset } = useForm();
  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        setIsLoading(true);
        setUser(res.user);
        saveUser(user.email, user.displayName, "PUT");
        history.push(url);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleLogOut = () => {
    setIsLoading(true);
    logOut()
      .then((res) => {
        setUser({});
        history.push("/home");
        setIsLoading(false);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    handleEmailLogin(data.email, data.password);
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-4">
          <label class="block text-md font-light mb-2" for="username">
            Username
          </label>
          <input
            class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="username"
            id=""
            placeholder="Username"
          />
        </div>
        <div class="mb-4">
          <label class="block text-md font-light mb-2" for="password">
            Password
          </label>
          <input
            class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id=""
            placeholder="Password"
          />
        </div>

        <div class="flex items-center justify-between mb-5">
          <Link to="/login">
            {" "}
            <button
              onClick={handleGoogleLogin}
              class="bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>{" "}
          </Link>
          <Link to="/signUp">
            <button
              onClick={handleLogOut}
              class="bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Log Out
            </button>{" "}
          </Link>
        </div>
        <p class="text-center text-md font-light">
          Don't have an account?{" "}
          <Link to="/signUp" class="font-light text-md text-indigo-600">
            Sign Up
          </Link>
          {user?.email && <alert severity="success">Login successfully!</alert>}
        </p>
      </form>
    </>
  );
};
export default Login;
