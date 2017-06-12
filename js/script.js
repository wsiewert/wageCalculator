//---------------EMPLOYEE WAGE REFRACTOR----------------------->
//Write a program that takes user wage and hours and outputs
//Pay plus any overtime pay (1.5 * Wage).

function askWage(){
  let wage = prompt("How much to do you make an hour?");
  return wage;
}

function askHours(){
  let hours = prompt("How many hours did you work this week?");
  return hours;
}

function calculatePay(wage,hours) {
  let total;

  if(hours > 40) {
    total = (wage * 40) + ((hours - 40) * (wage * 1.5));
    total.toFixed(2);
  } else {
    total = hours * wage;
    total.toFixed(2);
  }
  return total;
}

function showPay(pay,critique){
  alert("You will earn $" + pay + " this week." + " " + critique);
}

function payCritique(pay){
  let messagePoor = "Damn that Sucks!";
  let messageMiddle = "You definitly can afford food.";
  let messageRich = "How you makin that paper?";
  if(pay < 100){
    return messagePoor;
  } else if (pay > 100 && pay < 2000) {
    return messageMiddle;
  } else {
    return messageRich;
  }
}

//----RUN---->

function programManager(){
  let wage = askWage();
  let hours = askHours();
  let pay = calculatePay(wage,hours);
  let critique = payCritique(pay);
  showPay(pay,critique);
}

programManager();
