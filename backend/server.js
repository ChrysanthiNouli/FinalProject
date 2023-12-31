const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./connection");
const routes = require("./routers/productRoute");
const userRoutes = require("./routers/userRoute");
const cartRoute = require("./routers/cartRoute.js");
const port = 8080;

app.use(express.json());
app.use(cors());
app.use("/", userRoutes);
app.use("/", routes);
app.use("/", cartRoute);

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
