import './LandingPage.scss';

import LandingSvg from '../../../../assets/Landing.svg';

function Landing() {
  return (
    <div className='landing__globalContainer'>
      <div className='landing__container'>
        <div className='landing__containerTitle'>
          <p className='landing__textTopTitle'>Hi, I am</p>
          <h1 className='landing__title'>Maax.code</h1>
          <p className='landing__desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
            justo justo. Ut ut efficitur magna. Fusce porta egestas{' '}
          </p>
          <div className='landing__containerBtn'>
            <button className="landing__btnDownload">Download cv</button>
            <button className="landing__btnContactMe">Contact me</button>
          </div>
        </div>
        <img className='landing__img' src={LandingSvg} alt='svg-presentation' />
      </div>
    </div>
  );
}
export default Landing;
