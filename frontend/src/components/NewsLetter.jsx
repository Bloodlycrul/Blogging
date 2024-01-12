import { useRef, useState } from "react";

const NewsLetter = () => {
  const [status, setStatus] = useState();
  const email = useRef();
  let timeout;

  const handleEmail = async () => {
    try {
      if (timeout) clearTimeout(timeout);
      if (email.current.value) {
        let userEmail = email.current.value;
        const emailSubmit = await fetch("http://localhost:3000/newsSubscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
          }),
        });

        if (emailSubmit) {
          email.current.value = "";
          console.log(emailSubmit);
          if (emailSubmit.status === 200) {
            setStatus("Thanks for Subscribing");
            timeout = setTimeout(function () {
              setStatus("");
            }, 3000);
          }
        } else {
          throw new Error("Please enter your email address");
        }
      } else {
        setStatus("Please enter your email address");
        timeout = setTimeout(function () {
          setStatus("");
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="m-auto w-[50%] text-center font-Inter">
      <h1>NewsLetter</h1>
      <h2 className="text-[48px] font-extrabold mt-[20px]">
        Stories and interviews
      </h2>
      <p className="text-slate-400 mb-[20px]">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>
      <div className="">
        <input
          ref={email}
          className="border w-[60%] p-[10px] rounded-lg text-black"
          type="text"
          placeholder="Enter you email"
        />
        <button
          onClick={handleEmail}
          className="ml-[10px] border p-[10px] rounded-lg bg-[#7F56D9] text-white"
        >
          Subscribe
        </button>
      </div>
      <div className="my-[10px]">
        {status && (
          <div>
            <p>{status}</p>
          </div>
        )}
      </div>
      <p className="my-[30px] text-slate-400">
        We care about your data in our privacy policy
      </p>
    </div>
  );
};

export default NewsLetter;
