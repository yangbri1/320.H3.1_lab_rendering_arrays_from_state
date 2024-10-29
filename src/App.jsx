// https://stackoverflow.com/questions/52428879/objects-are-not-valid-as-a-react-child-if-you-meant-to-render-a-collection-of-c

// import useState() hook from React library (like many other hooks -- exceptions: useImmer() & userReducer())
import { useState } from 'react'

// import styling for React app 
import './App.css'

// import given learner data -- destructure "dataLearner" directly from props (so no need to constantly props.dataLearner later)
// import { dataLearner } from '../src/utilities/data.mjs';

// import AppComp from './components/AppComp.jsx';
// import Learner from './components/Learner.jsx';
// import Score from './components/Score.jsx';


// given database 
const dataLearner =[
  {
    name: 'Cait Yomorta',
    bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
    scores: [
      {
        date: '2018-02-08',
        score: 77
      },
      {
        date: '2018-04-22',
        score: 92
      },
      {
        date: '2018-09-15',
        score: 68
      }
    ]
  },
  {
    name: 'Holly Baird',
    bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
    scores: [
      {
        date: '2018-12-14',
        score: 88
      },
      {
        date: '2019-01-09',
        score: 79
      },
      {
        date: '2019-02-23',
        score: 91
      },
      {
        date: '2019-03-01',
        score: 95
      }
    ]
  },
  {
    name: 'Wes Mungia',
    bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
    scores: [
      {
        date: '2018-10-11',
        score: 62
      },
      {
        date: '2018-11-24',
        score: 74
      },
      {
        date: '2018-12-19',
        score: 85
      }
    ]
  }
];

function Learner({ dataLearner }){
  const learnerJSX = dataLearner.map((learner) => {
    return(
      <div>
        <h1>{dataLearner[0].name}</h1>
        <h2>{dataLearner.bio}</h2>
      </div>
    )
  });

  return(<div>{learnerJSX}</div>)
  
}

// root App component
function App() {


  // const [count, setCount] = useState(0)
  // Unsure: I believe this counts as wrapping the dataLearner array with an object container & not destructuring?
  const [learners, setLearners] = useState(dataLearner)

  return (
    // renders <AppComp> component which renders <Learner> and <Score> components within
    <>
      <h2>Learners Assemble!</h2>
      {/* <AppComp /> */}
      {/* <Learner />
      <Score /> */}
      
      <Learner />
      {/* <h1>{dataLearner.name}</h1>
      <h2>{dataLearner.bio}</h2> */}
      
    
      
    </>
  )
}

// export root App component as default export
export default App
