
//A wolf in sheep's clothing

function warnTheSheep(queue) {
let orderedQueue = queue.reverse();
  for (let i = 0; i < queue.length; i++) {
    if (orderedQueue[0] === "wolf")
      return "Pls go away and stop eating my sheep";
    else
      return `Oi! Sheep number ${orderedQueue.indexOf(
        "wolf"
      )}! You are about to be eaten by a wolf!`;
  }
}