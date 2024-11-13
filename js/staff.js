//Objects

/*var myObject = { name: "Martin" };
console.dir(myObject);*/

/*var myObject = { name: "Martin", email: "myemail@company.com" };
console.dir(myObject);

var bobDetails = {
    name: 'Bob',
    age: 21,
    qualifications: {
        gsce: true,
        alevels: true,
        degree: false
    }
}
console.dir(bobDetails);
//objects inside Arrays

var qualifications = [
    {
        subject: "Maths",
        grade: "A"
    },
    {
        subject: "English",
        grade: "B"
    },
    {
        subject: "French",
        grade: "C"
    },
    {
        subject: "Physics",
        grade: "B"

    }
];

//Methods inside Objects

var bobDetails = {
    name : 'Bob',
    age : 21,
    getInfo : function(){
    return this.name + " " + this.age;
    }
 }
 console.info(bobDetails.getInfo);*/

(() => {
    console.info("ready");

    fetch("data/staff.json")
        .then(response => response.json())
        .then(data => {
            // Work with the parsed data
            console.dir(data);

            data.forEach((item) => {
                const row = document.createElement("tr");
                const nameCell = document.createElement("td");
                const emailCell = document.createElement("td");

                // ...
            });

            nameCell.textContent = `${item.first_name} " + ${item.last_name}`;
            emailCell.textContent = item.email;
        })
        .catch(error => {
            // Handle errors here
        });

})();
