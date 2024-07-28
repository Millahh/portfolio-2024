/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import T from "./texts/Title";
import P from "./texts/Paragraph";
import Hobbies from "./canvas/Hobbies";
import { DiceIntro } from "./canvas";


const FunFacts = () => {
    return(
        <>
            <Hobbies />
            <div className="container text-center px-48 max-[850px]:px-20 h-screen m-auto content-center z-99">
                <div className="align-middle">
                    <p className="font-bold mb-2 max-[850px]:text-xl"><T>Fun</T> facts</p>
                    <p className=" max-[850px]:text-sm">I sip <P>coffee</P> whenever my <P>code</P> doesn’t work well and sometimes go for a little <P>walk</P>. <br></br>I like to <P>dance</P> when im bored. I love <P>singing</P> (i literally singing <P>everyday</P>), sometimes i <P>recorded</P> it and <P>posted</P> it on my Insta. I hate <P>washing dishes</P> (<P>i do</P> wash my dishes everyday). My favorite color is <P>yellow</P>, <P>not purple</P>. Last, i hate <P>house lizard</P> more than <P>cockroach</P>.</p>
                </div>
            </div>
        </>
    )
}

export default FunFacts;