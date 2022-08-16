alert("This site is shittttttt");


const myBTn = document.getElementById("myBtn");

myBTn.addEventListener("click", function(e){
    const yesORno = prompt(' Want an interesting fact?');
    document.body.innerHTML = '<h1>192.8495.84938.373  boy , ' + yesORno + '</h1>' + '<label class="toggle">  <input type="chackbox" onclick="toggleDarkLight()">  <span class="slider round "></span>  </label>  ' ;
});
//i changed var to let , may be an error
//update: it isn't, perfectly works 
function toggleDarkLight() {
    let element = document.body;
    element.classList.toggle("dark-mode");  
}
getElementById("yesORno").style.fontFamily="sans-serif-monoscape";
