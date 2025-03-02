
// const taskTitle = document.querySelectorAll(".task-title");
// const convartTitle = taskTitle[0].innerText;
// console.log(convartTitle)



document.getElementById("clear-history").addEventListener("click", function(event){
    event.preventDefault();
    const details = document.getElementById("activity-history").classList.add('hidden')
    return details;
})

