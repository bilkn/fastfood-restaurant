import './App.css';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from "./fixtures/images";
const {frappuccino_640w} = images

function App() {
  return (
    <>
      {/* HEADER START */}
      <header className="header">
        <div className="flex justify-between px-5 py-5 items-center">
          <div>
            <FontAwesomeIcon icon={faHamburger} size="2x" />
          </div>
          <div>
            <ul className="navigation flex space-x-4">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">PAGES</a>
              </li>
              <li>
                <a href="#">OUR OFFER</a>
              </li>
              <li>
                <a href="#">PRICING</a>
              </li>
              <li>
                <a href="#">SHOP</a>
              </li>
            </ul>
          </div>
          <div>
            <button>ORDER NOW</button>
          </div>
        </div>
        {/* HERO START */}
        <div>
          <div>
            <p>FAST FOOD BURGERS</p>
            <h1>The fastest food, for instant hunger</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem velit itaque minima aliquid.
            </p>
          </div>
          <div>
            <button>ORDER NOW</button>
          </div>
        </div>
        {/* HERO END */}
      </header>
      {/* HEADER END */}

      {/* MAIN START */}
      <main>
        <div>
          <div>
            <img src={frappuccino_640w} alt="" />{' '}
          </div>
        </div>
      </main>
      {/* MAIN END */}
    </>
  );
}

export default App;
