import Accordion from "./Accordion";
import AccordionContent from "./AccordionContent";
import AccordionTitle from "./AccordionTitle";

const AccordionHome = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>Accordion component</p>
      <Accordion>
        <AccordionTitle heading="Do I have to allow the use of cookies?"></AccordionTitle>
        <AccordionContent>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionTitle heading="How do I change my My Page password?"></AccordionTitle>
        <AccordionContent>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionTitle heading="What is BankID?"></AccordionTitle>
        <AccordionContent>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionTitle heading="Whose birth number can I use?"></AccordionTitle>
        <AccordionContent>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionTitle heading="When do I recieve a password ordered by letter?"></AccordionTitle>
        <AccordionContent>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </AccordionContent>
      </Accordion>
    </div>
  );
};

export default AccordionHome;
