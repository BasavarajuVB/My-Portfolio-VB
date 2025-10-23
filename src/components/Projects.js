
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaExternalLinkAlt, FaGithub, FaDownload } from 'react-icons/fa';

const projectCategories = {
  fullStack: [
   
  //   {
  //     name: "Food Delivery App",
  //     deployedLink: "https://nrs-food-delivery-frontend.vercel.app/",
  //     githubLink: "https://github.com/NalagamdinniRaju/Food-Delivery-App.git",
  //     image: "https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303524.jpg?",  // Food delivery themed image
  //     description: "A comprehensive full-stack food delivery platform with secure authentication, shopping cart, and online payments.",
  //     features: [
  //       "User registration and authentication with JWT",
  //       "Stripe integration for secure online payments",
  //       "Dynamic food menu browsing",
  //       "Real-time order tracking",
  //       "Admin panel for menu and order management"
  //     ],
  //     technologies: ["React JS", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "REST API"]
  //   },
  //     {
  //   name: "Hospital Food Delivery Management System",
  //   deployedLink: "https://hospital-food-management-nrajus-projects.vercel.app/",
  //   githubLink: "https://github.com/NalagamdinniRaju/Hospital-Food-Management.git",
  //   image: "https://img.freepik.com/premium-photo/nurse-medical-coat-is-holding-tray-with-breakfast_179755-5329.jpg?",
  //   description: "A full-stack application for managing hospital meal deliveries, patient diets, and real-time order tracking.",
  //   features: [
  //     "Role-based dashboards for hospital managers, pantry staff, and delivery personnel",
  //     "Real-time meal tracking with WebSocket integration",
  //     "Secure authentication with JWT",
  //     "Admin panel for meal and order management"
  //   ],
  //   technologies: ["React JS", "Node.js", "Express", "MongoDB", "JWT", "WebSocket"]
  // },
  {
    name: "School Payment Management System",
    deployedLink: "https://manage-school-payments.netlify.app/",
    githubLink: "https://github.com/NalagamdinniRaju/School_Payment_Management.git",
    image: "https://img.freepik.com/premium-photo/woman-bar-paying-using-contactless-credit-card-she-is-leaning-it-pos-teminal-payments-technology-concept_1049504-637.jpg?", // Professional recruitment image
    description: "A comprehensive school payment management system to streamline transaction tracking and management.",
    features: [
      "JWT-based authentication",
      "Real-time transaction tracking",
      "CSV data import",
      "Advanced search and filtering functionalities",
      "Dynamic transaction status updates"
    ],
    technologies: ["React JS", "Node.js", "Express", "MongoDB", "JWT", "REST API"]
  },    
    {
      name: "Trendz-Buy",
      deployedLink: "https://nxttrendzrts.ccbp.tech/",
      githubLink: "https://github.com/raviteja-salva/nxt_trendz_website",
      image: "https://th.bing.com/th/id/R.82ba779360b50f5c461e8592fb7473d1?rik=RcI3k0vhEbR%2fpg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fe-commerce-png-sell-your-products-and-services-online-1000.png&ehk=LZ2GD%2fGQ98UUOsXo6cKf4wz84A1wac5zM6LprYBb79A%3d&risl=&pid=ImgRaw&r=0",
      //description: "A comprehensive e-commerce platform inspired by Amazon and Flipkart, featuring secure authentication, product browsing, and shopping cart functionality with modern React architecture.",
      description: "A secure, modern e-commerce platform inspired by Amazon and Flipkart, built with React JS.",
      features: [
        "JWT authentication for secure user sessions",
        "REST API integration for dynamic product data",
        "Responsive design for seamless mobile and desktop experience",
        "Product search, filtering, and sorting functionalities",
        "Shopping cart management with add/remove items",
        "User profile management and order history",
        "Category-based product browsing",
        "Real-time product availability updates"
      ],
      technologies: ["React JS", "Node.js", "Express", "MongoDB"],
      credentials: { username: "raja", password: "raja@2021" }
    },
    {
      name: "Job Posting Recruiter Portal",
      deployedLink: "https://cuvette-job-post-frontend.vercel.app/",
      githubLink: "https://github.com/NalagamdinniRaju/job-post-assignment.git",
      image: "https://img.freepik.com/free-photo/application-occupation-profession-job-seeker-concept_53876-122755.jpg?", // Professional recruitment image
      description: "A comprehensive web application for recruiters to manage job interviews and hiring processes efficiently.",
      features: [
        "Secure user authentication with email verification",
        "Create, manage, and track job interviews",
        "Dynamic interview status updates",
        "Email notifications for interview schedules",
        "Mobile-responsive dashboard"
      ],
      technologies: [
        "React JS", 
        "Node.js", 
        "Express", 
        "MongoDB", 
        "JWT", 
"Nodemailer",
        "REST API"
      ],
    },
    {
      name: "Advanced Todo Tasks Application",
      deployedLink: "https://todo-application-nrs.vercel.app/",
      githubLink: "https://github.com/NalagamdinniRaju/Todo-Web-Application.git",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613", // Todo list themed image
      description: "A comprehensive task management application with user authentication, task tracking, and profile management.",
      features: [
        "User registration and secure authentication",
        "Create, update, and track tasks",
        "Task status management",
        "Profile information updates",
        "Password change functionality",
        "Task statistics and productivity insights"
      ],
      technologies: [
        "React JS", 
        "Node.js", 
        "Express", 
        "MongoDB", 
        "JWT", 
        "REST API"
      ],
   
    },
      {
        "name": "User Management System",
        "deployedLink": "https://user-management-system-frontend-rho.vercel.app/",
        "githubLink": "https://github.com/NalagamdinniRaju/User-Management-System-.git",
        "image": "https://img.freepik.com/free-vector/admin-dashboard-concept-illustration_114360-805.jpg",
        "description": "A full-stack User Management Application enabling efficient management of user records...",
        "features": [
          "Frontend Features:",
          "🔍 Advanced Search Functionality",
          "📄 Pagination for user listing",
          "🖊️ User Creation and Editing",
          "🗑️ User Deletion",
          "📱 Responsive Design",
          "🚨 Form Validation with real-time feedback",
          "🔔 Toast Notifications for status updates",
          "Backend Features:",
          "💾 SQLite Database Integration for user data",
          "🔒 Unique Email Constraint for data integrity",
          "📊 Paginated User Retrieval for efficient data access",
          "🛡️ Robust Error Handling mechanisms"
        ],
        "technologies": [
          "Frontend:",
          "React",
    
          "CSS (Custom Styling)",
          "Backend:",
          "Express.js",
          "SQLite3",
        
          "Node.js"
        ]
      },
    {
      name: "Personal Notes Manager",
      deployedLink: "https://personal-notes-manager-eta.vercel.app/",
      githubLink: "https://github.com/NalagamdinniRaju/Persoanl-Notes-Manager.git",
      image: "https://img.freepik.com/free-vector/appointment-booking-with-man-smartphone_23-2148559015.jpg?",
      description: "A full-stack note-taking application with real-time updates, search functionality, and category management.",
      features: [
        "Create, read, update, and delete notes",
        "Real-time search and category filtering",
        "Responsive design with smooth animations",
        "Toast notifications for user actions",
        "Category-based organization system"
      ],
      technologies: [
        "React JS",
        "Node.js",
        "Express",
        "MongoDB",
        "Framer Motion",
        "React Toastify",
        "REST API"
      ],
    
    }
      
    
    

  ],
  frontend: [
    {
  name: "Modern Task Management System",
  deployedLink: "https://task-management-nrs.vercel.app/",
  githubLink: "https://github.com/NalagamdinniRaju/Task-Management.git",
  image: "https://res.cloudinary.com/dwiq4s5ut/image/upload/v1738104172/Screenshot_748_k9dqsc.png", // Updated image link
  description:" A modern task management app in React with Kanban-style organization and drag-and-drop functionality.",
  features: [
    "Kanban-style task organization with three columns",
    "Drag-and-drop task movement",
    "Real-time task counting and visual progress tracking",
    "Dark/Light theme toggle with modern UI",
    "Priority color coding and due date scheduling",
    "Toast notifications for task operations",
    "Local storage persistence with auto-save",
    "Responsive design across devices"
  ],
  technologies: [
    "React.js", "Context API", "CSS Modules", 
    "Framer Motion", "React Hot Toast", 
    "React Icons", "LocalStorage API", 
    "CSS Custom Properties"
  ]
}
,
{
  name: "Telegram Mini App - Web3 Platform",
  deployedLink: "https://telegram-mini-app-lyart-one.vercel.app/",
  githubLink: "https://github.com/BasavarajuVB/Telegram-Mini-App",
  image: "https://img.freepik.com/free-vector/telegram-bot-concept-illustration_114360-1551.jpg?",
  description: "Developed a Telegram mini application using React JS, seamlessly integrated walletes",
  features: [
    "Telegram WebApp integration",
    "Web3 wallet integration (WalletConnect/TON)",
    "Crypto-based referrals",
    "Real-time transaction notifications",
    "Firebase-backed data flows"
  ],
  technologies: [
    "React", "JavaScript", "CSS", "Firebase",
    "Tailwind CSS", "Web3", "TON/WalletConnect",
    "Canvas", "React Icons"
  ]
}
,
{
  name: "User Management Application",
  deployedLink: "https://user-management-dashboard-nrs.vercel.app/",
  githubLink: "https://github.com/NalagamdinniRaju/User-Management-Dashboard-.git",
  image: "https://res.cloudinary.com/dwiq4s5ut/image/upload/v1744621166/Screenshot_881_kl4qp5.png",
  description: "A user-friendly React app for managing user details",
  features: [
    "👤 User CRUD Operations (View, Add, Edit, Delete)",
    "🌐 API integration with JSONPlaceholder (GET, POST, PUT, DELETE)",
    "🔍 Real-time Search by Name or Email",
    "📊 Pagination for large user datasets",
    "📝 Client-side Form Validation",
    "📄 Download user info as styled PDF with jsPDF",
    
  ],
  technologies: [
    "React.js", "Tailwind CSS", "Axios",
    "react-toastify", "jsPDF", "JSONPlaceholder"
  ]
}
,
  {
      name: "Jobby App",
      deployedLink: "https://nrs.ccbp.tech/",
      githubLink: "",
      image: "https://specials-images.forbesimg.com/imageserve/6010706b32cbb402c830ace5/960x0.jpg?fit=scale",
      // description: "A job search and filtering application enabling user authentication with JWT tokens and smooth navigation using React Router.",
      features: [
        "User authentication with JWT tokens",
        "Job search and filtering functionality",
        "Navigation with React Router",
      ],
      technologies: ["React JS", "JavaScript", "CSS", "Bootstrap", "REST API"],
      credentials: { username: "raja", password: "raja@2021" }

    },
   
    {
      name: "Quick Todo Application",
      deployedLink: "https://nrs-task-tracker.vercel.app/",
      githubLink: "https://github.com/NalagamdinniRaju/Task-Tracker-.git",
      image: "https://img.freepik.com/free-vector/add-tasks-concept-illustration_114360-4875.jpg?t",
      description: "A robust task tracking system with CRUD capabilities for managing tasks efficiently.",
      features: [
        "Create, Read, Update, Delete (CRUD) tasks",
        "Secure task persistence with local storage",
        "User-friendly task management interface"
      ],
      technologies: ["React JS", "JavaScript", "CSS", "Local Storage"]
    },
  
    {
      name: "Memory Match Game",
      deployedLink: "https://nrsmatchgame.ccbp.tech/",
      // githubLink: "", // Add GitHub link if available
      image: "https://img.freepik.com/free-vector/hand-drawn-memory-game-card_23-2150138546.jpg?", // Game themed image
      description: "Interactive memory matching game with time-based challenge and scoring mechanism.",
      features: [
        "One-minute time limit",
        "Point-based scoring system", 
        "Dynamic image matching gameplay",
        "Real-time score tracking",
        "Responsive design"
      ],
      technologies: [
        "React JS", 
        "JavaScript", 
        "CSS", 
        "HTML"
      ]
    },
    {
      name: "Rock Paper Scissors Game",
      deployedLink: "https://rajurockppss.ccbp.tech/",
      githubLink: "", // Add GitHub link if available
      image: "https://img.freepik.com/free-vector/rock-paper-scissors-banners-with-hand-gestures_107791-10947.jpg?", // Game themed image
      description: "Interactive Rock Paper Scissors game with real-time scoring and user interactions.",
      features: [
        "Player vs Computer gameplay",
        "Real-time score tracking",
        "Dynamic result display",
        "Game rule implementation",
        "Responsive design"
      ],
      technologies: [
        "React JS", 
        "JavaScript", 
        "CSS", 
        "HTML"
      ]
    },
    {
      name: "IPL Dashboard",
      deployedLink: "https://nrsipl.ccbp.tech/",
      githubLink: "", // Add GitHub link if available
      image: "https://img.freepik.com/free-photo/cricket-match-with-player_23-2151702186.jpg?", // Cricket themed image
      description: "Interactive IPL (Indian Premier League) dashboard showcasing team information and match details.",
      features: [
        "Real-time team data fetching",
        "Team-wise match details",
        "Dynamic routing",
        "Loader for data retrieval",
        "Responsive design"
      ],
      technologies: [
        "React JS", 
        "React Router", 
        "JavaScript", 
        "CSS", 
        "REST API"
      ]
    },
    {
      name: "Nxt Watch (Youtube Clone)",
      deployedLink: "https://nrsnxtwatch.ccbp.tech/",
      githubLink: "", // Add GitHub link if available
      image: "https://img.freepik.com/free-vector/youtube-player-device-with-flat-design_23-2147844065.jpg?", // Platform themed image
      //  description: "Developed Nxt Watch, a YouTube-inspired platform using React.",
      features: [
        "JWT-based secure authentication",
        "Video browsing by categories (Trending, Gaming, Entertainment)",
        "Search functionality and detailed video views",
        "Save videos to watch later",
        "Theme customization with a toggle option",
        "Responsive design and smooth navigation using React Router"
      ],
      technologies: ["React JS", "JavaScript", "CSS", "Bootstrap", "REST API"],
      credentials: { username: "raja", password: "raja@2021" }

    },
    {
      name: "Emoji Game",
      deployedLink: "https://nrajuemojigame.ccbp.tech/",
      githubLink: "", // Add the GitHub link if available
      image: "https://img.freepik.com/free-vector/realistic-world-emoji-day-background-with-emoticons_23-2149430509.jpg",
      description: "Developed an interactive Emoji Game where users aim to click each emoji only once to win the game. The app dynamically tracks scores, updates the top score, and provides engaging feedback based on user interactions.",
      features: [
        "Dynamic score tracking and top score updates",
        "Win or Lose Game views based on user actions",
        "Reset game state while retaining top score",
        "Responsive design for a seamless experience across devices",
        "Emoji list passed dynamically as props for reusability"
      ],
      technologies: [
        "React JS",
        "JavaScript",
        "CSS",
        "HTML"
      ]
    },
    {
      "name": "Wikipedia",
      "deployedLink": "https://nrswikipidia.ccbp.tech/",
      "githubLink": "https://github.com/<your-github-repo-link>",
      "image": "https://img.freepik.com/premium-vector/search-concept-with-icon-design_24911-17929.jpg?w=740",  
      "description": "A dynamic Wikipedia-like application providing easy access to curated information through an intuitive interface.",
      "features": [
        "Search and retrieve detailed articles using an API",
        "Interactive and user-friendly navigation",
        "Efficient and responsive design for seamless browsing"
      ],
      "technologies": ["HTML", "CSS", "JavaScript", "API"]
    }
    ,
    {
      "name": "Fruits Delivery",
      "deployedLink": "https://nrsfruitsdel.ccbp.tech/",
      "githubLink": "https://github.com/<your-github-repo-link>",
      "image": "https://img.freepik.com/premium-photo/delivery-man-deliver-food-order-customer-isolated-white-background_8595-18561.jpg?",
      "description": "A vibrant landing page showcasing a seamless fruit delivery service, designed to provide users with fresh fruits at their doorstep.",
      "features": [
        "Attractive landing page with appealing visuals",
        "Details about various fruit options and delivery services",
        "Responsive design ensuring accessibility across all devices"
      ],
      "technologies": ["HTML", "CSS", "JavaScript"]
    }
    
    
 
  ],
  backend: [
    {
      name: "Task Management Backend",
      deployedLink: "https://github.com/NalagamdinniRaju/Task-Management-.git",
      githubLink: "https://github.com/NalagamdinniRaju/Task-Management-.git",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db", // Task management themed image
      description: "Robust backend RESTful API for task management with user authentication and CRUD operations.",
      features: [
        "User registration and authentication",
        "JWT-based token authentication",
        "Create, Read, Update, Delete (CRUD) task operations",
        "Secure password hashing",
        "SQLite database integration",
        "Comprehensive API testing suite"
      ],
      technologies: [
        "Node.js", 
        "Express", 
        "SQLite", 
        "JWT", 
        "Bcrypt", 
        "Jest", 
        "Supertest",
        "REST API"
      ],
    },
    {
      name: "Product Value API",
      deployedLink: "https://github.com/NalagamdinniRaju/Product-Api.git",
      githubLink: "https://github.com/NalagamdinniRaju/Product-Api.git",
      image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149377874.jpg?", // Product inventory themed image
      description: "A lightweight RESTful API for managing product inventory and calculating total product value using Node.js and SQLite.",
      features: [
        "Product inventory management",
        "Dynamic total value calculation",
        "SQLite database integration",
        "Simple and efficient API endpoints",
        "Automated product value tracking"
      ],
      technologies: [
        "Node.js", 
        "Express", 
        "SQLite", 
        "JavaScript ES6",
        "REST API"
      ],
    }
    
    
    
  ]
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;



const Container = styled.section`
  padding: 1rem 2rem;
  background: transparent;
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  color: #64ffda;
  margin-bottom: 4rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);
  }
`;



const ProjectNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const NavButton = styled.button`
  background: ${props => props.$active ? 'rgba(100, 255, 218, 0.1)' : 'transparent'};
  color: #64ffda;
  border: 1px solid rgba(100, 255, 218, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
  }
`;
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.article`
  position: relative;
  background: rgba(17, 34, 64, 0.8);
  border-radius: 0.8rem;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.4s ease-in-out;
  height: 420px; // Reduced height
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 8px 25px -12px rgba(100, 255, 218, 0.2);
  }
`;

const ResumeBar = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 1200px;
  margin: 0 auto 1rem;
  padding: 0 1rem;
`;

const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  height: 150px; // Reduced height
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: #e6f1ff;
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 0.8rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.25rem 0.5rem;
  border-radius: 99px;
  font-size: 0.6rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 0.5rem;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: 99px;
  font-size: 0.7rem;
  text-decoration: none;
  transition: all 0.3s ease;
  background: ${props => props.$primary ? 'rgba(100, 255, 218, 0.1)' : 'transparent'};
  color: #64ffda;
  border: 1px solid rgba(100, 255, 218, 0.3);

  svg {
    font-size: 0.7rem;
  }
`;

const Credentials = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: rgba(100, 255, 218, 0.05);
  border-radius: 0.4rem;
  font-size: 0.7rem;

  p {
    color: #8892b0;
    margin: 0;
    
    span {
      color: #64ffda;
      font-weight: 500;
    }
  }
`;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('fullStack');

  const renderProjects = (category) => {
    const categoryProjects = projectCategories[category];
    
    return (
      <ProjectsGrid>
        {categoryProjects.map((project, index) => (
          <ProjectCard key={index} $index={index}>
           <ProjectImage>
              <img src={project.image} alt={project.name} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.technologies.map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
              </TechStack>
              {project.credentials && (
                <Credentials>
                  <p>
                    Demo Credentials: <br />
                    <span>Username:</span> {project.credentials.username} <br />
                    <span>Password:</span> {project.credentials.password}
                  </p>
                </Credentials>
              )}
              <ProjectLinks>
                <LinkButton
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  $primary
                >
                  <FaExternalLinkAlt /> Live Demo
                </LinkButton>
                <LinkButton
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Code
                </LinkButton>
              </ProjectLinks>
         
            </ProjectContent>          </ProjectCard>
        ))}
      </ProjectsGrid>
    );
  };

  return (
    <Container>
      <SectionTitle>Featured Projects</SectionTitle>
      
      <ProjectNavigation>
        <NavButton 
          $active={activeCategory === 'fullStack'}
          onClick={() => setActiveCategory('fullStack')}
        >
          Full Stack
        </NavButton>
        <NavButton 
          $active={activeCategory === 'frontend'}
          onClick={() => setActiveCategory('frontend')}
        >
          Frontend
        </NavButton>
        <NavButton 
          $active={activeCategory === 'backend'}
          onClick={() => setActiveCategory('backend')}
        >
          Backend
        </NavButton>
      </ProjectNavigation>
      {renderProjects(activeCategory)}
    </Container>
  );
};

export default Projects;
