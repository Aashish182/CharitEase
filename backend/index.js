const express = require("express")
const cors = require("cors")
require('dotenv').config();
const cookieParser = require('cookie-parser')
const connectDB = require("../backend/config/db");
const router = require('./routes/index');

const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api",router);

const PORT = 8080 || process.env.PORT

connectDB().then(() => {
    app.listen(PORT,() => {
        console.log("Connect to db");
        console.log("Server is running");
    })
})





// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const cookieParser = require("cookie-parser");
// const connectDB = require("./config/db"); // ✅ Correct path for Render
// const router = require("./routes/index");

// const app = express();

// // ✅ Allow multiple origins for dev (localhost) and prod (Vercel)
// const allowedOrigins = [
//   "http://localhost:3000",            // Local development
//   "https://charitease.vercel.app"     // Production
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // allow requests with no origin (like Postman)
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         const msg =
//           "The CORS policy for this site does not allow access from the specified Origin.";
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     },
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(cookieParser());

// // ✅ API Routes
// app.use("/api", router);

// // ✅ Correct PORT usage for Render
// const PORT = process.env.PORT || 8080;

// // ✅ DB Connect + Server Start
// connectDB()
//   .then(() => {
//     console.log("✅ Connected to MongoDB");
//     app.listen(PORT, () => {
//       console.log(`✅ Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ DB Connection Failed:", err);
//   });

// // ✅ Optional: Simple health check route
// app.get("/", (req, res) => {
//   res.send("CharitEase Backend is running ✅");
// });






// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const cookieParser = require("cookie-parser");
// const connectDB = require("./config/db");   // ✅ correct for backend folder
// const router = require("./routes/index");

// const app = express();

// // ✅ CORS for frontend + cookies
// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true
// }));

// app.use(express.json());
// app.use(cookieParser());

// // ✅ API Routes
// app.use("/api", router);

// // ✅ Correct PORT for Render
// const PORT = process.env.PORT || 8080;

// // ✅ DB Connect + Start Server
// connectDB()
// .then(() => {
//     app.listen(PORT, () => {
//         console.log("✅ Connected to DB");
//         console.log(`✅ Server running on port ${PORT}`);
//     });
// })
// .catch(err => console.error("❌ DB connection failed:", err));
