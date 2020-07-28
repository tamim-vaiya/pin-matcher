//getting random pin
function getRandomNum(){
  document.getElementById('randomPin').value = Math.floor(Math.random() * (10000 - 1000)) + 1000;
  clearPinChecker()
}
//removing last number from pin checker
function removeLastNum(){
  pinChecker.value = pinChecker.value.slice(0,-1);
}
// clearing pin checker
function clearPinChecker(){
  pinChecker.value = "";
}
// working with submit button
function submitBtn(){
  const pinNum =  document.getElementById('randomPin').value;
  const pinNumCheck = document.getElementById('pinChecker').value;
  if (pinNumCheck.length == 4){
    if (pinNum == pinNumCheck){
      document.getElementById('match').style.display = 'block';
      document.getElementById('not-match').style.display = 'none';
    } 
    else if (pinNum != pinNumCheck){
      document.getElementById('match').style.display = 'none';
      document.getElementById('not-match').style.display = 'block';
      actionLeft();
    }
  } 
  else {
    const text = document.getElementById('pinChecker').value = 'Enter 4 digit number';
    document.getElementById('match').style.display = 'none';
    document.getElementById('not-match').style.display = 'block';
    actionLeft();
  }
}
// action left part
function actionLeft(){
  const actionLeft = document.getElementById("action-left");
  let actionLeftDecrease = parseInt(actionLeft.innerText) - 1;
  actionLeft.innerText = actionLeftDecrease;
  if(actionLeft.innerText==0){
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.disabled = true;
        submitBtn.style.color = "white";
        submitBtn.style.backgroundColor = "#595b64";
  }
}