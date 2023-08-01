/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  // googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋🏼.",
  title2: "Krutik",
  logo_name: "ka.oza()",
  nickname: "KO",
  full_name: "Krutik Oza",
  subTitle:
    "An experienced software developer with a proven track record of delivering high-quality software solutions.👨🏻‍💻.",
  resumeLink:
    "https://drive.google.com/file/d/1fw5WeyWq2enQHmNLMdKUyiWbg6A11Q5R/view?usp=sharing",
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
        "🌎 Developing highly interactive and responsive Front-end IU using JavaScript and React.",
        "🌍 Experienced in developing full-stack applications.",
        "🌏 Building backend microservice architecture using Spring Boot.",
        "🌎 Proficient in creating robust and scalable web backend using .NET.",
        "🌍 Creating datamodels and complex SQL queries for PostgreSQL and MS SQL Servers.",
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
        "☀️ Worked with AWS, Azure, and Google Cloud, delivering cloud solutions that met diverse business needs.",
        "☀️ Managed and hosted websites using Apache HTTP Server, Heroku, and Netlify.",
        "☀️ Implemented Continuous Integration and Continuous Deployment pipelines using Jenkins and GitLab CI/CD.",
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
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#0065bd",
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
        "🪐As a current Master's degree student in Computer Science, I am deeply interested in Software Engineering and machine learning.",
        "🪐My coursework has allowed me to delve into various core subjects such as Computer Vision, Image Processing, and Software Engineering.",
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
        "🌗 As a Computer Engineering student, I have studied core subjects such as Data Structures and Algorithms, Database Management Systems and Operating System.",
        "🌘 Implemented several projects which provided me with hands-on experience in designing and developing web-based applications, constructing robust backend systems using technologies such as Node.js and Python, and creating mobile apps.",
      ],
      website_link: "https://www.gtu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [],
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
        
        // {
        //   title: "Dean's Student Assistant",
        //   company: "IUB School Of Public Health",
        //   company_url: "https://publichealth.indiana.edu/",
        //   logo_path: "iubsph.png",
        //   duration: "April 2022 - Present",
        //   location: "Bloomington, IN",
        //   description: `I designed and developed a web application for Dean using C# ASP.NET. The application allows users to perform CRUD operations on online articles and modify their display order. 
        //   The application also automates the workflow of sending high-quality research articles to more than 100k readers across the country, improving the work efficiency by ~50%.
        //   `,
        //   color: "#990000",
        // },
        // {
        //   title: "Software Developer",
        //   company: "Gujarat Narmada Valley Fertiliser Company",
        //   company_url: "https://www.gnfc.in/",
        //   logo_path: "gnfc.png",
        //   duration: "Feb 2021 - Apr 2021",
        //   location: "Bharuch, Gujarat, India",
        //   description: `I implemented search functionality for a spring application using Hibernate Search and PostgreSQL query. 
        //   I also improved system stability by customizing error handling and unit testing with JUnit. 
        //   Additionally, I automated the auction system to reduce human intervention and save ~60% of employees time.
        //   `,
        //   color: "#ee3c26",
        // },

        {
          title: "Software Developer",
          company: "Henry Schein",
          company_url: "https://www.gnfc.in/",
          logo_path: "HenrySchein.jpg",
          duration: "Feb 2023 - June 2023",
          location: "California, United States",
          description: `Developed responsive web designs from provided models using HTML5 and CSS3, while employing PL/SQL for data validation and population of billing and patient information tables. Additionally, developed REST API and Microservices using Spring Boot, tested services with Postman, and documented with Swagger, while also creating PL/SQL stored procedures, functions, and packages tailored to project and client specifications.
          `,
          color: "#ee3c26",
        },

        {
          title: "Software Developer",
          company: "OnRule",
          company_url: "https://www.onrule.com/",
          logo_path: "onrule.png",
          duration: "Aug 2022 - Nov 2022",
          location: "California, United States",
          description: `Worked on building an application using Spring Boot, React and PostgreSQL. Optimized API's by implementing pagination and secured the applicaion using Spring Security SAML2.0 authentication. 
          I successfully led and mentored a team of five developers, using Jira to delegate tasks effectively, offering feedback and support, and facilitating knowledge sharing sessions.

          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0077B5",
        },

        {
          title: "Software Developer",
          company: "Adani Group",
          company_url: "https://www.adani.com/",
          logo_path: "Adani.jpg",
          duration: "Jun 2020 - July 2021",
          location: "Bharuch, Gujarat, India",
          description: `I implemented search functionality for a spring application using Hibernate Search and PostgreSQL query. 
          I also improved system stability by customizing error handling and unit testing with JUnit. 
          Additionally, I automated the auction system to reduce human intervention and save ~60% of employees time.
          `,
          color: "#ee3c26",
        },
      ],
    },
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
          name: "MongoDb",
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
