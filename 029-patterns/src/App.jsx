import Accordion from "./components/Accordion/Accordion.jsx";

function App() {
  return (
    <main>
      <section>
        <h1>Why work with us?</h1>
        <Accordion className="accordion">
          <Accordion.Item className="accordion-item" id="experience">
            <Accordion.Title className="accordion-item-title">
              We got 20 years of experience
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  We are in the business of planning highly individualized
                  vacation trips for more than 20 years
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>

        <Accordion className="accordion">
          <Accordion.Item className="accordion-item" id="local-guides">
            <Accordion.Title className="accordion-item-title">
              We're working with local guides
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>We are not doing this along with our office</p>
                <p>
                  Instead we are workn g with local guides to ensure a safe and
                  pleasant vacation
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
