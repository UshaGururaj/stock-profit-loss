const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stock-qty");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");
const bodyBackground = document.querySelector("body"); 

function submitHandler(){
    let ip = Number(initialPrice.value);
    let sq = Number(stocksQuantity.value);
    let cp = Number(currentPrice.value);

    calculateProfitAndLoss(ip, sq, cp);
}

function calculateProfitAndLoss(initial, quantity, current){
    if(initial && quantity && current){
        if(initial > current){
            bodyBackground.style.backgroundColor = "red";
            let loss = (initial - current) * quantity;
            let lossPercentage = (loss / initial) * 100;
            showMessage(`Hey, the loss is ${loss} and the percent is ${lossPercentage}% `);
        } else if(current > initial){
            bodyBackground.style.backgroundColor = "green";
            let profit = (current - initial) * quantity;
            let profitPercentage = (profit / initial) * 100;
            showMessage(`Hey, the profit is ${profit} and the percent is ${profitPercentage}%`);
        } else{
            bodyBackground.style.backgroundColor = "#595966";
            showMessage("No pain no gain, and no gain no pain")
        }
    } else {
        bodyBackground.style.backgroundColor = "#595966";
        showMessage("Please fill out all fields.");
    }
}

function showMessage(message){
    output.innerText = message;
}

submitBtn.addEventListener("click",submitHandler);