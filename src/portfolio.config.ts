export type Project = { title: string; description: string; bullets: string[]; link: string };

export type PortfolioContent = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  photo: string;
  summary: string;
  experience: { title: string; company: string; period: string; bullets: string[] };
  education: { school: string; degree: string; period: string; grade: string };
  projects: Project[];
  skills: { label: string; items: string }[];
  certifications: string[];
};

/*
 * EDIT YOUR PORTFOLIO HERE
 * Everything below controls what appears on your website.
 * Change names, links, text, skills — save the file and your site updates.
 */
export const portfolio: PortfolioContent = {
  name: 'Aafrin Ara',
  role: 'Data Analyst & Developer',
  location: 'Jamuha, Rohtas, India',
  email: 'aafrinafal38@gmail.com',
  phone: '+91 8219080102',
  linkedin: 'https://www.linkedin.com',
  github: 'https://github.com',
  photo: '/images/WhatsApp_Image_2026-09-01_at_4.32.21_PM.jpeg',
  summary:
    'Data Analyst with 1+ year of experience in data analysis, data cleaning, and visualization using SQL, Python, Excel, and Power BI. Skilled in transforming raw data into actionable insights, creating interactive dashboards, and supporting data-driven business decisions. Passionate about solving business problems through data analysis and continuous learning.',
  experience: {
    title: 'Data Analyst | DevelopersIQ',
    company: 'DevelopersIQ',
    period: '1 year',
    bullets: [
      'Analyzed and cleaned data using Python, SQL, and Excel.',
      'Identified trends, patterns, and business insights through data analysis.',
      'Created Power BI dashboards and data visualizations.',
      'Prepared accurate reports using Excel and Google Sheets.',
      'Supported data-driven decision-making through reporting and analysis.',
    ],
  },
  education: {
    school: 'Gopal Narayan Singh University',
    degree: 'B.Tech (CSE)',
    period: '2022 — 2026',
    grade: 'Overall CGPA: 8.81',
  },
  projects: [
    {
      title: 'Face Recognition & Classification System',
      description:
        'A computer vision system for real-time face recognition and classification.',
      bullets: [
        'Implemented PCA-based feature extraction to reduce dimensionality and generate Eigenfaces.',
        'Built and trained an Artificial Neural Network (ANN) for face classification.',
        'Pre-processed facial images and tuned model parameters for better performance.',
        'Improved face recognition accuracy and overall system efficiency.',
      ],
      link: 'https://github.com',
    },
    {
      title: 'Diabetes Prediction Web Application',
      description:
        'A practical machine learning web app that turns a trained model into a usable prediction workflow.',
      bullets: [
        'Developed a Diabetes Prediction web application using Django and Machine Learning.',
        'Implemented end-to-end ML workflow: EDA, model training, evaluation, and deployment.',
      ],
      link: 'https://github.com',
    },
  ],
  skills: [
    { label: 'Programming & Automation', items: 'Python, SQL, JavaScript, TypeScript, VBA, Google Apps Script' },
    { label: 'Data Analysis', items: 'Data Analysis, Data Cleaning, Exploratory Data Analysis (EDA), Machine Learning' },
    { label: 'Business Intelligence & Data Visualization', items: 'Power BI, Qlik Sense, Looker Studio, Microsoft Excel, Advanced Excel, Google Sheets' },
    { label: 'Database & Enterprise Tools', items: 'SQL, MS Access, SAP, ERP Systems' },
    { label: 'Office & Productivity', items: 'MS Word, MS PowerPoint, Google Workspace' },
    { label: 'Web Technologies', items: 'HTML, CSS' },
    { label: 'AI & GenAI', items: 'Generative AI, Prompt Engineering, ChatGPT, Model Deployment' },
    { label: 'Core Skills', items: 'Reporting, Data Visualization, Data Accuracy, Problem Solving, Analytical Thinking, Attention to Detail' },
  ],
  certifications: [
    'IBM Full Stack Software Developer Capstone',
    'NPTEL Online Certification (Introduction to Machine Learning)',
    'Generative AI Essentials',
    'Prompt Engineering',
    'Remote Sensing Data Analytics in Crop Production Forecasting',
    'Data Analysis with Python',
  ],
};
