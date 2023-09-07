function matchData() {
    const userInput = parseFloat(document.getElementById("userInput").value);

    // Assuming you have a CSV file loaded into a variable named "worldDataCSV"
    // In a real project, you'd fetch and parse the CSV from a server.

    // For demonstration purposes, let's assume worldDataCSV is an array of objects
    // with 'country' and 'mentalHealthScore' properties.
    
    // Replace this with your actual data and matching logic
    const worldData = [
        { country: "Country A", mentalHealthScore: 65 },
        { country: "Country B", mentalHealthScore: 72 },
        // ... Add more countries and scores
    ];

    let result = "No matching data found";

    for (const data of worldData) {
        if (userInput === data.mentalHealthScore) {
            result = `Your score matches ${data.country}'s score of ${data.mentalHealthScore}`;
            break;
        }
    }

    document.getElementById("result").textContent = result;
}
