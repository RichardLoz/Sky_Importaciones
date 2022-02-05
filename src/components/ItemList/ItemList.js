import { Item } from "../Item/Item";
import { Grid } from "@mui/material";

export const ItemList = ({ productos }) => {
  return (
    // TODO: Agregar estilos aca

    <Grid container md={12}>
      <h2>Productos</h2>
      <hr></hr>
      {productos.map((el, i) => (
        <Item
          key={i} // TODO: Esto se puede reemplazar si a cada producto le asigno un id, y se lo paso como key {el.id}
          {...el} // Esto es spread, esto reemplaza a no tener que listar todas las propiedades. y lo desestructuro en Items.
          /*   nombre={el.nombre}
            precio={el.precio}
            img={el.img}
            desc={el.desc} */
        />
      ))}
    </Grid>
  );
};
