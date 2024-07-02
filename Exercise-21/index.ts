// 21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface itCourse {
  name: string;
  location: string;
  onSiteStudents: number;
}

let itCourse = {
  name: "TypeScript, Node.js",
  location: "Governor house sindh",
  onSiteStudents: 50000,
};
console.log(itCourse);
