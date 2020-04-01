const object = name => {
  const obj = {};
  obj.name = name;
  obj.greeting = function greeting() {
    console.log(`Hi my Name is ${obj.name}`);
  };

  return obj;
};

const Maseru = object("Maseru");
console.log(Maseru.name);
Maseru.greeting();

function Person(Name, LastName, Age, Role, Gender, Interests, Subject) {
  this.name = Name;
  this.LastName = LastName;
  this.role = Role;
  this.age = Age;
  this.gender = Gender;
  this.interests = Interests;
  this.subject = Subject;
  this.Bio = () => {
    console.log(
      `${this.name} ${this.LastName} is ${this.age} years old, and likes ${this.interests}.`
    );
  };
  this.hello = () => {
    if (
      this.gender === "Male" ||
      this.gender === "M" ||
      this.gender === "male" ||
      this.gender === "m"
    ) {
      if (this.role === "Teacher") {
        console.log(
          `Hello. My name is Mr ${this.LastName}, and I teach ${this.subject}`
        );
      } else {
        console.log(
          `Yo!! Sup!!, ${this.name} here. I'm studying ${this.subject}`
        );
      }
    } else {
      if (this.role === "Teacher") {
        console.log(
          `Hello. My name is Mrs ${this.LastName}, and I teach ${this.subject}`
        );
      } else {
        console.log(
          `Hi!! hope you guys good!!, ${this.name} here. I'm studying ${this.subject} `
        );
      }
    }
  };
}

const Daniel = new Person(
  "Daniel",
  "Kganyago",
  "20",
  "Student",
  "Male",
  ["Movies", "Code", "Music"],
  "Web Development"
);
const Mrs_Nojila = new Person(
  "Lethabo",
  "Nojila",
  "27",
  "Teacher",
  "Female",
  ["Series", "Books"],
  "Computer Networks"
);

Daniel.Bio();
Mrs_Nojila.hello();
console.log(Daniel.valueOf());
