export default numbers => {
  let animations = [];
  numbers = [...numbers];
  for (let i = 1; i < numbers.length; i++) {
    animations.push({
      index: i - 1,
      classes: ""
    });
    animations.push({
      index: i,
      classes: "sorting--selected"
    });
    let key = numbers[i],
      j = i - 1;
    while (j >= 0 && numbers[j].value > key.value) {
      animations.push({
        index: j + 1,
        classes: "sorting--selected"
      });
      animations.push({
        index: j,
        classes: "sorting--checking"
      });
      animations.push({
        index: j,
        classes: "sorting--smallest"
      });
      numbers[j + 1] = numbers[j];
      animations.push({
        index: j + 1,
        classes: ""
      });
      animations.push({
        index: j,
        toIndex: j + 1,
        classes: ""
      });
      j--;
    }
    animations.push({
      index: j + 1,
      classes: ""
    });
    numbers[j + 1] = key;
  }
  return animations;
};
