class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2 = createInput("Enter correct option no...")



    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h3')
    this.option1 = createElement('h4')
    this.option2 = createElement('h4')
    this.option3 = createElement('h4')
    this.option4 = createElement('h4')

    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();

  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Question:- What starts and ends with the letter 'E', but only has one letter ? ")
    this.option1.html("1: Everyone")
    this.option2.html("2: Envelope")
    this.option3.html("3: Estimate")
    this.option4.html("4: Example")

    this.input1.position(150, 260);
    this.input2.position(450, 260);
    this.button.position(360, 330);
    this.question.position(125, 75);
    this.option1.position(125, 100);
    this.option2.position(125, 125);
    this.option3.position(125, 150);
    this.option4.position(125, 175);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank you, Your answer has been submitted")
      this.message.position(175, 360);
    })


  }
}
