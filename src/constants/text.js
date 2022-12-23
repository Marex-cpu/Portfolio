import { BiMedal } from "react-icons/bi";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import img_project1 from "../assets/img_project1.png";
import img_project2 from "../assets/img_project2.png";
import img_project3 from "../assets/img_project3.png";
import img_project4 from "../assets/img_project4.png";
import img_project5 from "../assets/img_project5.png";

export const aboutMe = [
  {
    id: 1,
    icon: <BiMedal className='icon' />,
    title: "Experience",
    info: "1+ Years Working",
  },
  {
    id: 2,
    icon: <MdOutlineCollectionsBookmark className='icon' />,
    title: "Projects",
    info: "10+ Completed",
  },
  {
    id: 3,
    icon: <TbSchool className='icon' />,
    title: "Education",
    info: "High School",
  },
];

export const frontSkills = [
  {
    id: 1,
    title: "HTML",
    level: "Experienced",
  },
  {
    id: 2,
    title: "CSS",
    level: "Experienced",
  },
  {
    id: 3,
    title: "JavaScript",
    level: "Intermediate",
  },
  {
    id: 4,
    title: "Bootstrap",
    level: "Intermediate",
  },
  {
    id: 5,
    title: "Tailwind",
    level: "Intermediate",
  },
  {
    id: 6,
    title: "jQuery",
    level: "Basic",
  },
  {
    id: 7,
    title: "TypeScript",
    level: "Basic",
  },
  {
    id: 8,
    title: "React",
    level: "Intermediate",
  },
  {
    id: 9,
    title: "Sass",
    level: "Experienced",
  },
  {
    id: 10,
    title: "Git",
    level: "Basic",
  },
  {
    id: 11,
    title: "Figma",
    level: "Basic",
  },
];

export const backSkills = [
  {
    id: 1,
    title: "Node JS",
    level: "Basic",
  },
  {
    id: 2,
    title: "MongoDB",
    level: "Basic",
  },
];

export const projects = [
  {
    id: 1,
    imgProject: img_project1,
    nameProject: "JavaScript Vanila",
    gitLink: "https://github.com/Marex-cpu/JavaScript-Vanila",
    liveLink: "https://mareself-javascript-vanila.netlify.app/#home",
    technology: ["JS Vanila", "HTML5", "CSS3"],
  },
  {
    id: 2,
    imgProject: img_project2,
    nameProject: "Simple React Projects",
    gitLink: "https://github.com/Marex-cpu/SimpleReactProjects",
    liveLink: "https://mareself-simplereactprojetcs.netlify.app/",
    technology: ["React", "CSS3", "Grid", "Data Structures"],
  },
  {
    id: 3,
    imgProject: img_project3,
    nameProject: "Bank Modern UL/UX",
    gitLink: "https://github.com/Marex-cpu/React-project---Bank-Modern-UL-UX",
    liveLink: "https://mareself-modern-bank.netlify.app/",
    technology: [
      "React",
      "Tailwind",
      "UL/UX Design",
      "Figma",
      "Responsive Design",
    ],
  },
  {
    id: 4,
    imgProject: img_project4,
    nameProject: "Arhitecture & Interior Design",
    gitLink: "https://github.com/Marex-cpu/self-project-1",
    liveLink: "https://mareself-architecture.netlify.app/",
    technology: [
      "JS",
      "Sass",
      "HTML5",
      "Modern Design",
      "Responsive Design",
      "Grid",
      "Animations",
    ],
  },
  {
    id: 5,
    imgProject: img_project5,
    nameProject: "Portfolio",
    gitLink: "https://github.com/Marex-cpu/Portfolio",
    liveLink: "https://mare-portfolio.netlify.app/",
    technology: ["Front-end", "React", "Sass", "Responsive Design"],
  },
];

export const qoutes = [
  {
    id: 1,
    name: "Paul Cookson",
    qoute: `${"Great web design without functionality is like a sports car with no engine."}`,
  },
  {
    id: 2,
    name: "Jacob Lett",
    qoute: `${"Learning HTML and CSS is a lot more challenging than it used to be. Responsive web design adds more layers of complexity to design and develop websites."}`,
  },
  {
    id: 3,
    name: "John Johnson",
    qoute: `${"First, solve the problem. Then, write the code."}`,
  },
  {
    id: 4,
    name: "Cory House",
    qoute: `${"Code is like humor. When you have to explain it, it’s bad."}`,
  },
];

export const contactOption = [
  {
    id: 1,
    icon: <AiOutlineMail className='icon' />,
    type: "Email",
    info: "markoo3871@gmail.com",
    link: "mailto:markoo3871@gmail.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine className='icon' />,
    type: "Messenger",
    info: "Marko Petrović",
    link: "https://m.me/p.markomarepetrovic",
  },
  {
    id: 3,
    icon: <BsWhatsapp className='icon' />,
    type: "WhatsApp",
    info: "+381616697765",
    link: "https://api.whatsapp.com/send?phone=0616697765",
  },
];
