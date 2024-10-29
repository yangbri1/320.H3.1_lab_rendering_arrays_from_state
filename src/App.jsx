// https://stackoverflow.com/questions/52428879/objects-are-not-valid-as-a-react-child-if-you-meant-to-render-a-collection-of-c

// import useState() hook from React library (like many other hooks -- exceptions: useImmer() & userReducer())
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// import styling for React app 
import './App.css'

// import given learner data -- destructure "dataLearner" directly from props (so no need to constantly props.dataLearner later)
import { dataLearner } from '../src/utilities/data.mjs';

import AppComp from './components/AppComp.jsx';

// root App component
function App() {

  
  // const [count, setCount] = useState(0)
  // Unsure: I believe this counts as wrapping the dataLearner array with an object container & not destructuring?
  const [learners, setLearners] = useState(dataLearner)

  return (
    // renders <AppComp> component which renders <Learner> and <Score> components within
    <>
      <h2>Learners Assemble!</h2>
      <AppComp />

      <ul>
        <li key={learners.name}>
          {learners.name}
        </li>
      </ul>
    
      
    </>
  )
}

// export root App component as default export
export default App
