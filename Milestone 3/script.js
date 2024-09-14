var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneno = document.getElementById('phoneno').value;
    var education = document.getElementById('education').value;
    var experiance = document.getElementById('experiance').value;
    var skills = document.getElementById('skills').value;
    // Generate resume dynamically
    var resume = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone no:</b>").concat(phoneno, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "\n\n     <h3>Experiance</h3>\n    <p>").concat(experiance, "\n\n     <h3>Skills</h3>\n    <p>").concat(skills, "\n    ");
    //display resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resume;
    }
    else {
        console.error('The resume display element is missing');
        ;
    }
});
