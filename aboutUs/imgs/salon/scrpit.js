function changeTimeSlot(timeInputId, isEntry) {
    const timeInput = document.getElementById(timeInputId);
    const newTime = timeInput.value;

    // Get the corresponding table cell to update
    const row = timeInput.closest('tr'); // Get the closest row
    const timeCell = isEntry ? row.cells[1] : row.cells[2]; // Entry time is in the second cell, exit time in the third

    // Update the displayed time in the table
    timeCell.textContent = formatTime(newTime); // Update the cell with formatted time

    alert(`Time slot changed to: ${formatTime(newTime)}`);
}

// Function to format time from 24-hour to 12-hour format
function formatTime(time) {
    const [hours, minutes] = time.split(':');
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    return `${formattedHours}:${minutes} ${period}`;
}