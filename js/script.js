function validate() {
    var errors = [];
    var fullname = {
        "fullname": document.getElementById('fullname').value
    };
    var email_addr = {
        "email_addr": document.getElementById('email_addr').value
    };
    var message = {
        "message": document.getElementById('message').value
    };
    for (data in fullname) {
        var checkName = (fullname[data]);
    }
    for (data in email_addr) {
        var checkEmail = (email_addr[data]);
    }
    for (data in message) {
        var checkMessage = (message[data]);
    }
    if (checkName == "") {
        checkName = "Full name is missing";
        errors.push({
            "fullname": checkName
        });
    }
    if (checkEmail == "") {
        checkEmail = "Email is missing";
        errors.push({
            "email_addr": checkEmail
        });
    }
    if (checkMessage == "") {
        checkMessage = "Message name is missing";
        errors.push({
            "message": checkMessage
        });
    }
    if (errors == "") {
        var collectionSuccess = {fullname,email_addr, message};
        console.log("Collected Data:\n", collectionSuccess);
    } else {
        console.log("Errors:\n", errors);
    }
}