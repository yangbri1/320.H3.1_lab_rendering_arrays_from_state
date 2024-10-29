// import given Learner data -- array of Learner objects
import { dataLearner } from "../utilities/data.mjs";

// // create React functional component
// function Score(dataLearner){
//     // iterate via array of Learner objects
//     const learnerScores = dataLearner.map((learner) => (
//         // set learner's name as key
//         // create component Learner (closing tag)
//         <li key={learner.name}>
//             <Learner learner={learner} />
//         </li>
//     ))
// }

function Score(){
    // implement JS array .map() method on dataLearner old array & search for learner scores' date & score
    // here we using nameless function declaration 
    const listScores = dataLearner.map(function(student){
        // refer to dataLearner array collection & dot notation call for respective values
        <li key={student.name}>
            <p>{student.scores.date}</p>
            <p>{student.scores.score}</p>
        </li>
    });
    return(<ul>{listScores}</ul>);  // unsure if this way renders score's "date" & "score" properties already or below needed
    // return(<Score />);           // to render Score component
}

export default Score;