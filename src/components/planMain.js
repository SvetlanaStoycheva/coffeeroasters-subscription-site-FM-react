import React, { useState } from 'react';
import { planSteps, planQuestions } from '../utils/constants';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const PlanMain = () => {
  const [activeQuestion, setActiveQuestion] = useState(false);
  const [answerIsActive, setAnswerIsActive] = useState(false);

  const toggleActiveQuestion = () => {};

  return (
    <section className='plan-main'>
      {/* plan steps */}
      <div className='plan-main-steps'>
        {planSteps.map((item, index) => {
          return (
            <li key={index}>
              <span>{item.number}</span> {item.name}
              <hr className='line' />
            </li>
          );
        })}
      </div>
      {/* questions */}
      <div className='plan-main-questions'>
        <article className='plan-questions-container'>
          {planQuestions.map((item, index) => {
            const { question, answers } = item;
            return (
              <div className='single-question-answers-container' key={index}>
                <div className='single-plan-question'>
                  <h3>{question}</h3>
                  <span onClick={toggleActiveQuestion}>
                    {activeQuestion ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </div>
                <div className='three-answers'>
                  {answers.map((item, index) => {
                    return (
                      <div
                        className={
                          answerIsActive
                            ? ' single-plan-answer-active'
                            : ' single-plan-answer'
                        }
                        key={index}
                      >
                        <h4 className='plan-answer-title'>{item.title}</h4>
                        <p className='plan-answer-text'>{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </article>
        {/* summary */}
        <article className='summary-container'>
          <h3>order summary</h3>
          <h4>
            “I drink my coffee using <span> _____</span>, with a{' '}
            <span> _____</span> type of bean. <span> _____</span>ground ala
            <span> _____</span>, sent to me <span> _____</span>.”
          </h4>
        </article>
        <div className='plan-btn-container'>
          <button className='plan-btn btn'>Create my plan!</button>
        </div>
      </div>
    </section>
  );
};

export default PlanMain;
