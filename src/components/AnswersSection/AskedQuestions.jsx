import { Accordion } from "react-bootstrap";

function AskedQuestions() {
  const faq = [
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

  return (
    <div className="w-full lg:w-1/2 flex-grow">
      <h2 className="font-bold  text-3xl mb-12">
        <span className="underLine">
          Find Answers to Frequently Asked Questions
        </span>
      </h2>
      {faq.map((q) => (
        <Accordion className="mb-3" key={q.id}>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="font-medium">{q.ask}</Accordion.Header>
            <Accordion.Body>{q.answer}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
}

export default AskedQuestions;
