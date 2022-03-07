function getAkanName() {
    let birthYear = document.getElementById("numYear").value;
    let birthMonth = document.getElementById("numMonth").value;
    let birthDate = document.getElementById("numDay").value;

    let genders = document.getElementsByName("gender");

    //Syntax to display gender

    function getGender() {
        for (let gender of genders) {
            if (gender.checked) {
                return gender.value;
            }
        }
    }
    let myGenderValue = getGender();

    console.log(myGenderValue);

    //Function to validate month and year

    function validateMonth() {

    }
}