import app from "./app.js";
import "dotenv/config";

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
