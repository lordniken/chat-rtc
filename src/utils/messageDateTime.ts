const date2humanDate = (date: Date) => {
  const today = new Date();
  const difDays = Math.ceil((today.getTime() - date.getTime()) /1000/60/60/24);

  switch (true) {
    case difDays === 1: return {
      translation: 'today'
    };
    case difDays === 2: return {
      translation: 'yesterday'
    };    
    case difDays < 7: return {
      days: difDays - 1,
      translation: 'daysAgo'
    };
    default: return date.toLocaleDateString();
  }
};

const time2humanTime = (time: Date) => {
  return time.toLocaleTimeString().split(':').splice(0, 2).join(':');
};

export default (date: Date) => ({
  date: date2humanDate(date),
  time: time2humanTime(date)
});