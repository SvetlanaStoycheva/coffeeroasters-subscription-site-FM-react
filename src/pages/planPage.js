import React from 'react';
import { howItWorks } from '../utils/constants';
import PlanMain from '../components/planMain';

const planPage = () => {
  return (
    <main>
      {/* plan hero */}
      <section className='plan-hero'>
        <h2>Create a plan</h2>
        <p>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </section>
      {/* plan steps */}
      <section className='plan-steps'>
        <div className='lines-container plan-lines-container'>
          <div className='lines plan-lines'></div>
          <div className='lines plan-lines lines-02'></div>
        </div>
        <div className='action-container'>
          {howItWorks.map((item, index) => {
            return (
              <div className='single-action single-plan-action' key={index}>
                <h1>{item.number}</h1>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* plan main */}
      <PlanMain />
    </main>
  );
};

export default planPage;
