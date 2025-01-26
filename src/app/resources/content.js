import { InlineCode } from "@/once-ui/components";
import { title } from "process";

const person = {
  firstName: "Akshay",
  middleName: "Kumar",
  lastName: "Gupta",
  get name() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  },
  role: "Full-stack Engineer",
  avatar: "/images/Akshay_k_Gupta_photo.png",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  exactLoaction: "Bengaluru, India",
  languages: ["Java","Spring Boot", "Python", "NodeJS", "GenAI", "SQL", "NoSQL", "ReactJS"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
     I occasionally share insights on software development, emerging technologies,
      and the intersection of innovation and engineering, blending practical solutions with creative thinking.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/akshayx11/",
  },
  {
    name: "Download Resume",
    icon: "downloadFile",
    link: "https://drive.usercontent.google.com/download?id=1Epn5H8eqnuORNP3l6UnYx5LZH7C89W3v&export=download&authuser=0"
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:hello@akshaygupta.me",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/akshayx11",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full-stack engineer</>,
  subline: (
    <>
      <br/>I am  Akshay, a highly competent <InlineCode>full-stack software engineer</InlineCode> 
      with 6.8 years of hands-on expertise in a versatile
      technology stack, including Java, Spring Boot, Microservices, Python, NodeJS and ReactJS. I specialize in
      GenAI-driven applications and have experience with AWS services. My skills also cover SQL and NoSQL
      (Mongodb) databases, and I excel in project planning, system design, and aligning technology with business
      goals.

    </>
  ),
};

const about = {
  label: "Profile",
  title: "Akshay Gupta",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com/akshayguptame/quick-meet",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       Akshay Kumar Gupta is a full-stack software engineer with 6.8 years of experience 
       in developing scalable and secure software solutions. His expertise spans Java, Spring Boot, Python, NodeJS,  Kafka, 
       GenAI-driven applications, and cloud-native development using AWS. Passionate about solving complex challenges, 
       Akshay combines cutting-edge technologies with solid design principles to deliver impactful results.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "McKinsey & Company",
        timeframe: "2022 - 2024",
        role: "Software Engineer II",
        achievements: [
          <>
          Engage in diverse domains and technologies, encompassing Microservices, Java, Spring Boot,
          NextJS, NodeJS, ReactJS, and Python, to drive innovative solutions.
          </>,
          <>
          Development experience in GenAI driven applications with OpenAI, Prompt Engineering, Vector db,
          LangChain and RAG use cases.
          </>,
          <>
          Leverage AWS and Azure services to ensure seamless integration and robust application development.
          </>,
          <>
          Led a backend team of 10+ team members for a significant pharmaceutical project with one of the
          top ten Pharma organizations.
          </>,
          <>Led the team for a GenAI project, including frontend and backend development.</>,
          <>Contributed to the development of ELK stack and Kibana plugins for one of the largest fin-tech
          organizations.</>,
          <>Expertise in system design, including the development of microservices architectures, RESTful APIs,
          and cloud-based solutions, ensuring high scalability, fault tolerance, and performance optimization.
          </>,
        ],
        images: [],
      },
      {
        company: "Lumen Technologies",
        timeframe: "2020 - 2022",
        role: "Software Development Consultant I",
        achievements: [
          <>
          Worked on Lumen’s Cloud Application Manager (CAM) web portal and its microservices, enabling orchestration and automation of infrastructure, application, and service delivery across various cloud providers like AWS, GCP, Azure, and Lumen Cloud.
          </>,
          <>
          Improved deployment efficiency by 30% through automation, streamlining workflows and reducing manual efforts.
          </>,
          <>
          Leveraged Python, Java, AngularJS, and MongoDB to develop and maintain application features.
          </>,
          <>
          Gained experience with AWS, GCP, and Azure integration APIs to enhance application interoperability and cloud adoption.
          </>,
        ],
        images: [],
      },
      {
        company: "Snapwiz Edutec India Pvt. Ltd.",
        timeframe: "2018 - 2020",
        role: "Software Engineer",
        achievements: [
          <>
          Contributed to the development of the Edulastic Learning Management System, serving over 10 million users globally.
          </>,
          <>
          Developed backend functionalities using NodeJS, Java, MongoDB, and MySQL, ensuring robust and efficient data management.
          </>,
          <>
          Enhanced frontend interactivity and responsiveness using JavaScript (ES6), jQuery, HTML5, and CSS3.
          </>,
          <>
          Managed all development phases related to new feature implementations, including planning, coding, testing, and deployment.
          </>,
          <>
          Played a key role in delivering new features and resolving critical issues to improve user experience and system reliability.
          </>,
        ],
        images: []
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "DIT University, Dehradun",
        description: <>Completed M.Tech in Computer Science 
        with a focus on cloud computing and resource optimization. 
        Published research in the International Journal of Computer Applications.</>,
      },
      {
        name: "Dehradun Institute of Technology, Dehradun",
        description: <>Completed B.Tech in Information Technology, 
        building a strong foundation in software development and database management.</>,
      },
    ],
  },
  
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Java and Spring Boot",
        description: <>Proficient in developing scalable and secure applications using Java (J2SE/J2EE) and Spring Boot for microservices architecture.</>,
        images: [], 
      },
      {
        title: "Python",
        description: <>Experienced in building backend services, automations, and cloud-native applications using Python, with expertise in FastAPI.</>,
        images: [],
      },
      {
        title: "Node.js",
        description: <>Skilled in developing scalable server-side applications and REST APIs using Node.js, with hands-on experience in Express.js and integrating with various databases.</>,
        images: [],
      },
      {
        title: "AWS Cloud",
        description: <>Skilled in leveraging AWS services, including ECS, Fargate, S3, and RDS, API Gateway, Route53 etc. for cloud-native development.</>,
        images: [],
      },
      {
        title: "SQL and NoSQL Databases",
        description: <>Extensive experience with MySQL, PostgreSQL, MongoDB, and Redis for relational and non-relational data management.</>,
        images: [],
      },
      {
        title: "Frontend Technologies",
        description: <>Knowledgeable in JavaScript (ES6), ReactJS, and HTML/CSS for building interactive and responsive user interfaces.</>,
        images: [],
      },
      {
        title: "Kafka",
        description: <>Experienced in real-time data streaming and message brokering with Kafka, ensuring high throughput and fault-tolerant solutions.</>,
        images: [],
      },
      {
        title: "DevOps and CI/CD",
        description: <>Proficient in CI/CD pipelines using Jenkins, and experienced with Docker for containerized deployments.</>,
        images: [],
      },
      {
        title: "Design Principles",
        description: <>Strong understanding of SOLID principles, design patterns like Singleton and Factory, and secure coding practices.</>,
        images: [],
      },
    ],
  },
  
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const notes = {
  label: "Notes",
  title: "My Notes",
  description: `Notes by ${person.name}`
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, notes };
