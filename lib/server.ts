require('dotenv').config();
import app from "./app";
const PORT = 5000;

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
})
