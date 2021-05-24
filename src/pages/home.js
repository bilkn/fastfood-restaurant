import React from 'react';
import {
  ActionCard,
  Background,
  Button,
  Card,
  CTA,
  Footer,
  Header,
  Hero,
  Testimonial,
} from '../components';
import images from '../fixtures/images';
import { faHamburger, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as FacebookIcon } from '../assets/social/facebook.svg';
import { ReactComponent as InstagramIcon } from '../assets/social/instagram.svg';
import { ReactComponent as LinkedInIcon } from '../assets/social/linkedin.svg';
import { ReactComponent as TwitterIcon } from '../assets/social/twitter.svg';
const {
  chicken_wing_640,
  taco_640w,
  pizza_640w,
  sandwich_640w,
  burger_3_350w,
  girl_1,
  girl_2,
  girl_3,
  man_1,
  man_2,
} = images;

export default function Home() {
  return (
    <>
      <div>
          <Background>
            {/* HEADER START */}
            <Header>
              <Header.Wrapper>
                <div className="header__container">
                  <Header.Link>
                    <FontAwesomeIcon icon={faHamburger} size="2x" />
                  </Header.Link>
                </div>
                <Header.Nav>
                  <Header.List>
                    <Header.Item>
                      <Header.Link href="#">HOME</Header.Link>
                    </Header.Item>
                    <Header.Item>
                      <Header.Link href="#">PAGES</Header.Link>
                    </Header.Item>
                    <Header.Item>
                      <Header.Link href="#">OUR OFFER</Header.Link>
                    </Header.Item>
                    <Header.Item>
                      <Header.Link href="#">PRICING</Header.Link>
                    </Header.Item>
                    <Header.Item>
                      <Header.Link href="#">SHOP</Header.Link>
                    </Header.Item>
                  </Header.List>
                </Header.Nav>
                <div className="header__container">
                  <Button className="no-margin self-end">ORDER NOW</Button>
                </div>
              </Header.Wrapper>
            </Header>
            {/* HEADER END */}
            {/* HERO START */}
            <Hero>
              <Hero.Wrapper>
                <div>
                  <p className="text-sm text-center">FAST FOOD BURGERS</p>
                  <Hero.Title>The fastest food, for instant hunger</Hero.Title>
                </div>
                <Hero.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem velit itaque minima aliquid.
                </Hero.Text>
                <Button className="m-auto mt-4">ORDER NOW</Button>
              </Hero.Wrapper>
            </Hero>
            {/* HERO END */}
          </Background>
          {/* MAIN START */}
          <main>
            <Card>
              <Card.List>
                <Card.Item>
                  <Card.Link href="#">
                    <Card.Img src={chicken_wing_640} alt="Chicken wing" />
                    <Card.Content>
                      <Card.Title>Chicken Wing</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe, similique!
                      </Card.Text>
                    </Card.Content>
                  </Card.Link>
                </Card.Item>
                <Card.Item>
                  <Card.Link href="#">
                    <Card.Img src={taco_640w} alt="Taco" />
                    <Card.Content>
                      <Card.Title>Taco</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe, similique!
                      </Card.Text>
                    </Card.Content>
                  </Card.Link>
                </Card.Item>
                <Card.Item>
                  <Card.Link href="#">
                    <Card.Img src={sandwich_640w} alt="Sandwich" />
                    <Card.Content>
                      <Card.Title>Sandwich</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe, similique!
                      </Card.Text>
                    </Card.Content>
                  </Card.Link>
                </Card.Item>
                <Card.Item>
                  <Card.Link href="#">
                    <Card.Img src={pizza_640w} alt="Pizza" />
                    <Card.Content>
                      <Card.Title>Pizza</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe, similique!
                      </Card.Text>
                    </Card.Content>
                  </Card.Link>
                </Card.Item>
              </Card.List>
            </Card>
            {/* CTA START */}
            <CTA>
              <CTA.Wrapper>
                <div className="flex flex-auto">
                  <CTA.Img src={burger_3_350w} alt="Hamburger" />
                </div>
                <div className="flex flex-col flex-auto md:items-center md:justify-center">
                  <div className="m-auto">
                    <CTA.Title>Burger Master</CTA.Title>
                    <CTA.Text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Unde, voluptate.
                    </CTA.Text>
                    <CTA.Price>$6</CTA.Price>
                    <Button className="mt-4">ORDER NOW</Button>
                  </div>
                </div>
              </CTA.Wrapper>
            </CTA>
            {/* CTA END */}
            {/* MENU START */}
            <ActionCard>
              <ActionCard.List>
                <ActionCard.Item className="action-card__item--bg-1">
                  <ActionCard.Wrapper>
                    <ActionCard.Title>Frappuccino</ActionCard.Title>
                    <ActionCard.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, excepturi.
                    </ActionCard.Text>
                    <ActionCard.Price>$4</ActionCard.Price>
                    <Button>ORDER NOW</Button>
                  </ActionCard.Wrapper>
                </ActionCard.Item>
                <ActionCard.Item className="action-card__item--bg-2">
                  <ActionCard.Wrapper>
                    <ActionCard.Title>Pizzata</ActionCard.Title>
                    <ActionCard.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, excepturi.
                    </ActionCard.Text>
                    <ActionCard.Price>$7</ActionCard.Price>
                    <Button>ORDER NOW</Button>
                  </ActionCard.Wrapper>
                </ActionCard.Item>
                <ActionCard.Item className="action-card__item--bg-3">
                  <ActionCard.Wrapper>
                    <ActionCard.Title>Texas Burger</ActionCard.Title>
                    <ActionCard.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, excepturi.
                    </ActionCard.Text>
                    <ActionCard.Price>$5</ActionCard.Price>
                    <Button>ORDER NOW</Button>
                  </ActionCard.Wrapper>
                </ActionCard.Item>
                <ActionCard.Item className="action-card__item--bg-4">
                  <ActionCard.Wrapper>
                    <ActionCard.Title>Tortilla</ActionCard.Title>
                    <ActionCard.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, excepturi.
                    </ActionCard.Text>
                    <ActionCard.Price>$4</ActionCard.Price>
                    <Button>ORDER NOW</Button>
                  </ActionCard.Wrapper>
                </ActionCard.Item>
              </ActionCard.List>
            </ActionCard>
            {/* MENU END */}
            {/* TESTIMONIALS START */}
            <Testimonial>
              <Testimonial.Wrapper>
                <div className="testimonial__people-container flex items-center justify-center">
                  <div className="testimonial__people">
                    <Testimonial.Img
                      className="girl-1"
                      src={girl_1}
                      alt="Smiling woman"
                    />
                    <Testimonial.Img
                      className="girl-2"
                      src={girl_2}
                      alt="Smiling woman"
                    />
                    <Testimonial.Img
                      className="girl-3"
                      src={girl_3}
                      alt="Smiling woman"
                    />
                    <Testimonial.Img
                      className="man-1"
                      src={man_1}
                      alt="Smiling man"
                    />
                    <Testimonial.Img
                      className="man-2"
                      src={man_2}
                      alt="Smiling man"
                    />
                  </div>
                </div>
                <Testimonial.ContentWrapper>
                  <span>
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      size="2x"
                      color="#F5772B"
                    />
                  </span>
                  <Testimonial.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere distinctio neque nihil ducimus optio ratione.
                  </Testimonial.Text>
                  <p className="font-bold text-xl mt-6">Lewis Murphy</p>
                  <p>American</p>
                </Testimonial.ContentWrapper>
              </Testimonial.Wrapper>
            </Testimonial>
            {/* TESTIMONIALS END */}
            {/* DOWNLOAD START */}
            <div className="download">
              <div className="maxed flex flex-col sm:flex-row items-center justify-between px-5 py-12 sm:px-0 text-center">
                <div className="download__content">
                  <h3 className="text-2xl">Download Our Menu</h3>
                </div>
                <div className="download__content">
                  <Button className="mt-6 sm:mt-0">Download</Button>
                </div>
              </div>
            </div>
            {/* DOWNLOAD END */}
          </main>
          {/* MAIN END */}
          {/* FOOTER START */}
          <Footer>
            <Footer.Wrapper>
              <Footer.ContentWrapper className="footer__content-wrapper--first mb-6">
                <div>
                  <FontAwesomeIcon icon={faHamburger} size="2x" />
                </div>
                <a href="emailto:" className="block mt-2">
                  ham@burger.com
                </a>
              </Footer.ContentWrapper>
              <div className="flex w-full justify-between sm:space-x-6 ">
                <Footer.ContentWrapper>
                  <div>
                    <Footer.Title>Our menu</Footer.Title>
                    <Footer.List>
                      <Footer.Item>
                        <Footer.Link>Breakfast</Footer.Link>
                      </Footer.Item>
                      <Footer.Item>
                        <Footer.Link>Lunch</Footer.Link>
                      </Footer.Item>
                      <Footer.Item>
                        <Footer.Link>Dinner</Footer.Link>
                      </Footer.Item>
                    </Footer.List>
                  </div>
                </Footer.ContentWrapper>
                <Footer.ContentWrapper>
                  <div>
                    <Footer.Title>Information</Footer.Title>
                    <Footer.List>
                      <Footer.Item>
                        <Footer.Link>About us</Footer.Link>
                      </Footer.Item>
                      <Footer.Item>
                        <Footer.Link>Testimonial</Footer.Link>
                      </Footer.Item>
                      <Footer.Item>
                        <Footer.Link>Event</Footer.Link>
                      </Footer.Item>
                    </Footer.List>
                  </div>
                </Footer.ContentWrapper>
                <Footer.ContentWrapper>
                  <div>
                    <Footer.Title>Useful Links</Footer.Title>
                    <Footer.List>
                      <Footer.Item>
                        <Footer.Link>Services</Footer.Link>
                      </Footer.Item>
                      <Footer.Item>
                        <Footer.Link>Support</Footer.Link>
                      </Footer.Item>
                      <Footer.Item>
                        <Footer.Link>Operations</Footer.Link>
                      </Footer.Item>
                    </Footer.List>
                  </div>
                </Footer.ContentWrapper>
              </div>
              <Footer.ContentWrapper className="no-margin">
                <Footer.Title className="text-center mt-5 sm:mt-0">
                  Social Links
                </Footer.Title>
                <Footer.List className="flex space-x-3 mt-2">
                  <Footer.Item>
                    <Footer.Link>
                      <FacebookIcon style={{ width: '25px' }} />
                    </Footer.Link>
                  </Footer.Item>
                  <Footer.Item>
                    <Footer.Link>
                      <TwitterIcon style={{ width: '25px' }} />
                    </Footer.Link>
                  </Footer.Item>
                  <Footer.Item>
                    <Footer.Link>
                      <InstagramIcon style={{ width: '25px' }} />
                    </Footer.Link>
                  </Footer.Item>
                  <Footer.Item>
                    <Footer.Link>
                      <LinkedInIcon style={{ width: '25px' }} />
                    </Footer.Link>
                  </Footer.Item>
                </Footer.List>
              </Footer.ContentWrapper>
            </Footer.Wrapper>
          </Footer>
          {/* FOOTER END */}
      </div>
    </>
  );
}
