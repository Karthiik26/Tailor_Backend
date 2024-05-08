const mongoose = require('mongoose');
// mongoose.connect(process.env.DB_CONNECTION)
mongoose.connect("mongodb+srv://imkarthiik26:UCvCqcaaEs2iUhTs@tailordb.shtrlhw.mongodb.net/TailorApplication")

const db = mongoose.connection;

db.on("error", (error) => {
  console.warn("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB:");
});

// Handle disconnects
db.on("disconnected", () => {
  console.warn("MongoDB disconnected");
});

// Close the MongoDB connection when the Node process is terminated
process.on("SIGINT", () => {
  db.close(() => {
    console.log("MongoDB connection closed through app termination");
    process.exit(0);
  });
});