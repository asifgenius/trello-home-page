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



{/* button card 
 <section>                             
<div class="row" style="padding: 300px;">
<div class="col-4">
<div class="list-group" id="list-tab" role="tablist">
<a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
<a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
<a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
<a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
</div>
</div>
<div class="col-8">
<div class="tab-content" id="nav-tabContent">
<div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
<div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
<div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
<div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
</div>
</div>
</div> 
</section> */}

