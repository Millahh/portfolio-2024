/* eslint-disable react/prop-types */
import T from "./texts/Title";
import P from "./texts/Paragraph";
import { motion } from "framer-motion";

const Intro = ({delay}) => {
    const variants = {
        hidden: {
            y:  window.innerHeight,
          },
        visible: {
            y: 0,
            transition: {
              delay: delay,
              duration: 0.7,
              ease: "easeIn",
            },
          },
    }
    return(
        <>
            <motion.div 
                className="container text-center px-48 max-lg:px-20 max-[450px]:px-10 h-screen min-w-full content-center absolute my-auto z-20 flex items-center"
                initial="hidden"
                animate="visible"
                variants={variants}
                layoutScroll="false"
            >
                <div className=" align-middle">
                    <div className="flex text-center justify-center align-middle">
                        <p className="font-bold judul-h1"><T>Hi there</T>, I’m Millah</p>
                        <motion.h1
                        className="my-auto judul-h1"
                            animate={{ rotate:[0, 15, 0], x: [0, 5, 0],  y: [0, -2, 0] }}
                            transition={{
                                delay: delay,
                                duration: 1,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                        >👋</motion.h1>
                        <p className="custom-bottom-right font-sans max-[900px]:hidden italic fixed z-20 max-xs:text-[0.5rem]">Life is like rolling the dice. Keep trying, keep chasing, and get your luck.</p>
                    </div>
                    <h2 className="font-bold tracking-widest -mt-3 mb-1 judul-h2 max-[900px]:my-2 max-[850px]:my-1 max-[450px]:text-xs max-[350px]:text-[0.6rem] max-[900px]:text-2xl">Web Developer</h2>
                    <p className="description max-[900px]:text-2xl max-[450px]:text-xs max-[350px]:text-[0.6rem]">I <P>build websites</P> both <P>front-end</P> and <P>back-end</P>. I love to use <P>Frameworks</P> and <P>libraries</P>, they provide best practices that allow me to <P>focus</P> on <P>creativity</P> and <P>innovation</P> more, yet reliable and secure. <P>Laravel</P> is my favorite one, but I’m also strongly interested in learning <P>various frameworks and libraries</P>.</p>
                </div>
            </motion.div>
        </>
    )
}

export default Intro;