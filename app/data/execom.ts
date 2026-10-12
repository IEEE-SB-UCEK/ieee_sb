export interface SocialLinks {
  linkedin?: string;
  github?: string;
  instagram?: string;
  email?: string;
}

export interface ExecomMember {
  id: string;
  name: string;
  role: string;
  team: 'HQ' | 'Technical Team' | 'Operations Team' | 'Content Team' | 'MD & Marketing Team' | 'Creative Team' | 'Content Team' | 'Media Team' ;
  memberId: string;
  imageUrl?: string;
  socials: SocialLinks;
}

// Mock initial database
const EXECOM_MOCK_DATA: ExecomMember[] = [
  // Core Committee
  {
    //HQ 
    //Chairperson,vice chairperson, general secretary, joint secretary, vice chair; id=chair
    id: "ex-chair-01",
    name: "Kashinadh",
    role: "Chairperson",
    team: "HQ",
    memberId: "IEEE-9021-X",
    socials: { linkedin: "https://linkedin.com", email: "alex@ieee.org" }
  },
  {
    id: "ex-chair-02",
    name: "Naveena",
    role: "Vice chairperson",
    team: "HQ",
    memberId: "IEEE-9022-X",
    socials: { linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-chair-03",
    name: "Gouri",
    role: "General Secretary",
    team: "HQ",
    memberId: "IEEE-9023-X",
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" }
  },
  {
    id: "ex-chair-04",
    name: "Riswi",
    role: "Joint Secretary",
    team: "HQ",
    memberId: "IEEE-9021-X",
    socials: { linkedin: "https://linkedin.com", email: "alex@ieee.org" }
  },
  {
    id: "ex-chair-05",
    name: "Teny",
    role: "Joint Secretary",
    team: "HQ",
    memberId: "IEEE-9022-X",
    socials: { linkedin: "https://linkedin.com" }
  },

  //Faculty advisors and mentors; id=fac
  {
    id: "ex-fac-01",
    name: "Sabeen",
    role: "Faculty advisor",
    team: "HQ",
    memberId: "IEEE-9023-X",
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" }
  },
  {
    id: "ex-fac-02",
    name: "Sajitha",
    role: "faculty advisor",
    team: "HQ",
    memberId: "IEEE-9021-X",
    socials: { linkedin: "https://linkedin.com", email: "alex@ieee.org" }
  },
  {
    id: "ex-fac-03",
    name: "Drishya",
    role: "faculty advisor",
    team: "HQ",
    memberId: "IEEE-9022-X",
    socials: { linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-fac-04",
    name: "Alfina",
    role: "Mentor",
    team: "HQ",
    memberId: "IEEE-9023-X",
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" }
  },
  {
    id: "ex-fac-05",
    name: "Adarsh",
    role: "Mentor",
    team: "HQ",
    memberId: "IEEE-9021-X",
    socials: { linkedin: "https://linkedin.com", email: "alex@ieee.org" }
  },
  //ECC,treasurer,webmaster,link representative,MD head; ID=ex=ec
  {
    id: "ex-ec-01",
    name: "Akshay",
    role: "ECC",
    team: "HQ",
    memberId: "IEEE-9022-X",
    socials: { linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-ec-02",
    name: "Aneez",
    role: "Treasurer",
    team: "HQ",
    memberId: "IEEE-9023-X",
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" }
  },
  {
    id: "ex-ec-03",
    name: "Aswin",
    role: "Webmaster",
    team: "HQ",
    memberId: "IEEE-9021-X",
    socials: { linkedin: "https://linkedin.com", email: "alex@ieee.org" }
  },
  {
    id: "ex-ec-04",
    name: "Junia",
    role: "Link Representative",
    team: "HQ",
    memberId: "IEEE-9022-X",
    socials: { linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-ec-05",
    name: "Irfan",
    role: "MD head",
    team: "HQ",
    memberId: "IEEE-9023-X",
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" }
  },
  // Tech Team
  //co-leads; ID=ex-tech
  {
    id: "ex-tech-01",
    name: "Abhiram SP",
    role: "Technical co-lead",
    team: "Technical Team",
    memberId: "IEEE-8011-T",
    socials: { github: "https://github.com", linkedin: "https://linkedin.com",email:"test@gmail.com" }
  },
  {
    id: "ex-tech-02",
    name: "Aswin",
    role: "Technical co-lead",
    team: "Technical Team",
    memberId: "IEEE-8012-T",
    socials: { github: "https://github.com" }
  },
  {
    id: "ex-tech-03",
    name: "Anandhu",
    role: "Technical co-lead",
    team: "Technical Team",
    memberId: "IEEE-8011-T",
    socials: { github: "https://github.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-tech-04",
    name: "Zaid",
    role: "Technical co-lead",
    team: "Technical Team",
    memberId: "IEEE-8012-T",
    socials: { github: "https://github.com" }
  },
  //MD & marketing team
  //(co)-leads;ID=ex-lead
  {
    id: "ex-lead-01",
    name: "Abin",
    role: "Marketing Lead",
    team: "MD & Marketing Team",
    memberId: "IEEE-7011-O",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com" }
  },
   {
    id: "ex-lead-02",
    name: "Apsana",
    role: "Marketing Lead",
    team: "MD & Marketing Team",
    memberId: "IEEE-7011-O",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com" }
  },
  {
    id: "ex-lead-03",
    name: "Anamika",
    role: "Marketing Co-Lead",
    team: "MD & Marketing Team",
    memberId: "IEEE-7011-O",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com" }
  },
   {
    id: "ex-lead-04",
    name: "Nijina",
    role: "Marketing Co-Lead",
    team: "MD & Marketing Team",
    memberId: "IEEE-7011-O",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com" }
  },
  {
    id: "ex-lead-05",
    name: "Boby",
    role: "Marketing Co-Lead",
    team: "MD & Marketing Team",
    memberId: "IEEE-7011-O",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com" }
  },
   {
    id: "ex-lead-06",
    name: "Devu",
    role: "Marketing Co-Lead",
    team: "MD & Marketing Team",
    memberId: "IEEE-7011-O",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com" }
  },
  // Content Team
  //Content leads and co-leads; ID=ex-content
  {
    id: "ex-content-01",
    name: "Devaj",
    role: "Content Lead",
    team: "Content Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-content-02",
    name: "Gouri",
    role: "Content Lead",
    team: "Content Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-content-03",
    name: "Marwa",
    role: "Content Co-Lead",
    team: "Content Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-content-04",
    name: "Niyatha",
    role: "Content Co-Lead",
    team: "Content Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-content-05",
    name: "Lakshya",
    role: "Content Co-Lead",
    team: "Content Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  //creative team
  //(Co)-leads; ID=ex-create
  {
    id: "ex-create-01",
    name: "Resha",
    role: "Creative Lead",
    team: "Creative Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-create-02",
    name: "Nivditha",
    role: "Creative Lead",
    team: "Creative Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-create-03",
    name: "Shivangree",
    role: "Creative Co-Lead",
    team: "Creative Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-create-04",
    name: "Yasin",
    role: "Creative Co-Lead",
    team: "Creative Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-create-05",
    name: "Abhijith",
    role: "Creative Co-Lead",
    team: "Creative Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  //Operation team
  //(co)-leads; ID=ex-opt
  {
    id: "ex-opt-01",
    name: "Sooraj",
    role: "Operations Lead",
    team: "Operations Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-opt-02",
    name: "Chinmay",
    role: "Operations Co-Lead",
    team: "Operations Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-opt-03",
    name: "Sreeram",
    role: "Operations Co-Lead",
    team: "Operations Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-opt-04",
    name: "Ananya",
    role: "Operations Co-Lead",
    team: "Operations Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-opt-05",
    name: "Mayookha",
    role: "Operations Co-Lead",
    team: "Operations Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  //Media team
  //(co)-leads; ID=ex-media
  {
    id: "ex-media-01",
    name: "Munas",
    role: "Media Lead",
    team: "Media Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-media-02",
    name: "Anjalo",
    role: "Media Lead",
    team: "Media Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-media-03",
    name: "Rinisha",
    role: "Media Co-Lead",
    team: "Media Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-media-04",
    name: "Ajo",
    role: "Media Co-Lead",
    team: "Media Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-media-05",
    name: "Irshan",
    role: "Media Co-Lead",
    team: "Media Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
  {
    id: "ex-media-06",
    name: "Govind",
    role: "Media Co-Lead",
    team: "Media Team",
    memberId: "IEEE-6011-C",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" }
  },
];

export const fetchAllExecomMembers = async (): Promise<ExecomMember[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 600));
  return EXECOM_MOCK_DATA;
};

export const fetchMemberById = async (id: string): Promise<ExecomMember | null> => {
  await new Promise(resolve => setTimeout(resolve, 400));
  const member = EXECOM_MOCK_DATA.find(m => m.id === id);
  return member || null;
};
