const quicksort = (numbers, p = 0, r = numbers.length - 1, animations = []) => {
  if (p >= r) return;
  const q = partition(numbers, p, r, animations);
  quicksort(numbers, p, q - 1, animations);
  quicksort(numbers, q + 1, r, animations);
  return animations;
};

const partition = (numbers, p, r, animations) => {
  animations.push({
    index: p,
    toIndex: r + 1,
    multiple: true,
    classes: "sorting--selected"
  });
  let q = p;
  for (let u = p; u <= r - 1; u++) {
    if (numbers[u].value <= numbers[r].value) {
      animations.push({
        index: q,
        toIndex: u,
        classes: "sorting--selected"
      });
      const aux = numbers[q];
      numbers[q] = numbers[u];
      numbers[u] = aux;
      q++;
    }
  }
  animations.push({
    index: q,
    toIndex: r,
    classes: "sorting--selected"
  });
  const aux = numbers[q];
  numbers[q] = numbers[r];
  numbers[r] = aux;
  animations.push({
    index: p,
    toIndex: r + 1,
    multiple: true,
    classes: ""
  });
  return q;
};

export default quicksort;
