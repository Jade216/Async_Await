let favNumber = 9;
let baseURL = "http://numbersapi.com";

//1
async function favnum(){
    let res = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(res);
}
favnum();

//2
const favNumbers = [3,6,9];
async function favnums(){
    let res = await $.getJSON(`${baseURL}/${favNumbers}?json`);
    console.log(res);
}
favnums();

//3
async function fact4(){
    let facts = await Promise.all(
        Array.from({length:4},
            () => $.getJSON(`${baseURL}/${favNumber}?json`)
        )
    );
    facts.forEach(data => {
        $(`body`).append(`<p>${data.text}</p>`);
    });
}
fact4();