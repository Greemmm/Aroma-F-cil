document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const isActive = question.classList.contains('active');

    // Close all open answers
    document.querySelectorAll('.faq-question').forEach(q => {
      q.classList.remove('active');
      q.nextElementSibling.style.maxHeight = null;
    });

    if (!isActive) {
      // Open the clicked question
      question.classList.add('active');
      const answer = question.nextElementSibling;
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
