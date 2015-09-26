var friends = new Object();

friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: "555-666-555",
    address: ["Microsoft","Redmond","WA","98052"]
    };
    
friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "133-777-555",
    address: ["Apple","Los Angeles","CA","90210"]
    };
    
var list = function(obj){
    for (var key in obj){
      console.log(key);
    }  
}

var search = function(name){
    for (var key in friends){
      if(name === friends[key].firstName){
        //console.log(friends[key]);
        return ("First Name: "  + friends[key].firstName + 
                "\nLast Name: " + friends[key].lastName +
                "\nNumber: "    + friends[key].number +
                "\nAddress: "   + friends[key].address
        );
      }
    }
}

console.log(search("Bill"));