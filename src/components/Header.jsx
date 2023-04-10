import React from 'react';
import headerImg from '../assets/header-img.png';
import Button from './Button';

import image from '../assets/header-img.png';

function Header() {
  return (
    <div className='flex justify-between items-center px-24 py-2'>
      <div>
        <p className='uppercase text-gray-600 text-lg'>Loans made easy</p>
        <br />
        <h4 className='text-5xl font-black'>
          Get the best loan <br /> deals from multiple <br /> lenders in no time
        </h4>
        <br />
        <p className='text-md text-zinc-600'>
          Meet Our Revolutionary Credit Brokerage Platform <br />
          Your One-Stop Shop for Finding the Best Loans <br />
          From The Best Lenders in Nigeria!
        </p>
        <br />
        <Button name='Get early access' />
      </div>

      <div>
        <img
          src={image}
          className='header-img'
        />
      </div>
    </div>
  );
}

export default Header;
