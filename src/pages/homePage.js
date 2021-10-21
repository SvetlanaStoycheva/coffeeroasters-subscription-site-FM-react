import React from 'react';
import { coffeeVariations, reasons, howItWorks } from '../utils/constants';
import { Link } from 'react-router-dom';

const homePage = () => {
  return (
    <main>
      {/* hero */}
      <section className='hero'>
        <h1>Great coffee made simple.</h1>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button className='btn how-it-works-btn'>
          <Link className='btn how-it-works-btn' to='/plan'>
            Create your plan
          </Link>
        </button>
      </section>
      {/* collection */}
      <section className='collection'>
        <h1>our collection</h1>
        <div className='coffee-variations'>
          {coffeeVariations.map((item) => {
            return (
              <article key={item.id} className='single-coffee-variation'>
                <img
                  className='collection-img'
                  src={item.img}
                  alt={item.title}
                />
                <div className='collection-text'>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      {/* choose us */}
      <section className='choose-us'>
        <h3>Why choose us?</h3>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div className='reasons-container'>
          {reasons.map((item, index) => {
            return (
              <div className='single-reason' key={index}>
                <img src={item.icon} alt='' />
                <div className='single-reason-text'>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* how it works */}
      <section className='how-it-works'>
        <h4>How it works</h4>
        <div className='lines-container'>
          <div className='lines'></div>
          <div className='lines lines-02'></div>
        </div>
        <div className='action-container'>
          {howItWorks.map((item, index) => {
            return (
              <div className='single-action' key={index}>
                <h1>{item.number}</h1>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
        <button className='btn how-it-works-btn'>
          <Link className='btn how-it-works-btn' to='/plan'>
            Create your plan
          </Link>
        </button>
      </section>
    </main>
  );
};

export default homePage;
