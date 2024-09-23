//a
let myTasks = []; //empty array list created

//b
let addTasks = (task) => { //arrow function to add task
    myTasks.push(task); //add this task to the array
    console.log(task + " added to my tasks."); //show what was added to array
    return myTasks.length;  //measure length of array
}

console.log("number of items in array: " + myTasks.length); //show total items in array


//c]
let listAllTasks = () => { //arrow function
    myTasks.forEach((item) => { //find each item
        console.log(item); //show current list
    })
}

//d
let deleteTask = (task) => {
    let index = myTasks.indexOf(task); //find where task is located in array list
    if (index > -1) {  //if index has something in it
        myTasks.splice(index, 1); //remove the item at this location from array list
        console.log(task + " has been deleted");//show what task was removed
    } else {
        console.log(task + " not found in list"); //error prevention
    }
    return myTasks.length; //show lenth of array

}

addTasks("Work"); //b
listAllTasks(); //c
deleteTask("Work"); //d
