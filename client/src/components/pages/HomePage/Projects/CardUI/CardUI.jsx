import './CardUI.scss';

function CardUI({ title, language, number, urlGit }) {
  const dataImg = [
    'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/374897/pexels-photo-374897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  ];

  return (
    <div className='cardUI__globalConatiner'>
      <img src={dataImg[number]} alt='cover-projet' className='cardUI__img' />
      <div className='cardUI__titleContainer'>
        <p
          style={{ color: '#fc9243', fontWeight: 'bold', marginRight: '40px' }}
        >
          Title:
        </p>
        <p style={{ color: '#868686' }}>{title}</p>
      </div>
      <div className='cardUI__titleContainer'>
        <p
          style={{ color: '#fc9243', fontWeight: 'bold', marginRight: '40px' }}
        >
          Language:
        </p>
        <p style={{ color: '#868686' }}>{language}</p>
      </div>
      <a
        href={urlGit}
        target='_blank'
        className='cardUI__leanMore'
        rel='noreferrer'
        style={{ marginLeft: '20px' }}
      >
        learn more >>
      </a>
    </div>
  );
}
export default CardUI;
