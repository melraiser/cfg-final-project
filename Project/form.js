const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', () => {
    const emailaddress = document.getElementById("emailaddress").value;
    const fname = document.getElementById("fname").value;
    const country = document.getElementById("country").value;
    

    alert(`Added to mailing list: Email: ${emailaddress} Name: ${fname} From: ${country}`);
});