function getOrdinal(number) {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const lastDigit = number % 10;
    return suffixes[lastDigit > 3 ? 0 : lastDigit];
  }

const counter = document.querySelector(".count-number");
//async - makes a function return a promise
async function updateCounter() {
    //await - makes a function wait for a promise, can only be used inside an async function
    // the link is the function URL of your Lambda function
    let response = await fetch(
        "https://ko2q2r6ecladhysbqfiblffvgu0yubek.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `👀 You are the ${data}${getOrdinal(data)} visitor`;
}

updateCounter();