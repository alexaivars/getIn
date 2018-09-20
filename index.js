function getIn(context, path, notSetValue) {
  if (!context) {
    return notSetValue || context;
  }

  if (!path) {
    return notSetValue;
  }

  return (value = [].concat(path).reduce(function(obj, key) {
    return obj && Object.prototype.hasOwnProperty.call(obj, key)
      ? obj[key]
      : notSetValue;
  }, context));
}

module.exports = getIn;
