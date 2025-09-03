/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mohamed Osama Khaled",
  description:
    "Business and Technology professional specializing in Open Finance, digital transformation, and enterprise systems implementation. Experienced in bridging business needs with technical delivery through business analysis, product ownership, and DevOps practices. Proven track record in leading initiatives, CI/CD automation, and regulatory compliance projects, delivering measurable efficiency gains and cost reductions. Skilled at aligning stakeholders, driving process improvements, and enabling scalable, secure financial solutions.",
  og: {
    title: "Mohamed Osama Portfolio",
    type: "website",
    url: "https://MohamedOsamaKhaled.github.io",
  },
};

//Home Page
const greeting = {
  title: "Mohamed Osama",
  logo_name: "MohamedOsamaKhaled",
  nickname: "DevOps Engineer",
  subTitle:
    "Business and Technology professional specializing in Open Finance, digital transformation, and enterprise system implementation. Experienced in bridging business needs with technical delivery through business analysis, product ownership, and DevOps practices. Proven track record in leading initiatives, CI/CD automation, and regulatory compliance projects, delivering measurable efficiency gains and cost reductions. Skilled at aligning stakeholders, driving process improvements, and enabling scalable, secure financial solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1GOHMasK7jWHAI4uruZoOSCc8i5lYhVLh/view?usp=sharing",
  portfolio_repository: "https://github.com/MohamedOsamaKhaled/",
  githubProfile: "https://github.com/MohamedOsamaKhaled",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/MohamedOsamaKhaled/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mohamed-o-rashwan-49a338224/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:mo.osamakhaled@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "DevOps & Cloud Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        // {
        //   skillName: "OCI",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "OpenShift",
          fontAwesomeClassname: "simple-icons:redhat",
          style: {
            color: "#0089D6",
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
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "simple-icons:ansible",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "ion-logo-javascript",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Oracle-Database",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "ElasticSearch",
          fontAwesomeClassname: "simple-icons:elasticsearch",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Kibana",
          fontAwesomeClassname: "simple-icons:kibana",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        // {
        //   skillName: "Jira",
        //   fontAwesomeClassname: "simple-icons:jira",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
      ],
    },
    {
      title: "Software Implementation Consultant",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Implement the software releases, configuring and tuning the software in the customer environment, Fix the issues which happen during the implementation.",
        "⚡ Test the system and ensure that every part of the system functions properly.",
        "⚡ Train users and provide support to the customer onsite or remotely during acceptance testing Deployment of the system on the client site, Understanding the client infrastructure Ensuring the delivery of the requirements to clients, answer any question regarding the business or the solution Report any issues to the support team, ensure that the system is live and working correctly with no downtime.",
      ],
      softwareSkills: [
        {
          skillName: "Tomcat",
          fontAwesomeClassname: "logos-tomcat",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "WebSphere",
          fontAwesomeClassname: "simple-icons:ibm",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "WebLogic",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos-mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SQL-Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "ElasticSearch",
          fontAwesomeClassname: "simple-icons:elasticsearch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Kibana",
          fontAwesomeClassname: "simple-icons:kibana",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Windows",
          fontAwesomeClassname: "simple-icons:windows",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
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
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos-nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
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
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/MohamedOsamaKhaled/Certifications",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/MohamedOsamaKhaled/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/mo_osamakhaled",
    },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sadat Academy for Management Sceince",
      subtitle: "Bachelors Degree in BIS.",
      // logo_path: "iiitk_logo.png",
      alt_name: "Sadat Academy",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on DataBase, Cloud Computing, DevOps and Full Stack Development.",
      ],
      website_link: "http://sams.edu.eg/",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Database Development",
      subtitle: "- SQL Server",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://github.com/MohamedOsamaKhaled/Certifications/tree/main/Database",
      alt_name: "Microsoft",
      color_code: "#0C9D5899",
    },
    {
      title: "DevOps",
      subtitle: "- Cloud Computing",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://github.com/MohamedOsamaKhaled/Certifications/tree/main/DevOps%26SystemAdmin",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Power Apps",
      //subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://github.com/MohamedOsamaKhaled/Certifications/tree/main/MS_Apps",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Operating Systems",
      subtitle: "- Network & Scripting",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://github.com/MohamedOsamaKhaled/Certifications/tree/main/OS%26Network%26Scripting",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Cross Platform",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://github.com/MohamedOsamaKhaled/Certifications/tree/main/WebDevelopment",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Programming Languages",
      // subtitle: "- Cross Platform",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://github.com/MohamedOsamaKhaled/Certifications/tree/main/ProgrammingLanguages",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with Startups and Enterprise Companies as Full-Stack Developer, Designer, Software Technical Support, Software Implementation and DevOps Engineer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Manager / Products Senior Specialist",
          company: "Riyad Bank",
          company_url: "https://www.riyadbank.com/",
          //logo_path: "legato_logo.png",
          duration: "January 2025 - Present",
          location: "Riyadh, Saudi Arabia",
          description:
            "Responsible for driving the end-to-end delivery of Business Requirement Documents (BRDs) from initiation to approval, ensuring alignment with stakeholders, solution analysts, and product owners. I translated business needs into actionable requirements, user stories, mockups, and UAT test cases, enabling efficient product development and smooth handovers to design and solution teams. By mapping and redesigning business processes, I supported business case development and defined performance metrics to optimise outcomes. Additionally, I contributed to continuous improvement initiatives, enhancing efficiency, reducing costs, and improving productivity, while ensuring compliance with organisational policies, quality standards, and reporting requirements.",
          color: "#0879bf",
        },
        {
          title: "Senior Site Reliability Engineer",
          company: "Iotblue",
          company_url: "https://www.iotblue.com/",
          //logo_path: "legato_logo.png",
          duration: "September 2024 - January 2025",
          location: "Riyadh, Saudi Arabia",
          description:
            "As a skilled SRE professional, I provide onsite and remote software application support, analyzing and troubleshooting technical issues via phone, email, or in-person, and escalating problems when necessary. I offer 1st and 2nd level support for production issues across various applications and domains, monitor deployed systems and services, and ensure seamless updates to existing services. My responsibilities include writing comprehensive user manuals, documenting known issues with troubleshooting steps, and training clients on system usage and issue resolution. With a solid foundation in networking and IoT components, I perform advanced issue investigations, including code analysis, and review and test software component deployments against detailed checklists. I prepare daily reports on system and site-raised issues, collaborate with internal teams such as development, business, and QA, and maintain direct communication with end users and clients. Additionally, I write, modify, and execute SQL queries, reproduce client issues on different platforms for development teams, and manage and prioritize open issues while logging all related activities for efficient resolution.",
          color: "#0879bf",
        },
        {
          title: "Software Implementation",
          company: "Knowledge Net",
          company_url: "https://kn-it.com/",
          //logo_path: "legato_logo.png",
          duration: "May 2022 - September 2024",
          location: "Cairo, Egypt",
          description:
            "Implement the software releases, configuring and tuning the software in the customer environment, Fix the issues which happen during the implementation. Test the system and ensure that every part of the system functions properly. Train users and provide support to the customer onsite or remotely during acceptance testing Deployment of the system on the client site, Understanding the client infrastructure Ensuring the delivery of the requirements to clients, answer any question regarding the business or the solution Report any issues to the support team, ensure that the system is live and working correctly with no downtime.",
          color: "#0879bf",
        },
        {
          title: "Software Technical Support Advisor",
          company: "Safa Soft",
          company_url: "https://www.linkedin.com/company/safa-soft/about/",
          //logo_path: "muffito_logo.png",
          duration: "Mar 2022 - May 2022",
          location: "Cairo, Egypt",
          description:
            " Understanding the requirements of the users and helping them to understand the products provided by the company and how to deal with them. Solving the issues and problems that they face during using any product and escalating the issues to the development team when it’s need to code change and then deliver the latest release to our customers.",
          color: "#9b1578",
        },
        {
          title: "UI & UX Designer",
          company: "Freelancer",
          company_url: "https://www.linkedin.com/company/upwork/about/",
          //logo_path: "freecopy_logo.png",
          duration: "Jan 2020 - 2022",
          location: "Cairo, Egypt",
          description:
            "Designing highly attractive user interface for mobile and web applications, Customizing logo designs and building logos from scratch, Creating the flow of application functionalities to optimize user experience",
          color: "#fc1f20",
        },
        {
          title: "Full-Stack Developer",
          company: "Freelancer",
          company_url: "https://www.linkedin.com/company/upwork/about/",
          //logo_path: "freecopy_logo.png",
          duration: "Jan 2019 - Present",
          location: "Cairo, Egypt",
          description:
            "I helped a lot of Companies and Freelancers to build professional websites and portfolios to increase their business and make it visible.",
          color: "#fc1f20",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ME-removebg-preview.png",
    description:
      "I'm reachable on LinkedIn, WhatsApp, or Gmail, feel free to drop me a message—I'll respond within 24 hours. I can help you with Web & Mobile Applications, and navigating the realm of DevOps and Cloud.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://blogs.MohamedosamaKhaled.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle: "Cairo, Egypt",
    locality: "Cairo",
    country: "EG",
    region: "Egyption",
    // postalCode: "385520",
    streetAddress: "Cairo",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+201159691259 || +966536518382",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
};
