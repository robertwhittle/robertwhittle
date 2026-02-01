export const personal = {
  name: 'Robert Whittle',
  title: 'Founder & CTO',
  tagline: 'Building the future of travel tech since the early days of the web.',
  email: 'robert.whittle@gmail.com',
  phone: '+34 653 672 481',
  location: 'Pozuelo de Alarcón, Madrid, Spain',
  github: 'https://github.com/robertwhittle',
  linkedin: 'https://linkedin.com/in/robertwhittle',
  photo: '/robertwhittle/photo.jpeg',
}

export const about = `Early adopter and innovator in web technologies from the mid 1990's to present. Founder of 2 companies with a proven record building and leading teams of motivated developers to produce award-winning software in the travel sector on mobile, tablet and desktop platforms.

Extensive knowledge of multi-tiered online transactional architectures, including user-experience driven rich, interactive user interfaces, and industry standard PCI compliant transaction engines.

Deeply engaged with the AI revolution — building and deploying AI agents for the travel industry, integrating generative AI into existing applications for product recommendations, content creation, editing and translation. Led development and product teams in adopting an AI-driven development lifecycle (AI-DLC) methodology, and extensive hands-on experience with AI-powered development tools such as Claude Code.`

export interface Experience {
  company: string
  role: string
  location: string
  period: string
  description: string[]
}

export const experience: Experience[] = [
  {
    company: 'Bookassist',
    role: 'Founder & CTO',
    location: 'Madrid, Spain',
    period: '2000 – Present',
    description: [
      'Head of technology and development at Bookassist, a market leader in direct booking optimisation for hotels worldwide generating over €1.7 billion in direct booking revenue',
      'Developed award-winning booking engine for the hotel industry, multi-platform mobile apps and cloud-based hotel distribution management platform',
      'Built dozens of integrations with travel industry leaders — Booking.com, Micros, Expedia, Hyatt, Protel and more',
      'Led the data analysis team, consolidating large data sources and providing data-led decision making through business intelligence tools',
      'Built and deployed AI agents for the travel industry; integrated generative AI into existing platforms for product recommendations, content creation, editing and translation',
      'Led development and product teams in adopting an AI-driven development lifecycle (AI-DLC) methodology',
    ],
  },
  {
    company: 'Softguides',
    role: 'Founder',
    location: 'Madrid, Spain',
    period: '1996 – 2000',
    description: [
      'Founded a pioneering online city guide reaching millions of visitors in the early days of the internet',
      'Revenue from advertising and commission from referrals for hotel reservations',
    ],
  },
  {
    company: 'Polar',
    role: 'Senior Developer',
    location: 'Madrid, Spain',
    period: '1998 – 2000',
    description: [
      'Senior Analyst and Java developer working on ERM software for Telefónica España',
    ],
  },
  {
    company: 'Alma Technologies',
    role: 'Java Developer',
    location: 'Madrid, Spain',
    period: '1996 – 1998',
    description: [
      'Analyst/Java developer building software for Telefónica Móviles España',
    ],
  },
  {
    company: 'Bailey Controls',
    role: 'Engineer',
    location: 'Ontario, Canada',
    period: '1988 – 1989',
    description: [
      'Preparation of technical proposals, cost analysis and quotations for industrial control systems',
    ],
  },
  {
    company: 'Edron Academy',
    role: 'Head of Science / Teacher of Physics',
    location: 'Mexico City, Mexico',
    period: '1986 – 1988',
    description: [
      'Teaching physics, maths and computer science at a British school in Mexico City',
      'Promoted to Head of Science department in second year',
    ],
  },
]

export interface SkillGroup {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  { category: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'SQL'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Mobile Apps', 'UX Design', 'Responsive Design', 'HTML/CSS'] },
  { category: 'Backend & Cloud', items: ['AWS', 'Cloud Architecture', 'REST APIs', 'Microservices', 'Real-time Transactions'] },
  { category: 'AI & ML', items: ['AI Agents', 'Generative AI', 'LLMs', 'Claude Code', 'AI-DLC', 'Prompt Engineering'] },
  { category: 'Data & Security', items: ['Business Intelligence', 'Data Analysis', 'PCI Compliance', 'Security'] },
  { category: 'Industry', items: ['Travel Tech', 'OTA Integrations', 'Hotel Distribution', 'Booking Engines'] },
  { category: 'Leadership', items: ['Team Building', 'CTO', 'Product Strategy', 'Agile', 'Mentoring'] },
]

export interface Education {
  institution: string
  degree: string
  period: string
  details?: string
}

export const education: Education[] = [
  {
    institution: 'Universidad Autónoma de Madrid',
    degree: 'Post Doctoral Researcher',
    period: '1994 – 1996',
  },
  {
    institution: 'Trinity College Dublin, Ireland',
    degree: 'PhD in Physics',
    period: '1989 – 1994',
  },
  {
    institution: 'McMaster University, Ontario, Canada',
    degree: 'Engineering Physics',
    period: '1982 – 1986',
  },
]
