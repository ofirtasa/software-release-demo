module.exports = (app) => {
  app.get("/ofir", (req, res) => {
    res.send("This is an ofir route!");
  });
};
