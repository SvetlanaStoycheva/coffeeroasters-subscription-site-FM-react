import React, { useState } from 'react';
import { planSteps, planQuestions } from '../utils/constants';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaTimes } from 'react-icons/fa';

const PlanMain = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeAnswerIndex, setActiveAnswerIndex] = useState(null);
  const [property_01, setProperty_01] = useState('');
  const [property_02, setProperty_02] = useState('');
  const [property_03, setProperty_03] = useState('');
  const [property_04, setProperty_04] = useState('');
  const [property_05, setProperty_05] = useState('');
  const [activeModal, setActiveModal] = useState(false);
  const [price, setPrice] = useState('');
  const [closeModal, setCloseModal] = useState(false);

  const toggleActiveQuestion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else setActiveIndex(index);
  };

  const handleChoosenAnswer = (index) => {
    setActiveAnswerIndex(index);

    const properties = planQuestions.find(
      (item) => item.id - 1 === activeIndex
    );
    const name = properties.answers.find((answ) => answ.id - 1 === index).title;
    let price = properties.answers.find((answ) => answ.id - 1 === index).text;
    // finding the price to put it in the moduce
    const indexForPrice = price.indexOf('p');
    price = price.slice(0, indexForPrice);

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
      setPrice(price);
    }
  };

  const handleActiveModal = () => {
    setActiveModal(true);
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
            onClick={handleActiveModal}
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
      {/* {activeModal && ( */}
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
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <div className='modal-footer'>
            <h4>{`${price} / shipment`}</h4>
            <div className='checkout-btn btn'>Checkout</div>
          </div>
        </div>
      </article>
      {/* )} */}
    </section>
  );
};

export default PlanMain;
