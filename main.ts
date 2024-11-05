document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeDisplay = document.getElementById('resume-display') as HTMLElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const resumeData: { 
            profilePicture: File; 
            firstName: string; 
            lastName: string; 
            email: string; 
            mobile: string; 
            address: string; 
            linkedin: string; 
            github: string; 
            education: string; 
            experience: string; 
            skills: string; 
        } = {
            profilePicture: formData.get('profile-picture') as File,
            firstName: formData.get('first-name') as string,
            lastName: formData.get('last-name') as string,
            email: formData.get('email') as string,
            mobile: formData.get('mobile') as string,
            address: formData.get('address') as string,
            linkedin: formData.get('linkedin') as string,
            github: formData.get('github') as string,
            education: formData.get('education') as string,
            experience: formData.get('experience') as string,
            skills: formData.get('skills') as string,
        };

        displayResume(resumeData);
    });

    function displayResume(data: any) {
        resumeDisplay.innerHTML = `
            <img src="${URL.createObjectURL(data.profilePicture)}" alt="Profile Picture" />
            <h2>${data.firstName} ${data.lastName}</h2>
            <p>Email: ${data.email}</p>
            <p>Mobile: ${data.mobile}</p>
            <p>Address: ${data.address}</p>
            <p>
                LinkedIn: <a href="${data.linkedin}" target="_blank" rel="noopener noreferrer">${data.linkedin}</a>
            </p>
            <p>
                GitHub: <a href="${data.github}" target="_blank" rel="noopener noreferrer">${data.github}</a>
            </p>
            <h3>Education</h3>
            <p>${data.education}</p>
            <h3>Experience</h3>
            <p>${data.experience}</p>
            <h3>Skills</h3>
            <p>${data.skills}</p>
        `;
    }
});
