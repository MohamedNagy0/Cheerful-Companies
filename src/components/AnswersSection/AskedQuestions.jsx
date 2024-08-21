import { Accordion } from "react-bootstrap";
import { faq } from "../../Data/data";

function AskedQuestions() {
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
