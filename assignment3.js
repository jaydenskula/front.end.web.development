function quiz() {
  const questions = [
    'How many moons does Earth have?',
    'How many moons does Saturn have?',
    'How many moons does Venus have?'
  ];
  const answers = [1, 82, 0];

  let score = 0;



  for (let i = 0; i < questions.length; i++) {
    let num = Math.floor(Math.random() * questions.length);
    let question = questions[num];
    let answer = prompt(question);
    if (answer == answers[num]) {
      score++;
      alert('Correct!');
    } else {
      alert('Wrong!');
    }
    num++;
    if (num === questions.length) {
      num = 0;
    }
  }

  let scoreArea = document.getElementById('score-area');
  scoreArea.innerHTML = `You got ${score} out of ${questions.length} questions correct!`;
}

document.addEventListener('DOMContentLoaded', function () {
alert('Are you ready for a quiz?');
quiz();
});