export default (numbers, n = numbers.length, animations = []) => {
  for (let j = n - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      animations.push({
        classes: "sorting--checking",
        index: i,
        multiple: true,
        toIndex: i + 1
      });
      if (numbers[i].value > numbers[i + 1].value) {
        animations.push({
          classes: "sorting--selected",
          index: i,
          toIndex: i + 1,
          toIndexClasses: "sorting--selected"
        });
        let aux = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = aux;
      }
      animations.push({
        classes: "",
        index: i,
        multiple: true,
        toIndex: i + 1
      });
    }
    animations.push({
      classes: "sorting--selected-right",
      index: j
    });
  }
  animations.push({
    classes: "",
    index: 0,
    multiple: true,
    toIndex: n - 1
  });
  return animations;
};
