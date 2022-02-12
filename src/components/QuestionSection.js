

const QuestionSection = ({handleAnswerOptionClick, currentQuestion, questions, score, showScore}) => {
  return (
    <questionSection className = 'questionSection'
    onClick = {handleAnswerOptionClick}
    currentQuestion ={currentQuestion}
    questions ={questions}
    score ={score}
    >
			{showScore ? (
				<div className='score-section'>
					You answered correctly {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.correc)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
			</questionSection>
  )
}

export default QuestionSection