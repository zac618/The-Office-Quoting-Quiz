fetch("https://officeapi.dev/api/quotes/random", {
    method: 'GET',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    },
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))

