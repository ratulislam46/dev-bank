
function getInnerValueById(id){
    const value = document.getElementById(id).innerText;
    const convertValue = parseInt(value);
    return convertValue;
}


document.addEventListener("DOMContentLoaded" , function(){
    let taskNumber = 6;
    let checkBoxNumber = 12;
    document.querySelectorAll("#compelete-btn").forEach(button =>{
        button.addEventListener("click", function(event){
            alert("Board update successfully")
            taskNumber--;
            document.getElementById("task-number").innerText = taskNumber;
            checkBoxNumber ++;
            document.getElementById("checkbox-number").innerText = checkBoxNumber;
            event.target.disabled = true;
            
            if(taskNumber < 1 ){
                alert("congratulations you have completed all the current task")

                
            }
            
            const currentTime = document.getElementById("current-time").innerText;

            const container = document.getElementById("activity-history");
            const div = document.createElement("div");
            div.innerHTML = `
            <div class="m-4 p-3 bg-white rounded-md">You have completed the task at ${currentTime}

            `
            container.appendChild(div)
        })
    })
})

