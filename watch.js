
  let timer;
  let count = 0;

  function handleStartBtn() {
    // Start the timer
    timer = setInterval(function () {
      count++;
      document.getElementById('text').textContent = count;
    }, 1000);

    // Enable the "Stop" and "Reset" buttons and disable the "Start" button
    document.getElementById('start-btn').disabled = true;
    document.getElementById('stop-btn').disabled = false;
    document.getElementById('rest-btn').disabled = false;
  }

  function handleStopBtn() {
    // Stop the timer
    clearInterval(timer);

    // Disable the "Stop" and "Reset" buttons and enable the "Start" button
    document.getElementById('start-btn').disabled = false;
    document.getElementById('stop-btn').disabled = true;
    document.getElementById('rest-btn').disabled = false;
  }

  function handleResetBtn() {
    // Reset the timer
    clearInterval(timer);
    count = 0;
    document.getElementById('text').textContent = count;

    // Enable the "Start" button and disable the "Stop" and "Reset" buttons
    document.getElementById('start-btn').disabled = false;
    document.getElementById('stop-btn').disabled = true;
    document.getElementById('rest-btn').disabled = true;
  }
