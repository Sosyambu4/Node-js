const responseMiddleware = (req, res, next) => {
  if (res.err) {
    // Handle errors
    res.status(400).json({ error: true, message: res.err.message || "Bad Request" });
  } else if (res.data) {
    // Handle successful responses
    res.status(200).json({ data: res.data });
  } else {
    // Handle not found responses
    res.status(404).json({ error: true, message: "Not Found" });
  }
};

export { responseMiddleware };
