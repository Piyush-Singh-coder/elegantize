export interface EnquiryData {
  name: string;
  email: string;
  phone?: string;
  eventDate?: string;
  message?: string;
  serviceName?: string;
}

export const submitToGoogleSheets = async (
  data: EnquiryData,
): Promise<{ success: boolean; message?: string }> => {
  const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;

  if (!GOOGLE_SHEET_URL) {
    console.error("Google Sheet URL is missing in environment variables.");
    return { success: false, message: "Configuration error." };
  }

  try {
    // The "no-cors" mode is often required for Google App Script Web Apps
    // when called from the browser to avoid CORS errors,
    // BUT "no-cors" means we can't read the response status/body.
    // However, Google App Script can return CORS headers (as I added in the plan).
    // If the user deployed the script with the CORS headers, standard POST works.
    // Given the script I provided has `doOptions` and headers, we'll try standard POST first.

    // Note: Google App Script redirects 302 to the content.
    // fetch follows redirects automatically.

    // We'll use 'no-cors' if standard fails, or just default to it if we want to be safe.
    // Actually, sending JSON with 'no-cors' is tricky (content-type is ignored).
    // The script expects JSON.
    // Let's assume the user deployed the script exactly as requested (which handles CORS).

    const response = await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8", // "text/plain" avoids preflight OPTIONS in some cases, but "application/json" is cleaner if CORS is set up.
        // App Script's doPost triggers on text/plain too if we parse it right.
        // But let's try strict JSON.
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.result === "success") {
      return { success: true };
    } else {
      return { success: false, message: "Submission failed." };
    }
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    return { success: false, message: "Network error." };
  }
};
