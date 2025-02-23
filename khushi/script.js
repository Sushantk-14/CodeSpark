document.addEventListener("DOMContentLoaded", function() {
    const appointmentForm = document.getElementById("appointment-form");
    const timeSlotContainer = document.querySelector(".time-slot-container");
    const datePicker = document.getElementById("booking-date");

    const timeSlots = [
        "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
        "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
        "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
        "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    ];

    let bookings = JSON.parse(localStorage.getItem("bookings")) || {};

    datePicker.addEventListener("change", function() {
        const selectedDate = datePicker.value;
        renderTimeSlots(selectedDate);
    });

    function renderTimeSlots(date) {
        timeSlotContainer.innerHTML = ""; // Clear previous slots
        const bookedSlots = bookings[date] || [];

        timeSlots.forEach(slot => {
            const slotDiv = document.createElement("div");
            slotDiv.classList.add("time-slot");
            slotDiv.textContent = slot;

            if (bookedSlots.includes(slot)) {
                slotDiv.classList.add("booked");
                slotDiv.textContent += " (Booked)";
            } else {
                slotDiv.addEventListener("click", function() {
                    if (!slotDiv.classList.contains("booked")) {
                        slotDiv.classList.toggle("selected");
                    }
                });
            }

            timeSlotContainer.appendChild(slotDiv);
        });
    }

    appointmentForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const selectedDate = datePicker.value;
        const selectedSlots = Array.from(timeSlotContainer.children)
            .filter(slot => slot.classList.contains("selected"))
            .map(slot => slot.textContent.replace(" (Booked)", ""));

        if (selectedSlots.length > 0) {
            bookings[selectedDate] = bookings[selectedDate] || [];
            bookings[selectedDate] = bookings[selectedDate].concat(selectedSlots);
            localStorage.setItem("bookings", JSON.stringify(bookings));
            alert("Appointment booked successfully!");
            renderTimeSlots(selectedDate); // Refresh time slots
        } else {
            alert("Please select at least one time slot.");
        }
    });

    // Function to open the management section for a specific salon
    window.openSlots = function(salonName) {
        const managementDivs = document.querySelectorAll('.management');
        managementDivs.forEach(div => div.style.display = 'none'); // Hide all management sections const managementDiv = document.getElementById(`management-${salonName}`);
        if (managementDiv) {
            managementDiv.style.display = 'block'; // Show the selected salon management
        }
    };

    // Update available slots based on selected beautician
    const timeSelects = document.querySelectorAll(".time-select");
    timeSelects.forEach(select => {
        select.addEventListener("change", function() {
            const selectedTime = this.value;
            const workerRow = this.closest("tr");
            const timeSlots = workerRow.querySelector("td:nth-child(2)");
            const currentSlots = Array.from(timeSlots.querySelectorAll(".time-slot")).map(slot => slot.textContent);
            if (selectedTime && !currentSlots.includes(selectedTime)) {
                const newSlot = document.createElement("span");
                newSlot.classList.add("time-slot");
                newSlot.textContent = selectedTime;
                timeSlots.appendChild(newSlot);
                alert(`Time slot for ${workerRow.cells[0].textContent} updated to ${selectedTime}`);
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Function to open the management section for a specific salon
    window.openSlots = function(salonName) {
        const managementDivs = document.querySelectorAll('.management');
        managementDivs.forEach(div => div.style.display = 'none'); // Hide all management sections
        const managementDiv = document.getElementById(`management-${salonName}`);
        if (managementDiv) {
            managementDiv.style.display = 'block'; // Show the selected salon management
        }
    };
});
