import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import coffee_01 from '../assets/home/desktop/image-gran-espresso.png';
import coffee_02 from '../assets/home/desktop/image-planalto.png';
import coffee_03 from '../assets/home/desktop/image-piccollo.png';
import coffee_04 from '../assets/home/desktop/image-danche.png';

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
