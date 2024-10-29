// import given Learner data -- array of Learner objects
import { dataLearner } from "../utilities/data.mjs";

// import <Score> component to be used in formatting (and then render?) in <Learner> component
import Score from "./Score.jsx";

// creating React function component -- user defined components must be Capitalized in React otw not detected
export default function Learner(){
    // .map() method creates a new array by applying a function/condition to old array dataLearner
    // conventionally anonymous arrow function
    const listLearners = dataLearner.map((student) => {
        // let key to be student.name to rid warning in console -- normally with an unique ObjectId "_id"
        <li key={student.name}>
            <p><strong>Name: </strong> {student.name} </p>
            <p><strong>Bio: </strong> {student.bio} </p>
        </li>
        // <strong> tag w/ backticks probably should be wrapped with {}? in .jsx
        // https://stackoverflow.com/questions/70574941/add-strong-tag-within-jsx-with-backticks#:~:text=%7B%20%60Your%20list%20contains%20%60%7D%20%3Cstrong%3E%7BArray.length%7D%20%3C%2Fstrong%3E%20%7B%60row%28s%29.%60%7D,a%20backtick%20will%20be%20translated%20into%20a%20string.
    
    });
    return(
        // rendering <Score> component within 
        <ul>
            {listLearners}
            <Score />
        </ul>);
}

// export default Learner; // "export default" prefix already added to Learner() function above