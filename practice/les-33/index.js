// les-33

const btnQuote = document.querySelector('#generateQuotes');
const quoteText = document.querySelector('#quote');

function getRandomNumber (min, max) {
  return (Math.random() * (max - min) + min).toFixed();
}

function clickHandler () {
  const randomIndex = getRandomNumber(0, 15)
  const quotes = fetch("https://type.fit/api/quotes")
  .then((res) => res.json())
  .then((res) => renderQuote(res[randomIndex].text))
}

function renderQuote (text) {
  quoteText.textContent = text;
}

btnQuote.addEventListener('click', clickHandler);

// ===================================================

// С ниже приведенным объектом решить следующие задачи:
// 1. Создать строку из названий предметов написанных через запятую
// 2. Подсчитать общее количество студентов и учителей на всех предметах
// 3. Получить среднее количество студентов на всех предметах
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на
// факультете от большего к меньшему

const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};

const subjectsStringItemName = Object.keys(subjects).join(", ");
const totalSubjects = Object.keys(subjects).length;
console.log(subjectsStringItemName, totalSubjects);

let totalNumberOfStudents = 0;
let totalNumberOfTeachers = 0;

for (let quantity in subjects) {
  totalNumberOfStudents += subjects[quantity].students;
  totalNumberOfTeachers += subjects[quantity].teachers;
}

console.log(totalNumberOfStudents);
console.log(totalNumberOfTeachers);

const getAverageNumberOfStudentsInAllSubjects = () =>
  totalNumberOfStudents / totalSubjects;
const averageNumberOfStudents = getAverageNumberOfStudentsInAllSubjects();
console.log(averageNumberOfStudents);

const subjectsArray = Object.entries(subjects).map(
  ([subject, { students, teachers }]) => ({ subject, students, teachers })
);
console.log(subjectsArray);

const sortedSubjectsArray = subjectsArray.sort((a, b) => b.teachers - a.teachers);
console.log(sortedSubjectsArray);