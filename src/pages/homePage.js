import React from 'react';
import { coffeeVariations } from '../utils/constants';

const homePage = () => {
  return (
    <main>
      <section className='hero'>
        <h1>Great coffee made simple.</h1>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button className='btn hero-btn'>Create your plan</button>
      </section>
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
    </main>
  );
};

export default homePage;
