// Enhanced College Club Management System JavaScript - Club Cards Enhanced

// Sample events data
const eventsData = [
  {
    title: "Annual Tech Fest 2025",
    club: "Computer Science Club",
    date: "October 15, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Main Auditorium",
    description:
      "Join us for an exciting day of technology presentations, coding competitions, and workshops.",
    status: "upcoming",
    icon: "bi-cpu",
    color: "primary",
  },
  {
    title: "Cultural Night",
    club: "Arts & Culture Society",
    date: "September 28, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "College Grounds",
    description:
      "Experience the rich cultural diversity of our college through music, dance, and art performances.",
    status: "upcoming",
    icon: "bi-palette",
    color: "info",
  },
  {
    title: "Football Championship",
    club: "Sports Club",
    date: "September 22, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Sports Complex",
    description:
      "Inter-college football championship finals. Come support our team!",
    status: "ongoing",
    icon: "bi-trophy",
    color: "warning",
  },
  {
    title: "Entrepreneurship Workshop",
    club: "Business Club",
    date: "October 5, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Conference Hall",
    description:
      "Learn from successful entrepreneurs about starting your own business.",
    status: "upcoming",
    icon: "bi-lightbulb",
    color: "success",
  },
];

// Enhanced clubs data with 11 comprehensive clubs
const clubsData = [
  {
    name: "Akatsuki Coding Club",
    description:
      "Competitive programming excellence and algorithmic problem-solving mastery",
    president: "Arjun Sharma",
    members: 120,
    founded: "2019",
    category: "Programming",
    focusArea: "Competitive programming, data structures, algorithms",
    icon: "bi-code-slash",
    color: "primary",
    activities: [
      "Weekly coding sessions & peer programming",
      "Internal coding contests, CodeChef competitions",
      "Participation in platforms like LeetCode, HackerRank",
    ],
    outcomes: [
      "Enhanced placement preparation",
      "Top ranks in university-level tech contests",
      "GATE & GRE technical readiness",
    ],
    meetingDay: "Tuesdays",
    meetingTime: "6:00 PM",
    location: "Computer Lab 2",
  },
  {
    name: "Plug Pose – Hardware Innovation Club",
    description: "Electronics prototyping and embedded systems innovation hub",
    president: "Priya Patel",
    members: 85,
    founded: "2020",
    category: "Hardware",
    focusArea: "Electronics prototyping, embedded systems, PCB design",
    icon: "bi-cpu-fill",
    color: "warning",
    activities: [
      "Hardware bootcamps and soldering workshops",
      "IoT mini-project development",
      "Interfacing microcontrollers with sensors",
    ],
    outcomes: [
      "Project-based learning for 2nd & 3rd-year students",
      "Participation in Smart India Hackathon hardware editions",
      "Patent filing and product showcase",
    ],
    meetingDay: "Saturdays",
    meetingTime: "2:00 PM",
    location: "Electronics Lab",
  },
  {
    name: "Data Polaris",
    description:
      "Data science excellence through analytics and visualization mastery",
    president: "Rahul Kumar",
    members: 95,
    founded: "2018",
    category: "Data Science",
    focusArea: "Data science, data visualization, analytics, Python",
    icon: "bi-graph-up",
    color: "info",
    activities: [
      "Kaggle competitions",
      "Workshops on data cleaning, visualization, ML basics",
      "Guest sessions from data analysts and alumni",
    ],
    outcomes: [
      "MOOC certifications (NPTEL, Coursera)",
      "Internship opportunities in analytics and fintech",
      "Industry-ready data portfolios",
    ],
    meetingDay: "Wednesdays",
    meetingTime: "4:30 PM",
    location: "Data Analytics Lab",
  },
  {
    name: "Google Developer Student Club (GDSC)",
    description: "Google technologies and modern web development community",
    president: "Sneha Gupta",
    members: 140,
    founded: "2017",
    category: "Technology",
    focusArea: "Android, cloud computing, Firebase, web development",
    icon: "bi-google",
    color: "success",
    activities: [
      "Hackathons (e.g., Solution Challenge)",
      "Hands-on labs using Google Cloud Platform (GCP)",
      "GitHub collaboration and Open Source participation",
    ],
    outcomes: [
      "End-to-end app development experience",
      "Resume-grade projects hosted online",
      "Mentoring from Google Developer Experts (GDEs)",
    ],
    meetingDay: "Fridays",
    meetingTime: "5:00 PM",
    location: "Innovation Hub",
  },
  {
    name: "Fetch-AI",
    description:
      "Artificial Intelligence and Machine Learning research pioneers",
    president: "Vikash Singh",
    members: 110,
    founded: "2019",
    category: "AI/ML",
    focusArea: "Machine Learning, Deep Learning, AI model building",
    icon: "bi-robot",
    color: "danger",
    activities: [
      "AI bootcamps, Python ML sessions",
      "Building neural network models in TensorFlow, Keras",
      "AI for social good challenges",
    ],
    outcomes: [
      "Strong foundation for research and higher education",
      "Student participation in AI-based national events",
      "Mini-projects showcased on GitHub & Kaggle",
    ],
    meetingDay: "Thursdays",
    meetingTime: "3:30 PM",
    location: "AI Research Center",
  },
  {
    name: "Motorsports Club",
    description: "Automotive engineering and mechanical innovation excellence",
    president: "Rohan Mehta",
    members: 75,
    founded: "2016",
    category: "Engineering",
    focusArea: "Automotive engineering, vehicle design, mechanical innovation",
    icon: "bi-gear-fill",
    color: "dark",
    activities: [
      "Design & fabrication of go-karts or formula student prototypes",
      "Participation in SAE BAJA & E-bike challenges",
      "Workshops on CAD, ANSYS, and simulation",
    ],
    outcomes: [
      "Experiential learning in mechanical and automotive domains",
      "Industry-level teamwork and documentation experience",
      "Recognition at national-level engineering expos",
    ],
    meetingDay: "Sundays",
    meetingTime: "10:00 AM",
    location: "Workshop Bay",
  },
  {
    name: "Club Samarpan (NSS Unit)",
    description: "Community service and social development initiative",
    president: "Anjali Sharma",
    members: 200,
    founded: "2015",
    category: "Social Service",
    focusArea: "Community service, rural development, social campaigns",
    icon: "bi-heart-fill",
    color: "danger",
    activities: [
      "Blood donation camps, health checkups",
      "Cleanliness drives, voter awareness campaigns",
      "Teaching underprivileged children and digital literacy",
    ],
    outcomes: [
      "Over 300 students engaged annually",
      "Real-life exposure to social issues",
      "Recognitions from local governance bodies",
    ],
    meetingDay: "Saturdays",
    meetingTime: "9:00 AM",
    location: "Community Center",
  },
  {
    name: "Green Club / Eco Warriors",
    description: "Environmental protection and sustainability champions",
    president: "Kavya Reddy",
    members: 130,
    founded: "2018",
    category: "Environment",
    focusArea: "Environmental protection, sustainability, awareness",
    icon: "bi-tree-fill",
    color: "success",
    activities: [
      "Tree plantation drives, e-waste awareness",
      "Campus cleanliness campaigns",
      "Plastic-free and water conservation initiatives",
    ],
    outcomes: [
      "Eco-conscious culture among students",
      "Support from NGOs and municipal bodies",
      "Community and school-level outreach",
    ],
    meetingDay: "Sundays",
    meetingTime: "8:00 AM",
    location: "Eco Garden",
  },
  {
    name: "Antarnaad",
    description: "Performing arts excellence and creative expression platform",
    president: "Aditi Joshi",
    members: 160,
    founded: "2014",
    category: "Performing Arts",
    focusArea: "Performing arts – music, drama, dance",
    icon: "bi-music-note-beamed",
    color: "info",
    activities: [
      "Annual cultural fest performances",
      "Drama competitions, street plays",
      "Music jam sessions, choreography teams",
    ],
    outcomes: [
      "Prizes in university youth festivals",
      "Creative expression and personality development",
      "Confidence-building and stage presence",
    ],
    meetingDay: "Fridays",
    meetingTime: "6:30 PM",
    location: "Auditorium",
  },
  {
    name: "Reflection (Fine Arts Club)",
    description: "Visual arts mastery and creative design innovation",
    president: "Arya Krishnan",
    members: 90,
    founded: "2017",
    category: "Fine Arts",
    focusArea: "Drawing, painting, sketching, model making",
    icon: "bi-palette-fill",
    color: "warning",
    activities: [
      "Rangoli competitions, wall painting, tech art",
      "Departmental décor during fests",
      "Poster making for awareness campaigns",
    ],
    outcomes: [
      "Recognition for aesthetic contributions on campus",
      "Portfolio-building for design careers",
      "Engagement with visual arts exhibitions",
    ],
    meetingDay: "Wednesdays",
    meetingTime: "5:30 PM",
    location: "Art Studio",
  },
  {
    name: "Athleema Sports Club",
    description: "Physical fitness excellence and competitive sports mastery",
    president: "Karan Agarwal",
    members: 180,
    founded: "2013",
    category: "Sports",
    focusArea: "Physical fitness, athletics, team sports",
    icon: "bi-trophy-fill",
    color: "primary",
    activities: [
      "Annual Sports Day, inter-collegiate tournaments",
      "Coaching in volleyball, cricket, kabaddi, badminton",
      "Chess and carrom competitions",
    ],
    outcomes: [
      "State and university-level medals",
      "Student-athletes maintaining academic balance",
      "Focus on health, wellness, and teamwork",
    ],
    meetingDay: "Daily",
    meetingTime: "6:00 AM & 5:00 PM",
    location: "Sports Complex",
  },
];

