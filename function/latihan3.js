const komperUmurKucing = (age = 0) => {
  if (age == 1) {
    return 15;
  } else if (age >= 2) {
    return (age - 1) * 4 + 20;
  }
};
console.log(komperUmurKucing(5));
