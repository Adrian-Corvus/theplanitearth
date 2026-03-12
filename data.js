// Shared data file — replace scores with real data when ready
// automation: 0-100 (higher = more at risk)
// augmentation: 0-100 (higher = more AI-assisted upside)  
// timelineYears: estimated years until significant disruption

const PROFESSIONS = [
  // Finance & Accounting
  { id: "accountant", name: "Accountant", sector: "Finance", automation: 72, augmentation: 65, timeline: 3 },
  { id: "financial-analyst", name: "Financial Analyst", sector: "Finance", automation: 61, augmentation: 78, timeline: 4 },
  { id: "bookkeeper", name: "Bookkeeper", sector: "Finance", automation: 86, augmentation: 48, timeline: 2 },
  { id: "actuary", name: "Actuary", sector: "Finance", automation: 43, augmentation: 82, timeline: 6 },
  { id: "investment-banker", name: "Investment Banker", sector: "Finance", automation: 38, augmentation: 74, timeline: 7 },
  { id: "insurance-underwriter", name: "Insurance Underwriter", sector: "Finance", automation: 79, augmentation: 55, timeline: 2 },
  { id: "tax-advisor", name: "Tax Advisor", sector: "Finance", automation: 68, augmentation: 60, timeline: 3 },
  { id: "financial-planner", name: "Financial Planner", sector: "Finance", automation: 52, augmentation: 71, timeline: 5 },

  // Technology
  { id: "software-engineer", name: "Software Engineer", sector: "Technology", automation: 34, augmentation: 91, timeline: 7 },
  { id: "data-analyst", name: "Data Analyst", sector: "Technology", automation: 58, augmentation: 85, timeline: 4 },
  { id: "data-scientist", name: "Data Scientist", sector: "Technology", automation: 29, augmentation: 93, timeline: 8 },
  { id: "product-manager", name: "Product Manager", sector: "Technology", automation: 27, augmentation: 79, timeline: 8 },
  { id: "ux-designer", name: "UX Designer", sector: "Technology", automation: 41, augmentation: 76, timeline: 6 },
  { id: "cybersecurity-analyst", name: "Cybersecurity Analyst", sector: "Technology", automation: 22, augmentation: 88, timeline: 9 },
  { id: "it-support", name: "IT Support Specialist", sector: "Technology", automation: 67, augmentation: 62, timeline: 3 },
  { id: "devops-engineer", name: "DevOps Engineer", sector: "Technology", automation: 31, augmentation: 87, timeline: 8 },
  { id: "ai-engineer", name: "AI/ML Engineer", sector: "Technology", automation: 18, augmentation: 95, timeline: 10 },

  // Healthcare
  { id: "nurse", name: "Registered Nurse", sector: "Healthcare", automation: 19, augmentation: 88, timeline: 9 },
  { id: "gp", name: "General Practitioner", sector: "Healthcare", automation: 24, augmentation: 86, timeline: 8 },
  { id: "radiologist", name: "Radiologist", sector: "Healthcare", automation: 62, augmentation: 89, timeline: 3 },
  { id: "pharmacist", name: "Pharmacist", sector: "Healthcare", automation: 55, augmentation: 73, timeline: 4 },
  { id: "physiotherapist", name: "Physiotherapist", sector: "Healthcare", automation: 16, augmentation: 72, timeline: 10 },
  { id: "surgeon", name: "Surgeon", sector: "Healthcare", automation: 21, augmentation: 84, timeline: 9 },
  { id: "medical-coder", name: "Medical Coder", sector: "Healthcare", automation: 88, augmentation: 44, timeline: 2 },
  { id: "dentist", name: "Dentist", sector: "Healthcare", automation: 23, augmentation: 69, timeline: 9 },

  // Legal
  { id: "lawyer", name: "Lawyer / Solicitor", sector: "Legal", automation: 44, augmentation: 82, timeline: 5 },
  { id: "paralegal", name: "Paralegal", sector: "Legal", automation: 76, augmentation: 61, timeline: 2 },
  { id: "legal-researcher", name: "Legal Researcher", sector: "Legal", automation: 81, augmentation: 58, timeline: 2 },
  { id: "judge", name: "Judge / Magistrate", sector: "Legal", automation: 12, augmentation: 64, timeline: 12 },
  { id: "compliance-officer", name: "Compliance Officer", sector: "Legal", automation: 63, augmentation: 70, timeline: 3 },

  // Education
  { id: "teacher-primary", name: "Primary School Teacher", sector: "Education", automation: 14, augmentation: 75, timeline: 11 },
  { id: "teacher-secondary", name: "Secondary School Teacher", sector: "Education", automation: 17, augmentation: 77, timeline: 10 },
  { id: "university-lecturer", name: "University Lecturer", sector: "Education", automation: 22, augmentation: 73, timeline: 9 },
  { id: "tutor", name: "Private Tutor", sector: "Education", automation: 48, augmentation: 68, timeline: 5 },
  { id: "instructional-designer", name: "Instructional Designer", sector: "Education", automation: 54, augmentation: 80, timeline: 4 },

  // Marketing & Media
  { id: "copywriter", name: "Copywriter", sector: "Marketing & Media", automation: 69, augmentation: 72, timeline: 3 },
  { id: "marketing-manager", name: "Marketing Manager", sector: "Marketing & Media", automation: 36, augmentation: 81, timeline: 6 },
  { id: "seo-specialist", name: "SEO Specialist", sector: "Marketing & Media", automation: 74, augmentation: 66, timeline: 2 },
  { id: "journalist", name: "Journalist", sector: "Marketing & Media", automation: 47, augmentation: 70, timeline: 5 },
  { id: "graphic-designer", name: "Graphic Designer", sector: "Marketing & Media", automation: 58, augmentation: 74, timeline: 4 },
  { id: "social-media-manager", name: "Social Media Manager", sector: "Marketing & Media", automation: 61, augmentation: 69, timeline: 3 },
  { id: "photographer", name: "Photographer", sector: "Marketing & Media", automation: 44, augmentation: 62, timeline: 6 },
  { id: "video-editor", name: "Video Editor", sector: "Marketing & Media", automation: 53, augmentation: 76, timeline: 4 },

  // Operations & Logistics
  { id: "supply-chain", name: "Supply Chain Manager", sector: "Operations", automation: 51, augmentation: 79, timeline: 5 },
  { id: "logistics-coordinator", name: "Logistics Coordinator", sector: "Operations", automation: 66, augmentation: 67, timeline: 3 },
  { id: "warehouse-operative", name: "Warehouse Operative", sector: "Operations", automation: 83, augmentation: 42, timeline: 2 },
  { id: "project-manager", name: "Project Manager", sector: "Operations", automation: 30, augmentation: 80, timeline: 8 },
  { id: "operations-analyst", name: "Operations Analyst", sector: "Operations", automation: 57, augmentation: 76, timeline: 4 },
  { id: "procurement-manager", name: "Procurement Manager", sector: "Operations", automation: 55, augmentation: 72, timeline: 4 },

  // Human Resources
  { id: "hr-manager", name: "HR Manager", sector: "Human Resources", automation: 39, augmentation: 74, timeline: 6 },
  { id: "recruiter", name: "Recruiter / Talent Acquisition", sector: "Human Resources", automation: 62, augmentation: 70, timeline: 3 },
  { id: "payroll-specialist", name: "Payroll Specialist", sector: "Human Resources", automation: 82, augmentation: 51, timeline: 2 },
  { id: "training-coordinator", name: "Training & Development Coordinator", sector: "Human Resources", automation: 49, augmentation: 72, timeline: 5 },

  // Engineering
  { id: "civil-engineer", name: "Civil Engineer", sector: "Engineering", automation: 25, augmentation: 77, timeline: 9 },
  { id: "mechanical-engineer", name: "Mechanical Engineer", sector: "Engineering", automation: 28, augmentation: 79, timeline: 8 },
  { id: "electrical-engineer", name: "Electrical Engineer", sector: "Engineering", automation: 26, augmentation: 80, timeline: 9 },
  { id: "chemical-engineer", name: "Chemical Engineer", sector: "Engineering", automation: 31, augmentation: 78, timeline: 7 },
  { id: "architect", name: "Architect", sector: "Engineering", automation: 35, augmentation: 81, timeline: 7 },
  { id: "cad-drafter", name: "CAD Drafter / Technician", sector: "Engineering", automation: 71, augmentation: 60, timeline: 3 },

  // Customer Service & Retail
  { id: "customer-service", name: "Customer Service Representative", sector: "Retail & Service", automation: 78, augmentation: 52, timeline: 2 },
  { id: "retail-worker", name: "Retail Sales Associate", sector: "Retail & Service", automation: 72, augmentation: 45, timeline: 2 },
  { id: "call-centre", name: "Call Centre Agent", sector: "Retail & Service", automation: 85, augmentation: 48, timeline: 1 },
  { id: "estate-agent", name: "Estate Agent", sector: "Retail & Service", automation: 46, augmentation: 67, timeline: 5 },
  { id: "insurance-agent", name: "Insurance Agent", sector: "Retail & Service", automation: 65, augmentation: 58, timeline: 3 },

  // Science & Research
  { id: "research-scientist", name: "Research Scientist", sector: "Science & Research", automation: 20, augmentation: 91, timeline: 9 },
  { id: "biologist", name: "Biologist", sector: "Science & Research", automation: 24, augmentation: 88, timeline: 8 },
  { id: "chemist", name: "Chemist", sector: "Science & Research", automation: 27, augmentation: 85, timeline: 8 },
  { id: "psychologist", name: "Psychologist", sector: "Science & Research", automation: 18, augmentation: 71, timeline: 10 },
  { id: "economist", name: "Economist", sector: "Science & Research", automation: 42, augmentation: 83, timeline: 6 },
];

