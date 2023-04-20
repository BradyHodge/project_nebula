const questions = [
    {

        question: "Who is this person?",
        optionA: "Liam Neeson",
        optionB: "Kate Winslet",
        optionC: "Arnold Schwarzenegger",
        optionD: "Johnny Depp",
        correctOption: "optionD",
        image: "./images/JohnnyDepp.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Mark Wahlberg",
        optionB: "Arnold Schwarzenegger",
        optionC: "Natalie Portman",
        optionD: "Pierce Brosnan",
        correctOption: "optionB",
        image: "./images/ArnoldSchwarzenegger.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Orlando Bloom",
        optionB: "Dwayne Johnson",
        optionC: "Sean Connery",
        optionD: "Jim Carrey",
        correctOption: "optionD",
        image: "./images/JimCarrey.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Rachel McAdams",
        optionB: "Angelina Jolie",
        optionC: "Emma Watson",
        optionD: "Scarlett Johansson",
        correctOption: "optionC",
        image: "./images/EmmaWatson.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Adam Sandler",
        optionB: "Heath Ledger",
        optionC: "Edward Norton",
        optionD: "Robert Downey Jr.",
        correctOption: "optionD",
        image: "./images/RobertDowneyJr.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Daniel Radcliffe",
        optionB: "Bradley Cooper",
        optionC: "Will Ferrell",
        optionD: "Nicolas Cage",
        correctOption: "optionA",
        image: "./images/DanielRadcliffe.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Daniel Craig",
        optionB: "Keanu Reeves",
        optionC: "Chris Evans",
        optionD: "Ian McKellen",
        correctOption: "optionC",
        image: "./images/ChrisEvans.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Leonardo DiCaprio",
        optionB: "",
        optionC: "",
        optionD: "",
        correctOption: "optionA",
        image: "./images/LeonardoDiCaprio.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Bruce Willis",
        optionB: "Samuel L. Jackson",
        optionC: "Ben Stiller",
        optionD: "Tom Cruise",
        correctOption: "optionD",
        image: "./images/TomCruise.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Eminem",
        optionB: "Bill Gates",
        optionC: "Tommy Lee Jones",
        optionD: "Brad Pitt",
        correctOption: "optionD",
        image: "./images/BradPitt.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Antonio Banderas",
        optionB: "Shia LaBeouf",
        optionC: "Charles Chaplin",
        optionD: "george washington",
        correctOption: "optionC",
        image: "./images/CharlesChaplin.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Morgan Freeman",
        optionB: " Steve Carell",
        optionC: "Denzel Washington",
        optionD: "James Franco",
        correctOption: "optionA",
        image: "./images/MorganFreeman.jpg"
    },


    {
        question: "Who is this person?",
        optionA: "Mel Gibson",
        optionB: "Tom Hanks",
        optionC: "Vin Diesel",
        optionD: "Tim Allen",
        correctOption: "optionB",
        image: "./images/TomHanks.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Robin Williams",
        optionB: "Kevin Spacey",
        optionC: "Jason Biggs",
        optionD: "Hugh Jackman",
        correctOption: "optionD",
        image: "./images/HughJackman.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Matt Damon",
        optionB: "Seann William Scott",
        optionC: "Jean-Claude Van Damme",
        optionD: "Zach Galifianakis",
        correctOption: "optionA",
        image: "./images/MattDamon.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Owen Wilson",
        optionB: "Christian Bale",
        optionC: "Sylvester Stallone",
        optionD: "Peter Jackson",
        correctOption: "optionC",
        image: "./images/SylvesterStallone.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Will Smith",
        optionB: "Bruce Lee",
        optionC: "Macaulay Culkin",
        optionD: "Jack Nicholson",
        correctOption: "optionA",
        image: "./images/WillSmith.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Bill Murray",
        optionB: "Jake Gyllenhaal",
        optionC: "Clint Eastwood",
        optionD: "Jason Statham",
        correctOption: "optionC",
        image: "./images/ClintEastwood.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Rowan Atkinson",
        optionB: "Marlon Brando",
        optionC: "John Travolta",
        optionD: "Russell Crowe",
        correctOption: "optionD",
        image: "./images/RussellCrowe.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Cameron Diaz",
        optionB: "Channing Tatum",
        optionC: "Ben Affleck",
        optionD: "Shah Rukh Khan",
        correctOption: "optionA",
        image: "./images/CameronDiaz.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Chris Hemsworth",
        optionB: "James McAvoy",
        optionC: "James Cameron",
        optionD: "George Clooney",
        correctOption: "optionD",
        image: "./images/GeorgeClooney.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Amitabh Bachchan",
        optionB: "Steven Spielberg",
        optionC: "Brendan Fraser",
        optionD: "Tom Hiddleston",
        correctOption: "optionB",
        image: "./images/StevenSpielberg.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Aamir Khan",
        optionB: "Harrison Ford",
        optionC: "Jackie Chan",
        optionD: "Kanye West",
        correctOption: "optionB",
        image: "./images/HarrisonFord.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Roger Federe",
        optionB: "Cristiano Ronaldo",
        optionC: "Robert De Niro",
        optionD: "Lionel Messi",
        correctOption: "optionC",
        image: "./images/RobertDeNiro.jpg"
    },

    {
        question: "Who is this person?",
        optionA: "Lionel Messi",
        optionB: "Neymar",
        optionC: "Al Pacino",
        optionD: "Howard Stern",
        correctOption: "optionC",
        image: "./images/AlPacino.jpg"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
     // Check if current question has an image property
    if (currentQuestion.hasOwnProperty("image")) {
        // If it does, update the HTML to display the image
        document.getElementById("display-question").innerHTML = `<img src="${currentQuestion.image}" alt="Question Image" id="question-image">`
    } else {
        // If it doesn't, display the question as usual
        document.getElementById("display-question").innerHTML = currentQuestion.question
    }

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}

//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}