import { stock } from "../components/stock/stock";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 3000);
  });
};
