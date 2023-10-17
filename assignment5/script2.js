const helloString = 'hello, my name is jayden!';
const year = 2023;
function printTheYear() {
  document.querySelector('p').innerText += year;
}

export { helloString as hello, year, printTheYear };