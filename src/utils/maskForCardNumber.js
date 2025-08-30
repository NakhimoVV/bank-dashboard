const maskForCardNumber = (num) => {
  const result = num.toString().slice(-4)
  return `**** **** ${result}`
};

export default maskForCardNumber;