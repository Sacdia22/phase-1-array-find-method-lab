// code your solution here
// Function to find the first Super Bowl win in the record
function superbowlWin(record) {
    // Use find() to locate the first object with result "W"
    const winningRecord = record.find(game => game.result === "W");
    
    // If a winning record is found, return its year
    // If no winning record is found, find() returns undefined, so we return undefined
    return winningRecord ? winningRecord.year : undefined;
}

// Example data structure (for reference - not needed in the actual file)
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    // ... more records
];