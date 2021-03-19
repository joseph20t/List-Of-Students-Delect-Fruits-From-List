let fruits_obj = {
    1: "Apple",
    2: "Watermelon",
    3: "Orange",
    4: "Strawberry",
    5: "Grape",
    6: "Mango",
    7: "Plum",
    8: "Banana",
    9: "Papaya",
    10: "Pineapple",
    11: "Lime",
    12: "Lemon",
    13: "Grapefruit",
    14: "Coconut",
    15: "Avocado"
}

function displayFruits(){
    let fruits = Object.keys(fruits_obj);
   
    for(let i = 0; i < fruits.length; i++){
        let html = `<tr>
            <td>${i + 1}.</td>
            <td>${fruits_obj[fruits[i]]}</td>
            <td>
                <button onclick="getFruitID(event)" id="${fruits[i]}">Delete</button>
            </td>
        </tr>`;
        document.querySelector("tbody").insertAdjacentHTML("beforeend", html)
    }
}  //inserting grade 11in the list

// TODO
function getFruitID(e){
    
    let targetedId = e.target.id;
    let tbody = document.querySelector('tbody')
    tbody.innerHTML = "";
    deleteFruit(targetedId, (callback) => {
        if(callback === 0) {
            showSuccess();
            displayFruits()
        }

        if(callback === 1){
            showError(); 
        }
            
    }) 
        
    // }

        /**
     * Get the id for the element that was clicked. (1)
     * 
     * Call the deleteFruit() function and pass the id and a callback function. (2)
     * 
     * In the callback function, if the item was deleted, call the showSuccess() function
     *     for three seconds and than call the displayFruits() function. (5)
     * 
     * In the callback function, if the item was not deleted, call the showError() function
     *     for five seconds. (6)
     * 
     * NOTE: The id you are passing is the key for the fruit in the fruits_obj object.
     */
}

// TODO
function deleteFruit(id, callback){
    let key_id = id;
    if(delete fruits_obj[key_id] === true) {
        return callback(0);
    }else {
        return callback(1);
    }
   
    /** 
     * Delete the item from the fruits_obj object based on the id that is passed. (3)
     * 
     * Return 0 if the item was deleted and 1 if the item was not deleted. (4)
     * 
     */
}

function showError(){
    let message_ele = document.getElementById("message");
    message_ele.innerHTML = "Failed to delete!";
    message_ele.style = "background: #ff5c33; visibility: visible";

    let showErrorTimeout = setTimeout(function(){
        message_ele.style = "visibility: hidden";
        clearTimeout(showErrorTimeout);
    }, 5000); 
}

function showSuccess(){
    let message_ele = document.getElementById("message");
    message_ele.innerHTML = "Deleted!";
    message_ele.style = "background: #00b300; visibility: visible";

    let showSuccessTimeout = setTimeout(function(){
        message_ele.style = "visibility: hidden";
        clearTimeout(showSuccessTimeout)
    }, 3000);
}

displayFruits()