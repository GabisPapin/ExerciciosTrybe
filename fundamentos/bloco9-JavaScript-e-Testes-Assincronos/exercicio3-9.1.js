/* 3 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet , 
de forma que Marte seja impresso assincronamente, depois de 4 segundos.*/
const getPlanet = ({ name, distanceFromSun: { value, measurementUnit } }) => 
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };

setTimeout(() => console.log(getPlanet(mars)), 4000) ; // imprime Marte depois de 4 segundos