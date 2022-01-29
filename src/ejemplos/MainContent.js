// De esta manera exporto
export const MainContent = ({ titulo }) => {
  //TODO: aca estoy desestructurando, LO que envio desde el componente padre como objeto,
  //TODO: Se puede desestructura un parametro sabiendo que va a ser un  objeto
  //const { titulo, menu } = props;   TODO: ya no necesito usar esta const, xq en la funcion recibo el objeto

  return (
    //TODO: React fragment agrupo elementos con "<>" y saco el "<div></div>"
    <main>
      <h2>{titulo}</h2>
      <p>Soy un Parrafo</p>
      <p>Soy otro Parrafo</p>
    </main>
  );
};
