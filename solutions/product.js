function enterpriseProduct() {
    var enterpriseValue = Number(document.getElementById("enterpriseValue").innerHTML);
    var costButton = Number(document.getElementById("costButton").innerHTML);
    var usersCost = Number(document.getElementById("usersCost").innerHTML);
    var newusersCost = usersCost + costButton;


    var newusersCost = usersCost + 1;

    (document.getElementById("usersCost").innerHTML) = newusersCost;
    console.log("enterpriseValue", enterpriseValue)
    console.log("newusersCost", newusersCost)
    console.log("button", newusersCost)
    if (newusersCost > 250) {

        var totalEnterpriseValue = enterpriseValue - 0.01;
        (document.getElementById("enterpriseValue").innerHTML) = totalEnterpriseValue;


    }

    else if (newusersCost < usersCost - 1) {
        var totalEnterpriseValue = enterpriseValue + 0.01;
        (document.getElementById("enterpriseValue").innerHTML) = totalEnterpriseValue;
    }
}




