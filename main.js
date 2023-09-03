document.getElementById("distanceForm").addEventListener("submit", function (event) {
            event.preventDefault();
            const point1 = document.getElementById("point1").value;
            const point2 = document.getElementById("point2").value;

            // Parse the input to extract coordinates (assuming comma-separated values)
            const [x1, y1] = point1.split(',').map(parseFloat);
            const [x2, y2] = point2.split(',').map(parseFloat);

            // Calculate the distance
            const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

            // Display the result
            document.getElementById("result").innerHTML = `The distance between (${x1}, ${y1}) and (${x2}, ${y2}) is ${distance.toFixed(2)}`;
        });
// this is all included in the ( <script> tag in the "./html.index" file. Seems unimportant but it is included so anyone would copy the file!. Best regards, Hitaex :>. 