// Sample members data
const membersData = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "President",
    club: "Computer Science Club",
    year: "Final Year",
    major: "Computer Science",
    email: "alex.johnson@college.edu",
    joinedDate: "August 2022",
    achievements: ["Best Coder Award 2024", "Hackathon Winner"],
    avatar: "bi-person-circle",
    color: "primary",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "President",
    club: "Arts & Culture Society",
    year: "Third Year",
    major: "Fine Arts",
    email: "sarah.williams@college.edu",
    joinedDate: "September 2022",
    achievements: ["Art Exhibition Winner", "Cultural Night Organizer"],
    avatar: "bi-person-circle",
    color: "info",
  },
  {
    id: 3,
    name: "Mike Chen",
    role: "President",
    club: "Sports Club",
    year: "Final Year",
    major: "Sports Science",
    email: "mike.chen@college.edu",
    joinedDate: "January 2022",
    achievements: ["Football Captain", "Swimming Champion"],
    avatar: "bi-person-circle",
    color: "warning",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Vice President",
    club: "Computer Science Club",
    year: "Third Year",
    major: "Computer Engineering",
    email: "emily.davis@college.edu",
    joinedDate: "February 2023",
    achievements: ["Coding Competition Winner", "App Developer"],
    avatar: "bi-person-circle",
    color: "primary",
  },
];

