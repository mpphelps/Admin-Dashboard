function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    
    document.querySelector('.theme-name').textContent = newTheme;
}
  
document.querySelector('.theme-toggle-btn').addEventListener('click', setTheme)
setTheme();


function linkClicked(e) {
    if (e.type!=='click') return;
    this.classList.add('link-clicked');
    console.log("e");
}

function removeTransition(e) {
    if(e.propertyName!=='transform') return; // skip if it's not a transform
    this.classList.remove('link-clicked');
}

const dash_title_element = document.querySelector('#dash-title');

dash_title_element.addEventListener("click", linkClicked);
dash_title_element.addEventListener("transitionend", removeTransition);