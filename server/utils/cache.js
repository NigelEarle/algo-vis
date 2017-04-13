module.exports = () => {
  const cache = {};

  return ( arg ) => {
    if (arg in cache) {
      return cache[arg];
    }
    cache[arg] = this(arg);
    return cache[arg];
  };
}