// api.js

// Simulate fetching available times based on the provided date
const fetchAPI = async (date) => {
    // Simulate an asynchronous request (e.g., using setTimeout)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (date === '2024-01-10') {
          // Return some mock available times for the provided date
          resolve(['10:00 AM', '12:00 PM', '2:00 PM']);
        } else {
          // Return an empty array for other dates
          resolve([]);
        }
      }, 1000); // Simulate a delay of 1 second
    });
  };
  
  // Simulate submitting form data and returning true on success
  const submitAPI = async (formData) => {
    // Simulate an asynchronous request (e.g., using setTimeout)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate successful form submission
        resolve(true);
      }, 500); // Simulate a delay of 0.5 seconds
    });
  };
  
  // Export the functions
  export { fetchAPI, submitAPI };