
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Evolution is defined by its action on which level of organization?',
      questionShorthand: 'evolution',
      answers: [
        'molecules and genes',
        'communities',
        'population',
        'individual organisms'
      ],
      answerVals: [
        'mols-genes',
        'communities',
        'population',
        'individual-org'
      ],
      correctAnswer: 'population'
    },
    {
      question: 'Which of the following options describes the chemical reaction by which a monomer is attached to a polymer?',
      questionShorthand: 'monomer-polymer',
      answers: [
        'Hydrolysis',
        'Fermentation',
        'Oxidation/reduction',
        'Dehydration synthesis'
      ],
      answerVals: [
        'hydrolysis',
        'fermentation',
        'redox',
        'dehydration'
      ],
      correctAnswer: 'dehydration'
    }
  ],
  quizStarted: false,
  quizCompleted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function quizStartHTML() {
  console.log('The quizStartHTML function ran.');
  return `
    <div class='major-section'>
      <form action="#">
        <h3>Welcome to this quiz, focused on content from the first chapter of our biology textbook.</h3>
        <button class='js-quiz-start'>Start quiz.</button>
      </form>
    </div>`;
}

function quizQuestionHTML() {
  console.log('The quizQuestionHTML function ran.');

  let currentQuestion = store.questions[(store.questionNumber-1)]
  
  
  return `
    <form action="#">
      <h3 class="js-test-click">${currentQuestion.question}</h3>
      
      <div class="questions-container">
        <!-- I should make a function to create this repetition... -->
        <input type="radio" name='${currentQuestion.questionShorthand}' value='${currentQuestion.answerVals[0]}'>
         <label for="${currentQuestion.answerVals[0]}">${currentQuestion.answers[0]}</label><br>
        <input type="radio" name='${currentQuestion.questionShorthand}' value='${currentQuestion.answerVals[1]}'>
         <label for="${currentQuestion.answerVals[1]}">${currentQuestion.answers[1]}</label><br>
        <input type="radio" name='${currentQuestion.questionShorthand}' value='${currentQuestion.answerVals[2]}'>
         <label for="${currentQuestion.answerVals[2]}">${currentQuestion.answers[2]}</label><br>
        <input type="radio" name='${currentQuestion.questionShorthand}' value='${currentQuestion.answerVals[3]}'>
         <label for="${currentQuestion.answerVals[3]}">${currentQuestion.answers[3]}</label><br>
      </div>

      <button class='js-submit-answer-button'>Submit answer.</button>
    </form>  
  `

  /*
  return `
    <form action="#">
      <h3 class="js-test-click">Evolution is defined by its action on which level of organization?</h3>
      
      <div class="questions-container">
        <input type="radio" name='evolution' value='mols-genes'>
         <label for="mols-genes">molecules and genes</label><br>
        <input type="radio" name='evolution' value='communities'>
         <label for="communities">communities</label><br>
        <input type="radio" name='evolution' value='population'>
         <label for="population">population</label><br>
        <input type="radio" name='evolution' value='orgs'>
         <label for="orgs">individual organisms</label><br>
      </div>

      <button class='js-submit-answer-button'>Submit answer.</button>
    </form>  
  `
  */
}

function quizCompleteHTML() {
  console.log('The quizCompleteHTML function ran.');
  return `<p>Here is a placeholder of the quiz Complete HTML</p>`
}

function generateFormString() {
  console.log('Ran generateFormString function.');
  
  // Want to determine the position in the quiz
  // --> go to correct 1 of 3 form-generating functions:
  
  // Go to the "quiz start" form function:
  if (store.quizStarted === false) {
    console.log('The quiz is starting.');
    return quizStartHTML();
  } else {
    console.log('The quiz has already started');
    
    // I think need an additional conditional to handle 
    // whether to give a question form or a "quiz results" form
    if (store.quizCompleted === false) {
      return quizQuestionHTML();
    } else if (quizCompleted === true) {
      return quizCompleteHTML();
    };
  };
}


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderQuizPage() {
  console.log('Ran renderQuizPage function.');
  
  // Generate the string/HTML content to insert into the DOM
  let HTMLformAddition = generateFormString();

  // Insert that string/HTML content into the proper place in the DOM
  $('.js-quiz-page').html(HTMLformAddition);
}



/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

// Thinking about "user stories" to sketch out the render functions that I'll need...
// This page will need to handle...

// ...clicks of the "start quiz" button
function handleStartQuiz() {
  console.log('Ran handleStartQuiz function.')
  $('.js-quiz-page',).on('click', '.js-quiz-start', function(event) {
    event.preventDefault();
    console.log('You clicked the "start quiz" button');

    // change quiz Start status
    store.quizStarted = true;
    console.log('Setting "quizStarted" to "true".')
    
    // change question #
    store.questionNumber = 1;
    console.log('Setting "questionNumber" to "1".')

    console.log('With those changes in place, re-rendering the DOM.')
    renderQuizPage();

  });
}

// ...a correct answer being submitted
function handleCorrectAnswer() {
  console.log('Ran handleCorrectAnswer function.');

  // Need to...

  // ...tick up score
  // ...generate a message (and HTML component?) to declare "you answered correctly"
  // ...change button to a "next question" button

}

// ...clicks of the "Submit Answer" button
function handleAnswerSubmission() {
  console.log('Ran handleAnswerSubmission function.')
  
  $('.js-quiz-page').on('click', '.js-submit-answer-button', function(event) {
    event.preventDefault();
    console.log('You submitted an answer.');

    // identify the selected answer choice    
    const answerChoice = $("input[type='radio'][name='evolution']:checked").val();
    console.log(`You selected "${answerChoice}".`);
    
    const currentQuestion = store.questions[(store.questionNumber-1)];
    const correctAnswer = currentQuestion.correctAnswer;

    // Determine if the answer was correct or not:
    if (answerChoice === correctAnswer) {
      console.log('You chose the correct answer!');
      // Run the to-be-written "correct answer" function.
      handleCorrectAnswer();

    } else {
      console.log('You chose the incorrect answer.');
      // Run the to-be-written "incorrect answer" function.
    };
    
    //renderQuizPage();

  });
}



// ...an incorrect answer being submitted

// ...re-starting the quiz


// run (what's the proper word here?) all the otherhandler functions
function handleQuizPage() {
  console.log('Ran handleQuizPage function.');
  renderQuizPage();
  handleStartQuiz();
  handleAnswerSubmission();
}


$(handleQuizPage);