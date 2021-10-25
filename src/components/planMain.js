import React, { useState } from 'react';
import { planSteps, planQuestions } from '../utils/constants';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const PlanMain = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeAnswerIndex, setActiveAnswerIndex] = useState(null);
  const [property_01, setProperty_01] = useState('');
  const [property_02, setProperty_02] = useState('');
  const [property_03, setProperty_03] = useState('');
  const [property_04, setProperty_04] = useState('');
  const [property_05, setProperty_05] = useState('');

  const toggleActiveQuestion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else setActiveIndex(index);
  };

  const handleChoosenAnswer = (index) => {
    setActiveAnswerIndex(index);

    let name = planQuestions.find((item) => item.id - 1 === activeIndex);
    name = name.answers.find((answ) => answ.id - 1 === index).title;
    // console.log(name);
    if (activeIndex === 0) {
      setProperty_01(name);
    } else if (activeIndex === 1) {
      setProperty_02(name);
    } else if (activeIndex === 2) {
      setProperty_03(name);
    } else if (activeIndex === 3) {
      setProperty_04(name);
    } else if (activeIndex === 4) {
      setProperty_05(name);
    }
  };

  const handleCreatePlan = () => {
    console.log('click');
  };

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
                  <span onClick={() => toggleActiveQuestion(index)}>
                    {activeIndex === index ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </div>
                <div
                  className={
                    activeIndex === index
                      ? 'three-answers'
                      : 'three-answers-hidden'
                  }
                >
                  {answers.map((item, index) => {
                    return (
                      <div
                        onClick={() => handleChoosenAnswer(index)}
                        className={
                          activeAnswerIndex === index
                            ? 'single-plan-answer-active'
                            : 'single-plan-answer'
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
            “I drink my coffee using{'  '}
            <span> {property_01 ? property_01 : '_____'}</span>, with a{' '}
            <span> {property_02 ? property_02 : '_____'}</span> type of bean.{' '}
            <span> {property_03 ? property_03 : '_____'}</span> ground ala
            <span> {property_04 ? property_04 : '_____'}</span>, sent to me{' '}
            <span> {property_05 ? property_05 : '_____'}</span>.”
          </h4>
        </article>
        <div className='plan-btn-container'>
          <button
            onClick={handleCreatePlan}
            disabled={
              !property_01 ||
              !property_02 ||
              !property_03 ||
              !property_04 ||
              !property_05
            }
            className={
              property_01 &&
              property_02 &&
              property_03 &&
              property_04 &&
              property_05
                ? 'btn'
                : 'plan-btn'
            }
          >
            Create my plan!
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlanMain;
