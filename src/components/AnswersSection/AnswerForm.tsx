// components/AnswerForm.js
'use client'
import { useState } from 'react';
import CommentSectionArea from '../commonLayouts/CommentSectionArea';
import custom from '../custom.module.css'

function AnswerForm() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [newAnswer, setNewAnswer] = useState<string>('');

  const handleAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewAnswer(event.target.value);
  };

  const handleAddAnswer = () => {
    if (newAnswer.trim() !== '') {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer('');
    }
  };

  return (
    <div>
     <div>
        {answers.map((answer, index) => (
            <div className={custom.answerSection} style={{marginTop:'1rem', marginBottom:'1rem'}}>
          <div className={custom.answer} key={index}>{answer}</div>
          <CommentSectionArea />
          </div>
        ))}
      </div>

      <div className={custom.answerSection} style={{marginTop:'1rem', marginBottom:'1rem'}}>
          <div className={custom.answer}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo rerum quaerat repellat, velit rem nostrum quod consectetur iure deleniti quae dolorum, cupiditate molestias eligendi nam.</div>
          <CommentSectionArea />
          </div>
          <div className={custom.answerSection} style={{marginTop:'1rem', marginBottom:'1rem'}}>
          <div className={custom.answer}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo rerum quaerat repellat, velit rem nostrum quod consectetur iure deleniti quae dolorum, cupiditate molestias eligendi nam.</div>
          <CommentSectionArea />
          </div>
          <div className={custom.answerSection} style={{marginTop:'1rem', marginBottom:'1rem'}}>
          <div className={custom.answer}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo rerum quaerat repellat, velit rem nostrum quod consectetur iure deleniti quae dolorum, cupiditate molestias eligendi nam.</div>
          <CommentSectionArea />
          </div>
      <textarea className={custom.textArea} value={newAnswer} onChange={handleAnswerChange} rows={6}  placeholder="Enter your answer here" />
     
      <button className={`${custom.button} ${custom.button1}`}  onClick={handleAddAnswer}>Post your answer</button>
     
    </div>
  );
}

export default AnswerForm;
