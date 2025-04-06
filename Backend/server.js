import dotenv from "dotenv";
import cloudinary from "cloudinary";
import app from "./app.js"; // 🔹 This is missing!

dotenv.config({ path: "./config/config.env" });

// Cloudinary Configuration
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Start the Express Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`✅ Server listening on port ${PORT}`);
});
