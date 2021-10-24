import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import coffee_01 from '../assets/home/desktop/image-gran-espresso.png';
import coffee_02 from '../assets/home/desktop/image-planalto.png';
import coffee_03 from '../assets/home/desktop/image-piccollo.png';
import coffee_04 from '../assets/home/desktop/image-danche.png';
import icon_01 from '../assets/home/desktop/icon-coffee-bean.svg';
import icon_02 from '../assets/home/desktop/icon-gift.svg';
import icon_03 from '../assets/home/desktop/icon-truck.svg';
//planMain

export const links = [
  { id: 1, text: 'home', url: '/' },
  { id: 2, text: 'about us', url: '/about' },
  { id: 3, text: 'create your plan', url: '/plan' },
];

export const socialLinks = [
  { id: 1, icon: <FaFacebookSquare />, url: '/' },
  { id: 2, icon: <FaTwitter />, url: '/' },
  { id: 3, icon: <FaInstagram />, url: '/' },
];

export const coffeeVariations = [
  {
    id: 1,
    img: coffee_01,
    title: 'Gran Espresso',
    text:
      'Light and flavorful blend with cocoa and black pepper for an intense experience',
  },
  {
    id: 1,
    img: coffee_02,
    title: 'Planalto',
    text:
      'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
  },
  {
    id: 1,
    img: coffee_03,
    title: 'Piccollo',
    text:
      'Mild and smooth blend featuring notes of toasted almond and dried cherry',
  },
  {
    id: 1,
    img: coffee_04,
    title: 'Danche',
    text:
      'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
  },
];
export const reasons = [
  {
    icon: icon_01,
    title: 'Best quality',
    text:
      'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
  },
  {
    icon: icon_02,
    title: 'Exclusive benefits',
    text:
      'Special offers and swag when you subscribe, including 30% off your first shipment.',
  },
  {
    icon: icon_03,
    title: 'Free shipping',
    text:
      'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
  },
];

export const howItWorks = [
  {
    number: '01',
    title: 'Pick your coffee',
    text:
      'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
  },
  {
    number: '02',
    title: 'Choose the frequency',
    text:
      'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
  },
  {
    number: '03',
    title: 'Receive and enjoy!',
    text:
      'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
  },
];

// planMain
export const planSteps = [
  { number: '01', name: 'Preferences' },
  { number: '02', name: 'Bean type' },
  { number: '03', name: 'Quantity' },
  { number: '04', name: 'Grind option' },
  { number: '05', name: 'Deliveries' },
];

export const planQuestions = [
  {
    question: 'How do you drink your coffee?',
    answers: [
      {
        title: 'Capsule',
        text: 'Compatible with Nespresso systems and similar brewers',
      },
      {
        title: 'Filter',
        text: 'For pour over or drip methods like Aeropress, Chemex, and V60',
      },
      {
        title: 'Espresso',
        text:
          'Dense and finely ground beans for an intense, flavorful experience',
      },
    ],
  },
  {
    question: 'What type of coffee?',
    answers: [
      {
        title: 'Single origin',
        text: 'Distinct, high quality coffee from a specific family-owned farm',
      },
      {
        title: 'Decaf',
        text: 'Just like regular coffee, except the caffeine has been removed',
      },
      {
        title: 'Blended',
        text:
          'Combination of two or three dark roasted beans of organic coffees',
      },
    ],
  },
  {
    question: 'How much would you like?',
    answers: [
      {
        title: '250g',
        text: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
      },
      {
        title: '500g',
        text: 'Perfect option for a couple. Yields about 40 delectable cups.',
      },
      {
        title: '1000g',
        text:
          'Perfect for offices and events. Yields about 90 delightful cups.',
      },
    ],
  },
  {
    question: 'Want us to grind them?',
    answers: [
      {
        title: 'Wholebean',
        text: 'Best choice if you cherish the full sensory experience',
      },
      {
        title: 'Filter',
        text: 'For drip or pour-over coffee methods such as V60 or Aeropress',
      },
      {
        title: 'Cafetiére',
        text: 'Course ground beans specially suited for french press coffee',
      },
    ],
  },
  {
    question: 'How often should we deliver?',
    answers: [
      {
        title: 'Every week',
        text: '$14.00 per shipment. Includes free first-class shipping.',
      },
      {
        title: 'Every 2 weeks',
        text: '$17.25 per shipment. Includes free priority shipping.',
      },
      {
        title: 'Every month',
        text: '$22.50 per shipment. Includes free priority shipping.',
      },
    ],
  },
];
