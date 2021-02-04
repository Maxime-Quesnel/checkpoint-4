import './TestimonialCard.scss';
import quote from '../../../../../assets/icon-quote.svg';

const TestimonialCard = ({ username, location, contentText }) => {
  return (
    <div className='testimonialCard__globalContainer'>
      <img
        className='testimonialCard__quoteIcon'
        src={quote}
        alt='quote-icon'
      />
      <div className='testimonialCard__containerText-Img'>
        <div className='testimonialCard__contentText'>
          <p>{contentText}</p>
          <div className='testimonialCard__containerLocation'>
            <p className='testimonialCard__textNameUser'>{username},</p>
            <p style={{ marginLeft: '5px', fontSize: '19px' }}>{location}</p>
          </div>
        </div>
        <div className='testimonialCard__containerImgProfile'>
          <img
            className='testimonialCard__imgProfile'
            src='https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='img-profile'
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
