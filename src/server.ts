import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

const port = 3000;

async function main() {
  await mongoose.connect(config.db_url as string);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  try {
  } catch (err) {
   throw new Error()
  }
}
main()
