const mergeSort = (numbers, p = 0, r = numbers.length - 1, animations = []) => {
  if (p >= r) return;
  const q = Math.floor((p + r) / 2);
  mergeSort(numbers, p, q, animations);
  mergeSort(numbers, q + 1, r, animations);
  return merge(numbers, p, q, r, animations);
};

const merge = (numbers, p, q, r, animations) => {
  const leftPart = numbers.slice(p, q + 1).concat({ value: Number.MAX_VALUE });
  const rightPart = numbers
    .slice(q + 1, r + 1)
    .concat({ value: Number.MAX_VALUE });
  animations.push({
    classes: "sorting--selected",
    index: p,
    merging: true,
    mergignValue: null,
    multiple: true,
    toIndex: q + 1
  });
  animations.push({
    classes: "sorting--selected-right",
    index: q + 1,
    merging: true,
    mergignValue: null,
    multiple: true,
    toIndex: r + 1
  });
  let i = 0,
    j = 0;
  for (let k = p; k <= r; k++) {
    if (leftPart[i].value <= rightPart[j].value) {
      animations.push({
        index: i + p,
        classes: "sorting--smallest"
      });
      animations.push({
        index: k,
        mergingValue: leftPart[i].value
      });
      numbers[k] = leftPart[i];
      i++;
    } else {
      animations.push({
        index: j + q + 1,
        classes: "sorting--smallest"
      });
      animations.push({
        index: k,
        mergingValue: rightPart[j].value
      });
      numbers[k] = rightPart[j];
      j++;
    }
  }
  animations.push({
    classes: "",
    index: p,
    merging: false,
    multiple: true,
    toIndex: r + 1
  });
  return animations;
};

export default mergeSort;
