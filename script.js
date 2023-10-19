const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      options: ['Two', 'Three', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };

   
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const scoreElement = document.getElementById('score');

    const {correctAnswer, options, question} = questionObj;

    let score = 0;
    
    
    questionElement.textContent = question;
   
    const shuffledOption = shuffleOptions(options);
    
    shuffledOption.forEach((option) => {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = option;
        optionsElement.appendChild(buttonElement);
        // handling event on button
        buttonElement.addEventListener('click', ()=> {
          if(option === correctAnswer) {
            score++;
          }else {
            score = score-0.25;
          }
          console.log(score);
          scoreElement.textContent = `Score:${score}`;
          questionElement.textContent = "Quiz Completed!!";
          optionsElement.textContent = '';
        })
    
    });

    
function shuffleOptions(options) {
  for(let i = options.length-1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i+1);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}



    