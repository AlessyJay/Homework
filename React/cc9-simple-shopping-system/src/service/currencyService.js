function curr(value) {
  const GBP = new Intl.NumberFormat(`en-GB`, {
    currency: `GBP`,
    style: `currency`,
  }).format(value);
  return GBP;
}

export { curr };
