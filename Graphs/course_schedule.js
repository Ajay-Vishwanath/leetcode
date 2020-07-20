//topological sort solution
var canFinish = function (numCourses, prerequisites) {
  const prerequisiteCounter

  //counts how many prerequisites each course needs
  for (let i = 0; i < prerequisites.length; i++) {
    const course = prerequisites[i][0];
    prerequisiteCounter[course]++;
  }

  let stack = [];

  //pushes to the stack courses that don't need a prerequisite
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
      //that prerequisite course has now been taken
      if (prerequisites[i][1] === current) {
        prerequisiteCounter[prerequisites[i][0]]--;
        if (prerequisiteCounter[prerequisites[i][0]] === 0) {
          stack.push(prerequisites[i][0]);
        }
      }
    }
  }

  //you were able to take numcourses
  return counter === numCourses;
};
