"use client"

import React, { useState } from 'react'
import emailjs from "emailjs-com";
import AnimatedContainer from '../AnimatedContainer';

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });
  const [formData, setFormData] = useState({
    username: "",
    message: "",
    email: "",
  });
  const { username, message, email } = formData;
  const handleChange = ({ e }: { e: any }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = ({ e }: { e: any }) => {
    e.preventDefault();
    setLoading(true);
    if (
      message.trim().length === 0 ||
      email.trim().length === 0 ||
      username.trim().length === 0
    ) {
      setToast({ message: "Please specify all fields", type: "error" });
      setTimeout(() => {
        setToast({ message: "", type: "" });
      }, 3000);
    } else {
      emailjs
        .sendForm(
          "service_dt44vch",
          "template_alquazl",
          "#form",
          "G44OJGfr55eyhm4sM"
        )
        .then(
          (result) => {
            setToast({ message: "Email sent successfully!", type: "success" });
            setTimeout(() => {
              setToast({ message: "", type: "" });
            }, 3000);
          },
          (error) => {
            setToast({ message: "Error sending email!", type: "error" });
            setTimeout(() => {
              setToast({ message: "", type: "" });
            }, 3000);
          }
        );
      setFormData({ username: "", message: "", email: "" });
    }
    setFormData({ username: "", message: "", email: "" });
    setLoading(false);
  };

  const Toast = ({ message, type }: any) => (
    <div className='fixed w-full top-8 left-0  flex items-center justify-center mx-auto'>
      <AnimatedContainer slideDown className={`${type === 'error' ? 'bg-red-400' : ' bg-green-400'} shadow-md shadow-black px-8 py-2  text-center w-fit rounded-lg text-black`}>
        {message}
      </AnimatedContainer>
    </div>
  )

  return (
    <div className='flex flex-col gap-4 pt-6 pb-10'>
      <div className='fixed w-full top-4 left-0  flex items-center justify-center mx-auto'>
        {toast.message && <Toast message={toast.message} type={toast.type} />
        }
      </div>
      <h2 className='text-slate-200 text-2xl'>Reach out to me</h2>
      <span>
        For any inquiries, project discussions, or simply to connect, please feel free to reach out. My inbox is open, and I look forward to engaging with you
      </span>
      <form className="w-full my-4 flex flex-col gap-4" id="form">
        <div className='flex flex-col md:flex-row gap-2 w-full '>
          <div className="w-full flex flex-col gap-2">
            <label className="">Your email</label>
            <input type="email" id="email" name="email" className="text-gray-900 text-sm rounded-lg block w-full p-2.5" onChange={(e) => handleChange({ e })} required />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="">Name</label>
            <input type="text" name="username" className="text-gray-900 text-sm rounded-lg block w-full p-2.5" onChange={(e) => handleChange({ e })} required />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="">Message</label>
          <input type="text" name="message" className="text-gray-900 text-sm rounded-lg block w-full p-2.5" onChange={(e) => handleChange({ e })} required />
        </div>
      </form>
      <button onClick={(e) => sendEmail({ e })} type="submit" className="my-2 w-fit text-black bg-cyan-500 hover:bg-cyan-200 transition-all font-medium rounded-lg px-5 py-2 ">
        {!loading ? 'Send' : <span className='animate-spin'></span>}
      </button>
    </div>
  )
}

export default ContactSection