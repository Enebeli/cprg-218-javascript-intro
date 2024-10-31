secret.addEventListener('click', function(){
    alert("Sup, I'm just here chilling man. You good???");
})


light_on.addEventListener('click', function(){
    console.log("Let there be light");
    document.getElementById("lightbulb").src="lightbulb_on.webp";
    document.getElementById("light_on").style.display="none";
    document.getElementById("light_off").style.display="initial";
    document.body.classList.toggle('light');
})


light_off.addEventListener('click', function(){
    document.getElementById("lightbulb").src="lightbulb_off.webp";
    document.getElementById("light_off").style.display="none";
    document.getElementById("light_on").style.display="initial";
    document.body.classList.toggle('light');
})