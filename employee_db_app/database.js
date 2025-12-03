var sqlite3 = require('sqlite3').verbose() //npm install sqlite3

//Creating a new database instance - Indication of connected database
//Before peforming any operations to database, make sure database is connected.
let db = new sqlite3.Database('./employee.db', sqlite3.OPEN_READWRITE, (err) => {
	if (err) {
	  // Cannot open database
	  console.error(err.message)
	  throw err
	}else{
		//Successful database connection
		console.log('Connected to the SQLite database.') 
	}
});

//Create a new employee
let createEmployee = (name, last_name, city, salary) =>{
    var createNewEmployee = 'INSERT INTO Employees (Name, FName, City, Salary) VALUES (?,?,?,?)' //Parameterized Query
    var params = [name, last_name, city, salary];
    
    db.run(createNewEmployee, params, function(err){

        if(err){
            return console.log(err.message);
        }
        
        console.log("Employee Successfully Entered");
        console.log(`Rows inserted ${this.changes}`);
    })
 

}
createEmployee("Mihelich", "Mike", "2", 598); //Calling or Envolking the function