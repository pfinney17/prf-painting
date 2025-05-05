import React, { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    request: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for your request! We’ll reach out soon.');
    setForm({ name: '', phone: '', address: '', email: '', request: '' });
  };

  return (
    <div className="min-h-screen bg-white p-4 text-center">
      <h1 className="text-4xl font-bold mb-2">Finney Painting</h1>
      <p className="text-lg mb-6">Professional painting services for homes, rooms, and more!</p>

      <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Request a Quote</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            name="request"
            placeholder="What do you want painted?"
            value={form.request}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="address"
            placeholder="Project Address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="email"
            placeholder="Email (optional)"
            value={form.email}
            onChange={handleChange}
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
