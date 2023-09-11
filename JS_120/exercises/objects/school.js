// Create a school object. 
// The school object uses the same kind of student object as the previous exercise. 
// It has methods that use and update information about the student. 
// Be sure to check out the previous exercise for the other arguments that might be needed by the school object. 
// Implement the following methods for the school object:

// - `addStudent`: Adds a student by creating a new student
// and adding the student to a collection of students. The method adds a
// constraint that the year can only be any of the following values:
//  `'1st'`, `'2nd'`, `'3rd'`, `'4th'`, or `'5th'`. 
//  Returns a student object if year is valid otherwise it logs "Invalid Year".
// - `enrollStudent`: Enrolls a student in a course.
// - `addGrade`: Adds the grade of a student for a course.
// - `getReportCard`: Logs the grades of a student for all courses. If the course has no grade, 
//     it uses "In progress" as the grade.
// - `courseReport`: Logs the grades of all students for a given course name. 
//     Only student with grades are part of the course report.

// To test your code, use the three student objects listed below. 
// Using the three student objects, produce the following values from the 
// getReportCard and courseReport methods respectively.

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects.

// foo;
// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

// bar;
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

// qux;
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }

// > school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

// > school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

// > school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

// > school.courseReport('Physics');
// = undefined

// we need the createStudent object from the previous exercise


function createStudent(name, year) {
  return  {
    name: name,
    year: year,
    courses: [],

    info: function() {
      console.log(`${this.name} is a ${this.year} year student`)
    },

    listCourses: function() {
      return this.courses
    }, 

    addCourse: function(course) {
      this.courses.push(course)
    },

    addNote: function(courseCode, note) {
      // console.log(this.courses)
      let course = this.courses.filter(el => {
        return el.code === courseCode;
      })[0];

      if (course) { // have to mutate the course object
        if (course.note) {
          course.note += `; ${note};`
        } else {
          course.note = note;
        }
      }
      // console.log(this.courses);
    },

    viewNotes: function() {
      this.courses.forEach((course) => {
        if(course.note) {
          console.log(`${course.name}, ${course.note}`)
        }
      });
    },

    updateNote: function(courseCode, note) {
      let course = this.courses.filter(el => {
        return el.code === courseCode;
      })[0];

      if (course) { // have to mutate the course object again 
          course.note = note;
        }
    }
  }
}

// now we can create the school object:

let school = {
  students: [],

  addStudent: function(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      let student = createStudent(name, year);
      this.students.push(student);
      return student; 
    } else {
      console.log('Invalid Yeat');
    }
  },

  enrollStudent: function(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode})
  },

  addGrade: function(student, courseName, grade) {
    let course = student.listCourses().filter(course => {
      return course.name === courseName;
    })[0];

    if (course) {
      course.grade = grade
    }
  },

  getReportCard: function(student) {
    student.listCourses().forEach(course => {
      if (course.grade) {
        console.log(`${course.name} : ${String(course.grade)}`);
      } else {
        console.log(`${course.name} : In Progress`);
      }
    })
    console.log('');
  },

  courseReport: function(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().filter(course => {
        return course.name === courseName;
      })[0];
    }

    let courseStudents = this.students.map(student => {
      let course = getCourse(student, courseName) || {grade : undefined };
      return {name: student.name, grade: course.grade };
    }).filter(student => student.grade);

    if (courseStudents.length > 0) {
      console.log(`= ${courseName} Grades=`);

      let average = courseStudents.reduce((total, student) => {
        console.log(`${student.name} : ${String(student.grade)}`);
        return total + student.grade;
      }, 0) / courseStudents.length;

      console.log('---');
      console.log(`Course Average: ${String(average)}`);
      console.log('');
    }
  },
}
let foo = school.addStudent('Foo', '3rd');
school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);

let bar = school.addStudent('bar', '1st');
let qux = school.addStudent('qux', '2nd');

school.enrollStudent(qux, 'Math', 101);
school.enrollStudent(qux, 'Advanced Math', 102);
school.enrollStudent(bar, 'Math', 101);


school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);

school.addGrade(bar, 'Math', 91);
school.addGrade(qux, 'Math', 93);
school.addGrade(qux, 'Advanced Math', 90);

school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

school.courseReport('Physics');
// = undefined
