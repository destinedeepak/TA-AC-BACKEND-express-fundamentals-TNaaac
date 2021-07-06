function jsonParser(req, res, next) {
    let store = '';
    req.on('data', (chunk) => {
      store += chunk;
    });
    req.on('end', () => {
      req.body = store;
    });
  next();
}

module.exports = jsonParser;
