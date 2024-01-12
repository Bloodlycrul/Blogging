import { useState } from "react";

const SignLogin = () => {
  const [statusLog, setStatusLog] = useState(true);

  const moveSignIn = () => {
    setStatusLog(!statusLog);
  };

  return (
    <div className="m-auto text-center">
      {/* esline-disable-next-line */}
      <h1 className="text-[20px] mb-[30px]">
        Let&apos;s See the World From Different prespretive
      </h1>
      <div className="form-input ">
          {statusLog ? (
            <input type="text" name="" id="" placeholder="Enter Your Name" />
          ) : null}
          <input type="text" placeholder="Enter Your Email" />
          <input type="password" name="" id="" placeholder="Your Password" />
          <button className="my-[30px] border border-x-white px-[40px] py-[10px] rounded-xl">
            {statusLog ? <p>Sign Up</p> : <p>Sign In</p>}
          </button>
          <p className="cursor-pointer" onClick={moveSignIn}>
            {statusLog ? <p>Already User Sign In</p> : <p>Sign Up</p>}
          </p>
      </div>
    </div>
  );
};

export default SignLogin;
