 
function getDetails()  {
    let fname = document.getElementById("myFullname").value;
    let address = document.getElementById("myAddress").value;
    let region = document.getElementById("myRegion").value;
    let contact = document.getElementById("myNumber").value;

    document.getElementById('displayFullname').innerHTML = fname;
    document.getElementById('displayAddress').innerHTML = address;
    document.getElementById('displayRegion').innerHTML = region;
    document.getElementById('displayContactNo').innerHTML = contact;

    let payment = document.getElementsByName('selectPayment');
    for(i=0; i< payment.length; i++){
        if(payment[i].checked)
        document.getElementById('displayPaymethod').innerHTML = payment[i].value;
    }
}