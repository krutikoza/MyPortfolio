/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋🏼.",
  title2: "Krutik",
  logo_name: "ka.oza()",
  // nickname: "harry / picleric",
  full_name: "Krutik Oza",
  subTitle: "An Experienced Software Developer👨🏻‍💻.",
  resumeLink:
    "https://docs.google.com/document/d/1-jq5g3avGXX9_poXCixtJZ9gNpBPdyzk/edit?usp=sharing&ouid=117653589659728592053&rtpof=true&sd=true",
  mail: "mailto:ozakrutik@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/krutikoza",
  linkedin: "https://www.linkedin.com/in/krutik-oza/",
  gmail: "ozakrutik@gmail.com",
  instagram: "https://www.instagram.com/krutik.oza/",
};

const skills = {
  data: [
    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "🌎 Developing highly interactive and responsive Front end IU using JavaScript React",
        "🌍 Experience in Full Stack Application development",
        "🌏 Building backend microservice architecture using Spring Boot.",
        "🌎 Proficient in creating web backend using .NET",
        "🌍 Created datamodels and complex SQL queries for PostgreSQL and MS SQL Servers",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#8BC34A",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#29B0EE",
          },
        },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "dotnet",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            color: "#512bd4",
          },
        },

        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Software Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "☀️ Experience working on multiple cloud platforms",
        "☀️ Experience hosting and managing websites",
        "☀️ Experience with Continuous Integration/ Continuous deployment",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos:jenkins",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "skill-icons:postman",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "logos:jira",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indiana University - Bloomington",
      subtitle: "Master's in Computer Science",
      logo_path: "iub.png",
      alt_name: "IUB",
      duration: "2021 - Present",
      descriptions: [
        "🪐 I'm currently pursuing my masters in Computer Science.",
        "🪐 I have studied core subjects Like Computer Vision,Image Processing and Software Engineering",
        "🪐 I have implemented several projects based on what I've leart under my Computer Science course.",
      ],
      website_link: "https://www.indiana.edu/",
    },
    {
      title: "Gujarat Technological University",
      subtitle: "Batchelor's in Software Engineering",
      logo_path: "gtu.png",
      alt_name: "GTU",
      duration: "2017 - 2021",
      descriptions: [
        // 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔
        "🌗 I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "🌖 I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "🌕 I have implemented several projects based on what I've leart under my Computer Engineering course.",
      ],
      website_link: "https://www.gtu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    //   {
    //     title: "M0001: MongoDB Basics",
    //     subtitle: "MongoDB University",
    //     logo_path: "mongo.png",
    //     certificate_link:
    //       "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
    //     alt_name: "MongoDB University",
    //     // color_code: "#2AAFED",
    //     color_code: "#47A048",
    //   },
    //   {
    //     title: "Hackathon",
    //     subtitle: "Hack The Mountains",
    //     logo_path: "hackathon1.svg",
    //     certificate_link:
    //       "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
    //     alt_name: "hackathon",
    //     color_code: "#E2405F",
    //   },
    //   {
    //     title: "A300: Atlas Security",
    //     subtitle: "MongoDB University",
    //     logo_path: "mongo.png",
    //     certificate_link:
    //       "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
    //     alt_name: "MongoDB University",
    //     // color_code: "#F6B808",
    //     color_code: "#47A048",
    //   },
    //   {
    //     title: "Cyber Security & Cyber Forensics",
    //     subtitle: "Workshop at IIT Bombay",
    //     logo_path: "iit.png",
    //     certificate_link:
    //       "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
    //     alt_name: "Workshop",
    //     color_code: "#2AAFED",
    //   },
    //   {
    //     title: "MLH Local Hack Day: Build",
    //     subtitle: "Major League Hacking",
    //     logo_path: "mlh-logo.svg",
    //     certificate_link:
    //       "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //     alt_name: "Google",
    //     color_code: "#fe0037",
    //   },
    //   {
    //     title: "Hack20",
    //     subtitle: "Flutter International Hackathon",
    //     logo_path: "flutter.png",
    //     certificate_link:
    //       "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
    //     alt_name: "Flutter International Hackathon",
    //     color_code: "#2AAFED",
    //   },
    //   {
    //     title: "Postman Student Expert",
    //     subtitle: "Postman",
    //     logo_path: "postman.png",
    //     certificate_link:
    //       "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
    //     alt_name: "Postman",
    //     // color_code: "#f36c3d",
    //     color_code: "#fffbf3",
    //   },
    //   // color_code: "#8C151599",
    //   // color_code: "#7A7A7A",
    //   // color_code: "#0C9D5899",
    //   // color_code: "#C5E2EE",
    //   // color_code: "#ffc475",
    //   // color_code: "#g",
    //   // color_code: "#ffbfae",
    //   // color_code: "#fffbf3",
    //   // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I've been part of multiple companies as a Software Developer and I enjoy creating innovative solutions for various problems. I am always eager to learn new skills and technologies to improve my performance and deliver high-quality products.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Developer",
          company: "OnRule",
          company_url: "https://www.onrule.com/",
          logo_path: "onrule.png",
          duration: "May 2022 - Devember 2022",
          location: "Santa Clara, CA",
          description: `Worked on building an application using Spring Boot, React and PostgreSQL. Optimized API's by implementing pagination and secured the applicaion using Spring Security SAML2.0 authentication. 
          I successfully led and mentored a team of five developers, using Jira to delegate tasks effectively, offering feedback and support, and facilitating knowledge sharing sessions.

          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Dean's Student Assistant",
          company: "IUB School Of Public Health",
          company_url: "https://publichealth.indiana.edu/",
          logo_path: "iubsph.png",
          duration: "April 2022 - Present",
          location: "Bloomington, IN",
          description: `I designed and developed a web application for Dean using C# ASP.NET. The application allows users to perform CRUD operations on online articles and modify their display order. 
          The application also automates the workflow of sending high-quality research articles to more than 100k readers across the country, improving the work efficiency by ~50%.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Software Developer",
          company: "Gujarat Narmada Valley Fertiliser Company",
          company_url: "https://www.gnfc.in/",
          logo_path: "gnfc.png",
          duration: "Sep 2020 - Oct 2020",
          location: "Work From Home",
          description: `I implemented search functionality for a spring application using Hibernate Search and PostgreSQL query. 
          I also improved system stability by customizing error handling and unit testing with JUnit. 
          Additionally, I automated the auction system to reduce human intervention and save ~60% of employees time.
          `,
          color: "#ee3c26",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Community Lead",
    //       company: "Bauddhik-Geeks",
    //       company_url: "https://bauddhikgeeks.tech/",
    //       logo_path: "bauddhikgeeks.png",
    //       duration: "Sep 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Help Tech-Geeks so they get exposure to the technical world and enlighten their skills. Hence, the programming club highlight all the skills of the individual members and help them develop and groom their skills in a meaningful way. Help community members to learn and grow.",
    //       color: "#FBBD18",
    //     },
    //     {
    //       title: "Cross Winter of Code Mentor",
    //       company: "CWOC",
    //       company_url: "https://crosswoc.ieeedtu.in/",
    //       logo_path: "cwoc.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "GDG Student Volunteer",
    //       company: "Google Developer Groups",
    //       company_url: "https://gdg.community.dev/",
    //       logo_path: "gdg.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Google Developer Group Surat Student Volunteer and Member.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Postman Student Expert",
    //       company: "Postman",
    //       company_url: "https://www.postman.com/",
    //       logo_path: "postman.png",
    //       duration: "Feb 2020 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Google Developer Group Surat Student Volunteer and Member.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "GitHub Student Developer",
    //       company: "GitHub",
    //       company_url: "https://github.com/",
    //       logo_path: "github.png",
    //       duration: "Nov 2019 - Present",
    //       location: "Work from Home",
    //       description:
    //         "Contribute to Open Source Community and Open Source Project.",
    //       color: "#040f26",
    //     },
    //     {
    //       title: "Google Local Guide",
    //       company: "Google Map",
    //       company_url: "https://maps.google.com/localguides/",
    //       logo_path: "localguide.png",
    //       duration: "Sep 2018 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "E. F. I. Student Volunteer",
    //       company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
    //       company_url: "https://indiaenvironment.org/",
    //       logo_path: "efi.png",
    //       duration: "Apr 2017 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
    //       color: "#5a900f",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: `My projects showcase my versatility with the latest technology tools. 
    I specialize in creating dynamic Java Spring Boot backend projects, crafting efficient Python scripts, and building captivating React front-end projects. 
    Below are a few examples of my recent work.`,
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "krutik.jpg",
    description:
      "Please feel free to contact me using the information below, and I will do my best to respond as quickly as possible.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
  //   link: "https://twitter.com/Harikrushn9",
  //   avatar_image_path: "blogs_image.svg",
  // },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Enroute",
      url: "https://github.com/krutikoza/enroute",
      description:
        "A one stop application providing services to deliver packages. This application compares different delivery agents and suggest the best option.",
      languages: [
        {
          name: "HTML",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "NodeJs",
          iconifyClass: "skill-icons:mongodb",
        },
      ],
    },
    {
      id: "1",
      name: "Answer Extractor",
      url: "https://github.com/krutikoza/Extracting_Answers",
      description:
        "I developed a web application that allows users to upload their marked answer sheets and extract their answers by comparing them to the correct answers.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },

        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Spring Boot",
          iconifyClass: "logos:spring-icon",
        },
      ],
    },
    {
      id: "13",
      name: "Panorama Simplified",
      url: "https://github.com/krutikoza/Image-Stitching",
      description:
        "I designed and developed an application that enables users to seamlessly merge two separate images into a single panorama image.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "lambda",
          iconifyClass: "logos:aws-lambda",
        },
        {
          name: "S3",
          iconifyClass: "logos:aws-s3",
        },
        {
          name: "EC2",
          iconifyClass: "logos:aws-ec2",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "2",
      name: "Board Game",
      url: "https://github.com/krutikoza/board_game",
      description:
        "I developed a system for a board game that can play against human opponents. This system analyze the board, predict the opponent's moves, and make decisions to achieve victory.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Spring Boot",
          iconifyClass: "logos:spring-icon",
        },
        {
          name: "PostgreSQL",
          iconifyClass: "skill-icons:postgresql-light",
        },
      ],
    },
    {
      id: "3",
      name: "Outdoors",
      url: "https://github.com/Sagar03111997/Outdoor",
      description:
        "I developed a hiking application that displays information on hiking tracks providing a convenient all-in-one solution for hikers to plan and explore new trails.",
      languages: [
        {
          name: "SWIFT",
          iconifyClass: "vscode-icons:file-type-swift",
        },
        {
          name: "dotnet",
          iconifyClass: "skill-icons:dotnet",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "MS SQL",
          iconifyClass: "vscode-icons:file-type-sql",
        },
      ],
    },
    {
      id: "4",
      name: "Personal Portfolio",
      url: "https://github.com/krutikoza/MyPortfolio",
      description: `I created a personal portfolio website that allows content updates without the need for coding which simplifies updating portfolio enabling users to showcase their experience.`,
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
