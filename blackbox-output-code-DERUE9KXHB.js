// Function to sync input value to output text
function updatePreview(inputId, outputId) {
    const input = document.getElementById(inputId);
    const output = document.getElementById(outputId);

    input.addEventListener('input', () => {
        output.innerText = input.value;
    });
}

// Initialize listeners for text fields
updatePreview('inpName', 'outName');
updatePreview('inpTitle', 'outTitle');
updatePreview('inpPhone', 'outPhone');
updatePreview('inpEmail', 'outEmail');
updatePreview('inpSummary', 'outSummary');
updatePreview('inpExp', 'outExp');
updatePreview('inpEdu', 'outEdu');

// Special handling for Skills (Convert comma-separated string to list)
const skillsInput = document.getElementById('inpSkills');
const skillsOutput = document.getElementById('outSkills');

skillsInput.addEventListener('input', () => {
    const skillsArray = skillsInput.value.split(',');
    skillsOutput.innerHTML = ''; // Clear current list
    
    skillsArray.forEach(skill => {
        if(skill.trim()) {
            const li = document.createElement('li');
            li.innerText = skill.trim();
            skillsOutput.appendChild(li);
        }
    });
});