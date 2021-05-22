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
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const { chicken_wing_640, taco_640w, pizza_640w, burger_3_350w } = images;

export default function Home() {
  return (
    <>
      <Background>
        {/* HEADER START */}
        <Header>
          <Header.Wrapper>
            <Header.Link>
              <FontAwesomeIcon icon={faHamburger} size="2x" />
            </Header.Link>
            <Header.Nav>
              <Header.List className="navigation flex space-x-4">
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
            <Button>ORDER NOW</Button>
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
            <Button className="mt-4 m-auto">ORDER NOW</Button>
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
            <div className="flex">
              <CTA.Img src={burger_3_350w} alt="Hamburger" />
            </div>
            <div>
              <CTA.Title>Burger Master</CTA.Title>
              <CTA.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
                voluptate.
              </CTA.Text>
              <CTA.Price>$6</CTA.Price>
              <Button className="mt-4">ORDER NOW</Button>
            </div>
          </CTA.Wrapper>
        </CTA>
        {/* CTA END */}

        {/* MENU START */}
        <ActionCard>
          <ActionCard.List>
            <ActionCard.Item>
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
            <ActionCard.Item>
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
            <ActionCard.Item>
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
            <ActionCard.Item>
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
          </ActionCard.List>
        </ActionCard>
        {/* MENU END */}
        {/* TESTIMONIALS START */}
        <Testimonial>
          <Testimonial.Wrapper>
            <div></div>
            <span>"</span>
            <Testimonial.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              distinctio neque nihil ducimus optio ratione.
            </Testimonial.Text>
            <p>Lewis Murphy</p>
            <p>American</p>
          </Testimonial.Wrapper>
        </Testimonial>
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
      <Footer>
        <Footer.Wrapper>
          <Footer.ContentWrapper>
            <div>
              <FontAwesomeIcon icon={faHamburger} size="2x" />
            </div>
            <a href="emailto:">ham@burger.com</a>
          </Footer.ContentWrapper>
          <Footer.ContentWrapper>
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
          </Footer.ContentWrapper>
          <Footer.ContentWrapper>
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
          </Footer.ContentWrapper>
          <Footer.ContentWrapper>
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
          </Footer.ContentWrapper>
          <Footer.ContentWrapper>
            <Footer.Title>Social Links</Footer.Title>
            <Footer.List>
              <Footer.Item>
                <Footer.Link></Footer.Link>
              </Footer.Item>
              <Footer.Item>
                <Footer.Link></Footer.Link>
              </Footer.Item>
              <Footer.Item>
                <Footer.Link></Footer.Link>
              </Footer.Item>
              <Footer.Item>
                <Footer.Link></Footer.Link>
              </Footer.Item>
            </Footer.List>
          </Footer.ContentWrapper>
        </Footer.Wrapper>
      </Footer>
      {/* FOOTER END */}
    </>
  );
}
