import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h1>Why work with us?</h1>
        <Accordion className="accordion">
          <AccordionItem
            className="accordion-item"
            title="We got 20 years of experience"
          >
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>
                We are in the business of planning highly individualized
                vacation trips for more than 20 years
              </p>
            </article>
          </AccordionItem>
        </Accordion>

        <Accordion className="accordion">
          <AccordionItem
            className="accordion-item"
            s
            title="We're working with local guides"
          >
            <article>
              <p>We are not doing this along with our office</p>
              <p>
                Instead we are workn g with local guides to ensure a safe and
                pleasant vacation
              </p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
