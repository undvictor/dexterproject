var noProcess = 0;

// make an array
var message1 = "Hej love whatup wat";

function process(){
    
    if(noProcess < 5){
        
    messageDiv = document.createElement("div");
    messageDiv.setAttribute("id","message1");
    messageDiv.className = "message1";
    
    text1 = document.createTextNode(message1);    
    messageDiv.appendChild(text1);
        
    theD = document.getElementById("theD");
    theD.appendChild(messageDiv);
        
        
    setTimeout(process, 3000);
    noProcess +=1;
    }
    
}