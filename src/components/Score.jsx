// import given Learner data -- array of Learner objects
import { dataLearner } from "../utilities/data.mjs";

// create React functional component
function Score(dataLearner){
    // iterate via array of Learner objects
    const learnerScores = dataLearner.map((learner) => (
        // set learner's name as key
        // create component Learner (closing tag)
        <li key={learner.name}>
            <Learner learner={learner} />
        </li>
    ))
}


export default Score;