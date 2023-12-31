document.addEventListener("DOMContentLoaded", function() {
  const letterToSantaElement = document.getElementById("letterToSanta");

  let greeting = "Добрый дедушка Мороз!\n\n";
  let dreamsAndGoals = "Хочу поделиться с вами своими мечтами и целями на год 2024:\n";
  dreamsAndGoals += "- Изучить новые технологии и стать неплохим спецом Frontend Developer;\n";
  dreamsAndGoals += "- Разработать свой собственный веб-проект, который будет полезен многим людям;\n";
  dreamsAndGoals += "- Прокачать свои навыки в TeachMeSkills;\n";
  dreamsAndGoals += "- Получить сертификат Front End разработчик от TeachMeSkills;\n";
  dreamsAndGoals += "- Прочитать пуру книг, надеюсь 😉 по программированию;\n";
  dreamsAndGoals += "- Совершить путешествие в страну с высоким уровнем IT-индустрии;\n";
  dreamsAndGoals += "- Улучшить свои коммуникативные навыки и улучшить Английский язык;\n";
  dreamsAndGoals += "- Уделить больше времени здоровью и физической активности;\n";
  dreamsAndGoals += "- Найти свою первую работу в сфере IT.\n\n";
  let conclusion = "Спасибо, дедушка Мороз, за ваше внимание. Желаю вам удачи в новом году и до встречи!\n\n";
  let letterToSanta = greeting + dreamsAndGoals + conclusion;
  letterToSantaElement.innerText = letterToSanta;
});

document.addEventListener("DOMContentLoaded", function() {
  const snowflakeContainer = document.getElementById("snowflakes-container");

  for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      snowflakeContainer.appendChild(snowflake);
  }
});