export default numbers => {
  let animations = [];
  numbers = [...numbers];
  for (let i = 0; i < numbers.length - 1; i++) {
    if (i > 0) {
      animations.push({
        index: i - 1,
        classes: ""
      });
    }
    animations.push({
      index: i,
      classes: "sorting--selected"
    });
    let smallest = i;
    for (let j = i + 1; j < numbers.length; j++) {
      animations.push({
        index: j,
        classes: "sorting--checking"
      });
      if (numbers[j].value < numbers[smallest].value) {
        if (smallest !== i) {
          animations.push({
            index: smallest,
            classes: ""
          });
        }
        smallest = j;
        animations.push({
          index: j,
          classes: "sorting--smallest"
        });
      } else {
        animations.push({
          index: j,
          classes: ""
        });
      }
    }
    if (smallest !== i) {
      animations.push({
        index: smallest,
        toIndex: i,
        classes: ""
      });
    }
    const aux = numbers[i];
    numbers[i] = numbers[smallest];
    numbers[smallest] = aux;
  }
  animations.push({
    index: numbers.length - 2,
    classes: ""
  });
  return animations;
};
