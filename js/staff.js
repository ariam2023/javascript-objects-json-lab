//Objects

/*var myObject = { name: "Martin" };
console.dir(myObject);*/

var myObject = { name: "Martin", email: "myemail@company.com" };
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
 console.info(bobDetails.getInfo);
