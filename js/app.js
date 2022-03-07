function getAkanName() {
    let birthMonth = document.form.numMonth.selectedIndex;
    let birthMonth = document.form.month.options[birthMonth].value;
    let birthDate = document.form.numDay.selectedIndex;
    let birthDate = document.form.options[numDay].value;
    let birthYear = document.form.numYear.value;
    //Gender variables declaration
    let mlGender = document.form.maleGender.selectedIndex;
    let mlGender = document.form.options[maleGender].value;
    let feGender = docment.form.femaleGender.selectedIndex;
    let feGender = document.form.options[femaleGender].value;

}

// Date array declaration and container

var dOB = month + "" + birthDate + ", " + birthYear;
var whenBorn = new Date(dOB);
var akanDay = whenBorn.getDate();
var date = whenborn.getDate();
var yearOB = whenborn.getFullYear();

// Syntax for invalid date, birth month, and yearOB

if (birthDate <= 0 || birthDate >= 31) {
    alert("Invalid birth date")
}

if (birthMonth <= 0 || birthMonth >= 12) {
    alert("Invalid birth month")
}


if (birthYear < 100) birthYear = "19" + whenborn.getFullYear();
else year = whenborn.getFullYear();

//Syntax displays the days of the week contained in a variable

var weekDays = new Array(6);

weekDays[0] = "Sunday";
weekDays[1] = "Monday";
weekDays[2] = "Tuesday";
weekDays[3] = "Wednesday";
weekDays[4] = "Thursday";
weekDays[5] = "Friday";
weekDays[6] = "Saturday";

// Variable containing Akan name display

var akanFemale = new Array(6);

akanFemale[0] = "Akosua";
akanFemale[1] = "Adwoa";
akanFemale[2] = "Abenaa";
akanFemale[3] = "Akua";
akanFemale[4] = "Yaa";
akanFemale[5] = "Afua";
akanFemale[6] = "Ama";

// Variable containing Akan male names display

var akanMale = new Array(6);

akanFemale[0] = "Kwasi";
akanFemale[1] = "Kwadwo";
akanFemale[2] = "Kwabena";
akanFemale[3] = "Kwaku";
akanFemale[4] = "Yaw";
akanFemale[5] = "Kofi";
akanFemale[6] = "Kwame";

// If function for male and female names generation

if (maleGender == "male"){
    generateName = akanMale[akanDay]
}
else {generateName = akanFemale[akanDay]};


// Function for female name generation

if (num)
