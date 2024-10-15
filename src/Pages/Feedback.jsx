import React, { useState } from "react";

const Feedback = ({ darkMode }) => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    console.log("Feedback submitted:", feedback);
    // Reset the form
    setFeedback({ name: "", email: "", message: "" });
  };

  return (
    <div
      className={`flex flex-col items-center mt-8 min-h-screen w-[84%] p-6 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={feedback.name}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-lg text-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={feedback.email}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-lg text-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-lg">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={feedback.message}
              onChange={handleChange}
              required
              rows="6"
              className={`w-full p-3 rounded-lg text-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full px-6 py-3 rounded-lg text-lg font-semibold ${
              darkMode
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white transition duration-300`}
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
