$(".btn").on("click", function(){
  var newTask = prompt("What is the next task?")
  console.log("newTask:", newTask)
  // placing newTask into HTML
  var addedTask = "<li><span>" + newTask + 
  "</span><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></li>"  
  // targiting "ul" with a id "task-list" and appending the addedTask
  $("#task-list").append(newTask)
});

$(".fa").click(function(){
  console.log("trash")

  $(this).parent().remove();
})