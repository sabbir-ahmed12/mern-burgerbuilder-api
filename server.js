const dotenv = require("dotenv");

// Fetching the environment variables from .env
dotenv.config();

const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_SERVER)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB Connection Failed."));

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
