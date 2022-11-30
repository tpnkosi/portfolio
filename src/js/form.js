let form = document.getElementById("formControl");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    Email.send({
        SecureToken: "b67c55ef-2854-4c76-b184-5063a7c10381",
        // Host : "smtp.elasticemail.com",
        // Username : "thulile.nkosi@umuzi.org",
        // Password : "61379E3B45E487CC5210906BF70384A8F47B",
        // Password: "sxqpslzvkudjeufl",
        To : "thulile.nkosi@umuzi.org",
        From : email,
        Subject : subject,
        Body : name + ": " + message
    }).then(
      message => alert(message)
    );
})