/*Configuration & Static Inputs*/
//Static weather values matching the HTML card text exactly
const currentTemp = 16; //actual air temperature (16 °C)
const currentWindSpeed = 15; //Wind Speed (15 km/h)

/*Wind Chill Calculation*/
//single line arrow function returning Metric Wind Chill computation
const calculateWindChill = (T, V) => 13.12 + (0.6215 * T) - (11.37 * Math.pow(V, 0.16)) + (0.3965 * T * Math.pow(V, 0.16));

/*DOM Updates on Page Load*/
document.addEventListener("DOMContentLoaded", () => {

    // Part A: Footer Dynamics

    // Get current year
    const currentYear = new Date().getFullYear();

    // Insert current year into span
    document.getElementById("currentyear").textContent = currentYear;

    // Insert last modified date
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    // Part B: Weather Logic
    let windChillDisplay = "N/A";
    // Strict validation check: Temp must be <= 10 °C AND Wind Speed must be > 4.8 km/h
    if (currentTemp <=10 && currentWindSpeed > 4.8) {
        const chillFactor = calculateWindChill(currentTemp, currentWindSpeed);
        windChillDisplay = `${chillFactor.toFixed(1)} °C`;
    }

    // Inject final string into the target weather card slot
    const windChillElement = document.getElementById("wind-chill");
    if (windChillElement) {
        windChillElement.textContent = windChillDisplay;
    } 
});
