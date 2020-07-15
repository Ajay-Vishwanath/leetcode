//topological sort solution
var canFinish = function (numCourses, prerequisites) {
  const prerequisiteCounter = new Array(numCourses).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    const course = prerequisites[i][0];
    prerequisiteCounter[course]++;
  }

  let stack = [];

  for (let i = 0; i < prerequisiteCounter.length; i++) {
    if (prerequisiteCounter[i] === 0) {
      stack.push(i);
    }
  }

  let counter = 0;

  while (stack.length > 0) {
    const current = stack.pop();
    counter++;

    for (let i = 0; i < prerequisites.length; i++) {
      if (prerequisites[i][1] === current) {
        prerequisiteCounter[prerequisites[i][0]]--;
        if (prerequisiteCounter[prerequisites[i][0]] === 0) {
          stack.push(prerequisites[i][0]);
        }
      }
    }
  }

  return counter === numCourses;
};
