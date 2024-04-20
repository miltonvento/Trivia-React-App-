import { useEffect, useState } from "react"
import DisplayCard from "./Card"
import Button from '@mui/material/Button';
import FeedbackSnackbar from "./Snackbar";

export default function App() {
  //Fetch Trivia Questions 
  const URL = "https://the-trivia-api.com/v2/questions"
  const [data, setData] = useState(null)
  const [questionNum, setQuestionNum] = useState(0)
  const [showSnackbar, setShowSnackbar] = useState(false)

  var answers
  var correctAnswers
 
  useEffect(() => {
      const fetchData = async() => {
        const data = await fetch(URL);
        const json = await data.json();
        setData(json)
      } 
      
      fetchData()
      .catch(console.error);
      
  },[])

  function shuffleArray(array) {
    // Loop over the array from the last element to the second
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));
        // Swap the elements at positions i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

  const handleNext = () => {
    setQuestionNum(questionNum + 1)
    answers = shuffleArray(data[questionNum].push(data[questionNum].correctAnswer))
    setShowSnackbar(true)
  }

  return (
    <>
      <div className="main-area">
        <h1 className="header"> Question {questionNum + 1}/{data?.length}</h1>

        {data && (
          <>
            <DisplayCard question={data[questionNum]?.question?.text}/>

            <div className="buttonContainer">
              {answers ? answers : shuffleArray([...data[questionNum].incorrectAnswers, data[questionNum].correctAnswer])
.map((answer, key) => (
  <>
                <Button
                  className="answerButton"
                  key={key}
                  onClick={handleNext}
                  variant="outlined"
                  size="large"
                  sx={{ width: "20em" }}
                  style={{ color: "282F38", marginBottom:"2em"}}
                >
                  {answer}
                </Button>
                {showSnackbar && <FeedbackSnackbar answer={answer == data[questionNum]} openSnackbar={true}/>}
                 </>
              ))}
            </div>
          </>
        )}
      </div>
    </>)
}