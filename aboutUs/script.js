document.addEventListener("DOMContentLoaded", function () {
    const salonSelect = document.getElementById("salon");
    const serviceSelect = document.getElementById("service");
    const beauticianSelect = document.getElementById("beautician");
    const salonList = document.getElementById("salon-list");
    
    const salons = [
        { name: "Luxury Salon", services: ["Haircut", "Facial", "Massage"], beauticians: ["Alice", "Bob"] },
        { name: "Glamour Hub", services: ["Manicure", "Pedicure", "Makeup"], beauticians: ["Charlie", "David"] }
    ];
    
    function populateSalons() {
        salons.forEach((salon, index) => {
            let option = document.createElement("option");
            option.value = index;
            option.textContent = salon.name;
            salonSelect.appendChild(option);
            
            let salonDiv = document.createElement("div");
            salonDiv.textContent = salon.name;
            salonList.appendChild(salonDiv);
        });
    }
    
    function updateServicesAndBeauticians() {
        serviceSelect.innerHTML = "";
        beauticianSelect.innerHTML = "";
        
        const selectedSalon = salons[salonSelect.value];
        
        selectedSalon.services.forEach(service => {
            let option = document.createElement("option");
            option.textContent = service;
            serviceSelect.appendChild(option);
        });
        
        selectedSalon.beauticians.forEach(beautician => {
            let option = document.createElement("option");
            option.textContent = beautician;
            beauticianSelect.appendChild(option);
        });
    }
    
    salonSelect.addEventListener("change", updateServicesAndBeauticians);
    
    document.getElementById("booking-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Appointment booked successfully!");
    });
    
    populateSalons();
});
