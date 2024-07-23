import Resources from "./Constants";
import { Tracker, Yournotes, Meniti, Issueticket, Togather, Influenger } from "../assets";

export const navLinks = [
    {
        id: "hi",
        title: "HI",
    }
    ,{
      id: "about",
      title: "ABOUT",
    },
    {
      id: "projects",
      title: "PROJECTS",
    },
    {
        id: "experiences",
        title: "EXPERIENCES",
    },
    {
        id: "funfacts",
        title: "FUN FACTS",
    },
    {
      id: "contact",
      title: "CONTACT",
    },
  ];

const projects = [
    {
        name: "Tracker", 
        img: Tracker, 
        date: "2024 | Self-project", 
        desc: "Task progress tracking application that supports multi role login.", 
        tech: "Laravel | Tailwind",
    },
    {
        name: "youRnoteS", 
        img: Yournotes, 
        date: "2024 | Self-project", 
        desc: "Make, keep and manage your personal notes wherever you go.", 
        tech: "Laravel | Tailwind",
    },
    {
        name: "MenITi", 
        img: Meniti, 
        date: "2022 | Bachelor's Degree Final Project", 
        desc: "Find your mentor in IT field or be one of them.", 
        tech: "Laravel | Bootstrap",
    },
    {
        name: "Issue Ticket", 
        img: Issueticket, 
        date: "2022 | Internship", 
        desc: "Make, keep and manage your personal notes wherever you go.", 
        tech: "Laravel | AdminLTE",
    },
    {
        name: "To-Gather", 
        img: Togather, 
        date: "2021 | Team-project", 
        desc: "Find your ideal team members for any project or competition in your chosen field!", 
        tech: "Laravel | JavaScript",
    },
    {
        name: "InfluenGer", 
        img: Influenger, 
        date: "2021 | Team-project", 
        desc: "Make, keep and manage your personal notes wherever you go.", 
        tech: "Figma",
    },
]
export { projects, Resources };