const formatCardDate = (date) => {
  try {
    return new Intl.DateTimeFormat('en-US', {
      year: '2-digit',
      month: 'numeric'
    }).format(new Date(date))
      .split('/')
      .reverse()
      .join('/');
  } catch {
    return 'Invalid date';
  }
}

export default formatCardDate;