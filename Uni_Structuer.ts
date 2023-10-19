class Person{
    name:string;
    constructor(name:string){
        this.name = name;
    }
}
class viceChancellor extends Person{
    constructor(name:string){
        super(name)
    }
}
class Dean extends Person{
    constructor(name:string){
        super(name)
    }
}
class Chairman extends Person{
    constructor(name:string){
        super(name)
    }
}
class Teacher extends Person{
    constructor(name:string){
        super(name)
    }
}
class Student extends Person{
    constructor(name:string){
        super(name)
    }
}
class Department{
    name:string;
    chairman:Chairman;
    teachers:Teacher[];
    constructor(name:string, chairman:Chairman, teachers:Teacher[]){
        this.name = name;
        this.chairman = chairman;
        this.teachers = teachers;
    }
}
class Group{
    name:string;
    students:Student[];
    constructor(name:string, students:Student[]){
        this.name = name;
        this.students = students;
    }
}
class Faculty{
    name:String;
    dean:Dean;
    departments:Department[];
    constructor( name:String, dean:Dean,  departments:Department[]){
        this.name = name;
        this.dean = dean;
        this.departments = departments;
    }
}
class University{
    viceChancellor: viceChancellor;
    faculties: Faculty[];
    constructor(viceChancellor:viceChancellor, faculties:Faculty[]){
        this.viceChancellor = viceChancellor;
        this.faculties = faculties;
    }
}

// Now Creating intances for the university, faculties, departments, groups, teachers, and students.
