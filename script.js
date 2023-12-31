const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');
const nextBtn = document.querySelector('#next-btn');



let score = 0;
let currentQuestion = 0;
let totalScore = quesJSON.length;

showQuestion();

function showQuestion() {
  const { correctAnswer, options, question } = quesJSON[currentQuestion];
  questionElement.textContent = question;
  const shuffledOption = shuffleOptions(options);
  shuffledOption.forEach((option) => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = option;
    optionsElement.appendChild(buttonElement);
    // handling event on button
    buttonElement.addEventListener('click', () => {
      if (option === correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }
      
      scoreElement.textContent = `Score:${score} / ${totalScore}`;
      nextQuestion();

    })

  });



}


function nextQuestion() {
  optionsElement.textContent = '';
  currentQuestion++;
  if (currentQuestion >= quesJSON.length) {
    questionElement.textContent = "Quiz Completed!!";
    nextBtn.remove();
   
  } else {

    showQuestion();
  }
}


nextBtn.addEventListener('click', ()=> {
  scoreElement.textContent =  `Score:${score} / ${totalScore}`;
  nextQuestion();
})




function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}



