import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });
  const [recommendedCrop, setRecommendedCrop] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/recommend-crop",
        formData
      );
      setRecommendedCrop(res.data.recommended_crop);
    } catch (error) {
      console.error("Error fetching the recommendation:", error);
    }
  };

  return (
    <div className="min-h-screen justify-center text-center  bg-gradient-to-br from-green-300 via-blue-300 to-purple-400">
      <div>
        <h2 className="text-5xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text font-extrabold text-center mb-1 pt-3 text-transparent">
          Rooted In Data
        </h2>
        <h3 className="text-sm mb-5 text-center font-semibold">
          A Crop Recommendtation System
        </h3>
      </div>
      <div className="justify-center flex items-center">
        <form
          className="bg-white shadow-md  rounded-lg p-8 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          {[
            "nitrogen",
            "phosphorus",
            "potassium",
            "temperature",
            "humidity",
            "ph",
            "rainfall",
          ].map((field) => (
            <div className="mb-4" key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-600 capitalize"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type="number"
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
        <div className="bg-white translate-x-32 py-6 px-6 rounded-lg">
          <div id="output" className="gap-4 text-center">
            <h3 className="text-[26px] font-semibold text-gray-700">
              Recommended Crop:
            </h3>
            {recommendedCrop && (
              <p id="crop-result" className="text-gray-600 text-2xl">
                {recommendedCrop}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
