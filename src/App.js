import './App.css';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from './fixtures/images';
import { Button } from './components';
const { chicken_wing_640, taco_640w, pizza_640w, burger_3_350w } = images;

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
            <Button>ORDER NOW</Button>
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
            <Button>ORDER NOW</Button>
          </div>
        </div>
        {/* HERO END */}
      </header>
      {/* HEADER END */}

      {/* MAIN START */}
      <main>
        <div>
          <div>
            <img src={chicken_wing_640} alt="Chicken wing" />
            <div>
              <h3>Chicken Wing</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                similique!
              </p>
            </div>
          </div>
          <div>
            <img src={taco_640w} alt="Taco" />
            <div>
              <h3>Taco</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                similique!
              </p>
            </div>
          </div>
          {/*   <div>
            <img src={chicken_wing_640} alt="Chicken wing" />
            <div>
              <h3>Chicken Wing</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                similique!
              </p>
            </div>
          </div> */}
          <div>
            <img src={pizza_640w} alt="Pizza" />
            <div>
              <h3>Pizza</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                similique!
              </p>
            </div>
          </div>
        </div>

        {/* CTA START */}
        <div>
          <div>
            <div>
              <img src={burger_3_350w} alt="Hamburger" />
            </div>
            <div>
              <div>
                <h3>Burger Master</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ullam, placeat?
                </p>
                <p>$6</p>
              </div>
              <div>
                <Button>ORDER NOW</Button>
              </div>
            </div>
          </div>
        </div>
        {/* CTA END */}

        {/* MENU START */}
        <div>
          <div>
            <ul>
              <li>
                <div>
                  <h3>Frappuccino</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, officia.
                  </p>
                  <p>$4</p>
                </div>
                <div>
                  <Button>ORDER NOW</Button>
                </div>
              </li>
              <li>
                <div>
                  <h3>Pizzata</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, officia.
                  </p>
                  <p>$7</p>
                </div>
                <div>
                  <Button>ORDER NOW</Button>
                </div>
              </li>
              <li>
                <div>
                  <h3>Texas Burger</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, officia.
                  </p>
                  <p>$5</p>
                </div>
                <div>
                  <Button>ORDER NOW</Button>
                </div>
              </li>
              <li>
                <div>
                  <h3>Tortilla</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, officia.
                  </p>
                  <p>$4</p>
                </div>
                <div>
                  <Button>ORDER NOW</Button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* MENU END */}
        {/* TESTIMONIALS START */}
        <div>
          <div>
            <div></div>
            <div>
              <span>"</span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores voluptatum amet sed. Pariatur, ducimus cumque?
              </p>
              <p>Lewis Murphy</p>
              <p>American</p>
            </div>
          </div>
        </div>
        {/* TESTIMONIALS END */}
        {/* DOWNLOAD START */}
        <div>
          <div>
            <h3>Download Our Menu</h3>
            <Button>Download</Button>
          </div>
        </div>
        {/* DOWNLOAD END */}
      </main>
      {/* MAIN END */}
      {/* FOOTER START */}
      <footer>
        <div>
          <div>
            <FontAwesomeIcon icon={faHamburger} size="2x" />
          </div>
          <a href="emailto:">ham@burger.com</a>
        </div>
        <ul>
          <li></li>
        </ul>
      </footer>
      {/* FOOTER END */}
    </>
  );
}

export default App;
