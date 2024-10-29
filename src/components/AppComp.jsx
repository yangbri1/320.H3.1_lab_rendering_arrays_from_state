// import given Learner data -- array of Learner objects
import { dataLearner } from "../utilities/data.mjs";

// import <Learner> component to be displayed  within <AppComp> component
// Aside: Thought this not possible -- component nested in another component
//        believe typically can't but could be imported (from lecture)
import Learner from "./Learner.jsx";

// despite AppComp being the default export this could still export into App.jsx w/ 'export' prefix
// just destructure { Learner } while importing
// export function Learner(){
//     // .map() method creates a new array by applying a function/condition to old array dataLearner
//     // conventionally anonymous arrow function
//     const listLearners = dataLearner.map((student) => {
//         // let key to be student.name to rid warning in console -- normally with an unique ObjectId "_id"
//         <li key={student.name}>
//             <p><strong>`Name: `</strong> {student.name} </p>
//             <p><strong>`Bio: `</strong> {student.bio} </p>
//         </li>
        
//     });
//     return(<ul>{listLearners}</ul>);
// }

// export function Score(){
//     // implement JS array .map() method on dataLearner old array & search for learner scores' date & score
//     // here we using nameless function declaration 
//     const listScores = dataLearner.map(function(student){
//         // refer to 
//         <li key={student.name}>
//             <p>{student.scores}</p>
//         </li>
//     });
// }

// create a React functional component 
function AppComp(){
    
    return(
        // rendering <Learner> component (contains name, bio & <Score> component) within <AppComp> component 
        <>
            <Learner />

        </>
    )

}

export default AppComp;