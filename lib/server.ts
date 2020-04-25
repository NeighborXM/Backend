require('dotenv').config();
import app from "./app";
const PORT = 80;

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
})
