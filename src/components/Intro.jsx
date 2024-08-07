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
                className="container text-center px-48 max-lg:px-20 max-[450px]:px-10 h-screen min-w-full content-center absolute my-auto -z-1"
                initial="hidden"
                animate="visible"
                variants={variants}
                layoutScroll="false"
            >
                <div className=" align-middle">
                    <div className="flex text-center justify-center align-middle">
                        <p className="font-bold max-[850px]:text-3xl max-[450px]:text-lg min-[850px]:text-[3.2em]"><T>Hi there</T>, I’m Millah</p>
                        <motion.h1
                        className="my-auto max-[850px]:text-3xl max-[450px]:text-lg min-[850px]:text-[3.2em]"
                            animate={{ rotate:[0, 15, 0], x: [0, 5, 0],  y: [0, -2, 0] }}
                            transition={{
                                delay: delay,
                                duration: 1,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                        >👋</motion.h1>
                        <p className="max-xs:right-8 bottom-2 right-3 text-sm font-sans italic max-md:bg-black max-md:text-xs fixed z-20 max-xs:text-[0.5rem]">Life is like rolling the dice. Keep trying, keep chasing, and get your luck.</p>
                    </div>
                    <h2 className="font-bold text-2xl tracking-widest my-2 max-[850px]:text-sm max-[850px]:my-1 max-[450px]:text-xs max-[350px]:text-[0.6rem] 2xl:text-2xl">Web Developer</h2>
                    <p className="max-[850px]:text-sm max-[450px]:text-xs max-[350px]:text-[0.6rem] 2xl:text-2xl">I <P>build websites</P> both <P>front-end</P> and <P>back-end</P>. I love to use <P>Frameworks</P> and <P>libraries</P>, they provide best practices that allow me to <P>focus</P> on <P>creativity</P> and <P>innovation</P> more, yet reliable and secure. <P>Laravel</P> is my favorite one, but I’m also strongly interested in learning <P>various frameworks and libraries</P>.</p>
                </div>
            </motion.div>
        </>
    )
}

export default Intro;