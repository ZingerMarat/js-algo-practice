/*
Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded,
and returns the team name with the highest number of points.
If two teams have the same number of points, return the team with the largest goal difference.
How to Calculate Points and Goal Difference
team = {name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
Goal Difference = scored - conceded = 88 - 20 = 68
Examples
*/

function champions( champions ) {
  //your code
  let teamToReturn = {}
  let highestScore = 0  

  champions.forEach(element => {
    const score = 3 * element.wins + 0 * element.loss + 1 * element.draws

    if (highestScore < score){
      teamToReturn = element
      highestScore = score
    } else if (highestScore === score) {
      if(teamToReturn.scored - teamToReturn.conceded < element.scored - element.conceded)
        teamToReturn = element
    }
  });

  return teamToReturn.name
}

console.log(champions([{"name":"Manchester City","wins":30,"loss":8,"draws":0,"scored":67,"conceded":20},{"name":"NewCastle United","wins":34,"loss":2,"draws":2,"scored":118,"conceded":36},{"name":"Leicester City","wins":34,"loss":2,"draws":2,"scored":108,"conceded":21}]));

exports.solution = champions;