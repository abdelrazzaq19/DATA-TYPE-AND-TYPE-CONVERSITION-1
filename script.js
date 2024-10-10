function calculateYears() {

    let age = document.getElementById('ageInput').value;

    age = Number(age);

    const targetAge = 80;
    let yearsLeft = targetAge - age;

    if (isNaN(age) || age < 0) {
        console.log("Please enter a valid age.");
        document.getElementById('result').textContent = "Please enter a valid age.";
    } else if (age >= targetAge) {
        console.log("You are already 80 or older!");
        document.getElementById('result').textContent = "You are already 80 or older!";
    } else {
        console.log("You have " + yearsLeft + " years left until you turn 80.");
        document.getElementById('result').textContent = "You have " + yearsLeft + " years left until you turn 80.";
    }
}
