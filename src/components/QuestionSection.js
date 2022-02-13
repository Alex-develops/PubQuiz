import {useState, useEffect} from 'react';
import "../index.css"


const QuestionSection = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    
	
    
    
    useEffect(() => {
        const getQuestions = async () => {
            const questionsFromServer = await fetchQuestions()
            setQuestions(questionsFromServer)
        }

        getQuestions()
    }, [])
    //Fetch questions 
    const fetchQuestions = async () => {
        const res = await fetch ('http://localhost:5000/questions');
        const data = await res.json();
        
        return data 
    }
    
    const handleAnswerOptionClick = (correct) => {
		if (correct) {
            setScore(score + 1);
		}
		

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
  return (
    <questionSection>
    <div className='questionSection'>
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion]?.questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion]?.answerOptions.map((answerOption) => (
                            <button 
                            key = {answerOption.id} 
                            onClick={() => {
                            handleAnswerOptionClick(answerOption.correct);
                            
                            }}>
                            {answerOption.id} {answerOption.answerText}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    </questionSection>
  )
}

export default QuestionSection