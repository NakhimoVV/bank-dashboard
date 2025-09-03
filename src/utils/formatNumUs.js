const formatNumUs = (number) => {
  const options = {
    style: "currency",
    currency: "USD",
    miminimumFractionDigits: 0,
    maximumFractionDigits: 0,
    useGrouping: number >= 3000,
  }
  const formatter = new Intl.NumberFormat("en-US", options)

  return formatter.format(number)
}

export default formatNumUs
