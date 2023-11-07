const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;

app.use(express.json());
app.use(cors());
 
 
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
