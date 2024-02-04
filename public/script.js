const worker = new Worker("webworker.js");

function changeColor()
{
    if(document.body.style.background == "yellow")
    {
        document.body.style.background = "blue"
    }
    else{
        document.body.style.background = "yellow"
    }
}

function calculate()
{
    document.getElementById("content").innerText = "loading..."
    worker.postMessage("hey");
}

worker.onmessage = function(message){
    document.getElementById("content").innerText = message.data;
}

function calculate1()
{
    document.getElementById("content1").innerText = "loading..."
    let sum = 0;
    for(let i = 0; i < 10000000000; i++){
        sum += i;
    }
}