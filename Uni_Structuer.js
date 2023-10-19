class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    ;
}
;
class viceChancellor extends Person {
    constructor(name) {
        super(name);
    }
    ;
}
;
class Dean extends Person {
    constructor(name) {
        super(name);
    }
    ;
}
;
class Chairman extends Person {
    constructor(name) {
        super(name);
    }
    ;
}
;
class Teacher extends Person {
    constructor(name) {
        super(name);
    }
    ;
}
;
class Student extends Person {
    constructor(name) {
        super(name);
    }
    ;
}
;
class Department {
    name;
    chairman;
    teachers;
    constructor(name, chairman, teachers) {
        this.name = name;
        this.chairman = chairman;
        this.teachers = teachers;
    }
    ;
}
;
class Group {
    name;
    students;
    constructor(name, students) {
        this.name = name;
        this.students = students;
    }
    ;
}
;
class Faculty {
    name;
    dean;
    departments;
    constructor(name, dean, departments) {
        this.name = name;
        this.dean = dean;
        this.departments = departments;
    }
    ;
}
;
class University {
    viceChancellor;
    faculties;
    constructor(viceChancellor, faculties) {
        this.viceChancellor = viceChancellor;
        this.faculties = faculties;
    }
    ;
}
;
// Now Creating intances for the university, faculties, departments, groups, teachers, and students.
const ViceChancellor = new viceChancellor('Main Sajid');
const TextileEngineeringChairman = new Chairman('Prof. Ali Khan');
const AppliedScienceChairman = new Chairman('Prof. Dr. Aftab Ali');
const textileEngineeringDepartment = new Department('TextileEngineering', TextileEngineeringChairman, [
    new Teacher('Raza Ali'),
    new Teacher('Prof. Tariq Ansari'),
    new Teacher('Prof. Asghar Ali'),
    new Teacher('Prof. Ahmed Raza'),
]);
const appliedScienceDepartment = new Department('AppliedScience', AppliedScienceChairman, [
    new Teacher('Dr. Prof. Nadeem Ali'),
    new Teacher('Prof. Tariq Butt'),
    new Teacher('Dr. Naveed Ali'),
    new Teacher('Prof. Ahmed Raza'),
]);
const NTUFaculty = new Faculty('Faculty of NTU', new Dean('Dr. Athar Ansari'), [textileEngineeringDepartment, appliedScienceDepartment]);
const NTUGroup121 = new Group('121-Nt-NTU', [
    new Student('Mr. Shan Ali'),
    new Student('Mr. Shah Nawaz'),
    new Student('Mr. Wassem Khan'),
    new Student('Mr. Shahid'),
]);
const NTUGroup122 = new Group('122-Nt-NTU', [
    new Student('Mr. Ali Hamza'),
    new Student('Mr. Nawaz Jutt'),
    new Student('Mr. Hamid Khan'),
    new Student('Mr. Faisal Shahid'),
]);
const university = new University(ViceChancellor, [NTUFaculty]);
// Console the provided information.
console.log('Name of University:', university.viceChancellor.name);
console.log('Name of Faculties:', university.faculties.map((faculty) => faculty.name));
console.log('Array/List of Department Name:');
university.faculties.forEach((faculty) => {
    faculty.departments.forEach((department) => {
        console.log(department.name);
    });
});
console.log('Name of Vice Chancellor:', university.viceChancellor.name);
console.log('Name of All Deans:');
university.faculties.forEach((faculty) => {
    console.log(faculty.dean.name);
});
console.log('Name of All Chairmans:');
university.faculties.forEach((faculty) => {
    faculty.departments.forEach((department) => {
        console.log(`${department.name} Chairman:`, department.chairman.name);
    });
});
console.log('Name of All Teachers:');
university.faculties.forEach((faculty) => {
    faculty.departments.forEach((department) => {
        department.teachers.forEach((teacher) => {
            console.log(`${department.name} Teacher:`, teacher.name);
        });
    });
});
console.log('Name of All Students:');
console.log('121-Nt-NTU Students:', NTUGroup121.students.map((student) => student.name));
console.log('122-Nt-NTU Students:', NTUGroup122.students.map((student) => student.name));
export {};
