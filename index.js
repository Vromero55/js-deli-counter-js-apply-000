var katzDeliLine=[];
var ticketNumber=0;
function takeANumber(katzDeliLine){
  ticketNumber++;
  katzDeliLine.push(ticketNumber);
  return `Welcome You are ${ticketNumber} in line.`;


}

function nowServing(katzDeliLine){
if(katzDeliLine.length===0){
  return "There is nobody waiting to be served!"
}
else{return "Currently serving " + katzDeliLine.shift() + "." 
}
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
    return "The line is currently empty."
  }else{
    for(var i=0;i<katzDeliLine.length;i++){
      //katzDeliLine.splice(i, katzDeliLine[i])
      katzDeliLine[i]=i+1+". "+katzDeliLine[i];
    }
      return `The line is currently: ${katzDeliLine.join(", ")}`;
    }
  
}
  