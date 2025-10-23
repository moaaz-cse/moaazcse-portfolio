// src/api/removeBg.js
import axios from "axios";

export const removeBackgroundAPI = async (imageSource) => {
  const formData = new FormData();

  try {
    if (!imageSource) {
      throw new Error("No image source provided");
    }

    if (typeof imageSource === "string") {
      if (imageSource.startsWith("data:image")) {
        // Base64
        formData.append("image_file_b64", imageSource.replace(/^data:image\/\w+;base64,/, ""));
      } else {
        // URL
        formData.append("image_url", imageSource);
      }
    } else {
      // File object
      formData.append("image_file", imageSource);
    }

    formData.append("size", "auto");

    const response = await axios.post("https://api.remove.bg/v1.0/removebg", formData, {
      headers: {
        "X-Api-Key": "P3YjXWf3x6moAd4sGbssfQEA", // Replace with your actual key
      },
      responseType: "blob",
    });

    const imageURL = URL.createObjectURL(response.data);
    return imageURL; // return processed image
  } catch (error) {
    console.error("❌ Error in removeBackgroundAPI:", error.response?.data || error);
    throw error;
  }
};
