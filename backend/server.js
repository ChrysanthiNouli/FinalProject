const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./connection");
const port = 8080;

app.use(express.json());
app.use(cors());

const productRoutes = require("./routers/productRoute");

app.use("/", productRoutes);
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
