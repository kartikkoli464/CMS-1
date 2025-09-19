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

// Enhanced clubs data with 6 clubs
const clubsData = [
  {
    name: "Akatsuki-Computer Science",
    description:
      "Advanced programming and software development community focused on cutting-edge technologies",
    president: "Alex Johnson",
    members: 85,
    founded: "2018",
    category: "Technology",
    focusArea: "Software Development & Programming",
    icon: "bi-cpu",
    color: "primary",
    activities: [
      "Weekly Coding Workshops",
      "Inter-college Hackathons",
      "Open Source Contributions",
      "Tech Industry Guest Lectures",
      "Algorithm Competitions",
    ],
    outcomes: [
      "50+ Projects Deployed",
      "15 Students Placed in Tech Giants",
      "3 Startup Companies Founded",
      "100+ GitHub Repositories",
      "National Coding Championship Winners",
    ],
    meetingDay: "Wednesdays",
    meetingTime: "6:00 PM",
    location: "Computer Lab 1",
  },
  {
    name: "GDG-Google Developer Group",
    description:
      "Google technologies and cloud development enthusiasts building innovative solutions",
    president: "Sarah Williams",
    members: 120,
    founded: "2015",
    category: "Technology",
    focusArea: "Cloud Computing & Mobile Development",
    icon: "bi-cloud",
    color: "success",
    activities: [
      "Android App Development",
      "Google Cloud Workshops",
      "Firebase Projects",
      "Flutter Development Sessions",
      "DevFest Organization",
    ],
    outcomes: [
      "30+ Mobile Apps Published",
      "Google Cloud Certifications: 25",
      "DevFest Attendees: 500+",
      "Play Store Downloads: 10K+",
      "Google Developer Expert: 2 Members",
    ],
    meetingDay: "Fridays",
    meetingTime: "5:30 PM",
    location: "Innovation Lab",
  },
  {
    name: "Data Polaris-Data Science",
    description:
      "Data analytics, machine learning, and AI research hub for future data scientists",
    president: "Dr. Emily Chen",
    members: 95,
    founded: "2019",
    category: "Data Science",
    focusArea: "Machine Learning & Data Analytics",
    icon: "bi-graph-up",
    color: "info",
    activities: [
      "ML Model Development",
      "Data Visualization Projects",
      "Kaggle Competitions",
      "Industry Data Analysis",
      "AI Research Papers",
    ],
    outcomes: [
      "Kaggle Competition Wins: 8",
      "Research Papers Published: 12",
      "Industry Projects: 15",
      "Data Science Internships: 20",
      "ML Models in Production: 25",
    ],
    meetingDay: "Tuesdays",
    meetingTime: "4:00 PM",
    location: "Data Lab",
  },
  {
    name: "Fetch.AI-AIML",
    description:
      "Artificial Intelligence and Machine Learning pioneers pushing the boundaries of AI",
    president: "Michael Rodriguez",
    members: 110,
    founded: "2020",
    category: "AI/ML",
    focusArea: "Artificial Intelligence & Deep Learning",
    icon: "bi-robot",
    color: "warning",
    activities: [
      "Deep Learning Workshops",
      "Computer Vision Projects",
      "NLP Research",
      "AI Ethics Discussions",
      "Neural Network Development",
    ],
    outcomes: [
      "AI Research Papers: 18",
      "Computer Vision Apps: 12",
      "NLP Models Deployed: 8",
      "AI Startup Collaborations: 5",
      "Tech Conference Presentations: 15",
    ],
    meetingDay: "Thursdays",
    meetingTime: "3:30 PM",
    location: "AI Research Center",
  },
  {
    name: "CyberGuard-Security",
    description:
      "Cybersecurity research and ethical hacking community protecting digital infrastructure",
    president: "Lisa Zhang",
    members: 75,
    founded: "2021",
    category: "Cybersecurity",
    focusArea: "Ethical Hacking & Network Security",
    icon: "bi-shield-check",
    color: "danger",
    activities: [
      "Capture The Flag (CTF)",
      "Penetration Testing",
      "Security Audits",
      "Ethical Hacking Workshops",
      "Incident Response Training",
    ],
    outcomes: [
      "CTF Competition Wins: 12",
      "Security Vulnerabilities Found: 45",
      "Bug Bounty Rewards: $15K",
      "Security Certifications: 30",
      "Industry Security Audits: 8",
    ],
    meetingDay: "Saturdays",
    meetingTime: "2:00 PM",
    location: "Security Lab",
  },
  {
    name: "InnovatorsHub-Entrepreneurship",
    description:
      "Business innovation and startup development community creating tomorrow's enterprises",
    president: "James Thompson",
    members: 140,
    founded: "2017",
    category: "Business",
    focusArea: "Startup Development & Innovation",
    icon: "bi-lightbulb",
    color: "secondary",
    activities: [
      "Pitch Competitions",
      "Business Plan Development",
      "Investor Networking",
      "Market Research Projects",
      "Startup Incubation",
    ],
    outcomes: [
      "Startups Launched: 25",
      "Funding Raised: $2.5M",
      "Business Plans Developed: 60",
      "Investor Connections: 150",
      "Jobs Created: 200+",
    ],
    meetingDay: "Mondays",
    meetingTime: "7:00 PM",
    location: "Innovation Center",
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
