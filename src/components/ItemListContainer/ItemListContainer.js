import { useEffect, useState } from "react";
import { pedirDatos } from "../../Funciones/pedirDatos";
import { ItemList } from "../ItemList/ItemList";
import FadeLoader from "react-spinners/FadeLoader";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  //TODO: Creo un estado de carga
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    //TODO: Al H2 puedo darle estilos para el Loading....
    <>
      {loading ? (
        <FadeLoader loading={loading} size={100} color={"#623979"} />
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
};
