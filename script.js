const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

//navbar action and all section along with cube rotation when navbar is clicked


//resume section when clicked tab-list
resumeLists.forEach((list, idx) => {
    list.addEventListener('click',()=>{
        doucument.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        doucument.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxs[idx].classList.add('active');
    }); 
});

//portfolio section when clicked tab-list


//visibility for contact section whe  reloading (cube reloading animation)