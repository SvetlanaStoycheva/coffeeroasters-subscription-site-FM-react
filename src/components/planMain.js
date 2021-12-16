import React, { useState } from 'react';
import { planSteps, planQuestions } from '../utils/constants';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaTimes } from 'react-icons/fa';

const PlanMain = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeStepIndex, setActiveStepIndex] = useState(null);
  const [activeAnswerIndex, setActiveAnswerIndex] = useState(null);
  const [property_01, setProperty_01] = useState('');
  const [property_02, setProperty_02] = useState('');
  const [property_03, setProperty_03] = useState('');
  const [property_04, setProperty_04] = useState('');
  const [property_05, setProperty_05] = useState('');
  const [activeModal, setActiveModal] = useState(false);
  const [price, setPrice] = useState('');
  const [closeModal, setCloseModal] = useState(false);

  //when a plan step is clicked, setActiveStepIndex for active btn css; setActiveIndex to make quastion active and show its answers. After an answer is clicked and choosen, we have to setActiveAnswerIndex(null) so that when we click the next question, we don't see the same active answer from before (lets say we clicked the second one, it gets active and with green background, we need to reset the index, so that when we click the next question, all the answers are with neutral background.)
  const openTheCorrectStep = (index) => {
    setActiveIndex(index);
    setActiveStepIndex(index);
    setActiveAnswerIndex(null);
  };

  //when icon is clicked to open the answers; setActiveIndex(index) to show the answers; If a question is already open => setActiveIndex(null) in order to close it. So that only one question is open at the time. If activeIndex === index, questions div have class 'show'.
  const toggleActiveQuestion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else setActiveIndex(index);
    setActiveAnswerIndex(null);
  };

  //when a certain answer is clicked, set active css class for the clicked answer;
  const handleChoosenAnswer = (index) => {
    setActiveAnswerIndex(index);

    //find current object of the clicked question.
    const properties = planQuestions.find(
      (item) => item.id - 1 === activeIndex
    );
    //find the name and price in the current object. The 'name' is to be put in the order summary container; If activeIndex === 0, that means we have the first question open, the 'name' should go to the first '______' in summary. I use 5 state properties, that are '' at the beginnimg. When the first question is opened, setProperty_01(name) => name takes the first '______' in the summary.
    const name = properties.answers.find((answ) => answ.id - 1 === index).title;
    let price = properties.answers.find((answ) => answ.id - 1 === index).text;
    // finding the price to put it in the moduce. The price is only in the answers of the 5th question. It is shown in the modal.
    const indexForPrice = price.indexOf('p');
    price = price.slice(0, indexForPrice);

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
      setPrice(price);
    }
  };

  //Button 'Create my plan!' can be clicked only if the summary is completed. If any of the state values in properties01, ... are falsy, the button is disabled. When the sumary is completly full, the button become an active class and can be clicked. When clicked it opens the modal => setActiveModal(true)

  return (
    <section className='plan-main'>
      {/* plan steps */}
      <div className='plan-main-steps'>
        {planSteps.map((item, index) => {
          return (
            <li
              className={
                activeStepIndex === index
                  ? 'plan-main-step plan-main-step-active'
                  : 'plan-main-step'
              }
              key={index}
              onClick={() => openTheCorrectStep(index)}
            >
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
            onClick={() => setActiveModal(true)}
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
      {/* modal */}
      {activeModal && (
        <article
          className={closeModal ? 'modal-overlay' : 'show-modal modal-overlay'}
        >
          <div className='summary-container modal-container'>
            <div className='modal-header'>
              <h3>order summary</h3>
              <button
                className='close-modal-btn'
                type='button'
                onClick={() => {
                  setCloseModal(true);
                }}
              >
                <FaTimes />
              </button>
            </div>

            <h4>
              “I drink my coffee using{'  '}
              <span> {property_01 ? property_01 : '_____'}</span>, with a{' '}
              <span> {property_02 ? property_02 : '_____'}</span> type of bean.{' '}
              <span> {property_03 ? property_03 : '_____'}</span> ground ala
              <span> {property_04 ? property_04 : '_____'}</span>, sent to me{' '}
              <span> {property_05 ? property_05 : '_____'}</span>.”
            </h4>
            <p>
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.
            </p>
            <div className='modal-footer'>
              <h4>{`${price} / shipment`}</h4>
              <div className='checkout-btn btn'>Checkout</div>
            </div>
          </div>
        </article>
      )}
    </section>
  );
};

export default PlanMain;
