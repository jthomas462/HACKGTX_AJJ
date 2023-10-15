
function submission() {
    let photo_element = document.getElementById("photo");
    let date_element = document.getElementById("date").value;
    const data = { date: date_element};

    console.log("Hi");

    if (checkValidDate()) {
        fetch('/api/endpoint', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    const formData = new FormData();
    const imageFile = photo_element.files[0];
    formData.append('image', imageFile);

    fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.text())
        .then(data => {
          // Handle the response from the Python script
          console.log(data);
        })
        .catch(error => {
          console.error('Image upload error:', error);
        });
}



function checkValidDate() {
    
    let dateToCheck = document.getElementById("date");
    const dateArray = dateToCheck.split();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    const month_check = false
    const date_check = false
    for (i = 0; i < months.length(); i++) {
        if (dateArray[0] === months[i]) {
            month_check = true
        }
    }
    for (i = 0; i <days.length(); i++) {
        if (dateArray[1] === days[i]) {
            date_check = true
        }
    }
    
    return (month_check && date_check);
}
    
    