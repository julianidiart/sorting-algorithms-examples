export const selectionSort = numbers => {
  let movements = [];
  numbers = [...numbers];
  for (let i = 0; i < numbers.length - 1; i++) {
    movements.push({
      index: i,
      classes: "sorting--selected"
    });
    let smallest = i;
    for (let j = i + 1; j < numbers.length; j++) {
      movements.push({
        index: j,
        classes: "sorting--checking"
      });
      if (numbers[j].value < numbers[smallest].value) {
        if (smallest !== i) {
          movements.push({
            index: smallest,
            classes: ""
          });
        }
        smallest = j;
        movements.push({
          index: j,
          classes: "sorting--smallest"
        });
      } else {
        movements.push({
          index: j,
          classes: ""
        });
      }
    }
    if (smallest !== i) {
      movements.push({
        index: smallest,
        toIndex: i,
        classes: ""
      });
    }
    const aux = numbers[i];
    numbers[i] = numbers[smallest];
    numbers[smallest] = aux;
  }
  movements.push({
    index: numbers.length - 1,
    classes: "sorting--selected"
  });
  return movements;
};
