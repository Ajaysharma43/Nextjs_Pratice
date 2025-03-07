import { Server } from "socket.io";

export async function GET(req) {
  if (!global.io) {
    console.log("Initializing Socket.io server...");
    const io = new Server(3001, {
      path: "/api/chatapp/socket.io",
      cors: {
        origin: "*", // Allow requests from any origin (change in production)
        methods: ["GET", "POST"],
      },
    });

    io.on("connection", (socket) => {
      console.log("User connected:", socket.id);

      socket.on("sendMessage", (message) => {
        io.emit("receiveMessage", message); // Broadcast message to all users
      });

      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
      });
    });

    global.io = io;
  } else {
    console.log("Socket.io server already initialized.");
  }

  return Response.json({ success: true, message: "Socket.io server running" });
}
