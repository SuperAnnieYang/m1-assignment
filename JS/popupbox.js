var selectme = document.getElementById("selector");
selectme.addEventListener("change", function(){
    if(selectme.value == "dog1"){
        document.getElementById("dogbox").style.display = 'block';
    }else{
        document.getElementById("dogbox").style.display = 'none';
    }
    if(selectme.value == "cat1"){
        document.getElementById("catbox").style.display = 'block';
    }else{
        document.getElementById("catbox").style.display = 'none';
    }
});