import SliderInventario from "./components/SliderInventario";
import { useState } from "react";
import Main from "./pages/Main" ;

export default function App() {
  const [width, setWidth] = useState(true);
  const handleWidth = () => {
    setWidth(!width);
  };
  return (
    <div>
      <SliderInventario handleWidth={handleWidth} width={width} />
      <Main width= {width} />
    </div>
  );
}
