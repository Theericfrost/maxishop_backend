const express = require("express");
const sequelize = require("./app/util/database");
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET", "POST", "PUT", "DELETE");
  next();
});

app.use("/api/cars", require("./app/routes/cars").router);

(async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
  } catch (e) {
    console.error(e);
  }
})();
