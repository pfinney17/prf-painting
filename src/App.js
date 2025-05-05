import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-white p-4 text-center">
      <h1 className="text-4xl font-bold mb-2">Finney Painting</h1>
      <p className="text-lg mb-6">Professional painting services for homes, rooms, and more!</p>

      <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Request a Quote</h2>

        {/* Replace the URL below with your Formspree endpoint */}
        <form
          action="https://formspree.io/f/xeoggzwq"
          method="POST"
          className="space-y-4"
        >
          <textarea
            name="request"
            placeholder="What do you want painted?"
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="address"
            placeholder="Project Address"
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="email"
            placeholder="Email (optional)"
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
