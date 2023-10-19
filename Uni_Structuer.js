class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class viceChancellor extends Person {
    constructor(name) {
        super(name);
    }
}
class Dean extends Person {
    constructor(name) {
        super(name);
    }
}
class Chairman extends Person {
    constructor(name) {
        super(name);
    }
}
class Teacher extends Person {
    constructor(name) {
        super(name);
    }
}
class Student extends Person {
    constructor(name) {
        super(name);
    }
}
class Department {
    name;
    chairman;
    teachers;
    constructor(name, chairman, teachers) {
        this.name = name;
        this.chairman = chairman;
        this.teachers = teachers;
    }
}
class Group {
    name;
    students;
    constructor(name, students) {
        this.name = name;
        this.students = students;
    }
}
class Faculty {
    name;
    dean;
    departments;
    constructor(name, dean, departments) {
        this.name = name;
        this.dean = dean;
        this.departments = departments;
    }
}
class University {
    viceChancellor;
    faculties;
    constructor(viceChancellor, faculties) {
        this.viceChancellor = viceChancellor;
        this.faculties = faculties;
    }
}
export {};
// Now Creating intances for the university, faculties, departments, groups, teachers, and students.
