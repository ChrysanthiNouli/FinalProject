const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./connection");
const routes = require("./routers/productRoute");
const userRoutes = require("./routers/userRoute")
const port = 8080;

app.use(express.json());
app.use(cors());

app.use("/", routes);
app.use("/", userRoutes);
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
