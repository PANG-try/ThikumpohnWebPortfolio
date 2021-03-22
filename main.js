window.onload= pageLoad;
function pageLoad(){
    btnOnclick();
}
function btnOnclick(){
    document.getElementById("project").onclick=project;
    document.getElementById("assignment").onclick=assignment;
    document.getElementById("interest").onclick=interesting;
    document.getElementById("skill").onclick=skill;
    document.getElementById("profile").onclick=profile;
    document.getElementById("H").onclick=home;
}

function home(){
    window.scroll({
        top: 0,
        behavior: 'smooth'
      });
}
function profile(){
    window.scroll({
        top: 270,
        behavior: 'smooth'
      });
}
function skill(){
    window.scroll({
        top: 500,
        behavior: 'smooth'
      });
}
function interesting(){
    window.scroll({
        top: 1000,
        behavior: 'smooth'
      });
}
function assignment(){
    window.scroll({
        top: 1300,
        behavior: 'smooth'
      });
}
function project(){
    window.scroll({
        top: 2500,
        behavior: 'smooth'
      });
}