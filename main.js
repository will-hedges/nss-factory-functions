const computer = {
  id: 1,
  manufacturer: "Apple",
  make: "Macbook",
  model: "Pro",
  specs: {
    memory: 32,
    hardDrive: "500 GB",
    processor: 2.4,
  },
};

const factoryFunction = (computerObj) => {
  computerStr = `<section id="computer--${computerObj.id}">}
  <h1>${computerObj.manufacturer} ${computerObj.make}</h1>
  <div>Model: ${computerObj.model}</div>
  <div>Memory: ${computerObj.specs.memory} GB</div>
  <div>Hard drive space: ${computerObj.specs.hardDrive} GB</div>
  <div>Processor speed: ${computerObj.specs.processor} GHz</div>
</section>`;

  return computerStr;
};

const macbookRepresentaton = factoryFunction(computer);

console.log(macbookRepresentaton);
