function convolutedCoinToss () {
  let num = Math.random();
  if (num >= .5) {
    return "heads";
  } else {
    return "tails";
  };
};

console.log(convolutedCoinToss());