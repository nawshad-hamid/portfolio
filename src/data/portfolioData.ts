export interface Project {
  id: string;
  title: string;
  platform: "Android" | "Windows Desktop" | "Android TV" | "Android & iOS";
  tagline: string;
  description: string;
  whatIWorkedOn: string[];
  tech: string[];
  googlePlay?: string;
  appStore?: string;
  microsoftStore?: string;
  website?: string;
  packageName?: string;
  badge?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description?: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    featured?: boolean;
  }[];
}

export interface Principle {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export const Bio = {
  name: "Nawshad Hamid",
  title: "Senior Android Developer",
  roleLine: "Senior Android Developer | Senior Mobile Application Engineer | AI-Assisted Software Engineer",
  roles: [
    "Senior Android Developer",
    "Mobile Application Engineer",
    "Jetpack Compose Specialist",
    "Flutter Cross-Platform Engineer",
    "AI-Assisted Software Engineer",
  ],
  headline: "I build complete, polished, and reliable Android applications, and keep production apps stable for the long run.",
  intro: "Mobile developer with 11–12 years of experience, specializing in native Android with Kotlin, Java, and Jetpack Compose, plus Flutter for Android, iOS, and Windows desktop.",
  aboutDetailed: [
    "I am a senior mobile application developer based in Dhaka, Bangladesh, with approximately 11–12 years of professional experience at TopOfStack Software. My core specialization is native Android development using Kotlin, Java, XML, and Jetpack Compose, complemented by 1.5 years of Flutter development.",
    "I enjoy building complete, polished Android applications quickly with Jetpack Compose and Single-Activity Architecture, and I am equally comfortable maintaining established production apps across Android, iOS, Windows desktop, and Android TV. My work spans MVVM and Clean Architecture, modularization, background processing, audio downloading and offline functionality, WebRTC-based voice calling, and Android TV apps built for continuous operation.",
    "Before changing any code, I study the existing project: its architecture, dependencies, lifecycle behavior, and regression risks. I use Claude as a productivity multiplier for planning, codebase analysis, review, edge-case identification, and test scenarios, while applying my own engineering judgment and verifying every change before delivery.",
  ],
  location: "Dhaka, Bangladesh",
  phone: "+880 1743860793",
  email: "nawshadhamid@gmail.com",
  linkedin: "https://www.linkedin.com/in/nawshad-hamid-2646031b3",
  github: "https://github.com/nawshad-hamid",
  resume: "https://drive.google.com/file/d/1miFsIAOB18FY8z7fMNRwqiUK7S5IP4IY/view?usp=drive_link",
  resumePdf: "./Nawshad_Hamid_CV.pdf",
  image: "./profile.jpg",
  imageDrive: "https://drive.google.com/file/d/1fWvnyLPRQ5tKbu-IcRcI0yhr0PBdhBHH/view?usp=drive_link",
  stats: [
    { label: "Professional Experience", value: "11–12", unit: "Years", description: "TopOfStack Software (2014 – Present)" },
    { label: "Flutter Development", value: "1.5", unit: "Years", description: "Mobile & Desktop Cross-Platform" },
    { label: "Platforms Engineered", value: "4", unit: "Platforms", description: "Android, iOS, Windows, Android TV" },
    { label: "Selected Apps", value: "5", unit: "Projects", description: "Core Production Applications" },
  ],
};

export const skillsData: SkillCategory[] = [
  {
    title: "Native Android",
    description: "Core native Android architecture, modern UI, reactive paradigms and platform SDKs",
    icon: "Smartphone",
    skills: [
      { name: "Kotlin", featured: true },
      { name: "Jetpack Compose", featured: true },
      { name: "Single-Activity Architecture", featured: true },
      { name: "Material Design & Material 3", featured: true },
      { name: "Kotlin Coroutines & Flow", featured: true },
      { name: "Dynamic Feature Delivery", featured: true },
      { name: "Java", featured: false },
      { name: "XML Layouts", featured: false },
      { name: "AndroidX & Jetpack Libraries", featured: true },
      { name: "Services & Background Processing", featured: true },
      { name: "Push & Rich Notifications", featured: false },
      { name: "Room Database & SQLite", featured: false },
      { name: "WorkManager & JobScheduler", featured: false },
    ],
  },
  {
    title: "Architecture & Engineering",
    description: "Robust scalable patterns preventing regressions in long-lived production systems",
    icon: "Layers",
    skills: [
      { name: "MVVM Architecture", featured: true },
      { name: "Clean Architecture", featured: true },
      { name: "Modularization", featured: true },
      { name: "Separation of Concerns", featured: true },
      { name: "Refactoring Legacy Code", featured: true },
      { name: "Backward Compatibility", featured: true },
      { name: "Regression Prevention", featured: true },
      { name: "State Hoisting & Unidirectional Data Flow", featured: false },
      { name: "Dependency Injection (Hilt / Dagger)", featured: false },
    ],
  },
  {
    title: "Flutter & Multiplatform",
    description: "Cross-platform mobile and desktop application development and state management",
    icon: "LayoutGrid",
    skills: [
      { name: "Flutter", featured: true },
      { name: "Dart", featured: true },
      { name: "BLoC Pattern", featured: true },
      { name: "Riverpod", featured: true },
      { name: "Provider", featured: true },
      { name: "State Management", featured: true },
      { name: "Windows Desktop Apps", featured: true },
      { name: "Android & iOS Deployment", featured: true },
      { name: "Platform Channels / Native Interop", featured: false },
    ],
  },
  {
    title: "Real-Time & Integrations",
    description: "Low-latency streaming, audio playback, socket communication, and cloud backends",
    icon: "Radio",
    skills: [
      { name: "WebRTC Voice Calling", featured: true },
      { name: "Socket.IO", featured: true },
      { name: "WebSocket Protocol", featured: true },
      { name: "REST API Integration", featured: true },
      { name: "Firebase Services", featured: true },
      { name: "Firebase Authentication", featured: false },
      { name: "Audio Downloading & Offline Cache", featured: true },
      { name: "Background Sync & State Handling", featured: true },
    ],
  },
  {
    title: "Quality & Maintenance",
    description: "Rock-solid reliability, edge-case coverage, and deep root-cause troubleshooting",
    icon: "ShieldCheck",
    skills: [
      { name: "Functional Testing", featured: true },
      { name: "Regression Testing", featured: true },
      { name: "Edge-Case Analysis", featured: true },
      { name: "Root-Cause Analysis", featured: true },
      { name: "Code Review", featured: true },
      { name: "Production Issue Investigation", featured: true },
      { name: "Android TV 24/7 Stability & Recovery", featured: true },
      { name: "Memory Leak & ANR Diagnosis", featured: false },
    ],
  },
  {
    title: "AI-Assisted Engineering",
    description: "Harnessing advanced LLMs as productivity multipliers with disciplined human verification",
    icon: "Cpu",
    skills: [
      { name: "Claude-Assisted Development", featured: true },
      { name: "Codebase Analysis & Navigation", featured: true },
      { name: "Structured Task Planning", featured: true },
      { name: "Test Scenario Generation", featured: true },
      { name: "AI-Generated Code Validation", featured: true },
      { name: "Edge-Case Pre-Emption", featured: true },
    ],
  },
  {
    title: "Tools & Ecosystem",
    description: "Modern build tooling, automation pipelines, and app store release workflows",
    icon: "Wrench",
    skills: [
      { name: "Android Studio", featured: true },
      { name: "Gradle & Kotlin DSL", featured: true },
      { name: "Android Gradle Plugin (AGP)", featured: true },
      { name: "Kotlin Gradle Plugin (KGP)", featured: true },
      { name: "Build Variants & Flavors", featured: true },
      { name: "Google Play Console", featured: true },
      { name: "Microsoft Store Partner Center", featured: false },
      { name: "Apple App Store Connect", featured: false },
      { name: "Git Version Control", featured: true },
    ],
  },
];

export const experienceData = [
  {
    company: "TopOfStack Software",
    role: "Senior Android Developer / Mobile Application Developer",
    period: "2014 – Present",
    duration: "11–12 Years",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    description: "Lead mobile engineer driving production Android and cross-platform applications serving thousands of daily active users, maintaining mission-critical 24/7 TV signage and desktop systems.",
    highlights: [
      "Develop and maintain production Android applications using Kotlin, Java, XML, and Jetpack Compose.",
      "Build complete Android applications rapidly with Jetpack Compose and Single-Activity Architecture, integrating navigation, reusable UI components, and application logic.",
      "Apply MVVM, Clean Architecture, and modular design to keep applications maintainable and organized.",
      "Develop and maintain Flutter applications for mobile and desktop using Dart, BLoC, Riverpod, and Provider.",
      "Implement audio downloading, offline functionality, background processing, notifications, and download-state management.",
      "Integrate real-time voice calling using WebRTC, Socket.IO, and WebSocket communication.",
      "Maintain Android TV applications for continuous operation, with server-controlled configuration, caching, automatic restart, and recovery.",
      "Review existing codebases before making changes, and use structured testing and regression analysis to protect established functionality.",
      "Investigate production crashes, network failures, and compatibility issues through root-cause analysis.",
    ],
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Java",
      "Flutter",
      "Dart",
      "WebRTC",
      "Android TV",
      "Clean Architecture",
      "MVVM",
      "Socket.IO",
      "Coroutines",
      "Gradle",
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "muslim-bangla",
    title: "Muslim Bangla",
    platform: "Android",
    tagline: "An Islamic app with Quran, Hadith, prayer-related utilities, and audio content.",
    description: "Flagship comprehensive Islamic application providing Quran recitation, Hadith collections, precise prayer-related utilities, continuous audio downloading, and real-time voice calling capabilities.",
    packageName: "com.tos.namajtime",
    badge: "Flagship Mobile App",
    featured: true,
    whatIWorkedOn: [
      "Quran reading interfaces, Arabic text rendering, Bangla translations, and pronunciation-related features",
      "Audio downloads, offline access, background processing, notifications, and download-state handling",
      "Real-time voice calling with WebRTC and Socket.IO/WebSocket communication",
      "Modular architecture, Dynamic Feature Delivery, authentication integration, and release management",
      "Production issue investigation, testing, and regression prevention",
    ],
    tech: ["Kotlin", "Java", "XML", "WebRTC", "Socket.IO", "WebSocket", "Dynamic Feature Delivery", "Room DB", "WorkManager"],
    googlePlay: "https://play.google.com/store/apps/details?id=com.tos.namajtime",
    website: "https://muslimbangla.com/",
  },
  {
    id: "muslim-bangla-windows",
    title: "Muslim Bangla for Windows",
    platform: "Windows Desktop",
    tagline: "The Muslim Bangla experience on the Windows desktop.",
    description: "High-performance Flutter desktop version of Muslim Bangla, bringing prayer schedules, Quran studies, and Islamic resources seamlessly to PC users worldwide.",
    badge: "Microsoft Store Certified",
    featured: true,
    whatIWorkedOn: [
      "Desktop application development and lifecycle maintenance",
      "Cross-platform functionality, desktop UI adaptation, and system tray integration",
      "Desktop-specific usability, window management, and code maintainability",
      "Offline caching and synchronous prayer calculation algorithms",
    ],
    tech: ["Flutter", "Dart", "Windows Desktop", "BLoC", "Desktop UI", "SQLite"],
    microsoftStore: "https://apps.microsoft.com/detail/9n8mjvwgghcz?hl=en-US&gl=NF",
    website: "https://muslimbangla.com/",
  },
  {
    id: "muslim-bangla-signage",
    title: "Muslim Bangla Signage",
    platform: "Android TV",
    tagline: "Continuous 24-hour digital signage for Android TV.",
    description: "Mission-critical Android TV application engineered for uninterrupted 24/7 operation in mosques and public centers, featuring remote configuration, automatic failure recovery, and real-time timekeeper displays.",
    badge: "24/7 High-Availability TV",
    featured: true,
    whatIWorkedOn: [
      "Automatic restart and recovery mechanisms for continuous unattended operation",
      "Server-controlled settings, OTA parameter overrides, and remote configuration",
      "Aggressive multi-tier caching for reliable content presentation during internet outages",
      "Memory leak prevention and stability optimizations for long-running TV hardware",
    ],
    tech: ["Android TV", "Kotlin", "Remote Configuration", "Caching", "Auto-Restart & Recovery", "Leanback", "Background Services"],
    website: "https://muslimbangla.com/",
  },
  {
    id: "easytrax-standard",
    title: "EasyTrax Standard",
    platform: "Android",
    tagline: "An Android application in ongoing development and maintenance.",
    description: "Robust IoT and vehicle GPS tracking client for fleet managers and vehicle owners, delivering live telemetry, route playback, geo-fencing alerts, and engine telemetry.",
    packageName: "com.bd.easytraxstandard",
    badge: "IoT Telemetry & Fleet",
    featured: false,
    whatIWorkedOn: [
      "Android application development, feature enhancement, and maintenance",
      "Real-time GPS vehicle tracking and map overlay rendering with Google Maps API",
      "Battery-efficient background telemetry and location tracking services",
      "Production debugging, crash analytics resolution, and performance optimizations",
    ],
    tech: ["Android", "Kotlin", "Google Maps API", "Location Services", "REST APIs", "Background Tasks"],
    googlePlay: "https://play.google.com/store/apps/details?id=com.bd.easytraxstandard",
  },
  {
    id: "permis-go",
    title: "Permis Go",
    platform: "Android & iOS",
    tagline: "A cross-platform app for the Permis Go driving school service.",
    description: "Cross-platform mobile application for French driving education platform Permis Go, empowering learners to book driving lessons, track course progress, and communicate with certified instructors.",
    badge: "Cross-Platform Production",
    featured: true,
    whatIWorkedOn: [
      "Cross-platform Flutter application development and maintenance for both Android and iOS",
      "Course scheduling, calendar synchronization, and interactive driving lesson bookings",
      "Smooth reactive state management with Riverpod and resilient API integration",
      "Release preparation and multi-store deployment on Google Play and Apple App Store",
    ],
    tech: ["Flutter", "Dart", "Android", "iOS", "Riverpod", "REST API", "Firebase Authentication"],
    officialWebsite: "https://permisgo.fr/driving",
    website: "https://permisgo.fr/driving",
    googlePlay: "https://play.google.com/store/apps/details?id=fr.permisgo.app",
    appStore: "https://apps.apple.com/us/app/permis-go/id6748116716",
    packageName: "fr.permisgo.app",
  },
];

export const principlesData: Principle[] = [
  {
    title: "Understand Before Changing",
    subtitle: "Architecture & Risk Analysis",
    description: "I review the existing architecture, dependencies, lifecycle behavior, and regression risks of a codebase before writing a single line of code. No blind edits.",
    icon: "Compass",
  },
  {
    title: "Plan, Then Implement",
    subtitle: "Structured Engineering",
    description: "I organize tasks into structured, step-by-step plans considering crucial mobile edge cases: process death, background execution limits, network drops, and offline behavior.",
    icon: "FileCheck",
  },
  {
    title: "Verify Everything",
    subtitle: "Disciplined Validation",
    description: "I validate AI-generated suggestions against the live codebase, project constraints, and runtime expectations. AI is a partner; engineering accountability stays with me.",
    icon: "CheckCircle2",
  },
  {
    title: "Protect Existing Behavior",
    subtitle: "Regression Prevention",
    description: "Systematic regression analysis, backward compatibility checks, and functional testing keep established production features rock-solid across Android versions.",
    icon: "ShieldAlert",
  },
  {
    title: "AI as a Multiplier",
    subtitle: "Productivity Acceleration",
    description: "I use Claude as a force multiplier for rapid codebase analysis, architectural review, edge-case discovery, and test scenario generation, amplifying speed without sacrificing rigor.",
    icon: "Sparkles",
  },
];

export const educationData = {
  degree: "Bachelor of Science (BSc) in Computer Science and Engineering (CSE)",
  institution: "University of Development Alternative (UODA)",
  passingYear: "2017",
  location: "Dhaka, Bangladesh",
  highlights: [
    "Comprehensive study of Algorithms, Data Structures, and Software Architecture",
    "Specialized focus on Object-Oriented Software Engineering and Mobile Computing",
    "Completed practical engineering projects establishing strong foundation in Java, C++, and systems design",
  ],
};
