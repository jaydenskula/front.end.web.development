const helloString = 'hello, my name is jayden!';
const birthYear = 2001;
function printTheYear() {
  document.querySelector('p').innerText += year;
}

export { helloString as hello, birthYear, printTheYear };