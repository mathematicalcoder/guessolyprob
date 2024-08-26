const problems = [
    {
        "problem": "Turbo the snail plays a game on a board with $2024$ rows and $2023$ columns. There are hidden monsters in $2022$ of the cells. Initially, Turbo does not know where any of the monsters are, but he knows that there is exactly one monster in each row except the first row and the last row, and that each column contains at most one monster.<br><br>Turbo makes a series of attempts to go from the first row to the last row. On each attempt, he chooses to start on any cell in the first row, then repeatedly moves to an adjacent cell sharing a common side. (He is allowed to return to a previously visited cell.) If he reaches a cell with a monster, his attempt ends and he is transported back to the first row to start a new attempt. The monsters do not move, and Turbo remembers whether or not each cell he has visited contains a monster. If he reaches any cell in the last row, his attempt ends and the game is over.<br><br>Determine the minimum value of $n$ for which Turbo has a strategy that guarantees reaching the last row on the $n$-th attempt or earlier, regardless of the locations of the monsters.",
        "contest": "IMO",
        "iteration": "2024",
        "problemNo": "5"
    },
    {
        "problem": "Tasyo is thinking of a two digit number. He tells Basilio the tens digit and Crispin the ones digit, and challenges them to guess the number. Their conversation goes as follows:<br>Crispin: I know the number is not prime.<br>Tasyo: Correct, it is divisible by 3.<br>Basilio: Now I know what the number is.<br>What digit did Tasyo tell Crispin?",
        "contest": "PMO Qualifying",
        "iteration": "2024",
        "problemNo": "III.2"
    }
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
    document.getElementById("problem").innerHTML = problems[index]["problem"];

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