function submitData() {
    let name = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("pn").value;
    let subject = document.getElementById("sub").value;
    let message = document.getElementById("msg").value;

    if (name === "") {
      return alert("Name must be filled!");
    } else if (email === "") {
      return alert("Email must be filled!");
    } else if (number === "") {
      return alert("Number must be filled!");
    } else if (subject === "") {
      return alert("Subject must be selected!");
    } else if (message === "") {
      return alert("Message must be filled!");
    }
  
    let emailReceiver = "aziznasirudin@gmail.com";
  
    let a = document.createElement("a");
    a.href =`https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message}`
    a.click();
    
    let messagers = {
      nama: name,
      email: email,
      phone_number: number,
      subject: subject,
      message: message,
    };



    
  
    console.log(messagers);
    alert(messagers.nama);
}
