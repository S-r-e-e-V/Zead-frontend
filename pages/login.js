import React from 'react';
import Link from 'next/link';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const notify = () => toast.success('Your account is  verified ');

  return (
    <div>
      <div className="edit_profile register login pt-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-5">
              <div className="right_part space-y-20">
                <h1 className="color_white text-center"> Welcome to Zead </h1>
                <p className="color_white text-center pb-3" style={{color: 'white !important'}}>
                  Don't have an account yet?
                  <Link href="/register"><a> Register </a></Link>
                </p>
                <div className="box edit_box w-full space-y-20 rounded-3">
                  <div className="space-y-10">
                    <span className="nameInput">Email </span>
                    <div className="confirm">
                      <input
                        type="text"
                        className="form-control rounded-3 d-block p-3 w-full"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                  <div className="space-y-10 pb-3">
                    <span className="nameInput">Password</span>
                    <div className="confirm">
                      <input
                        type="password"
                        className="form-control rounded-3 d-block p-3 w-full"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>
                  <Link href="edit-profile"><a className="rounded-3 d-block text-center bg-primary text-white p-3 w-full">
                    Login to your account
                  </a></Link>
                  <ToastContainer position="bottom-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
