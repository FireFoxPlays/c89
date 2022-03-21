Score = 0;

function Update(){
    Score = Score + 1;
    document.getElementById("Score").innerHTML = "Score-" + Score; 
}
function Save(){
    localStorage.setItem("Score", Score);
}
function NextPage(){
    window.location = "index.html";
}