const SECTORS = [
  { id: "finance", name: "Finance & Accounting", automation: 64, augmentation: 68, professions: 8 },
  { id: "technology", name: "Technology", automation: 37, augmentation: 86, professions: 9 },
  { id: "healthcare", name: "Healthcare", automation: 33, augmentation: 80, professions: 8 },
  { id: "legal", name: "Legal", automation: 55, augmentation: 67, professions: 5 },
  { id: "education", name: "Education", automation: 31, augmentation: 75, professions: 5 },
  { id: "marketing", name: "Marketing & Media", automation: 56, augmentation: 72, professions: 8 },
  { id: "operations", name: "Operations & Logistics", automation: 57, augmentation: 69, professions: 6 },
  { id: "hr", name: "Human Resources", automation: 58, augmentation: 67, professions: 4 },
  { id: "engineering", name: "Engineering", automation: 36, augmentation: 76, professions: 6 },
  { id: "retail", name: "Retail & Service", automation: 69, augmentation: 54, professions: 5 },
  { id: "science", name: "Science & Research", automation: 26, augmentation: 84, professions: 5 },
];

const COUNTRIES = [
  { id: "uk", name: "United Kingdom", flag: "🇬🇧", automation: 51, augmentation: 74, topRisk: "Bookkeeper, Call Centre Agent, Paralegal", topSafe: "Nurse, Software Engineer, Surgeon" },
  { id: "us", name: "United States", flag: "🇺🇸", automation: 54, augmentation: 76, topRisk: "Warehouse Operative, Medical Coder, Insurance Underwriter", topSafe: "AI/ML Engineer, Cybersecurity Analyst, Surgeon" },
  { id: "fr", name: "France", flag: "🇫🇷", automation: 48, augmentation: 70, topRisk: "Bookkeeper, Call Centre Agent, Legal Researcher", topSafe: "Engineer, Nurse, Teacher" },
  { id: "de", name: "Germany", flag: "🇩🇪", automation: 46, augmentation: 73, topRisk: "CAD Drafter, Payroll Specialist, Bookkeeper", topSafe: "Mechanical Engineer, Research Scientist, GP" },
  { id: "nl", name: "Netherlands", flag: "🇳🇱", automation: 49, augmentation: 75, topRisk: "Logistics Coordinator, Call Centre Agent, Bookkeeper", topSafe: "Data Scientist, Psychologist, Civil Engineer" },
  { id: "ca", name: "Canada", flag: "🇨🇦", automation: 52, augmentation: 74, topRisk: "Retail Sales Associate, Bookkeeper, Insurance Agent", topSafe: "Nurse, Software Engineer, Project Manager" },
  { id: "au", name: "Australia", flag: "🇦🇺", automation: 50, augmentation: 72, topRisk: "Call Centre Agent, Payroll Specialist, Warehouse Operative", topSafe: "Physiotherapist, Surgeon, Cybersecurity Analyst" },
  { id: "sg", name: "Singapore", flag: "🇸🇬", automation: 55, augmentation: 81, topRisk: "Bookkeeper, Insurance Underwriter, Customer Service Rep", topSafe: "AI/ML Engineer, Data Scientist, Software Engineer" },
  { id: "ae", name: "UAE", flag: "🇦🇪", automation: 57, augmentation: 78, topRisk: "Call Centre Agent, Retail Worker, Logistics Coordinator", topSafe: "Lawyer, GP, Software Engineer" },
  { id: "in", name: "India", flag: "🇮🇳", automation: 59, augmentation: 77, topRisk: "IT Support, Call Centre Agent, Bookkeeper", topSafe: "Software Engineer, Research Scientist, Data Scientist" },
];

if (typeof module !== 'undefined') module.exports = { PROFESSIONS, SECTORS, COUNTRIES };
