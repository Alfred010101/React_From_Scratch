import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

function Boton({ children, isLoading, onClick }: Props) {
  //   const [click, setClick] = useState(0);
  //   const handleClik = (e: ReactNode) => {};

  return (
    <button
      disabled={isLoading}
      type="button"
      className={`btn btn-${isLoading ? "secondary" : "primary"}`}
      onClick={() => onClick()}
      //   style={{ display: "block" }}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
}

export default Boton;
