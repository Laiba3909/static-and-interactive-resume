var toogleBut = document.getElementById('toogleBut');
var skill = document.getElementById('skills');
if (toogleBut && skill) {
    toogleBut.addEventListener('click', function () {
        if (skill.style.display === 'none') {
            skill.style.display = 'block';
            toogleBut.textContent = 'Hide Skills';
        }
        else {
            skill.style.display = 'none';
            toogleBut.textContent = 'Show Skills';
        }
    });
}
