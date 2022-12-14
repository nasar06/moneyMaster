
// get fild amount
function getFilAmount(filId) {
    const fildElement = document.getElementById(filId);
    const fildString = fildElement.value;
    const fildValue = parseFloat(fildString);

    return fildValue;

}

//set fil amount
function setFildAmount(fildId, amount) {
    const restFildElement = document.getElementById(fildId);
    const restFildString = restFildElement.innerText;
    const restFildAmount = parseFloat(restFildString);

    restFildElement.innerText = amount;
    return restFildAmount;
}


//click Calculate btn
document.getElementById('calculateBtn').addEventListener('click', function () {
    //get Income Value
    const getIncomeValue = getFilAmount('income');

    //get food value
    const getFoodValue = getFilAmount('food');
    //get rent value
    const getRentValue = getFilAmount('rent');
    //get clothes value
    const getClothesValue = getFilAmount('clothes');


    //sum food + rent + clothes
    const totalCost = getFoodValue + getRentValue + getClothesValue;


    //set total amount
    const setTotalAmount = setFildAmount('total-expenses', totalCost);


    // minus income - total Cost
    const remainigTotal = getIncomeValue - totalCost;

    //set Remainig amount
    const setRemainigAmount = setFildAmount('R-blance', remainigTotal)
})

function getOnlyAmount(fildId) {
    const restFildElement = document.getElementById(fildId);
    const restFildString = restFildElement.innerText;
    const restFildAmount = parseFloat(restFildString);

    return restFildAmount;
}

//click and get parcentage
document.getElementById('save-btn').addEventListener('click', function () {
    //get Parcentage value
    const getParcentageValue = getFilAmount('saving-value');
    // get Income value
    const getIncomeValue = getFilAmount('income');

    // calculate parcentage
    const calParcentageAmount = getIncomeValue * getParcentageValue / 100;

    //set saving amount
    const setSavingAmount = setFildAmount('saving-amount', calParcentageAmount);

    //get Blance amount
    const getBlance = getOnlyAmount('R-blance');

    //get Saving amount
    const getSavingAmount = getOnlyAmount('saving-amount');

    //sum Balance and Saving Amount
    const blanceOrSaving = getBlance + getSavingAmount;

    //set Remaining Blance total
    const getMainTotal = setFildAmount('remaining-blance', blanceOrSaving);
})
