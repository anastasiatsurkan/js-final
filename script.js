// sarcina 1
/*const marks = [5, 1, 9, 6, 1, 5];

const newMarks = [];

marks.forEach(value => {
    if (!newMarks.includes(value)) {
        newMarks.push(value);
    }
    return newMarks;
});

console.log(newMarks(5));*/

// sarcina 2
const students = [
    {
        firstName: "Kate",
        subjects: [
            {
              name: "mathematics", 
              marks: [ 8, 7, 9]  
            },

            {
                name: "english", 
                marks: [ 7, 10, 9]  
              },

              {
                name: "geography", 
                marks: [ 10, 9, 10]  
              },  
        ]
        
    },

    {
        firstName: "Anne",
        subjects: [
            {
              name: "mathematics", 
              marks: [ 6, 7, 5]  
            },

            {
                name: "english", 
                marks: [ 5, 5, 9]  
              },

              {
                name: "geography", 
                marks: [ 8, 6, 7]  
              },  
        ]
        
    },

    {
        firstName: "Laura",
        subjects: [
            {
              name: "mathematics", 
              marks: [ 6, 7, 8]  
            },

            {
                name: "english", 
                marks: [ 8, 10, 10]  
              },

              {
                name: "geography", 
                marks: [ 9, 9, 8]  
              },  
        ]
        
    },
];

console.log(students.firstName);

