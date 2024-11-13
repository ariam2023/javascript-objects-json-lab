(function () {

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

    // show only hours, minutes and seconds
    // myNode.innerHTML = myDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    //  const updateTime = function () {
    //     console.info('tick tock');
    // }
     //setInterval(updateTime, 1000);

    const updateTime = () => {
        console.info("tick tock");
        const myDate = new Date();
        myNode.innerHTML = myDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    };
    setInterval(updateTime, 1000);
})();