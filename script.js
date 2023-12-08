// script.js

document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quiz-form');
    if (quizForm) {
      quizForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche la soumission du formulaire par défaut
  
        checkAnswers();
      });
    }
  });
  
  function checkAnswers() {
    const questions = document.querySelectorAll('.question-item');
    let allCorrect = true;
  
    questions.forEach((question, index) => {
      const selectedAnswer = document.querySelector(`input[name="answer-${index + 1}"]:checked`);
  
      if (selectedAnswer) {
        // Retirer les classes existantes avant d'ajouter la nouvelle classe
        question.classList.remove('correct', 'incorrect');
  
        if (selectedAnswer.value === 'true') {
          question.classList.add('correct');
        } else {
          question.classList.add('incorrect');
          allCorrect = false; // Au moins une réponse incorrecte
        }
      } else {
        allCorrect = false; // Au moins une réponse non sélectionnée
      }
    });
  
    // Afficher le panneau de félicitations si toutes les réponses sont correctes
    if (allCorrect) {
      const congratulationsPanel = document.getElementById('alert');
      if (congratulationsPanel) {
        congratulationsPanel.style.display = 'block';
        setTimeout(function () {
          congratulationsPanel.style.display = 'none';
        }, 3000); // Masquer le panneau après 3 secondes
      }
    }
  }
  