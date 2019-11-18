const quicksort = (numbers, p = 0, r = numbers.length - 1, animations = []) => {
  if (p >= r) return;
  const q = partition(numbers, p, r, animations);
  quicksort(numbers, p, q - 1, animations);
  quicksort(numbers, q + 1, r, animations);
  return animations;
};

const partition = (numbers, p, r, animations) => {
  animations.push({
    classes: "sorting--selected",
    index: p,
    multiple: true,
    toIndex: r
  });
  let q = p;
  animations.push({
    classes: "sorting--smallest",
    index: r
  });
  for (let u = p; u <= r - 1; u++) {
    if (numbers[u].value <= numbers[r].value) {
      animations.push({
        classes: "sorting--selected-left",
        index: u
      });
      if (q !== u) {
        animations.push({
          classes: "sorting--selected-left",
          index: q,
          toIndex: u,
          toIndexClasses: "sorting--selected-right"
        });
      }
      const aux = numbers[q];
      numbers[q] = numbers[u];
      numbers[u] = aux;
      q++;
    } else {
      animations.push({
        classes: "sorting--selected-right",
        index: u
      });
    }
  }
  animations.push({
    classes: "sorting--smallest",
    index: q,
    toIndex: r,
    toIndexClasses: "sorting--selected-right"
  });
  const aux = numbers[q];
  numbers[q] = numbers[r];
  numbers[r] = aux;
  animations.push({
    classes: "",
    index: p,
    multiple: true,
    toIndex: r
  });
  return q;
};

export default quicksort;
