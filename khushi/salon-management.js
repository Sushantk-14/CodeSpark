// salon-management.js
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleSection");
    const toggleButtonUser = document.getElementById("toggleSectionUser");
    const adminSection = document.getElementById("adminSection");
    const userSection = document.getElementById("userSection");

    toggleButton.addEventListener("click", function () {
        adminSection.style.display = "none";
        userSection.style.display = "block";
    });
    
    toggleButtonUser.addEventListener("click", function () {
        userSection.style.display = "none";
        adminSection.style.display = "block";
    });

    const salonSelect = document.getElementById("salonSelect");
    const workerSelect = document.getElementById("workerSelect");
    const timeSlotInput = document.getElementById("timeSlotInput");
    const updateSlotButton = document.getElementById("updateSlot");
    const assignedSlots = document.getElementById("assignedSlots");
    const availableSlots = document.getElementById("availableSlots");

    let slots = [];

    updateSlotButton.addEventListener("click", function () {
        const salon = salonSelect.value;
        const worker = workerSelect.value;
        const timeSlot = timeSlotInput.value;
        
        if (salon && worker && timeSlot) {
            slots.push({ salon, worker, timeSlot });
            renderSlots();
        }
    });

    function renderSlots() {
        assignedSlots.innerHTML = "";
        availableSlots.innerHTML = "";
        
        slots.forEach((slot) => {
            const slotItem = document.createElement("li");
            slotItem.textContent = `${slot.worker} - ${slot.timeSlot} (${slot.salon})`;
            assignedSlots.appendChild(slotItem);
            
            const userSlotItem = slotItem.cloneNode(true);
            availableSlots.appendChild(userSlotItem);
        });
    }
});
