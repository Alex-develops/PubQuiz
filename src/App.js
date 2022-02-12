import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import QuestionSection from './components/QuestionSection';

const App= () => {
	const questions = [
		{
			questionText: "The first ever commercial bungee jump took place in which country?",
			answerOptions: [
				{ id: 1, answerLetter: 'a)', answerText: "South Africa", correct: false },
				{ id: 2, answerLetter: 'b)', answerText: "Australia", correct: false },
				{ id: 3, answerLetter: 'c)', answerText: "New Zealand", correct: true },
			],
		},
		{
			questionText: "When did the British children's television programme Blue Peter first air?",
			answerOptions: [
				{ id: 1, answerLetter: 'a)', answerText: "1958", correct: true },
				{ id: 2, answerLetter: 'b)', answerText: "1968", correct: false},
				{ id: 3, answerLetter: 'c)', answerText: "1978", correct: false },
			],
		},
		{
			questionText: "Where did Disney open a resort on June 16, 2016? ",
			answerOptions: [
				{ id: 1, answerLetter: 'a)', answerText: "Singapore", correct: false },
				{ id: 2, answerLetter: 'b)', answerText: "Shanghai", correct: true },
				{ id: 3, answerLetter: 'c)', answerText: "Tokyo", correct: false },
			],
		},
	];
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	

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
		<div>
		<Header/>
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
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button key = {answerOption.id} onClick={() => handleAnswerOptionClick(answerOption.correct)}>{answerOption.answerLetter} {answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		<Footer/>
		</div>
	
	);
}


export default App