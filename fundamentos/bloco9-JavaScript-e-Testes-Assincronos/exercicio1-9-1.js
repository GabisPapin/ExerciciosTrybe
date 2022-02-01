// 1 - Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?
// Imprime na ordem do console.log, execução síncrona.
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'Kilometers',
    },
  };

  const venus = {
    name: "Venus",
    distanceFromSun: {
    value: 108200000,
    measurementUnit: "Kilometers",
    },
  };

  const jupiter = {
    name: "Jupiter",
    distanceFromSun: {
      value: 778500000,
      measurementUnit: "kilometers",
    },
  };

 console.log(planetDistanceFromSun(mars));
 console.log(planetDistanceFromSun(venus));
 console.log(planetDistanceFromSun(jupiter)); 