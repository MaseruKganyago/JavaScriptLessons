class Human {
  constructor(Name, LastName, Age, Gender, Interests) {
    this.name = {
      first: Name,
      last: LastName
    };
    this.age = Age;
    this.gender = Gender;
    this.interests = Interests;
  }

  bio = () => {
    const { first, last } = this.name;
    let string = first + " " + last + " is " + this.age + " years old. ";

    let pronoun;

    //Checks for gender, and determines pronuon to add on string
    if (
      this.gender === "Male" ||
      this.gender === "M" ||
      this.gender === "male" ||
      this.gender === "m"
    ) {
      pronoun = "He likes";
    } else if (
      this.gender === "Female" ||
      this.gender === "F" ||
      this.gender === "female" ||
      this.gender === "f"
    ) {
      pronoun = "She likes";
    } else {
      pronoun = "They like";
    }

    string += pronoun;

    //Arranges the interests, depending on their number.
    if (this.interests.length === 1) {
      string += `${this.interests} .`;
    } else if (this.interests.length === 2) {
      string += `${this.interests[0]} and ${this.interests[1]}.`;
    }

    for (let i = 0; i <= this.interests.length - 1; i++) {
      if (i === this.interests.length - 1) {
        string += `and ${this.interests[i]}.`;
      } else {
        string += `, ${this.interests[i]}`;
      }
    }

    console.log(string);
  };
}

class Teacher extends Human {
  constructor(Name, LastName, Age, Gender, Interests, Subject) {
    super(Name, LastName, Age, Gender, Interests);
    this.subject = Subject;
  }
}

const CoolTeacher = new Teacher(
  "Maseru",
  "Kganyago",
  20,
  "Male",
  ["Code", "Movies"],
  "Web Development"
);

console.log(CoolTeacher.bio());
