import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Stock Insurance Articles!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.policysweet.com/images/default-source/articles/adobestock_207371242_web.jpg?sfvrsn=f78c4ab1_17'
              text='Stock insurance is a smart investment'
              label='Types of Insurancepolicy'
              path='/about'
            />
            <CardItem
              src='https://static.pbcdn.in/cdn/images/bu/sme/reinstatement-value-in-fire-insurance-policy-desktop.jpg'
              text='which protects your assets'
              label='Benefits of Insurance'
              path='/about'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://static.pbcdn.in/cdn/images/bu/sme/fire-insurance-policy-types-desktop.jpg'
              text='Choosing insurance for your small business can be very confusing.'
              label='How does ReinStatement Value Clause'
              path='/about'
            />
            <CardItem
              src='https://static.pbcdn.in/cdn/images/bu/sme/fire-insurance-claim-desktop.jpg'
              text='Choosing insurance for your small business can be very confusing.'
              label='Insurance Is The Ideal Protection'
              path='/products'
            />
            <CardItem
              src='https://www.policysweet.com/images/default-source/articles/best-business-insurance.jpg?sfvrsn=310644b1_13'
              text='Choosing insurance for your small business can be very confusing.'
              label='Every Property That You Won I Valuable'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;