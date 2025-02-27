"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function useSocket() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newsocket = io({
        path : "http://localhost:3000/pages/api/chatapp",
        transports: ["websocket", "polling"],
    }); 
    setSocket(newsocket);
    
    return () => {
      newsocket.disconnect();
    };
  }, []);

  return socket;
}