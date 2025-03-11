import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list: string[] = [
    // "Persona 1",
    // "Persona 2",
    // "Persona 3",
    // "Persona 4",
    // "Persona 5",
  ];

  const handleSelect = (elemento: string) => {
    console.log(elemento);
  };

  const contenido = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    "Sin elemenos"
  );

  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      {contenido}
    </Card>
  );
}

export default App;
