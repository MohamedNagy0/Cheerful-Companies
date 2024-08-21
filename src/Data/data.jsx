import { AiOutlineDollar } from "react-icons/ai";
import { BsCashCoin, BsFillCreditCard2BackFill } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";
import { FaGreaterThan, FaHeadSideCough } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";

// Start Answer section data
export const faq = [
  {
    id: 1,
    ask: "Can I get a US Bank Account without going to the US?",
    answer:
      "Yes, we partner with Mercury Bank and they form accounts 100% online for non-US citizens. We are proud to support entrepreneurs from all over the world and help them incorporate in the US and get a US bank account!",
  },
  {
    id: 2,
    ask: "Can I get Stripe & PayPal for my US company?",
    answer:
      "Yes! Once you have your EIN number you can get access to both Stripe and PayPal from any country in the world!",
  },
  {
    id: 3,
    ask: "What do I need to get started?",
    answer:
      "To get started, simply fill out our online form, submit your payment, upload your documentation and we’ll handle the rest.​ You should note that you will need a valid passport to open a US bank account!",
  },
  {
    id: 4,
    ask: "What is the difference between using you and an expensive lawyer?",
    answer:
      "Nothing! We offer more than a lawyer can at much lower costs because we use technology and automation to reduce administrative costs. Worried about accuracy? Our processes are vetted by lawyers for validity to ensure we’re filing your information correctly.",
  },
  {
    id: 5,
    ask: "Do I need to be a U.S. Citizen with an SSN to use Jumpstart?",
    answer: "No! Non-Citizens can now form US companies without an SSN.",
  },
  {
    id: 6,
    ask: "Do you help with taxes?",
    answer:
      "We work with our partners to provide you with an easy way to file your taxes. Our partner Bookmate has packages based on revenue and can file for any type of entity that you can file with Jumpstart. Unlike other firms, Bookmate specializes in helping non-resident founders file taxes. Jumpstart customers have access to an exclusive 10% discount on all Bookmate services. Federal tax returns are due in March or April depending on the entity. Schedule a free consultation with Bookmate after you purchase by contacting our dedicated customer success team line inside your account.",
  },
  {
    id: 7,
    ask: "What are the main benefits to opening a US company?",
    answer:
      "Most of our clients start U.S. companies to access the U.S. market, reduce their personal liability, and access U.S. banking, Stripe, PayPal, and more! The US is the biggest consumer market in the world!",
  },
  {
    id: 8,
    ask: "Do you support my country?",
    answer:
      "We support almost all countries! Due to US sanctions, we do not support Iran, Syria, North Korea, Russia or Cuba.",
  },
  {
    id: 9,
    ask: "Who is your banking partner?",
    answer:
      "We partner with Novel Bank. Novel is a highly regarded bank with all of the features entrepreneurs need! They offer physical and virtual debit cards, full checking and savings accounts, ACH and wire transfers, and more! You can easily send money anywhere in the world, pay for goods/services, and connect payment processors like Stripe and PayPal. Accounts with Novel are free!",
  },
  {
    id: 10,
    ask: "What is the most common type of company to form?",
    answer:
      "Most people choose the Wyoming LLC because of the simplicity and business friendly nature of the state!",
  },
  {
    id: 11,
    ask: "What types of businesses can form in the US?",
    answer:
      "Any type of business is welcome in the US! Just a few examples are ecommerce, consulting, business services, education, software, IT services and more! The US market welcomes all types of businesses",
  },
  {
    id: 12,
    ask: "How long does the process take?",
    answer:
      "On average, it takes 5 weeks to complete the process. Opening the company will take 1-2 weeks . Then we can apply for the EIN, which takes 3-4 weeks for the IRS to issue on average. Finally, it takes 3-5 days to open the US bank account, meaning the full time table is 4-6 weeks!",
  },
];
// End Answer section data

// Start Benefits Section Data
export const businessSteps = [
  { id: 1, step: "Earn the trust of your customers" },
  { id: 2, step: "Open a U.S. Business Bank Account" },
  { id: 3, step: "Open merchant accounts with Stripe/Paypal/Amazon" },
  { id: 4, step: "Acquire U.S. customers" },
  { id: 5, step: "Expand your business globally" },
  { id: 6, step: "Legitimize your business" },
];

export const usaBenefits = [
  {
    id: 1,
    step: "Company Formation",
    icon: (
      <BsFillCreditCard2BackFill className="text-primary-color2 text-5xl" />
    ),
  },
  {
    id: 2,
    step: "EIN",
    icon: <AiOutlineDollar className="text-primary-color2 text-5xl" />,
  },
  {
    id: 3,
    step: "Registered Agent",
    icon: <CiMobile2 className="text-primary-color2 text-5xl" />,
  },
  {
    id: 4,
    step: "US Bank Account",
    icon: <FaGreaterThan className="text-primary-color2 text-5xl" />,
  },
  {
    id: 5,
    step: "Post Formation Support",
    icon: <BsCashCoin className="text-primary-color2 text-5xl" />,
  },
  {
    id: 6,
    step: "Post Formation Support",
    icon: <FaHeadSideCough className="text-primary-color2 text-5xl" />,
  },
];
// End Benefits Section Data

// Start Package Section Data
export const servicesComparison = [
  {
    id: 1,
    serviceName: "Online Company Formation",
    "499$ one time payment": true,
    "+600$": true,
  },
  {
    id: 2,
    serviceName: "Registered Agent",
    "499$ one time payment": true,
    "+600$": false,
  },
  {
    id: 3,
    serviceName: "Registered Agent Address",
    "499$ one time payment": true,
    "+600$": false,
  },
  {
    id: 4,
    serviceName: "Operating Agreement",
    "499$ one time payment": true,
    "+600$": false,
  },
  {
    id: 5,
    serviceName: "Name Availability Search",
    "499$ one time payment": true,
    "+600$": false,
  },
  {
    id: 6,
    serviceName: "Online Document Access",
    "499$ one time payment": true,
    "+600$": false,
  },
  {
    id: 7,
    serviceName: "Statement of Organizer",
    "499$ one time payment": true,
    "+600$": false,
  },
  {
    id: 8,
    serviceName: "Rush Filing Services",
    "499$ one time payment": true,
    "+600$": false,
  },
  {
    id: 9,
    serviceName: "Employer ID Number [EIN]",
    "499$ one time payment": true,
    "+600$": true,
  },
  {
    id: 10,
    serviceName: "US Bank Account",
    "499$ one time payment": true,
    "+600$": false,
  },
  {
    id: 11,
    serviceName: "24-48 hr Email Support",
    "499$ one time payment": true,
    "+600$": false,
  },
  {
    id: 12,
    serviceName: "Chat Support",
    "499$ one time payment": true,
    "+600$": false,
  },
];

export const formationSteps = [
  {
    id: 1,
    step: "Company Formation",
    icon: <BsBuildings className={` text-inherit text-5xl`} />,
  },
  {
    id: 2,
    step: "EIN",
    icon: <FaFileInvoiceDollar className={` text-inherit text-5xl`} />,
  },
  {
    id: 3,
    step: "Registered Agent",
    icon: <FaRegHandshake className={` text-inherit text-5xl`} />,
  },
  {
    id: 4,
    step: "US Bank Account",
    icon: <CiCreditCard1 className={` text-inherit text-5xl`} />,
  },
  {
    id: 5,
    step: "Post Formation Support",
    icon: <BiMessageRoundedDetail className={` text-inherit text-5xl`} />,
  },
];
// End Package Section Data
