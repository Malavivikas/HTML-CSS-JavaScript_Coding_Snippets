// This code will run in the Web Worker

// Listen for messages from the main thread
self.onmessage = function (event) {
  // Process the message and send the result back to the main thread
  const result = "Message received in the Web Worker: " + event.data;
  self.postMessage(result);
};
