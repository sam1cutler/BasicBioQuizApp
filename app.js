
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
  questionAnswered: false,
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

function summaryHTMLaddition() {
  console.log('Ran summaryHTMLaddition function.');
  
  // if quiz hasn't started OR if it's done, should be empty
  if (store.quizStarted === false || store.quizCompleted === true) {
    return 'Placeholder summary info but will be empty in this situation.';
  } else {
    return `
      <h3>You're on question ${store.questionNumber} out of 5.</h3>
      <h3>Current score is ${store.score} points.</h3>`
  };
}

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
}

function quizCompleteHTML() {
  console.log('The quizCompleteHTML function ran.');
  return `<p>Here is a placeholder of the quiz Complete HTML</p>`
}


function coreContentHTMLaddition() {
  console.log('Ran coreContentHTMLaddition function.');
  
  // initialize empty coreContentString to be filled out
  let coreContentString = ''

  // Determine the position in the quiz 
  // --> go to correct 1 of 3 form-generating functions:

  // Go to the "quiz start" form function:
  if (store.quizStarted === false) {
    console.log('The quiz is starting.');
    coreContentString = quizStartHTML();

  // Go to "quiz conclusion" form function:
  } else if (store.quizCompleted === true) {
    console.log('The quiz has finished, need to provide summary');
    // will create the appropriate quiz later:
    coreContentString = 'TBD quiz summary HTML function output.'
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

  return coreContentString;

}

function feedbackHTMLaddition() {
  console.log('Ran feedbackHTMLaddition function');

  if (store.questionAnswered === false) {
    console.log('No answered question to provide feedback about.')
    // No feedback to provide!
    return `Placeholder feedback spot but will be empty in this situation.`
  } else {
    console.log('A question has just been answered and needs feedback.')
    return `Placeholder feedback.`
  };
  
}


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderQuizPage() {
  console.log('Ran renderQuizPage function.');
  
  // Generate the string/HTML content for the "Summary"
  let summaryHTMLstring = summaryHTMLaddition();
  $('.js-summary').html(summaryHTMLstring);

  // Generate the string/HTML content for the question + answer choices
  let questionAndAnswerHTMLstring = coreContentHTMLaddition();
  $('.js-question-content').html(questionAndAnswerHTMLstring);

  // Generate the string/HTML content for the feedback + button
  let feedbackHTMLstring = feedbackHTMLaddition();
  $('.js-feedback-button').html(feedbackHTMLstring);

}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

// Thinking about "user stories" to sketch out the render functions that I'll need...
// This page will need to handle...

// ...clicks of the "start quiz" button
function handleStartQuiz() {
  console.log('Ran handleStartQuiz function.')
  $('.js-question-content',).on('click', '.js-quiz-start', function(event) {
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

/* // I think i want to eliminate this function and bring its actions into
//       --> the place where it's called (increment score if correct)
//       --> the HTML-generating functions

// ...a correct answer being submitted
function handleCorrectAnswer() {
  console.log('Ran handleCorrectAnswer function.');

  // Need to...
  // ...tick up score
  store.score += 10;

  // ...generate a message (and HTML component?) to declare "you answered correctly"

  // ...change button to a "next question" button

}
*/

// ...clicks of the "Submit Answer" button
function handleAnswerSubmission() {
  console.log('Ran handleAnswerSubmission function.')
  
  $('.js-question-content').on('click', '.js-submit-answer-button', function(event) {
    event.preventDefault();
    console.log('You submitted an answer.');

    // Create shorthand for current Question (object in store) 
    const currentQuestion = store.questions[(store.questionNumber-1)];
    // and Answer (from that Question object)
    const correctAnswer = currentQuestion.correctAnswer;

    // identify the selected answer choice    
    const answerChoice = $(`input[type='radio'][name='${currentQuestion.questionShorthand}']:checked`).val();
    console.log(`You selected "${answerChoice}".`);
  
    // Determine if the answer was correct or not:
    if (answerChoice === correctAnswer) {
      console.log('You chose the correct answer!');
      store.score += 10;
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