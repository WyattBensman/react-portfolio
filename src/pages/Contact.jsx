import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <form>
        <h1 className="text-2xl font-medium my-3">Contact Me</h1>
        <label
          htmlFor="name"
          className="block text-lg font-medium text-gray-700"
        >
          Name:
        </label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
          className="border rounded lg:w-1/2 md:w-2/3 w-full shadow py-2 px-3 text-gray-700"
        />
        <label
          htmlFor="email"
          className="block text-lg font-medium text-gray-700 mt-4"
        >
          Email Address:
        </label>
        <input
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="example@gmail.com"
          className="border rounded lg:w-1/2 md:w-2/3 w-full shadow py-2 px-3 text-gray-700"
        />
        <label
          htmlFor="message"
          className="block text-lg font-medium text-gray-700 mt-4"
        >
          Message:
        </label>
        <textarea
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="What's on your mind?"
          rows="5"
          className="border rounded lg:w-1/2 md:w-2/3 w-full shadow py-2 px-3 text-gray-700"
        />
        {!message && (
          <p className="text-color text-xs italic">Must include a message!</p>
        )}
        <button className="block px-4 py-2 mt-2 rounded text-white font-medium bg-blue-400 hover:bg-blue-500 transition-color duration-200 ease-in-out">
          Submit
        </button>
      </form>
    </>
  );
}
