const currentyear = document.querySelector("#currentyear");

const today = new Date();
currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open"); 
});

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

let myCourses = document.querySelector(".courseArea");
let card = document.querySelector("#courseCard");

showCourses(courses);

const allCourses = document.querySelector("#allButton");
const cseButton = document.querySelector("#cseButton");
const wddButton = document.querySelector("#wddButton");

allCourses.addEventListener("click", () =>{
    showCourses(courses)
});

cseButton.addEventListener("click", () =>{
    let cseCourses = courses.filter(course => course.subject == "CSE")
    showCourses(cseCourses)
});
wddButton.addEventListener("click", () =>{
    let wddCourses = courses.filter(course => course.subject == "WDD")
    showCourses(wddCourses)
});

const aCourse = document.querySelectorAll(".courseCard");

aCourse.forEach((course, index) => {
    if (courses[index] && courses[index].completed === false) {
        course.style.backgroundColor = "cyan";
    }
});


let numCredits = document.querySelector("#numCredits");

const totalCredits = courses.reduce((acc, credit) => {
    return acc + credit.credits;
}, 0);

numCredits.innerHTML = totalCredits;

function showCourses(filteredCourses) {
    myCourses.innerHTML = "";
    filteredCourses.forEach((course) => {
        const cards = document.createElement("section");
        cards.className = "courseCard";
        cards.innerHTML = `<h3>${course.subject} ${course.number}</h3>`;

        cards.addEventListener("click", () => {
            displayCourseInfo(course);
        });
        myCourses.appendChild(cards);
    });
};

const dialog = document.querySelector('dialog');
const courseInfoArea = document.querySelector("#courseInfo");
const closeButton = document.querySelector("#close");

function displayCourseInfo(course) {
    courseInfoArea.innerHTML = "";
    courseInfoArea.innerHTML = `
    <h2>${course.subject} ${course.number}</h2>
    <p>${course.title}</p>
    <p>${course.credits} credits</p>
    <p>Certificate: ${course.certificate}</p>
    <p>${course.description}</p>
    <p>Technology: ${course.technology.join(", ")}</p>
    `;
    dialog.showModal();

    closeButton.addEventListener('click', () => {
        dialog.close();
    });
}