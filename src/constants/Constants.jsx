/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import P from "../components/texts/Paragraph";

const Resources = ( { select = "" } ) => {
    return (
        <>
            {(select == "Tracker")  &&
            <>
                <p>Introducing a <P>dynamic</P> application that designed to <P>track your employees&lsquo; work progress</P>. This application <P>supports multiple user roles</P> which increase transparency and productivity.</p>
                <p>Employer role:</p>
                <li><P>Create tasks</P> and customize deadlines, task breakdowns to be checked by employees, provides <P>file input</P> as reported work result, etc.</li>
                <li><P>Assign</P> tasks to specific users.</li>
                <li><P>Edit</P> and <P>delete</P> tasks as needed.</li>
                <li><P>Track</P> employee’s progress through <P>displayed progress bars</P> to easily visualize task completion and displays who has completed it.</li>
                <p>Employee role</p>
                <li>Access <P>all your tasks</P> and see whether you have an <P>upcoming task</P> to keep you on track.</li>
                <li>Allows you to <P>check off</P> completed task-breakdowns and let your boss see it.</li>
                <li>Allows you to <P>upload resources</P> as your proof of completed task to make it transparent.</li>
            </>
            }{(select == "Yournotes")  &&
                <p>Introducing a <P>simple</P> yet powerful <P>personal note</P> application that allows you to <P>create</P>, <P>save</P>, and <P>manage</P> your notes effortlessly.  Enjoy the convenience of <P>responsive design</P>, you can access it whether you&lsquo;re on your phone, tablet, or desktop which keeps you organized wherever you go. </p>
            }{(select == "Meniti")  &&
                <p>Introducing a <P>progressive web application (PWA)</P> for <P>finding</P> and <P>offering</P> IT mentoring services. Built with <P>Laravel</P> and <P>Bootstrap</P> framework, <P>PgAdmin4</P> as a management tool for PostgreSQL databases, and <P>Figma</P> as an interface design and prototyping tools.  I performed <P>user needs analysis</P> (created personas, scenarios, user stories, determined features, prototyping and evaluating), designed <P>sequence diagrams</P>, created <P>entity relationship diagrams (ERD)</P>, <P>class diagrams</P>, implemented program <P>code</P>, and conducted <P>valuation & usability testing</P>.</p>
            }{(select == "Issueticket")  &&
                <p>Introducing an innovative issue ticketing web application, built with <P>adminLTE</P> as the front-end framework, <P>Laravel</P> as the back-end framework, and <P>PostgreSQL</P> as the database management system. Issue Ticket Web makes programmers&lsquo; jobs easier with comprehensive tools to <P>report</P> and <P>solve web bugs</P> to deliver and improve solutions for users</p>
            }{(select == "Togather")  && 
            <>
                <p>Introducing To-Gather, <P>Final project</P> of Rekayasa Perangkat Lunak subject built with <P>JavaScript</P> and <P>Laravel</P> Framework. To-Gather is a <P>dynamic</P> application to help <P>find group members</P> for competitions or projects on specific topics.</p>
                <p>The design ad developing process includes:</p>
                <li><P>Problem definition</P></li>
                <li>Determine <P>end-user characteristics</P> and <P>system boundaries</P></li>
                <li>Identify <P>actors</P></li>
                <li>Identify functional and non-functional <P>requirements</P></li>
                <li>Create <P>activity diagrams</P>, <P>use case diagrams</P>, use case <P>scenarios</P></li>
                <li>Create <P>interfaces</P></li>
                <li><P>Implement</P> them in the form of programming.</li>
            </>
            }{(select == "Dotify")  &&
            <>
                <p>Introducing Dotify, <P>final project</P> of the Interactive System Programming subject built with <P>Kotlin</P>. Dotify is a <P>mobile application</P> created to give efficient tool for everyday organization and productivity, it has three key features: </p>
                <li>&quot;My Schedule&quot; : brief <P>planning</P> and <P>scheduling</P>.</li>
                <li>&quot;Reminder&quot; : <P>Notifications</P> based on specified times.</li>
                <li>&quot;Tips & Tricks&quot; : <P>Insightful advice</P> about productivity related.</li>
            </>
            }{(select == "Influenger")  &&
                <p>Introducing InfluenGer, a <P>prototype design</P> application for <P>final project</P> of Perancangan Pengalaman Pengguna subject using <P>Figma</P> cloud-based design app. InfluenGer is an innovative application that <P>connects</P> potential <P>endorsement seekers</P> with <P>influencers</P>. The design process includes <P>defining</P> and describing the <P>problem</P>, proposing <P>solutions</P> and <P>comparing</P> it with <P>competitors&lsquo;</P> products to find the best solution</p>
            }
        </>
    )
}

export default Resources;