import T from "./texts/Title";
import P from "./texts/Paragraph";
import { DiceIntro } from "./canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { easeIn, motion } from "framer-motion";

const About = () => {
    const variants = {
        hidden: {
            y: 400,
          },
        visible: {
            y: 0,
            transition: {
              delay: 5,
              duration: 0.7,
              ease: "easeIn",
            },
          },
    }
    return(
        <>
            <DiceIntro/>
            <motion.div 
                className="container text-center px-48 h-screen min-w-full content-center absolute my-auto -z-1"
                initial="hidden"
                animate="visible"
                variants={variants}
                layoutScroll="false"
            >
                <div className=" align-middle">
                    <div className="flex text-center justify-center">
                        <h1 className="font-bold"><T>Hi there</T>, I’m Millah</h1>
                        <motion.h1
                            animate={{ rotate:[0, 15, 0], x: [0, 5, 0],  y: [0, -2, 0] }}
                            transition={{
                                delay: 6,
                                duration: 1,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                        >👋</motion.h1>
                        <p className="absolute bottom-2 right-3 text-sm font-sans italic">Life is like rolling the dice. Keep trying, keep chasing, and get your luck.</p>
                    </div>
                    <h2 className="font-bold text-2xl tracking-widest my-2">Web Developer</h2>
                    <p>I <P>build websites</P> both <P>front-end</P> and <P>back-end</P>. I love to use <P>Frameworks</P> and <P>libraries</P>, they provide best practices that allow me to <P>focus</P> on <P>creativity</P> and <P>innovation</P> more, yet reliable and secure. <P>Laravel</P> is my favorite one, but I’m also strongly interested in learning <P>various frameworks and libraries</P>.</p>
                    <p>You can <P>swipe right</P> to find it there!</p>
                </div>
            </motion.div>
            <motion.div 
                className="swipe-right w-fit flex right-0 bottom-100 absolute z-1 h-screen pr-4"                   
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}                   
                transition={{
                    delay: 6
                }}
            >
                <motion.div 
                  className="w-fit self-center pr-3"
                  animate={{ x: [0, 10, 0], }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                ><FontAwesomeIcon icon={faArrowRight} size="xl"/></motion.div>
                <div className="bg-white w-2 h-2 rounded-lg self-center ml-1"/>
            </motion.div>
        </>
    )
}

export default About;