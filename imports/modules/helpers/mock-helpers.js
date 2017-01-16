

//
// ---------------------
export const seedTags = [
  'loans', 
  'funding', 
  'bank', 
  'small businesses', 
  'mainstreet'
];

export const seedOrgType = [
  'local government', 
  'state government', 
  'federal government',
  'university department', 
  'university affiliate', 
  'local non-profit', 
  'other',
  'local business',
];

export const seedStages = [
  { value: 'idea', label: 'Idea Stage'},
  { value: 'startup', label: 'startup Stage'},
  { value: 'existing', label: 'existing Stage'},
];


/*  { label: 'Equity/Debt Financing', value: 'financing'},
  { label: 'Advising or MentorShip', value: 'financing'},*/
  
export const seedResourceTypes = [ 'financing',
'service',
'competition',
'incentive', 
'procurement'
];

export const seedServiceTypes = [
  { value: 'businessPlanning', label: 'Business Planning' },
  { value: 'financialManagement', label: 'Financial Management' },
  { value: 'funding', label: 'Funding' },
  { value: 'legalAssistance', label: 'Legal Assistance' },
  { value: 'salesAndMarketing', label: 'Sales & Marketing' },
  { value: 'researchAndDev', label: 'Research & Development' },
  { value: 'realEstate', label: 'Real Estate' },
  { value: 'workforce', label: 'Workforce Development' },
]

export const studentsSeed = [
  {
    _id: 1,
    roles: ['student'],
    email: [{address: 'Email@gmail.com', verified: false}],
    profile: {
      name: {
        first: 'Anthony',
        last: 'Comito'
      },
      avatar: "https://cdn2.iconfinder.com/data/icons/website-icons/512/User_Avatar-512.png",
      graduationYear: 2020,
      major: 'Business',
      skills: ['marketing'],
      needs: ['accounting'],
      status: 'looking', //founder, cofounder, looking for opportuntiies
      businessId: 232332
    }
  },
  {
    _id: 2,
    roles: ['student'],
    email: [{address: 'Email@gmail.com', verified: false}],
    profile: {
      name: {
        first: 'Derek',
        last: 'Rush'
      },
      avatar: "https://cdn2.iconfinder.com/data/icons/website-icons/512/User_Avatar-512.png",
      graduationYear: 2018,
      major: 'Marketing',
      skills: ['accounting'],
      needs: ['design', 'business development'],
      status: 'looking for cofounder', //founder, cofounder, looking for opportuntiies
      businessId: 232332
    }
  },
  {
    _id: 3,
    roles: ['student'],
    email: [{address: 'Email@gmail.com', verified: false}],
    profile: {
      name: {
        first: 'Jen',
        last: 'Flanders'
      },
      avatar: "https://cdn2.iconfinder.com/data/icons/website-icons/512/User_Avatar-512.png",
      graduationYear: 2017,
      major: 'Entrepreneurship',
      skills: ['design'],
      needs: ['business development', 'accounting'],
      status: 'founder', //founder, cofounder, looking for opportuntiies
      businessId: 232332
    }
  }
];


export const resourceItemsSeed = [
  {
    _id: 1,
    title: 'Local CDFI',
    description: 'Business Loans',
    resourceItemType: 'financing', // financing, service, competition, incentive,
    resourceOrgTitle: 'Local CDFI',
  },
  {
    _id: 2,
    title: 'University Law Department',
    description: 'Free Legal Counsel',
    resourceItemType: 'service', // financing, service, competition, incentive,
    resourceOrgTitle: 'University Law Department',
  },
  {
    _id: 3,
    title: 'University Entreprenuership Center',
    description: 'University Entreprenuership Center',
    resourceItemType: 'competition', // financing, service, competition, incentive,
    resourceOrgTitle: 'University Entreprenuership Center',
  },
  {
    _id: 4,
    title: 'State Department of Economic Development',
    description: 'Economic Incentive',
    resourceItemType: 'incentive', // financing, service, competition, incentive,
  },
  {
    _id: 5,
    title: 'Local CDFI',
    description: 'SMB Loans',
    resourceItemType: 'financing', // financing, service, competition, incentive,
    resourceOrgTitle: 'Local CDFI',
  },
  {
    _id: 6,
    title: 'Local SBDC',
    title: 'Free Business Advisory Service',
    resourceItemType: 'service', // financing, service, competition, incentive,
    resourceOrgTitle: 'Local SBDC',
  },
  {
    _id: 7,
    title: 'Local Incubator',
    description: 'StartupNow Competition',
    resourceItemType: 'competition', // financing, service, competition, incentive,
  },
  {
    _id: 8,
    title: 'Local Angel Investment Group',
    description: 'Early-stage Startup Investment',
    resourceItemType: 'financing', // financing, service, competition, incentive,
  },
  {
    _id: 9,
    title: 'City Department of Economic Development',
    description: 'City Department of Economic Development',
    resourceItemType: 'incentive', // financing, service, competition, incentive,
  },
  {
    _id: 10,
    title: 'University Department of the Arts',
    description: 'Free Business Logos',
    resourceItemType: 'service', // financing, service, competition, incentive,
    resourceOrgTitle: 'University Department of the Arts',
  },
  {
    _id: 11,
    title: 'University Department of Technology & Engineering',
    title: 'Free Website Development',
    resourceItemType: 'service', // financing, service, competition, incentive,
    resourceOrgTitle: 'University Department of Technology & Engineering',
  },
  
];