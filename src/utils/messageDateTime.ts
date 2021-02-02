const date2humanDate = (date: Date) => {
  const today = new Date();

  if (date.toLocaleDateString() === today.toLocaleDateString()) 
    return null;

  // @ts-ignore
  const difDays = Math.round(Math.abs(today - date) /1000/60/60/24);
  switch (true) {
    case difDays === 1: return {
      translation: 'yesterday'
    };
    case difDays < 7: return {
      days: difDays,
      translation: 'daysAgo'
    };
    default: return date.toLocaleDateString();
  }
};

const time2humanTime = (time: Date) => {
  return time.toLocaleTimeString().split(':').splice(0, 2).join(':');
};

export default (messageDate: Date) => {
  const date = new Date(messageDate);
  
  return {
    date: date2humanDate(date),
    time: time2humanTime(date)
  };
};