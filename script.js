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
    
]

MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
    }
};

var index = 0;

function giveProblem() {
    document.getElementById("contest").disabled = false;
    document.getElementById("iteration").disabled = false;
    document.getElementById("problemNo").disabled = false;
    index = Math.floor(Math.random() * problems.length);
    document.getElementById("problem").setAttribute('src', "images/" + problems[index]["problem"]);

    MathJax.startup.promise.then(() => {
        MathJax.typeset();
    }).catch((err) => {
        console.error("MathJax didn't process", err);
    });
}

function checkAnswer() {
    let contest = document.getElementById("contest").value;
    let iteration = document.getElementById("iteration").value;
    let problemNo = document.getElementById("problemNo").value;
    if (contest == problems[index]["contest"] && iteration == problems[index]["iteration"] && problemNo == problems[index]["problemNo"]) {
        document.getElementById("correctAlert").innerHTML = "<b>Correct!</b>";
        document.getElementById("contest").disabled = true;
        document.getElementById("iteration").disabled = true;
        document.getElementById("problemNo").disabled = true;
    }
    else {
        document.getElementById("correctAlert").innerHTML = "<b>Incorrect!</b>";
    }
}

giveProblem();
document.getElementById("newProblem").addEventListener("click", function() {
    console.log("New problem button clicked!");
    giveProblem();
});
document.getElementById("submitAns").addEventListener("click", checkAnswer);