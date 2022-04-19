import React from "react";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shered/Loading/Loading";
import "./SocialLink.css";

const SocialLink = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  let errorElement;
  if (loading || loading1) {
    return <Loading></Loading>;
  }
  if (error || error1) {
    errorElement = (
      <div>
        <p>
          Error: {error?.message} {error1?.message}
        </p>
      </div>
    );
  }

  if (user || user1) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="orHr w-50"></div>
        <p className="mt-3 px-2">or</p>
        <div style={{ height: "1px" }} className="orHr w-50"></div>
      </div>
      <div>
        {errorElement}
        <button
          onClick={() => signInWithGoogle()}
          className="btn w-50 bg-info p-3 my-2 text-white d-block mx-auto"
        >
          <img
            style={{ width: "35px" }}
            className=""
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt=""
          />
          <span className="mx-2">Google Sign in</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn w-50 bg-info p-3 my-2 text-white d-block mx-auto"
        >
          <img
            style={{ width: "35px" }}
            className=""
            src="https://pngimg.com/uploads/github/github_PNG88.png"
            alt=""
          />
          <span className="mx-2">Github Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLink;
