import React, { useRef, useState } from "react";
import img from "../assets/images/contact.svg";
import emailjs from "@emailjs/browser";

const Contact = ({ contactRef }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [msg, setMsg] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [numError, setNumError] = useState(false);
  const form = useRef();

  const nameHandle = (e) => {
    setName(e.target.value);
  };

  const numHandle = (e) => {
    setNum(e.target.value);
  };

  const msgHandle = (e) => {
    setMsg(e.target.value);
  };

  const mailHandle = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r0ie7me",
        "template_yew3w1k",
        form.current,
        "x6VAdV5KhZdqNkBfX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setNum("");
          setMsg("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!validEmailRegex.test(email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }
  
    const validNumRegex = /^\d{10}$/;
    if (!validNumRegex.test(num)) {
      setNumError(true);
      return;
    } else {
      setNumError(false);
    }

    sendEmail(e);
  };

  return (
    <div className="flex flex-col pt-[10vh] sm:pt-0" ref={contactRef}>
      <p className="py-10 px-5 text-4xl flex w-full items-center justify-center text-yellow-500 text-center">
        Write me a message !
      </p>
      <div className="flex flex-row items-center justify-center sm:flex-col">
        <div className="w-[50vw] p-5">
          <img src={img} alt="" />
        </div>
        <div className="w-[50vw] p-5 sm:w-full">
          <form ref={form} onSubmit={handleSubmit} className="space-y-3">
            <div className="flex ring-yellow-700 ring-1 p-1 rounded-md w-full">
              <input
                name="from_name"
                type="text"
                value={name}
                className="bg-slate-800 outline-none rounded-md backdrop-blur-sm p-2 w-full md:text-sm"
                placeholder="Name"
                onChange={nameHandle}
                required
              />
            </div>
            <div
              className={`flex ring-1 p-1 rounded-md w-full relative ${
                emailError ? "ring-red-500" : "ring-yellow-700"
              }`}
            >
              <input
                name="from_email"
                type="text"
                value={email}
                className="bg-slate-800 outline-none rounded-md backdrop-blur-sm p-2 w-full md:text-sm"
                placeholder="E-Mail"
                onChange={mailHandle}
                required
              />
            </div>
            <div
              className={`flex ring-1 p-1 rounded-md w-full ${
                numError ? "ring-red-500" : "ring-yellow-700"
              }`}
            >
              <input
                name="from_contact"
                type="text"
                value={num}
                className="bg-slate-800 outline-none rounded-md backdrop-blur-sm p-2 w-full md:text-sm"
                placeholder="Contact Number"
                onChange={numHandle}
                required
              />
            </div>
            <div className="flex ring-yellow-700 ring-1 p-1 rounded-md w-full">
              <input
                name="message"
                type="text"
                value={msg}
                className="bg-slate-800 outline-none rounded-md backdrop-blur-sm p-2 w-full md:text-sm"
                placeholder="Message"
                onChange={msgHandle}
                required
              />
            </div>
            <button
              type="submit"
              className="text-center rounded-sm text-yellow-700 backdrop-blur-xl hover:text-yellow-500 p-1 w-full md:text-sm ring-yellow-700 ring-1"
             >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