// DOM Elements
const loginPage = document.getElementById("loginPage");
const homepage = document.getElementById("homepage");
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");
const logoutBtn = document.getElementById("logoutBtn");
const eventsContainer = document.getElementById("eventsContainer");
const clubsContainer = document.getElementById("clubsContainer");
const membersContainer = document.getElementById("membersContainer");

// Demo credentials
const validCredentials = {
  username: "admin",
  password: "password123",
};

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS animations
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: "ease-out-cubic",
  });

  // Check if user is already logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    showHomepage();
  } else {
    showLoginPage();
  }

  // Event listeners
  loginForm.addEventListener("submit", handleLogin);
  logoutBtn.addEventListener("click", handleLogout);
});

function showHomepage() {
  console.log("🏠 showHomepage called");
  loginPage.classList.remove("active");
  homepage.classList.add("active");

  // Load all sections
  console.log("📅 Loading events data...");
  loadEventsWithAnimation();
  console.log("🏫 Loading clubs data...");
  loadClubsWithAnimation();
  console.log("👥 Loading members data...");
  loadMembersWithAnimation();

  // Update welcome message
  updateWelcomeMessage();

  // Refresh AOS animations
  setTimeout(() => {
    AOS.refresh();
  }, 100);
}

function showLoginPage() {
  homepage.classList.remove("active");
  loginPage.classList.add("active");
}

function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Clear previous error messages
  hideError();

  // Validate credentials
  if (
    username === validCredentials.username &&
    password === validCredentials.password
  ) {
    // Successful login
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    showHomepage();
    loginForm.reset();
  } else {
    // Failed login
    showError("Invalid username or password. Please try again.");
  }
}

function handleLogout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  showLoginPage();
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

function hideError() {
  errorMessage.style.display = "none";
}

function updateWelcomeMessage() {
  const username = localStorage.getItem("username");
  const welcomeElement = document.querySelector(".welcome-message");
  if (welcomeElement && username) {
    welcomeElement.textContent = `Welcome back, ${username}!`;
  }
}

// Load events with animation
function loadEventsWithAnimation() {
  console.log(
    "📅 loadEventsWithAnimation called, events count:",
    eventsData.length
  );
  console.log("📅 eventsContainer exists:", !!eventsContainer);

  if (!eventsContainer) return;
  eventsContainer.innerHTML = "";

  eventsData.forEach((event, index) => {
    setTimeout(() => {
      console.log(`📅 Creating event card ${index + 1}:`, event.title);
      const eventCard = createEventCard(event, index);
      eventsContainer.appendChild(eventCard);
    }, index * 150);
  });
}

