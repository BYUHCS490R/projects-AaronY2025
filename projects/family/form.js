document.getElementById('myForm').addEventListener('submit',function(event) { event .preventDefault();
    alert("Form Submitted");

    const fname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const state = document.getElementById('state').value;

    if (!fname || !email) {
        alert("You need a name and email.")
    }

    if (age || age <18) {
        alert("You need to be 18");
        return;
    }

    const FormData = {
        name: fname,
        email: email,
        password:password,
        age:age,
        state: state
    };

    console.log(FormData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form submitted successfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            //document.getElementById('myForm').reset();
            document.getElementById('myForm').innerHTML = '';
            document.getElementById('message').innerText = response.message;
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };
    xhr.send(JSON.stringify(FormData));
});