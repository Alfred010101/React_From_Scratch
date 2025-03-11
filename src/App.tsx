import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = [
    "Persona 1",
    "Persona 2",
    "Persona 3",
    "Persona 4",
    "Persona 5",
  ];
  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      <List data={list} />
    </Card>
  );
}

export default App;
