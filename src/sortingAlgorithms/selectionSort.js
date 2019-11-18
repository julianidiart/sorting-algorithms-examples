export default numbers => {
  let animations = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    if (i > 0) {
      animations.push({
        index: i - 1,
        classes: "sorting--selected-left"
      });
    }
    animations.push({
      classes: "sorting--selected",
      index: i
    });
    let smallest = i;
    for (let j = i + 1; j < numbers.length; j++) {
      animations.push({
        classes: "sorting--checking",
        index: j
      });
      if (numbers[j].value < numbers[smallest].value) {
        if (smallest !== i) {
          animations.push({
            classes: "",
            index: smallest
          });
        }
        smallest = j;
        animations.push({
          classes: "sorting--smallest",
          index: j
        });
      } else {
        animations.push({
          classes: "",
          index: j
        });
      }
    }
    if (smallest !== i) {
      animations.push({
        classes: "",
        index: smallest,
        toIndex: i
      });
    }
    const aux = numbers[i];
    numbers[i] = numbers[smallest];
    numbers[smallest] = aux;
  }
  animations.push({
    classes: "",
    index: 0,
    multiple: true,
    toIndex: numbers.length - 1
  });
  return animations;
};
