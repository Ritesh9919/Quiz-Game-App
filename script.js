const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };

   const {correctAnswer, options, question} = questionObj;
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const scoreElement = document.getElementById('score');
    
    questionElement.textContent = question;


    options.forEach((option) => {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = option;
        optionsElement.appendChild(buttonElement);
    
    })

    

    