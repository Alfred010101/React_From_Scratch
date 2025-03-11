import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Boton from "./components/Boton";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClik = () => setIsLoading(!isLoading);

  const [data, setData] = useState(["Persona 1", "Persona 2", "Persona 3"]);
  const [_, setPersona] = useState(3);

  const handleSelect = (elemento: string) => {
    console.log(elemento);
  };

  const handleClickAgregar = () => {
    setPersona((prevPersona) => {
      const nuevaPersona = prevPersona + 1;
      setData((prevData) => [...prevData, `Persona ${nuevaPersona}`]);
      return nuevaPersona;
    });
  };

  const handleClickElinar = () => {
    if (data.length > 0) {
      setPersona((prevPersona) => {
        const nuevaPersona = prevPersona - 1;
        setData((prevData) => prevData.slice(0, -1));
        return nuevaPersona;
      });
    }
  };

  // const contenido = list.length ? (
  //   <List data={list} onSelect={handleSelect} />
  // ) : (
  //   "Sin elemenos"
  // );

  return (
    <Card>
      <Boton onClick={handleClickAgregar}>{"Agregar"}</Boton>
      <Boton onClick={handleClickElinar}>{"Eliminar"}</Boton>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      {data.length ? (
        <List data={data} onSelect={handleSelect} />
      ) : (
        "Sin elemenos"
      )}
      {/* <Boton isLoading={isLoading} onClick={handleClik}>
        {"Athr"}
      </Boton> */}
    </Card>
  );
}

export default App;
