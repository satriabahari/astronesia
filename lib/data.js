import React from "react";
import {
  FaBook,
  FaBorderAll,
  FaInstagram,
  FaLocationArrow,
  FaSignOutAlt,
  FaTablet,
  FaUserAlt,
  FaUserGraduate,
  FaVoicemail,
  FaVoteYea,
} from "react-icons/fa";
import dicoding from "../public/dicoding.png";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Review",
    hash: "/#review",
  },
  {
    name: "Admission",
    hash: "/admission",
  },
  {
    name: "Library",
    hash: "/library",
  },
  {
    name: "Publication",
    hash: "/publication",
  },
  {
    name: "List",
    hash: "/list",
  },
  {
    name: "FAQ",
    hash: "/faq",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
  // {
  //   name: "Admin",
  //   hash: "/admin",
  // },
];

export const sidebars = [
  {
    name: "Manage Students",
    hash: "/admin/students",
    icon: React.createElement(FaUserAlt),
  },
  {
    name: "Manage Teachers",
    hash: "/admin/teachers",
    icon: React.createElement(FaUserGraduate),
  },
  {
    name: "Manage Publications",
    hash: "/admin/publications",
    icon: React.createElement(FaBorderAll),
  },
  {
    name: "Manage FAQ",
    hash: "/admin/faq",
    icon: React.createElement(FaVoteYea),
  },
  {
    name: "Manage Library",
    hash: "/admin/library",
    icon: React.createElement(FaBook),
  },
  {
    name: "Logout",
    hash: "/",
    icon : React.createElement(FaSignOutAlt)
  }
];

export const admin = [
  {
    data: "Satria Bahari",
  },
  {
    data : "F1E122181"
  },
  {
    data : "satriabahari@gmail.com"
  }
]

export const enrollments = [
  {
    procedure:
      "Prospective students must have adequate proficiency in the English Language as all lessons (except Bahasa Indonesia and Chinese) are taught in English",
  },
  {
    procedure:
      "For admission into our Kindergarten to Grade 11 levels for the coming academic year, prospective students are required to go through a selection process: ",
  },
  {
    procedure:
      "For admission into Nursery and Kindergarten Through observation. During the observation, the student may be asked questions that would determine his/her language ability and numeracy knowledge.",
  },
  {
    procedure:
      "For admission into Grades 1 to 9 Through admission tests and interview. Students are required to sit for English Language and Mathematics tests (and Science test for those who wish to be admitted to Grade 9). Students who meet the Schools standard for admission will be short-listed for an interview.",
  },
  {
    procedure:
      "For admission into Grade 10 Through admission tests and interview. Entry into this grade is generally open to students seeking to do the 3-year Pre-IB course (usually open to students from the National Schools who will be completing/have completed UAN). Those wishing to enter the IGCSE final year leading to the IBDP must already be on an equivalent course in their present school and taking a similar selection of subjects that we are offering. Students will sit for English Language, Mathematics and relevant Science tests as well as tests in other subjects as deemed necessary by the School. Students who meet the Schools standard for admission will be short-listed for an interview.",
  },
  {
    procedure:
      "Note: All Entrance Tests and Interviews will be conducted online or offline based on appointment with our marketing staff.",
  },
];

export const publications = [
  {
    title: "Group Test",
    description:
      "For admission into Grade 10 Through admission tests and interview. Entry into this grade is generally open to students seeking to do the 3-year",
    date: "17 September 2023",
    image: dicoding,
  },
  {
    title: "Group Test",
    description:
      "For admission into Grade 10 Through admission tests and interview. Entry into this grade is generally open to students seeking to do the 3-year",
    date: "17 September 2023",
    image: dicoding,
  },
  {
    title: "Group Test",
    description:
      "For admission into Grade 10 Through admission tests and interview. Entry into this grade is generally open to students seeking to do the 3-year",
    date: "17 September 2023",
    image: dicoding,
  },
  {
    title: "Group Test",
    description:
      "For admission into Grade 10 Through admission tests and interview. Entry into this grade is generally open to students seeking to do the 3-year",
    date: "17 September 2023",
    image: dicoding,
  },
];

export const reviews = [
  {
    title: "Parent of Jolica Jasmine",
    description:
      "My son has studied here. I'm very happy to send him to this school, his achievement and character is great."
  },
  {
    title: "Parent of Lucy Eloise",
    description:
      "I am grateful because my child has studied here since elementary school. With the character building provided by school, my child has become better at helping others."
  },
  {
    title: "Parent of Donald Edric Harrison",
    description:
      "I see the change of behavior in my child, he has become a child who can express who he is and have a good social values.",
  },
  {
    title: "Parent of Bryan Abimana Putra",
    description:
      "Astronesia Elementary School provides a supportive educational environment which nurtures the child's knowledge, manner and empathy. These traits create the bridge between classroom learing and real-life application for a child's foundation for their future.",
  },
  {
    title: "Parent of Abraham Reynand",
    description:
      "My child has develop his love of reading in very supportive and encouraging classroom evironment. He has a passion for reading now and his skills have developed dramatically in such a short period of time.",
  },
  {
    title: "Parent of Aaron Chaiden Barnard",
    description:
      "Astronesia is the right place for our children to learn not only academics but also how to be responseible individuals. The most important aspect is that my children always feel safe and happy every day at school.",
  },
];

export const questions = [
  {
    question: "What is the admission procedure?",
    answer:
      "For admission into our Kindergarten to Grade 11 levels for the coming academic year, prospective students are required to go through a selection process: ",
  },
  {
    question: "What is the admission procedure?",
    answer:
      "For admission into our Kindergarten to Grade 11 levels for the coming academic year, prospective students are required to go through a selection process: ",
  },
  {
    question: "What is the admission procedure?",
    answer:
      "For admission into our Kindergarten to Grade 11 levels for the coming academic year, prospective students are required to go through a selection process: ",
  },
];

export const Library = [
  {
    title: "Group Test",
    description:
      "For admission into Grade 10 Through admission tests and interview. Entry into this grade is generally open to students seeking to do the 3-year",
    date: "17 September 2023",
    image: dicoding,
  },
];

export const sosmeds = [
  {
    name: "Email",
    icon: React.createElement(FaVoicemail),
    url: "mailto:satriaabaharii@gmail.com",
    description: "astronesia@gmail.com",
  },
  {
    name: "Handphone Number",
    icon: React.createElement(FaTablet),
    url: "082183340920",
    description: "+6282183340920",
  },
  {
    name: "Location",
    icon: React.createElement(FaLocationArrow),
    url: "Maps",
    description: "005 Mendalo Asri",
  },
  {
    name: "Instagram",
    icon: React.createElement(FaInstagram),
    url: "https://instagram.com/satriaabaharii",
    description: "@Astronesia",
  },
];
