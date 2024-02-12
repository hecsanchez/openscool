const formatDate = (dateString: string) => {
  const eventDate = new Date(dateString).getTime();
  const now = new Date().getTime();
  const difference = now - eventDate;
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);

  if (new Date(eventDate).toDateString() === new Date(now).toDateString()) {
    return `${hours}h ago`;
  } else {
    return `${days}d ago`;
  }
};

export default formatDate;
