const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stock-qty");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

function submitHandler(){
    let ip = Number(initialPrice.value);
    let sq = Number(stocksQuantity.value);
    let cp = Number(currentPrice.value);

    calculateProfitAndLoss(ip, sq, cp);
}

function calculateProfitAndLoss(initial, quantity, current){
    if(initial && quantity && current){
        if(initial > current){
            let loss = (initial - current) * quantity;
            let lossPercentage = (loss / initial) * 100;
            console.log(`Hey, the loss is ${loss} and the percent is ${lossPercentage}% `);
        } else if(current > initial){
            let profit = (current - initial) * quantity;
            let profitPercentage = (profit / initial) * 100;
            console.log(`Hey, the profit is ${profit} and the percent is ${profitPercentage}%`);
        } else{
            console.log("No pain no gain, and no gain no pain")
        }
    } else {
        console.log("Please fill out all fields.");
    }
}

submitBtn.addEventListener("click",submitHandler);