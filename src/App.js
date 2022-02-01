// Importaciones

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ResponsiveAppBar } from "./components/ResponsiveAppBar/ResponsiveAppBar";
import "./styles/styles.scss";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <ItemListContainer greeting="Hola Coder!" />
    </>
  );
}

export default App;
