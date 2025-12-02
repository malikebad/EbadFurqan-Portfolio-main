export interface SiteConfig {
  title: string;
  owner_name: string;
  role: string;
  experience_years: number;
  theme: {
    mode: string;
    primary_color: string;
    secondary_color: string;
    font_family: string;
  };
  seo: {
    description: string;
    keywords: string[];
  };
}

export interface NavItem {
  label: string;
  link: string;
}

export interface HeroSection {
  headline: string;
  sub_headline: string;
  cta_primary: { text: string; link: string };
  cta_secondary: { text: string; link: string };
  availability_status: string;
}

export interface AboutSection {
  summary: string;
  stats: Array<{ label: string; value: string }>;
}

export interface SkillsSection {
  frontend: string[];
  backend: string[];
  database: string[];
  devops: string[];
}

export interface WorkHistoryItem {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface ProjectItem {
  title: string;
  tech_stack: string[];
  description: string;
  live_link: string | null;
  repo_link: string | null;
  image_placeholder: string;
}

export interface ResumeConfig {
  feature_enabled: boolean;
  layout: string;
  downloadable_pdf: boolean;
  sections_included: string[];
}

export interface ContactSection {
  email: string;
  form_fields: string[];
  socials: {
    linkedin: string;
    github: string;
    twitter: string;
  };
}

export interface PortfolioData {
  site_config: SiteConfig;
  navigation: NavItem[];
  sections: {
    hero: HeroSection;
    about: AboutSection;
    skills: SkillsSection;
    work_history: WorkHistoryItem[];
    projects: ProjectItem[];
    digital_resume: ResumeConfig;
    contact: ContactSection;
  };
}