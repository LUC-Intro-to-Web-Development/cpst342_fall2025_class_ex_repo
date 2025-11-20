
const { EOF } = require('dns');
var fs = require('fs');

fs.readFile('subjects.txt', 'utf8', function(err, contents) {
    console.log(contents);
    itemsToArray(contents);
    

});
 



//Define Array
const items = ['nuts', 'fish', 'lentils', 'whole grains', 'beans', 'olive oil', 'eggs', 'yogurt'];

//items.forEach(x => console.log(x));
//Call this function
//outputItems();

//Some function to convert items into array
function itemsToArray(contents){
 
    var items = contents.split(" ");
    outputItems();

}

//Define my function that outputs items
function outputItems(){
    //For loop that iterates through each of the items
    for(var i = 0; i < i.length; i++){
        console.log(items[i]);
    }
    console.log("Is Lentils in list:" + determineItem());
}

//Determine if the item 'lentils' is in the array
function determineItem(){

    var isFound = false;
    //For loop that iterates through each of the items
    for(var i = 0; i < items.length; i++){

        //Decision making logic to determine if 'lentils' is within array
        if(items[i] == 'lentils'){
            isFound = true;
            i = items.length; //Why is this needed?
        }
        
    }

    //Decision structure to return yes if found and no if found 
    if(isFound){
        return "YES"
    }else{
        return "NO"
    }

}



 
