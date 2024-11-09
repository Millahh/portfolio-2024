import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Linkedin, Github, Insta } from "../assets";
import { variants } from "../constants";

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
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={variants}
      layoutScroll="false"
      className="absolute z-20 overflow-y-auto h-screen w-screen xs:pt-10 max-xs:pt-0">
      <div className='contact max-[1280px]:p-8 max-[1280px]:mt-0 rounded-2xl'>
        <form ref={formRef} onSubmit={handleSubmit} className=' space-y-2'>
          <p className=" text-white max-[900px]:text-lg description font-bold mb-3">I&apos;m looking forward to hearing from you!</p>
          <div className="2xl:inline-block 2xl:space-x-0 flex flex-row space-x-10 w-full">
            <div className=" 2xl:basis-full basis-1/2">
              <label className=''>
                  <p className='text-white max-[1280px]:text-xs text-h6 mt-2 mb-1 font-semibold opacity-80'>Your Name</p>
                  <input
                      height={40}
                      type='text'
                      name='name'
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your good name?"
                      className=' w-full bg-tertiary bg-opacity-75 py-3 px-4 placeholder:text-secondary max-[1280px]:placeholder:text-sm text-white rounded-lg outline-none border-none font-medium'
                  />
              </label>
            </div>
            <div className=" 2xl:basis-full basis-1/2 ">
              <label className=''>
                  <p className='text-white max-[1280px]:text-xs text-h6 mt-2 mb-1 font-semibold  opacity-80'>Your email</p>
                  <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className='w-full bg-tertiary bg-opacity-75 py-3 px-4 placeholder:text-secondary placeholder:text-sm text-white rounded-lg outline-none border-none font-medium'
                  />
              </label>
            </div>
          </div>
          <label className=''>
            <p className='text-white max-[1280px]:text-xs text-h6 mt-2 mb-1 font-semibold  opacity-80'>Your Message</p>
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
        <div className="connect w-fit mt-10 space-y-1">
          <p className=" max-[1280px]:text-xs text-h6 text-white my-auto font-bold">Let&apos;s connect!</p>
          <div className="flex mb-1 justify-between">
            <a href="https://github.com/Millahh" target="_blank" className="github h-7 my-auto"><img src={Github} className=" h-7 my-auto"/></a>
            <a href="https://linkedin.com/in/munirotul-millah" target="_blank" className="linkedin h-[1.5rem] my-auto mr-1 ml-[0.1rem]"><img src={Linkedin} className=" h-[1.5rem] my-auto"/></a>
            <a href="https://instagram.com/mmillah_" target="_blank" className="insta h-6 my-auto"><img src={Insta} className=" h-6 my-auto"/></a>
          </div>
        </div>
      </div>
      <p className="custom-bottom-right font-sans italic max-[900px]:hidden fixed z-20">The bad news is that the dice may be unpredictable, but the good news is that the dice are in your hand. </p>
    </motion.div>
  );
};

export default Contact;