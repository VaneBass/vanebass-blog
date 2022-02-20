const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");

dotenv.config();

// 连接数据库
main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(process.env.MONGO_URL, {
      autoIndex: false,
    })
    .then(console.log("Connected to MongoDB"));
}

// 解析json
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// 挂载子路由
routes(app);

// 监听端口
app.listen("5000", () => {
  console.log("Backend is running...");
});
