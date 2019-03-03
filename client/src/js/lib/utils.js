// Container for utils
const utils = {};

// Convert live matches array to an object
utils.mapStudentData = (students) => {
  return students && students.reduce((acc, student) => {
    acc[student.id] = student;
    return acc;
  }, {});   
};

export default utils;