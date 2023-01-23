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
        // The above will likely need to be a separate api call to get a different random character as option 2
        // It might make sense to have 4 different options and make it a multiple choice?? Idk
        console.log(quote)
        console.log(fullName)
    })
}

getQuote()


const myRequest = new Request("https://www.officeapi.dev/api/quotes/random");

// fetch(myRequest, {
//     method: 'GET',
//     mode: 'no-cors',
//     headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Content-Type": "application/json"
//     },
// })
// .then((r) => {
//     return r.json()
// })
// .then((data) => {
//     console.log(data)
// })

// .then(data => console.log(data));




// .then(response => console.log(JSON.stringify(response)))
