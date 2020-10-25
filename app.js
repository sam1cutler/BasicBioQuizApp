
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Evolution is defined by its action on which level of organization?',
      answers: [
        'molecules and genes',
        'communities',
        'population',
        'individual organisms'
      ],
      correctAnswer: 'population'
    },
    {
      question: 'Which of the following options describes the chemical reaction by which a monomer is attached to a polymer?',
      answers: [
        'Hydrolysis',
        'Fermentation',
        'Oxidation/reduction',
        'Dehydration synthesis'
      ],
      correctAnswer: 'Dehydration synthesis'
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
        <button>Start quiz.</button>
      </form>
    </div>`;
}

function quizQuestionHTML() {
  console.log('The quizQuestionHTML function ran.');
  return `<p>Here is a placeholder of the quiz question HTML</p>`
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
    if (quizCompleted === false) {
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
  $('.js-insert-form-here').html(HTMLformAddition);
}



/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

// Thinking about "user stories" to sketch out the render functions that I'll need...
// This page will need to handle...

// ...starting the quiz

// ...a correct answer being submitted

// ...an incorrect answer being submitted

// ...re-starting the quiz



// run (what's the proper word here?) all the otherhandler functions
function handleQuizPage() {
  console.log('Ran handleQuizPage function.');
  renderQuizPage();

}


$(handleQuizPage);