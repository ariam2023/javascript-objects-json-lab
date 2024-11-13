(function(){ 

    //Create a new DIV
    console.info("Hello JS"); 
    const myNode = document.createElement("div");
    document.getElementById("digitalClock");
    digitalClock.appendChild(myNode);
    myNode.innerHTML = "Welcome";

    //Date Object
    const myDate = new Date();
    console.dir(myDate);
    myNode.innerHTML = myDate.toDateString();
    })();