class Student {
    constructor(name, section, marks) {
        this.name = name;
        this.section = section;
        this.marks = marks;
    }

    // Method to calculate percentage
    calculatePercentage() {
        let totalMarks = this.marks.reduce((sum, mark) => sum + mark, 0);
        let maxMarks = this.marks.length * 100; // assuming each subject is out of 100
        return (totalMarks / maxMarks) * 100;
    }

    
    fdetails() {
        console.log("Student name is", this.name);
        console.log("Section is", this.section);
        console.log("Percentage is", this.calculatePercentage().toFixed(2) + "%");
    }
}


const student1 = new Student("Sive", "B", [70, 95, 94, 95, 89]);


student1.fdetails();