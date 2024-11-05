document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');
    const resumeDisplay = document.getElementById('resume-display');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const resumeData = {
            profilePicture: formData.get('profile-picture'),
            firstName: formData.get('first-name'),
            lastName: formData.get('last-name'),
            email: formData.get('email'),
            mobile: formData.get('mobile'),
            address: formData.get('address'),
            linkedin: formData.get('linkedin'),
            github: formData.get('github'),
            education: formData.get('education'),
            experience: formData.get('experience'),
            skills: formData.get('skills'),
        };
        displayResume(resumeData);
    });
    function displayResume(data) {
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
