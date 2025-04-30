/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dirren",
  title: "Hello, I'm Dirren Mwangi",
  subTitle: emoji(
    "A passionate Full Stack Developer and Graphic Designer 👨‍💻 skilled in building engaging web and mobile applications using React.js, Node.js, WordPress, and more."
  ),
  resumeLink:
    "https://drive.google.com/file/d/104x5i6EpMqf4ja71DFw-Qog547zCGJgq/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dirren11",
  linkedin: "https://www.linkedin.com/in/dirrenbob/",
  gmail: "dirrenmwangi@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  instagram: "https://www.instagram.com/di.rren_",
  medium: "https://medium.com/dirrenbob",
  whatsapp: "https://wa.me/254741854227",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A WILDLY DRIVEN FULL STACK DEVELOPER ON A MISSION TO EXPLORE EVERY TECH STACK OUT THERE",
  skills: [
    emoji(
      "⚡ Create engaging and responsive UI experiences across both web and mobile platforms."
    ),
    emoji("⚡ Progressive Web Applications (PWA) built using both traditional and Single Page Application (SPA) stacks"),
    emoji(
      "⚡ Integration of third-party services like Firebase, AWS, DigitalOcean, MPESA, and other payment gateways."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },  
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Mongo DB",
      fontAwesomeClassname: "fab fa-leaf"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of Kabianga",
      logo: require("./assets/images/kabiangaLogo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2020 - August 2024",
      desc: "Finished my Four Year Degree Program and Got the best final year Project award.",
      descBullets: [
        "Recognized for building an impactful and innovative project during my Computer Science program."
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "ALX Kenya",
      logo: require("./assets/images/alxLogo.jpeg"),
      subHeader: "Front End Web Development",
      duration: " May 2023- April 2024",
      desc: "Ranked top in the program. Took courses about Front Web Development Libraries Such as React and Other Course",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development & UI Design", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend and Hosting",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Digiworld Media Solutions",
      companylogo: require("./assets/images/digiworldLogo.jpg"),
      date: "June 2023 – Present",
      desc: "Participated in Building the websites and web applications",
      descBullets: [
        "Designed and Developed Over 50 websites and Built In Company System Like the POS.",
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Software Developer and Web Designer",
      company: "Global Wave Wholesale",
      companylogo: require("./assets/images/globalwaveLogo.png"),
      date: "August 2024 – March 2025",
      desc: "Developed internal systems to provide solutions and maintained their website and Mobile Applications. Also astonishing designs for their Mobile apps."
    },
    {
      role: "IT SUPPORT Internship",
      company: "County Government Of Nakuru",
      companylogo: require("./assets/images/nakuruLogo.png"),
      date: "April 2023 – Sep 2023",
      desc: " Helped Maintain the County Government systems and Helped Troubleshoot the County's System  "
    },
    {
      role: "Graphic Designer",
      company: "EPRINT GRAPHICS",
      companylogo: require("./assets/images/eprintLogo.jpg"),
      date: "Feb 2025 – April 2025",
      desc: " Worked as Graphic Designer and Web Designer  "
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};



const bigProjects = {
  title: " Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/sunumarceLogo.webp"),
      projectName: "Sunumarce Ecommerce Website",
      projectDesc: "Built Sunumarce Ecommerce website to enable clients to buy their products in the website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sunumarce.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/prestigeLogo.webp"),
      projectName: "Prestige Shuttle Travel and Tours",
      projectDesc: "A modern travel agency website offering comfortable and reliable shuttle services for tours, airport transfers, and corporate travel across Kenya. Built for easy booking and showcasing premium travel experiences",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://prestigeshuttle.co.ke/"
        }
       
      ]
    },
    
    {
      image: require("./assets/images/jitLogo.webp"),
      projectName: "Jit Machinery Services",
      projectDesc: "Jit Machinery Services is a professional website built to promote industrial machinery solutions, showcasing services such as equipment maintenance, repair, and supply. The site features a clean layout, service listings, and contact integration to connect clients with expert technicians.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://jitmachineryservices.co.ke/"
        }
        
      ]
    },
    {
      image: require("./assets/images/kavelLogo.webp"),
      projectName: "Kavel Digital Solutions Website ",
      projectDesc: "A leading digital agency specializing in innovative technology solutions, SEO, and digital marketing services. Kavel Digital Solutions is committed to helping businesses grow through cutting-edge strategies and top-tier customer service.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://kaveldigitalsolutions.com//"
        }
        //  you can add extra buttons here.
      ]
    },

    
    {
      image: require("./assets/images/healthfarmsLogo.webp"),
      projectName: "Health Farms NGO Website",
      projectDesc: "A nonprofit website dedicated to promoting sustainable farming practices, improving community health, and supporting rural development initiatives. Designed to educate, empower, and connect communities through impactful programs and resources",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://healthfarmsafrica.org/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Recognitions and Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Awards I’ve Worked On!",

  achievementsCards: [
    {
      title: "Free Code Web Design Course",
      subtitle:
        "Successfully completed a free web design course focused on modern website development using HTML, CSS, and responsive design principles. The course covered the essentials of building visually appealing and user-friendly websites, enhancing both technical and creative skills in front-end development.",
      image: require("./assets/images/secondCert.png"),
      imageAlt: "Free Code Web Design Certificate",
      footerLink: [
        {
          name: " Certification",
          url: "https://www.freecodecamp.org/certification/fccb5481f8c-dda1-4ef0-9568-286a20ab2328/responsive-web-design"
        }
      ]
    },
    {
      title: "Javascript Algorithms and Data Structures Course",
      subtitle:
        "Completed a comprehensive course on JavaScript Algorithms and Data Structures, gaining hands-on experience with core programming concepts such as variables, functions, loops, arrays, objects, recursion, and algorithmic thinking. This course strengthened problem-solving skills and provided a solid foundation in writing clean, efficient JavaScript code.",
      image: require("./assets/images/firstCert.png"),
      imageAlt: "first Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.freecodecamp.org/certification/fccb5481f8c-dda1-4ef0-9568-286a20ab2328/javascript-algorithms-and-data-structures"
        }
      ]
    },
    {
      title: "Hikvison CCTV Certificate",
      subtitle:
        "Completed the Hikvision CCTV Training Program, acquiring practical knowledge in CCTV installation, configuration, and maintenance. The training covered camera types, network setup, DVR/NVR systems, remote monitoring, and security best practices—enhancing technical skills in modern surveillance system deployment.",
      image: require("./assets/images/hikvision.jpg"),
      imageAlt: "Hikvison Certificate",
      footerLink: [
        {
          name: " Certification",
          url: "https://drive.google.com/file/d/1_I17H_cxOB7WXR_eI-79QKStWUedr4Y3/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Huawei Best Final Project",
      subtitle: "Won the Best Final Computer Science Project and app called medassist MedAssist is a groundbreaking mobile application designed to provide users with comprehensive medical assistance at their fingertips instantly. With the increasing reliance on technology  healthcare, MedAssist aims to revolutionize the patient experience by offering a userfriendly platform that seamlessly integrates various healthcare services.",
      image: require("./assets/images/huaweiLogo.jpeg"),
      imageAlt: "Huawei Logo",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/dirren11/MedAssist/"
        }
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Get read some of my opinions.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@dirrenbob/react-vs-vue-choosing-the-right-framework-for-your-next-project-957cdbc64380",
      title: "React vs. Vue: Choosing the Right Framework for Your Next Project",
      description:
        "Don't know whether to use react or vue? Then I gat you."
    },
    {
      url: "https://medium.com/@dirrenbob/435edfd723c4",
      title: "Why Startup Companies Should Choose WordPress for Their Website",
      description:
        "Get to know why wordpress site should be the first option for a small company making its way in the industry."
    },

    {
      url: "https://medium.com/@dirrenbob/why-startup-companies-should-launch-an-online-shop-sooner-than-later-ced489c479f5",
      title: "Why Startup Companies Should Launch an Online Shop Sooner Than Later",
      description:
        "Make sure your business is running even while you are sleeping or running errands."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "APPOINTMENTS",
  subtitle: emoji(
    "Book an appointment with me to discuss your project or get technical support. You can easily schedule your meeting online or reach out directly on WhatsApp—whichever works best for you! "
  ),

  talks: [
    {
      title: "Let's Talk Businesss",
      subtitle: "Book Online Appointment with me ",
      slides_url: "https://calendly.com/dirrenmwangi/30min",
      event_url: "https://wa.me/254741854227"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section


const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "COMING SOON",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    //"https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+254741854227",
  email_address: "dirrenmwangi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Dirren", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
