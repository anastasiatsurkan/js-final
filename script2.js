// sarcina 2
const students = [
    {
        firstName: "Kate",
        subjects: [
            {
                name: "mathematics",
                marks: [8, 7, 9]
            },

            {
                name: "english",
                marks: [7, 10, 9]
            },

            {
                name: "geography",
                marks: [10, 9, 10]
            },
        ]
    },
    {
        firstName: "Anne",
        subjects: [
            {
                name: "mathematics",
                marks: [6, 7, 5]
            },

            {
                name: "english",
                marks: [5, 5, 9]
            },

            {
                name: "geography",
                marks: [8, 6, 7]
            },
        ]
    },
    {
        firstName: "Laura",
        subjects: [
            {
                name: "mathematics",
                marks: [6, 7, 8]
            },

            {
                name: "english",
                marks: [8, 10, 10]
            },

            {
                name: "geography",
                marks: [9, 9, 8]
            },
        ]
    },
];

students.forEach(student => {
    student.subjects.forEach(subject => {
        let sum = 0;

        subject.marks.forEach(mark => {
            sum += mark;
        });
        subject.averageMark = sum / subject.marks.length;
    });
});

students.forEach(student => {
    let sum = 0;

    student.subjects.forEach(subject => {
        sum += subject.averageMark;
    });

    student.averageMark = sum / student.subjects.length;
});

let sum = 0;

students.forEach(student => {
    sum += student.averageMark;
});

console.log("Average mark = ", sum / students.length);

//students.forEach(student => {
   // console.log(student);

//});

