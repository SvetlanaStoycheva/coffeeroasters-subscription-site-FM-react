import React from 'react';
import uk from '../assets/about/desktop/illustration-uk.svg';
import canada from '../assets/about/desktop/illustration-canada.svg';
import australia from '../assets/about/desktop/illustration-australia.svg';

const aboutPage = () => {
  return (
    <main className='about'>
      {/* hero */}
      <article className='about-hero'>
        <h2>About us</h2>
        <p>
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </article>
      {/* commitment */}
      <section className='about-commitment'>
        <article className='commitment-img-container'></article>
        <article className='commitment-text'>
          <h3>Our commitment</h3>
          <p>
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </article>
      </section>
      {/* quality */}
      <section className='about-quality'>
        <h3>Uncompromising quality</h3>
        <p>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
        <div className='quality-img'></div>
      </section>
      {/* headquarters */}
      <section className='about-headquarters'>
        <h4 className='headquarters-title'>Our headquarters</h4>
        <div className='headquarters-container'>
          <div className='single-headquarter'>
            <img src={uk} alt='' />
            <h4>United Kingdom</h4>
            <p>68 Asfordby Rd </p>
            <p>Alcaston</p>
            <p>SY6 1YA </p>
            <p>+44 1241 918425</p>
          </div>
          <div className='single-headquarter'>
            <img src={canada} alt='' />
            <h4>Canada</h4>
            <p> 1528 Eglinton Avenue </p>
            <p>Toronto </p>
            <p>Ontario M4P 1A6 </p>
            <p>+1 416 485 2997</p>
          </div>
          <div className='single-headquarter'>
            <img src={australia} alt='' />
            <h4>Australia</h4>
            <p>36 Swanston Street </p>
            <p>Kewell</p>
            <p>Victoria </p>
            <p>+61 4 9928 3629</p>{' '}
          </div>
        </div>
      </section>
    </main>
  );
};

export default aboutPage;
