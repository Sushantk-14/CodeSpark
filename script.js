// script.js

document.addEventListener("DOMContentLoaded", function() {
    const appointmentForm = document.getElementById("appointment-form");

    appointmentForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const salon = document.getElementById("salon").value;
        const service = document.getElementById("service").value