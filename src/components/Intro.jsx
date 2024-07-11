import T from "./texts/Title";
import P from "./texts/Paragraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const About = () => {
    return(
        <>
            <div className="container text-center px-48 h-screen min-w-full content-center absolute my-auto -z-1">
                <div className=" align-middle">
                    <h1 className="font-bold"><T>Hi there</T>, i’m Millah👋</h1>
                    <h2 className="font-bold text-2xl tracking-widest my-2">Web Developer</h2>
                    <p>I <P>build websites</P> both <P>front-end</P> and <P>back-end</P>. I love to use <P>Frameworks</P> and <P>libraries</P>, they provide best practices that allow me to <P>focus</P> on <P>creativity</P> and <P>innovation</P> more, yet reliable and secure. <P>Laravel</P> is my favorite one, but I’m also strongly interested in learning <P>various frameworks and libraries</P>. </p>
                    <p>You can <P>swipe right to find it there!</P></p>
                </div>
            </div>
            <div className="swipe-right w-fit flex right-0 bottom-100 absolute z-1 h-screen pr-4">
                <motion.div 
                  className="w-fit self-center pr-3"
                  animate={{ x: [0, 10, 0], }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                    <FontAwesomeIcon icon={faArrowRight} size="xl"/>
                </motion.div>
                <motion.div className="bg-white w-2 h-2 rounded-lg self-center ml-1"/>
            </div>
        </>
    )
}

export default About;