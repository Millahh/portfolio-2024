/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import T from "./texts/Title";
import P from "./texts/Paragraph";
import { motion } from "framer-motion";
import { variants } from "../constants";

const FunFacts = () => {
    return(
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            layoutScroll="false"
            className=" h-screen absolute z-10">
            <div className="funfacts text-center max-[850px]:px-20 max-[450px]:px-10 h-screen m-auto content-center flex items-center">
                <div className="align-middle">
                    <p className="font-bold mb-2 judul-h1"><T>Fun</T> facts</p>
                    <p className="max-[350px]:text-[0.6rem] description">I sip <P>coffee</P> whenever my <P>code</P> doesn’t work well and sometimes go for a little <P>walk</P>. <br></br>I like to <P>dance</P> when I'm bored. I love <P>singing</P> (I literally sing <P>everyday</P>), sometimes I <P>record</P> it and <P>post</P> it on my Insta. I hate <P>washing dishes</P> (<P>I do</P> wash my dishes everyday). My favorite color is <P>yellow</P>, <P>not purple</P>. Last, I hate <P>house lizards</P> more than <P>cockroaches</P>.</p>
                </div>
            </div>
            <p className="custom-bottom-right font-sans italic max-md:hidden max-xs:text-[0.5rem] fixed z-20">Every roll counts. </p>
        </motion.div>
    )
}

export default FunFacts;