// Load clubs with animation
function loadClubsWithAnimation() {
  console.log(
    "🏫 loadClubsWithAnimation called, clubs count:",
    clubsData.length
  );
  console.log("🏫 clubsContainer exists:", !!clubsContainer);

  if (!clubsContainer) return;
  clubsContainer.innerHTML = "";

  clubsData.forEach((club, index) => {
    setTimeout(() => {
      console.log(`🏫 Creating club card ${index + 1}:`, club.name);
      const clubCard = createEnhancedClubCard(club, index);
      clubsContainer.appendChild(clubCard);
    }, index * 200);
  });
}

// Load members with animation
function loadMembersWithAnimation() {
  console.log(
    "👥 loadMembersWithAnimation called, members count:",
    membersData.length
  );
  console.log("👥 membersContainer exists:", !!membersContainer);

  if (!membersContainer) return;
  membersContainer.innerHTML = "";

  membersData.forEach((member, index) => {
    setTimeout(() => {
      console.log(`👥 Creating member card ${index + 1}:`, member.name);
      const memberCard = createMemberCard(member, index);
      membersContainer.appendChild(memberCard);
    }, index * 150);
  });
}

// Create event card
function createEventCard(event, index) {
  const colDiv = document.createElement("div");
  colDiv.className = "col-lg-4 col-md-6 mb-4";

  colDiv.innerHTML = `
    <div class="card h-100 shadow-sm" style="border-left: 4px solid var(--bs-${event.color});">
      <div class="card-header bg-${event.color} text-white">
        <h5 class="card-title mb-0">
          <i class="${event.icon} me-2"></i>${event.title}
        </h5>
      </div>
      <div class="card-body">
        <p class="card-text mb-2"><strong>Club:</strong> ${event.club}</p>
        <p class="card-text mb-2"><strong>Date:</strong> ${event.date}</p>
        <p class="card-text mb-2"><strong>Time:</strong> ${event.time}</p>
        <p class="card-text mb-2"><strong>Location:</strong> ${event.location}</p>
        <p class="card-text">${event.description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="badge bg-${event.color}">${event.status}</span>
          <button class="btn btn-${event.color} btn-sm" onclick="showEventDetails('${event.title}')">
            View Details
          </button>
        </div>
      </div>
    </div>
  `;

  return colDiv;
}

// Create enhanced club card with focus area, activities, and outcomes
function createEnhancedClubCard(club, index) {
  const colDiv = document.createElement("div");
  colDiv.className = "col-lg-4 col-md-6 mb-4";

  colDiv.innerHTML = `
    <div class="card h-100 shadow-lg border-0" style="border-left: 5px solid var(--bs-${
      club.color
    }) !important; border-radius: 15px;">
      <div class="card-header bg-${
        club.color
      } text-white" style="border-radius: 15px 15px 0 0;">
        <div class="d-flex align-items-center">
          <div class="me-3">
            <i class="${club.icon}" style="font-size: 2.5rem;"></i>
          </div>
          <div>
            <h5 class="card-title mb-1 fw-bold">${club.name}</h5>
            <small class="text-white-50">${club.category} • ${
    club.members
  } Members</small>
          </div>
        </div>
      </div>
      <div class="card-body p-4">
        <!-- Focus Area -->
        <div class="mb-3">
          <h6 class="text-${club.color} fw-bold mb-2">
            <i class="bi bi-bullseye me-2"></i>Focus Area
          </h6>
          <p class="text-muted small">${club.focusArea}</p>
        </div>
        
        <!-- Description -->
        <div class="mb-3">
          <p class="card-text text-dark">${club.description}</p>
        </div>
        
        <!-- Activities -->
        <div class="mb-3">
          <h6 class="text-${club.color} fw-bold mb-2">
            <i class="bi bi-lightning me-2"></i>Key Activities
          </h6>
          <div class="d-flex flex-wrap gap-1">
            ${club.activities
              .slice(0, 3)
              .map(
                (activity) =>
                  `<span class="badge bg-${club.color} bg-opacity-10 text-${club.color} small px-2 py-1">${activity}</span>`
              )
              .join("")}
            ${
              club.activities.length > 3
                ? `<span class="badge bg-secondary bg-opacity-10 text-secondary small px-2 py-1">+${
                    club.activities.length - 3
                  } more</span>`
                : ""
            }
          </div>
        </div>
        
        <!-- Key Outcomes -->
        <div class="mb-4">
          <h6 class="text-${club.color} fw-bold mb-2">
            <i class="bi bi-trophy me-2"></i>Key Outcomes
          </h6>
          <div class="outcomes-list">
            ${club.outcomes
              .slice(0, 3)
              .map(
                (outcome) =>
                  `<div class="d-flex align-items-center mb-1">
                <i class="bi bi-check-circle-fill text-success me-2" style="font-size: 0.8rem;"></i>
                <small class="text-muted">${outcome}</small>
              </div>`
              )
              .join("")}
            ${
              club.outcomes.length > 3
                ? `<div class="d-flex align-items-center mb-1">
                <i class="bi bi-plus-circle text-secondary me-2" style="font-size: 0.8rem;"></i>
                <small class="text-secondary">${
                  club.outcomes.length - 3
                } more achievements</small>
              </div>`
                : ""
            }
          </div>
        </div>
        
        <!-- Meeting Info & Action -->
        <div class="d-flex justify-content-between align-items-center">
          <div class="text-center">
            <small class="text-muted d-block">Founded ${club.founded}</small>
            <small class="text-${club.color}">${club.meetingDay}s ${
    club.meetingTime
  }</small>
          </div>
          <button class="btn btn-${
            club.color
          } btn-sm px-3 shadow-sm" onclick="showClubDetails('${club.name}')">
            <i class="bi bi-people me-1"></i>Join Club
          </button>
        </div>
      </div>
    </div>
  `;

  return colDiv;
}

