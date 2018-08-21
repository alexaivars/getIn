function getIn(context, path, defaultValue) {
  if (!context) {
    return defaultValue || context;
  }

  if (!path) {
    return defaultValue;
  }

  return (
    []
      .concat(path)
      .reduce(
        (obj, key) =>
          obj && Object.prototype.hasOwnProperty.call(obj, key)
            ? obj[key]
            : null,
        context
      ) || defaultValue
  );
}

module.exports = getIn;
