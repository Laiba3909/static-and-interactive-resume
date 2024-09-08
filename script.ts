const toogleBut = document.getElementById('toogleBut') as HTMLButtonElement | null;
const skill = document.getElementById('skills') as HTMLDivElement | null;
if (toogleBut && skill) {

    toogleBut.addEventListener('click', () => {
    
        if (skill.style.display === 'none') {
         
            skill.style.display = 'block';
            toogleBut.textContent = 'Hide Skills';
        } else {
          
            skill.style.display = 'none';
            toogleBut.textContent = 'Show Skills';
        }
    });
} 
