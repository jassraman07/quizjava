// Questions that will be asked
const Questions = [{
    q: "Inside which HTML element do we put the JavaScript? ",
        a: [{ text: "Scripting", isCorrect: false },
        { text: "Javascript", isCorrect: false },
        { text: "Script", isCorrect: true },
        { text: "JS", isCorrect: false }
        ]
    
    },
    {
        q: "Where is the correct place to insert a JavaScript?",
        a: [{ text: "body", isCorrect:true },
        { text: "Head", isCorrect: false },
        { text: "Html", isCorrect: false },
        { text: "All of Above", isCorrect: false }
        ]
    
    },
                       
     {
        q: "Where is the correct place to insert CSS?",
        a: [{ text: "body", isCorrect:false},
        { text: "Head", isCorrect: true },
        { text: "Html", isCorrect: false },
        { text: "All of Above", isCorrect: false }
        ]
    
    },  
                       {
        q: "Where is the correct place to insert Title?",
        a: [{ text: "body", isCorrect:false},
        { text: "Head", isCorrect: true },
        { text: "Html", isCorrect: false },
        { text: "All of Above", isCorrect: false }
        ]
    
    },
     {
       
    q: "Github is used to create?",
        a: [{ text: "code", isCorrect:false},
        { text: "repo", isCorrect: true },
        { text: "none", isCorrect: false },
        { text: "All of Above", isCorrect: false }
        ]
    
    },
                       
                       
                       
                       
    // {
    // 	q: "How do you write "Hello World" in an alert box?",
    // 	a: [{ text: "alert("Hello World")", isCorrect: true },
    // 	{ text: "alertbox("Hello World")", isCorrect: false },
    // 	{ text: "msgbox("Hello World")", isCorrect: false },
    // 	{ text: "msg("Hello World")", isCorrect: false }
    // 	]
    
    // },
    
    ]
    
    let currQuestion = 0
    let score = 0
    
    function loadQues() {
        const question = document.getElementById("ques")
        const opt = document.getElementById("opt")
    
        question.textContent = Questions[currQuestion].q;
        opt.innerHTML = ""
    
        for (let i = 0; i < Questions[currQuestion].a.length; i++) {
            const choicesdiv = document.createElement("div");
            const choice = document.createElement("input");
            const choiceLabel = document.createElement("label");
    
            choice.type = "radio";
            choice.name = "answer";
            choice.value = i;
    
            choiceLabel.textContent = Questions[currQuestion].a[i].text;
    
            choicesdiv.appendChild(choice);
            choicesdiv.appendChild(choiceLabel);
            opt.appendChild(choicesdiv);
        }
    }
    
    loadQues();
    
    function loadScore() {
        const totalScore = document.getElementById("score")
        totalScore.textContent = `You scored ${score} out of ${Questions.length}`
    }
    
    
    function nextQuestion() {
        if (currQuestion < Questions.length - 1) {
            currQuestion++;
            loadQues();
        } else {
            document.getElementById("opt").remove()
            document.getElementById("ques").remove()
            document.getElementById("btn").remove()
            loadScore();
        }
    }
    
    function checkAns() {
        const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
    
        if (Questions[currQuestion].a[selectedAns].isCorrect) {
            score++;
            console.log("Correct")
            nextQuestion();
        } else {
            nextQuestion();
        }
      
      
    }
    