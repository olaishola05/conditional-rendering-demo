import React, { useRef, useState } from "react";
import Login from "./routes/Login";

function GuestbookEntry() {
  const inputRef = useRef(null);
  const messageRef = useRef(null);

  const [guestbookEntries, setGuestbookEntries] = useState([]);
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    message: "",
  });

  const token = JSON.parse(localStorage.getItem("user"))?.token || false;

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    const message = messageRef.current.value;
    if (!name || !message) {
      console.log("Name and Message are required");
      setErrorMessages({
        name: !name ? "Name is required" : "",
        message: !message ? "Message is required" : "",
      });
      return;
    }
    setGuestbookEntries([...guestbookEntries, { name, message }]);
    inputRef.current.value = "";
    messageRef.current.value = "";
    setErrorMessages({ name: "", message: "" });
  };

  return (
    <>
      {token ? (
        <div className="flex w-[400px] mx-auto flex-col gap-8 items-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label className="flex gap-2 flex-col">
              Name:
              <input type="text" ref={inputRef} />
              {errorMessages.name && (
                <span className="text-red-500">{errorMessages.name}</span>
              )}
            </label>
            <label className="flex gap-2 flex-col">
              Message:
              <textarea ref={messageRef} />
              {errorMessages.message && (
                <span className="text-red-500">{errorMessages.message}</span>
              )}
            </label>
            <button type="submit" className="w-max p-3 border">
              Sign Guestbook
            </button>
          </form>

          <ul>
            <h2>Guestbook Entries</h2>
            {guestbookEntries.map((entry, index) => (
              <li key={index}>
                {entry.name}: {entry.message}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default GuestbookEntry;
