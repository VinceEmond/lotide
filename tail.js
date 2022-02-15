const tail = (array) => {
  
  const tail = [...array];
  tail.shift();

  return tail;
};

module.exports = tail;