const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// Handle form submission
form.addEventListener('submit', (event: Event)=>{
    event.preventDefault(); //prevent page reload

    //collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phoneno = (document.getElementById('phoneno') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experiance = (document.getElementById('experiance') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Generate resume dynamically
    const resume = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone no:</b>${phoneno}</p>

    <h3>Education</h3>
    <p>${education}

     <h3>Experiance</h3>
    <p>${experiance}

     <h3>Skills</h3>
    <p>${skills}
    `;

    //display resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resume;
    }else{
        console.error('The resume display element is missing');;
    }
});