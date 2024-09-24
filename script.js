let balance = 10000;
let wallet = document.getElementById("wallet");
wallet.innerText = `${balance} BDT`;
let campaign1 = 0, campaign2 = 0, campaign3 = 0;
let donation1 = document.getElementById("campaign-1");
let donation2 = document.getElementById("campaign-2");
let donation3 = document.getElementById("campaign-3");

function createHistory(inputValue,eventName) {
    const historySection=document.getElementById('history-tabs');
    const parentDiv=document.createElement('div');
    parentDiv.classList.add('border-2','rounded-lg','p-4','space-y-4', 'w-3/4', 'mx-auto');

    const h2=document.createElement('h2');
    h2.classList.add('font-bold');
    h2.innerText=`${inputValue} taka is donated  for ${eventName}`;

    const p=document.createElement('p');
    p.classList.add('font-light');
    const now=new Date();
    p.innerText=`${now}`;

    parentDiv.appendChild(h2);
    parentDiv.appendChild(p);
    historySection.insertBefore(parentDiv, historySection.firstChild);
    
}


function donate(input) {
    if (input == 1) {
        let value = document.getElementById('input-1').value;
        if (isNaN(value) || value > balance || value < 0) {
            alert("Invalid transaction");
        }
        else {
            balance -= value;
            campaign1 += parseInt(value);
            wallet.innerText = `${balance} BDT`;
            donation1.innerText = `${campaign1} BDT`;
            createHistory(value, "Noakhali");
            modal.showModal();
        }
        
    }
    if (input == 2) {
        let value = document.getElementById('input-2').value;
        if (isNaN(value) || value > balance || value < 0) {
            alert("Invalid transaction");
        }
        else {
            balance -= value;
            campaign2 += parseInt(value);
            wallet.innerText = `${balance} BDT`;
            donation2.innerText = `${campaign2} BDT`;
            createHistory(value, "Feni");
            modal.showModal();
        }
        
    }
    if (input == 3) {
        let value = document.getElementById('input-3').value;
        if (isNaN(value) || value > balance || value < 0) {
            alert("Invalid transaction");
        }
        else {
            balance -= value;
            campaign3 += parseInt(value);
            wallet.innerText = `${balance} BDT`;
            donation3.innerText = `${campaign3} BDT`;
            createHistory(value, "Protest");
            modal.showModal();
        }
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