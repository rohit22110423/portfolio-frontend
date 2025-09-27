// src/api.js

// Replace the old localhost URL with your live Render URL
const API_BASE = "https://rohit-portfolio-api.onrender.com/api";

// --- Fetch all projects ---
export async function getProjects() {
  const response = await fetch(`${API_BASE}/projects`);
  if (!response.ok) throw new Error("Failed to fetch projects");
  return response.json();
}

// --- Send contact form ---
export async function sendContactForm(data) {
  const response = await fetch(`${API_BASE}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Failed to send message");
  return response.json();
}