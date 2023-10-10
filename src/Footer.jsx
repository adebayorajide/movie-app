import facebook from './images/fa-brands_facebook-square.png';
import instagram from './images/fa-brands_instagram.png';
import twitter from './images/fa-brands_twitter.png';
import youtube from './images/fa-brands_youtube.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socials">
        <a href="#">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="#">
          <img src={youtube} alt="youtube" />
        </a>
      </div>
      <div className="social_detail">
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy & Policy</a>
        <a href="#">Press Room</a>
      </div>
      <p className='copyright'>&copy; 2021 MovieBox by Adriana Eka Prayudha</p>
    </footer>
  );
}
export default Footer
