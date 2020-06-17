// let name = document.getElementById("inputName");

let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function() {
    let fullName = document.getElementById('full-name').value;
    let phoneNumber = document.getElementById('phone').value;
    let idEmail = document.getElementById('email').value;
    let idPassword = document.getElementById('password').value;

    console.log(`Name : ${fullName}`);
    console.log(`Phone : ${phoneNumber}`);
    console.log(`Email : ${idEmail}`);
    console.log(`Password : ${idPassword}`);
    alert(`
  Name : ${fullName}
  Phone : ${phoneNumber}
  Email : ${idEmail}
  Password : ${idPassword}`);
});