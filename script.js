function checkQuiz() {

    // Student Name
    let studentName = document.getElementById("studentName").value.trim();

    if(studentName === ""){
        alert("Please enter your name.");
        return;
    }

    // Correct Answers
    const answers = {
        q1: "HTML",
        q2: "CSS",
        q3: "JavaScript",
        q4: "Hyper Text Markup Language",
        q5: "Cascading Style Sheets"
    };

    let score = 0;
    let total = 5;

    // Check Answers
    for(let i = 1; i <= total; i++){

        let selected = document.querySelector(`input[name="q${i}"]:checked`);

        if(selected == null){
            alert("Please answer all questions.");
            return;
        }

        if(selected.value === answers["q"+i]){
            score++;
        }
    }

    // Show Result
    let result = document.getElementById("result");

    result.innerHTML = `
        <h2>Quiz Completed</h2>
        <p><strong>Student:</strong> ${studentName}</p>
        <p><strong>Score:</strong> ${score} / ${total}</p>
        <p><strong>Correct:</strong> ${score}</p>
        <p><strong>Wrong:</strong> ${total-score}</p>
    `;

    // Scroll to Result
    result.scrollIntoView({
        behavior: "smooth"
    });
}