function getAkanName() {
    let numMonth = document.form.numMonth.selectedIndex;
    let numMonth = document.form.numMonth.options[numMonth].value;
    let numDay = document.form.numDay.selectedIndex;
    let numDay = document.form.numDay.options[numDay].value;
    let numYear = document.form.numYear.value;
    //Gender variables declaration
    let gender = document.form.gender.selectedIndex;
    let gender = document.form.gender.options[gender].value;

    // Date array declaration and container

    var dOB = numMonth + " " + numDay + ", " + numYear;
    var whenBorn = new Date(dOB);
    var akanDay = whenBorn.getDay();
    var date = whenBorn.getDate();
    var numYear = whenBorn.getYear();

    // Syntax for invalid date, birth month, and yearOB

    if (date <= 0 || date >= 31) {
        alert("Invalid birth date")
    }

    if (numMonth <= 0 || numMonth >= 12) {
        alert("Invalid birth month")
    }


    if (numYear < 100) numYear = " " + whenBorn.getYear();
    else numYear = whenBorn.getYear();

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

    akanMale[0] = "Kwasi";
    akanMale[1] = "Kwadwo";
    akanMale[2] = "Kwabena";
    akanMale[3] = "Kwaku";
    akanMale[4] = "Yaw";
    akanMale[5] = "Kofi";
    akanMale[6] = "Kwame";

    // If function for male and female names generation

    if (gender == "male") {
        generateName = akanMale[akanDay]
    } else {
        generateName = akanFemale[akanDay]
    };


    // Function for female name generation

    if (numDay != date) alert("Invalid date!");
    else {
        dateBorn = generateName;
        dateWeek = weekDays[akanDay];
        dOB = dateBorn + ", " + "born on a" + " " + dateWeek;
        alert("Great! Your Akan name is " + dOB);
    }
}
