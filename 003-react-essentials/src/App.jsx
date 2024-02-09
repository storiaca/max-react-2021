import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <div id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((core) => (
              <CoreConcept
                key={core.title}
                title={core.title}
                description={core.description}
                image={core.image}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