// Create member card
function createMemberCard(member, index) {
  const colDiv = document.createElement("div");
  colDiv.className = "col-lg-4 col-md-6 mb-4";

  colDiv.innerHTML = `
    <div class="card h-100 shadow-sm" style="border-left: 4px solid var(--bs-${
      member.color
    });">
      <div class="card-header bg-${member.color} text-white text-center">
        <i class="${member.avatar}" style="font-size: 3rem;"></i>
        <h5 class="card-title mb-0 mt-2">${member.name}</h5>
      </div>
      <div class="card-body">
        <p class="card-text mb-2"><strong>Role:</strong> ${member.role}</p>
        <p class="card-text mb-2"><strong>Club:</strong> ${member.club}</p>
        <p class="card-text mb-2"><strong>Year:</strong> ${member.year}</p>
        <p class="card-text mb-2"><strong>Major:</strong> ${member.major}</p>
        <p class="card-text mb-3"><strong>Email:</strong> ${member.email}</p>
        <div class="mb-3">
          <strong>Achievements:</strong>
          <div class="mt-1">
            ${member.achievements
              .map(
                (achievement) =>
                  `<span class="badge bg-light text-dark me-1 mb-1">${achievement}</span>`
              )
              .join("")}
          </div>
        </div>
        <button class="btn btn-${
          member.color
        } btn-sm w-100" onclick="showMemberDetails(${member.id})">
          View Profile
        </button>
      </div>
    </div>
  `;

  return colDiv;
}

// Simple modal functions
function showEventDetails(eventTitle) {
  const event = eventsData.find((e) => e.title === eventTitle);
  if (!event) return;

  alert(
    `Event: ${event.title}\nDate: ${event.date}\nTime: ${event.time}\nLocation: ${event.location}\nDescription: ${event.description}`
  );
}

function showClubDetails(clubName) {
  const club = clubsData.find((c) => c.name === clubName);
  if (!club) return;

  const activitiesText = club.activities.join(", ");
  const outcomesText = club.outcomes.join("\n• ");

  alert(
    `Club: ${club.name}\n\nFocus Area: ${club.focusArea}\n\nPresident: ${club.president}\nMembers: ${club.members}\nFounded: ${club.founded}\n\nDescription: ${club.description}\n\nKey Activities:\n• ${activitiesText}\n\nKey Outcomes:\n• ${outcomesText}\n\nMeeting: ${club.meetingDay}s at ${club.meetingTime}\nLocation: ${club.location}`
  );
}

function showMemberDetails(memberId) {
  const member = membersData.find((m) => m.id === memberId);
  if (!member) return;

  alert(
    `Member: ${member.name}\nRole: ${member.role}\nClub: ${member.club}\nYear: ${member.year}\nMajor: ${member.major}\nEmail: ${member.email}`
  );
}

function sendMessage(memberId) {
  const member = membersData.find((m) => m.id === memberId);
  if (!member) return;

  alert(`Sending message to ${member.name} at ${member.email}`);
}

// Utility function
function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
