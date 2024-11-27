function getUserID(dataLayer) {
    for (let i = 0; i < dataLayer.length; i++) {
      const entry = dataLayer[i];
      if (typeof entry === 'object' && entry.hasOwnProperty('2')) {
        const config = entry[2];
        if (config && config.hasOwnProperty('user_id')) {
          return config.user_id;
        }
      }
    }
    return null; // User ID not found
  }
  
  // Assuming `window.dataLayer` is the data layer array
  const userId = getUserID(window.dataLayer);
  
  if (userId) {
    console.log("User ID:", userId);
    // Use the user ID as needed
  } else {
    console.log("User ID not found in the data layer.");
  }
