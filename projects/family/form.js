document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert("Form Submitted");

        const fname = document.getElementById('fname').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const password = document.getElementById('password').value;
        const age = document.getElementById('age').value;
        const state = document.getElementById('state').value;

        if (!fname || !email) {
            alert("You need a name and email.");
            return;
        }

        const ageValue = Number(age);
        if (!ageValue || ageValue < 18) {
            alert("You need to be 18");
            return;
        }

        const FormDataObj = {
            name: fname,
            email: email,
            date: date,
            password: password,
            age: ageValue,
            state: state
        };

        console.log(FormDataObj);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "submit.json", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert("Form submitted successfully!");
                const response = JSON.parse(xhr.responseText);
                console.log(response);
                form.innerHTML = '';
                document.getElementById('message').innerText = response.message;
            } else if (xhr.readyState === 4) {
                alert("Error submitting form.");
            }
        };

        xhr.send(JSON.stringify(FormDataObj));
    });
});