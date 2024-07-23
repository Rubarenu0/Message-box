
function accept(){
    var questions=[
        "What is HTML",
        "What is CSS",
        "What is JS",
        "What is PHP",
        "What is React",
    ];
var input=document.getElementById("input");
var userValue=input.value;
for(i=0;i<questions.length;i++)
    if(userValue==questions[i])
        alert("Accepted");
    else
        alert("Declined");
}




