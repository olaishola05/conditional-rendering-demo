import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [database, setDatabase] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDatabase([...database, { name, email, message }]);
    localStorage.setItem(
      "database",
      JSON.stringify([...database, { name, email, message }]),
    );
    setLoading(!loading);
    // setName("");
    // setEmail("");
    // setMessage("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="flex flex-col gap-5">
      <h1>Contact Us</h1>
      <p>Phone: 123-456-7890</p>
      <p>Email: something@mailer.com</p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-1/3 border mx-auto p-5"
      >
        <input
          type="text"
          placeholder="Name"
          className="p-3"
          value={name}
          onChange={(e) => handleNameChange(e)}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          className="p-3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="p-2 rounded border bg-black text-white"
          disabled={loading}
          style={{
            cursor: loading ? "not-allowed" : "pointer",
            backgroundColor: loading ? "gray" : "black",
          }}
        >
          {loading ? "Sending" : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
