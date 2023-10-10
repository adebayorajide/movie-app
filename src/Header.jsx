import img1 from './images/Logo (1).png';
import img2 from './images/imdb.png';
import img3 from './images/PngItem_1381056 1.png';
import img4 from './images/Play.png';
const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <a href="/">
          <img src={img1} alt="logo" />
        </a>
        <a className="signup" href="#">
          signup
          <span>
            <p></p>
            <p></p>
          </span>
        </a>
      </nav>
      <div className="header_details">
        <h1>
          John Wick 3: <br /> Parabellum
        </h1>
        <p>
          <img src={img2} alt="imdb" />
          86.0/100 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <img src={img3} alt="" />
          97%
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          vel nesciunt alias, iure voluptas suscipit dolore. Nisi sed expedita
          optio!
        </p>
      </div>

      <button className="header_btn" type="button">
        <img src={img4} alt="" />
        WATCH TRAILER
      </button>
    </div>
  );
}
export default Header