let balance = 10000;
let wallet = document.getElementById("wallet");
wallet.innerText = `${balance} BDT`;
let campaign1 = 0, campaign2 = 0, campaign3 = 0;
let donation1 = document.getElementById("campaign-1");
let donation2 = document.getElementById("campaign-2");
let donation3 = document.getElementById("campaign-3");

function donate(input, donation) {
    if (input == 1) {
        let value = document.getElementById('input-1').value;
        if (value <= balance) {
            balance -= value;
            campaign1 += parseInt(value);
        }
        wallet.innerText = `${balance} BDT`;
        donation1.innerText = `${campaign1} BDT`;
    }
    if (input == 2) {
        let value = document.getElementById('input-2').value;
        if (value <= balance) {
            balance -= value;
            campaign2 += parseInt(value);
        }
        wallet.innerText = `${balance} BDT`;
        donation2.innerText = `${campaign2} BDT`;
    }
    if (input == 3) {
        let value = document.getElementById('input-3').value;
        if (value <= balance) {
            balance -= value;
            campaign3 += parseInt(value);
        }
        wallet.innerText = `${balance} BDT`;
        donation3.innerText = `${campaign3} BDT`;
    }
}

function showDonation() {
    let show = document.getElementById("donation-tabs");
    let hide = document.getElementById("history-tabs");
    show.classList.remove("hidden");
    let donationButton = document.getElementById("donation-button");
    donationButton.classList.add("bg-[#B4F461]");
    hide.classList.add("hidden");
    let historyButton = document.getElementById("history-button");
    historyButton.classList.remove("bg-[#B4F461]");
    
}

function showHistory() {
    let show = document.getElementById("history-tabs");
    let hide = document.getElementById("donation-tabs");
    show.classList.remove("hidden");
    hide.classList.add("hidden");
    let donationButton = document.getElementById("donation-button");
    donationButton.classList.remove("bg-[#B4F461]");
    let historyButton = document.getElementById("history-button");
    historyButton.classList.add("bg-[#B4F461]");
}