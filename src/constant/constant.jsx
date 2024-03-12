import Disney from "../asset/images/disney.png";
import Google from "../asset/images/google.svg";
import Shopify from "../asset/images/shopify.svg";
import MailChimp from "../asset/images/mailchimp.svg";
import Wix from "../asset/images/wix.png";
import PayPal from "../asset/images/paypal.svg";
import Intercom from "../asset/images/intercom.png";
import Microsoft from "../asset/images/microsoft.svg";
import Evernote from "../asset/images/evernote.png";
import Invision from "../asset/images/invision.png";

export const folders = [
  {
    name: "Products",
    key: "products",
    submenu: ["Roadmap", "Feedback", "Performance", "Team", "Analytics"],
  },
  {
    name: "Sales",
    key: "sales",
    submenu: ["Roadmap", "Feedback", "Performance", "Team", "Analytics"],
  },
  {
    name: "Design",
    key: "design",
    submenu: ["Roadmap", "Feedback", "Performance", "Team", "Analytics"],
  },
];

export const BrandTableData = [
  {
    brand: "Wix",
    logo: Wix,
    description: "Develop a personalized fitness platform ",
    member: "Arjun, Neha",
    categories: [
      {
        name: "Automation",
        color: "bg-purple-300",
        textColor: "text-purple-700",
      },
    ],
    tags: ["#DigitalTransformation"],
    nextMeeting: "In 30 minutes",
    meetingColor: "bg-green-300",
  },
  {
    brand: "Shopify",
    logo: Shopify,
    description: "Introduced a cloud-based shopping platform",
    member: "Priya, Sanjana, Rohan, Kritika, Aryan, Tejwant",
    categories: [
      { name: "E-commerce", color: "bg-red-300", textColor: "text-red-700" },
      { name: "B2B", color: "bg-yellow-300", textColor: "text-yellow-700" },
    ],
    tags: ["#OnlineShopping"],
    nextMeeting: "Tomorrow",
    meetingColor: "bg-blue-300",
  },
  {
    brand: "MailChimp",
    logo: MailChimp,
    description: "Develop a mobile app technology",
    member: "Amit, Deepika, Tanvi, Rajesh",
    categories: [
      { name: "SAAS", color: "bg-green-300", textColor: "text-green-700" },
      { name: "Mobile", color: "bg-yellow-300", textColor: "text-yellow-700" },
    ],
    tags: ["#TechInnovation"],
    nextMeeting: "Tomorrow",
    meetingColor: "bg-blue-300",
  },
  {
    brand: "PayPal",
    logo: PayPal,
    description: "This program could includes cloud based payment",
    member: "Rahul, Nisha",
    categories: [
      {
        name: "Marketplace",
        color: "bg-green-300",
        textColor: "text-green-700",
      },
    ],
    tags: ["#BuySellOnline"],
    nextMeeting: "In 6 hours",
    meetingColor: "bg-green-300",
  },
  {
    brand: "Disney",
    logo: Disney,
    description: "Introduce a B2B soulution for movies.",
    member: "Akshay, Pooja, Rakesh",
    categories: [
      { name: "B2B", color: "bg-yellow-300", textColor: "text-yellow-700" },
      { name: "B2C", color: "bg-orange-300", textColor: "text-orange-700" },
    ],
    tags: ["#BusinessPartnerships"],
    nextMeeting: "No contact",
    meetingColor: "bg-red-300",
  },
  {
    brand: "Intercom",
    logo: Intercom,
    description: "Implement an AI-driven Company",
    member: "Varun",
    categories: [
      { name: "Technology", color: "bg-blue-300", textColor: "text-blue-700" },
      { name: "SAAS", color: "bg-green-300", textColor: "text-green-700" },
    ],
    tags: ["#SmartFinance"],
    nextMeeting: "in 1 hour",
    meetingColor: "bg-green-300",
  },
  {
    brand: "Google",
    logo: Google,
    description: "Offer a comprehensive understanding.",
    member: "Vishal, Sonali, Pradeep, Priyanka",
    categories: [
      { name: "Finance", color: "bg-indigo-300", textColor: "text-indigo-700" },
      { name: "Automation", color: "bg-red-300", textColor: "text-red-700" },
    ],
    tags: ["#SmartFinance"],
    nextMeeting: "In 30 minutes",
    meetingColor: "bg-green-300",
  },
  {
    brand: "Evernote",
    logo: Evernote,
    description: "This could include smart writing notes",
    member: "Gaurav, Kavita, Rishi",
    categories: [
      {
        name: "Transportation",
        color: "bg-yellow-300",
        textColor: "text-yellow-700",
      },
    ],
    tags: ["#LogisticsTech"],
    nextMeeting: "Next month",
    meetingColor: "bg-gray-300",
  },
  {
    brand: "Microsoft",
    logo: Microsoft,
    description: "Launch an advisory services for Windows",
    member: "Akanksha, Sahil, Rohit",
    categories: [
      { name: "Publishing", color: "bg-pink-300", textColor: "text-pink-700" },
      { name: "B2C", color: "bg-green-300", textColor: "text-gray-700" },
    ],
    tags: ["#B2CMarketing"],
    nextMeeting: "No contact",
    meetingColor: "bg-red-300",
  },
  {
    brand: "Invision",
    logo: Invision,
    description: "The tool would analyze data efficiently.",
    member: "Kunal, Priya",
    categories: [
      {
        name: "Web Services",
        color: "bg-gray-300",
        textColor: "text-gray-700",
      },
    ],
    tags: ["#ApiIntegration"],
    nextMeeting: "Next month",
    meetingColor: "bg-gray-300",
  },
];
