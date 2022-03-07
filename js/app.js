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

