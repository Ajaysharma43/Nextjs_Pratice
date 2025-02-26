"use client"
import axios from "axios";

 const Getdata = async () => {
  try {
    const response = await axios.get('/api/data');
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};