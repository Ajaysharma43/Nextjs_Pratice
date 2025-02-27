"use client";
import useSocket from "@/hooks/useSocket";
import { useEffect, useRef, useState } from "react";

const Chat_body = () => {
  const socket = useSocket();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ref = useRef();

  useEffect(() => {
    if (socket) {
      // Listen for incoming messages
      socket.on("receiveMessage", (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      // Clean up the socket connection when the component unmounts
      return () => {
        socket.off("receiveMessage");
      };
    }
  }, [socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Send the message through the socket
      
      socket.emit("sendMessage", message);
      setMessage("");
      ref.current.reset();
    }
  };

  return (
    <>
      <ul className="messages-list">
        {messages.map((msg, index) => (
          <li key={index} className="message-item">
            {msg}
          </li>
        ))}
      </ul>
      <form ref={ref} onSubmit={handleSubmit} className="align-baseline border border-solid bg-slate-400">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-transparent border border-solid focus:outline-none"
        />
        <button type="submit" className="bg-amber-400 border border-solid">
          Send
        </button>
      </form>
    </>
  );
};

export default Chat_body;