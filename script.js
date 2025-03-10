const problems = [
    {
        "problem": "turboTheSnail1.png",
        "contest": "IMO",
        "iteration": "2024",
        "problemNo": "5"
    },
    {
        "problem": "noli.png",
        "contest": "PMO Qualifying",
        "iteration": "2024",
        "problemNo": "III.2"
    },
    {
        "problem": "eisenBlackboard.png",
        "contest": "PMO Areas",
        "iteration": "2024",
        "problemNo": "II.1"
    },
    {
        "problem": "grasshopper.png",
        "contest": "Putnam",
        "iteration": "2021",
        "problemNo": "A1"
    },
    {
        "problem": "scales.webp",
        "contest": "ISL",
        "iteration": "2019",
        "problemNo": "C9"
    },
    {
        "problem": "biject.webp",
        "contest": "ISL",
        "iteration": "2022",
        "problemNo": "C9"
    },
    {
        "problem": "eliasBlackboard.png",
        "contest": "PMO Areas",
        "iteration": "2025",
        "problemNo": "II.1"
    },
    {
        "problem": "migelLadder.png",
        "contest": "MATHirang MATHibay",
        "iteration": "2018",
        "problemNo": "E3"
    },
    {
        "problem": "clockblock.png",
        "contest": "AMC 10A",
        "iteration": "2015",
        "problemNo": "14"
    },
    {
        "problem": "evaluate.png",
        "contest": "AMC 10B",
        "iteration": "2021",
        "problemNo": "2"
    },
    {
        "problem": "japaneseTriangle.png",
        "contest": "IMO",
        "iteration": "2023",
        "problemNo": "5"
    },
]

MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
    }
};

var index = 0;
var correct = 0;

function giveProblem() {
    document.getElementById("contest").disabled = false;
    document.getElementById("iteration").disabled = false;
    document.getElementById("problemNo").disabled = false;
    document.getElementById("submitAns").disabled = false;
    index = Math.floor(Math.random() * problems.length);
    document.getElementById("problem").setAttribute('src', "images/" + problems[index]["problem"]);
    document.getElementById("correctAlert").innerHTML = "";

    MathJax.startup.promise.then(() => {
        MathJax.typeset();
    }).catch((err) => {
        console.error("MathJax didn't process", err);
    });
}

function giveProblemTimed() {
    document.getElementById("start").disabled = true;
    correct = 0;
    document.getElementById("correct").innerHTML = correct;
    giveProblem();
    var timeLeft = 60;
    const timer = setInterval(function() {
        timeLeft -= 1;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("contest").disabled = true;
            document.getElementById("iteration").disabled = true;
            document.getElementById("problemNo").disabled = true;    
            document.getElementById("submitAns").disabled = true;    
            document.getElementById("start").disabled = false;
        }
    }, 1000);
}

function checkAnswer(timed) {
    let contest = document.getElementById("contest").value;
    let iteration = document.getElementById("iteration").value;
    let problemNo = document.getElementById("problemNo").value;
    if (contest.toUpperCase() == problems[index]["contest"].toUpperCase() && iteration.toUpperCase() == problems[index]["iteration"].toUpperCase() && problemNo.toUpperCase() == problems[index]["problemNo"].toUpperCase()) {
        correct += 1;
        if (!timed) {
            document.getElementById("correctAlert").innerHTML = "<b>Correct!</b>";
            document.getElementById("contest").disabled = true;
            document.getElementById("iteration").disabled = true;
            document.getElementById("problemNo").disabled = true;
            document.getElementById("submitAns").disabled = true;
        } else {
            document.getElementById("correctAlert").innerHTML = "<b>Correct! The next problem will be given in at most 2 seconds.</b>";
            document.getElementById("correct").innerHTML = correct;
            const newProblem = setTimeout(giveProblem,2000);
        }
    }
    else {
        document.getElementById("correctAlert").innerHTML = "<b>Incorrect! Try again.</b>";
    }
}