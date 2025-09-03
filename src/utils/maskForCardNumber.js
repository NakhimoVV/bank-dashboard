const maskForCardNumber = (num, isMoreVisibility = false) => {
  let result

  if (isMoreVisibility) {
    result = num
      .toString()
      .slice(4)
      .replace(/(\d{4})(?=\d)/g, "$1 ")
    return `**** ${result}`
  }
  result = num.toString().slice(-4)
  return `**** **** ${result}`
}

export default maskForCardNumber
