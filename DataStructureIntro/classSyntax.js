class Student {
	constructor(fname, lname, year) {
		this.fname = fname;
		this.lname = lname;
		this.year = year;
	}
	fullName() {
		return `Name: ${this.fname} ${this.lname}`;
	}
	// insttances dont have access to statis methods
	static enrollStudents(...students) {
		return `enrlling students`;
	}
}
const nav = new Student('naveed', 'wani', 1998);
const res = nav.fullName();
console.log(res);

// you call it on class itself and not on instances
//  these are used in utililty methods.
Student.enrollStudents();
// remember => functions dont have access to this keyboard.
