import T from "./texts/Title";
import P from "./texts/Paragraph";

const About = () => {
    return(
        <div className="container">
            <h1><T>Hi there</T>, i’m Millah 👋</h1>
            <h2>Web Developer</h2>
            <p>I <P>build websites</P> both <P>front-end</P> and <P>back-end</P>. I love to use <P>Frameworks</P> and <P>libraries</P>, they provide best practices that allow me to <P>focus</P> on <P>creativity</P> and <P>innovation</P> more, yet reliable and secure. <P>Laravel</P> is my favorite one, but I’m also strongly interested in learning <P>various frameworks and libraries</P>.  You can <P>swipe right to find it there!</P></p>
        </div>
    )
}

export default About;