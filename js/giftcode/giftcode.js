function validate(coupon) {
    var myRe = "TDC12072001";
    var coupon = myRe.trim();
    var input = document.getElementById('g-code').value;
    if(input.toUpperCase() == coupon.toUpperCase()) {
        document.getElementById('message').innerHTML="Congratulations! You have been gifted a YEAR subscription to Swagbox! Please fill out your style profile.";
        document.getElementById('err').innerHTML="";
        return true;
    } else {
        document.getElementById('err').innerHTML="Invalid code";
        document.getElementById('message').innerHTML="";
        return false;
    }
}