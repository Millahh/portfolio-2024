import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Linkedin, Github } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_millah'snewjob",
        "template_6tc17f6",
        {
          from_name: form.name,
          to_name: "Munirotul Millah",
          from_email: form.email,
          to_email: "millahmillah37@gmail.com",
          message: form.message,
        },
        "VR0Lpl2-IIjII9SGq"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="absolute z-10 overflow-y-auto h-screen w-screen pt-10">
      <div className=' p-8 rounded-2xl'>
        <div className=" flex flex-row space-x-10">
            <div className=" basis-3/4">
                <p className="text-white text-lg font-bold mb-4">I&apos;m looking forward to hearing from you!</p>
                <form ref={formRef} onSubmit={handleSubmit} className=' space-y-2'>
                    <label className=''>
                        <p className='text-white text-xs mt-2 mb-1 font-semibold opacity-80'>Your Name</p>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className=' w-full bg-tertiary bg-opacity-75 py-3 px-4 placeholder:text-secondary placeholder:text-sm text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className=''>
                        <p className='text-white text-xs mt-2 mb-1 font-semibold  opacity-80'>Your email</p>
                        <input
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder="What's your email?"
                        className='w-full bg-tertiary bg-opacity-75 py-3 px-4 placeholder:text-secondary placeholder:text-sm text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className=''>
                        <p className='text-white text-xs mt-2 mb-1 font-semibold  opacity-80'>Your Message</p>
                        <textarea
                        rows={6}
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                        placeholder='I&apos;d love to discuss an opportunity with you.'
                        className='w-full bg-tertiary bg-opacity-75 py-3 px-4 placeholder:text-secondary placeholder:text-sm text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <button type='submit' className='bg-tertiary bg-opacity-75 py-2 px-7 rounded-md outline-none w-fit text-primary text-sm font-bold shadow-md hover:bg-opacity-90'>
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
            <div className=" basis-1/4 m-auto">
                <h1 className=" text-[2rem] font-extrabold text-center text-primary">Feel free to</h1>
                <h1 className=" text-[1.5rem] font-bold text-center text-white">Reach out to me on</h1>
                <div className=" flex w-fit mx-auto mt-2 space-x-2">
                    <img src={Github} className=" h-14 my-auto"/>
                    <img src={Linkedin} className=" h-[3.1rem] my-auto"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;