// Configuration for frontend API endpoints
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://services-sage.vercel.app";

export const API_ENDPOINTS = {
  VIDEO_INFO: `${API_BASE_URL}/api/video-info`,
  CONVERT_TO_WAV: `${API_BASE_URL}/api/convert-to-wav`,
  HEALTH: `${API_BASE_URL}/health`,
};

export default API_ENDPOINTS;
