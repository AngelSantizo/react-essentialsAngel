// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)
import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import "./header.css";
import "./TabButton.js";
import TabButton from "./TabButton.js";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  //incluso aqui adentro podemos hacer la logica
  const description = reactDescriptions[getRandomInt(2)];

  //y luego ya poner resultados dentro del return con HTML
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  //Aqui de hecho vamos a escribir la funcion donde ejecutaremos el onClick
  //Ahora agregaremos un parametro para identificar el boton seleccionado
  function handleSelect(selectedButton) {
    //ahora el parametro deberiamos identificarlo para que diferenciaramos el boton que hicimos click
    //selectedButton => 'componentes'. 'jsx', 'props', o 'tate'
    console.log("Hello World! - ", selectedButton);
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* Asi es como pasamos los parametros para nuestra funcion asi se sabe diferenciar*/}
            <TabButton onSelect={() => handleSelect("Components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
