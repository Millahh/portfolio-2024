import T from "./texts/Title";

const About = () => {
    return(
        <div className="container">
            <h1><T>Get to</T> know me</h1>
            <div className="skills">
                <p>I start learning Laravel and Bootstrap since 2021 and have built some applications with it. Tracker, youRnoteS, MenITi, To-Gather (link)</p>
                <p>I’ve recently been interested built front-end web using Tailwind and React. (Tracker, youRnoteS)</p>
                <p>I recently fell in love with learning Three.js. I implemented Three.js as well as React and Tailwind on this portfolio based on what I've learned so far.</p>
                <p>I use PostgreSQL and phpMyAdmin for database management, i prefer PostgreSQL for interface, familiarity, performance and scalability.</p>
                <p>Those are languages, frameworks, and tools that I’m familiar, confident, and have worked with.</p>
            </div>
        </div>
    )
}

export default About;