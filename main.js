function getQuote() {
    let apiUrl = 'https://www.officeapi.dev/api/quotes/random';
    fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        let character=data['data']['character']['firstname'];
        let lastName=data['data']['character']['lastname'];
        let quote=data['data']['content']
        let fullName=character+" "+lastName;
        document.getElementById("quoteText").innerHTML="\""+quote+"\"";
        document.getElementById("nameOption1").innerHTML="-"+fullName;
        document.getElementById("nameOption2").innerHTML="-"+fullName;
        console.log(fullName)
        // The above will likely need to be a separate api call to get a different random character as option 2
        // It might make sense to have 4 different options and make it a multiple choice?? Idk
    })
}
getQuote()

function getName() {
    let apiUrl = 'https://www.officeapi.dev/api/quotes/random';
    fetch(apiUrl).then(response => {
        return response.json();
    }).then(data => {
        let character=data['data']['character']['firstname'];
        let lastName=data['data']['character']['lastname'];
        let fullName=character+" "+lastName;
        document.getElementById("nameOption2").innerHTML="-"+fullName;
        console.log(fullName)
        // The above will likely need to be a separate api call to get a different random character as option 2
        // It might make sense to have 4 different options and make it a multiple choice?? Idk
    })
}
getName()


// !!!!!!!!!!!!!!!!!!!!!!!!!!!
// HOW CAN I COMPARE THE 'FULL NAME' FROM getQuote TO THE 'FULL NAME' FROM getName