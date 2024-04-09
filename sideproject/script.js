document.addEventListener('DOMContentLoaded', function() {
    // Get the canvas element
    const canvas = document.getElementById('graph');
    const ctx = canvas.getContext('2d');
  
    // Define data points
    const data = [20, 50, 30, 70, 40, 90, 60];
  
    // Set canvas size
    canvas.width = 600;
    canvas.height = 400;
  
    // Draw the graph
    function drawGraph() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Set graph styles
      ctx.strokeStyle = '#007bff';
      ctx.lineWidth = 2;
  
      // Calculate point spacing
      const spacingX = canvas.width / (data.length - 1);
      const spacingY = canvas.height / 100;
  
      // Start drawing the graph
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - data[0] * spacingY);
  
      // Loop through data points and draw lines
      for (let i = 1; i < data.length; i++) {
        ctx.lineTo(i * spacingX, canvas.height - data[i] * spacingY);
      }
  
      // Draw the graph
      ctx.stroke();
    }
  
    // Initial draw
    drawGraph();
  });
  