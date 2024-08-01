import React, { useState } from "react";


const Login = () => {
  const [isUserExist, setIsUserExist] = useState(false);
  return (
    <div className="w-full min-h-screen relative pt-[15vh]  ">
      <div className="px-4 text-center">
        {!isUserExist ? <SignIn /> : <SignUp />}
        <div>
          {!isUserExist ? (
            <div className="text-[0.8rem] ">
              Don't have an account ?{" "}
              <span
                className=" underline font-semibold cursor-pointer "
                onClick={() => setIsUserExist(true)}
              >
                SignUp
              </span>
            </div>
          ) : (
            <div className=" text-[0.8rem]   ">
              Already have an account ?{" "}
              <span
                className=" underline cursor-pointer  semibold"
                onClick={() => setIsUserExist(false)}
              >
                SignIn
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

const SignIn = () => {
  return (
    <>
      <div className="text-center flex flex-col  items-center my-3 ">
        <div className=" grid w-[26rem] py-8 px-6 mt-4 gap-2  shadow-lg shadow-gray-100 rounded-xl ">
          <h1 className="text-3xl font-medium text-center mb-4 ">
            LOGIN WITH OTP
          </h1>
          <label htmlFor="phone" className="text-[0.9rem]">
            Please enter your phone number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your Phone no."
            className="w-[23rem] border-gray-300 border-[1px] rounded-lg px-4 py-3  focus-visible:outline-none focus-within:text-gray-700 placeholder:text-gray-400  
            placeholder:text-[0.9rem]
            "
          />

          <button
            type="button"
            className=" w-[50%] mx-auto text-[0.9rem] p-2 border-[2px] text-white bg-black rounded-lg mt-4 hover:border hover:bg-black transition-all ease-linear "
          >
            Request for OTP
          </button>
          <span className="text-[0.8rem] ">
            A 6-digit OTP is send to your number{" "}
          </span>
          <span className="break-before-avoid my-2 ">
            Or continue with the Email
          </span>

          <button
            type="button"
            className=" w-[50%] mx-auto text-[0.9rem] p-2 border-[1px] border-black rounded-lg hover:shadow-xl shadow-gray-200 flex justify-center  gap-1 
            
            "
          >
            Email   
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

const SignUp = () => {
  return (
    <>
         <div className="text-center flex flex-col  items-center my-3 ">
        <div className=" grid w-[26rem] py-8 px-6 mt-4 gap-2  shadow-lg shadow-gray-100 rounded-xl ">
          <h1 className="text-3xl font-medium text-center mb-4 ">
            SIGNIN WITH OTP
          </h1>

<label htmlFor="phone" className="text-[0.9rem]">
            Please enter your Name
          </label>
<div className=" grid grid-cols-2 gap-3 ">
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="First Name"
            className="w-full border-gray-300 border-[1px] rounded-lg px-4 py-3  focus-visible:outline-none focus-within:text-gray-700 placeholder:text-gray-400  
            placeholder:text-[0.9rem]
            "
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Last Name"
            className="w-full border-gray-300 border-[1px] rounded-lg px-4 py-3  focus-visible:outline-none focus-within:text-gray-700 placeholder:text-gray-400  
            placeholder:text-[0.9rem]
            "
          />
</div>

          <label htmlFor="phone" className="text-[0.9rem]">
            Please enter your phone number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your Phone no."
            className="w-[23rem] border-gray-300 border-[1px] rounded-lg px-4 py-3  focus-visible:outline-none focus-within:text-gray-700 placeholder:text-gray-400  
            placeholder:text-[0.9rem]
            "
          />

          <button
            type="button"
            className=" w-[50%] mx-auto text-[0.9rem] p-2 border-[2px] text-white bg-black rounded-lg mt-4 hover:border hover:bg-black transition-all ease-linear "
          >
            Request for OTP
          </button>
          <span className="text-[0.8rem] ">
            A 6-digit OTP is send to your number{" "}
          </span>
          <span className="break-before-avoid my-2 ">
            Or continue with the Email
          </span>

          <button
            type="button"
            className=" w-[50%] mx-auto text-[0.9rem] p-2 border-[1px] border-black rounded-lg hover:shadow-xl shadow-gray-200 flex justify-center  gap-1 
            
            "
          >
            Email   
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
