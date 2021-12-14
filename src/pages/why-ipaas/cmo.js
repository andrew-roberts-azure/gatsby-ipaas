import React, { Component } from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import GetStarted from '../../components/getStarted'
import Banner from '../../components/banner'
import imageBanner from '../../assets/images/leader-banner.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap'
import GenCol from '../../components/genCol'

import dummy1 from '../../assets/images/why-ipaas/brook.png'
import dummy2 from '../../assets/images/why-ipaas/pat.png'
import dummy3 from '../../assets/images/why-ipaas/ajay.png'
import dummy4 from '../../assets/images/why-ipaas/kim.png'
import banner1 from '../../assets/images/leadership-banner.jpg'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpened1: true,
      isOpened2: true,
    }
    this.toggleBox = this.toggleBox.bind(this)
  }

  toggleBox(id) {
    if (id === 0) {
      this.setState(oldState => ({ isOpened1: !oldState.isOpened1 }))
    } else {
      this.setState(oldState => ({ isOpened2: !oldState.isOpened2 }))
    }
  }
  render() {
    return (
      <>
        <Layout>
          <SEO
            title="CMO/Director of Sales"
            description="iPaaS for CIO, COO, CFO, and Retail Manager Roles"
            keywords={[
              `iPaaS`,
              `Integration Platform`,
              `Enterprise`,
              `Enterprise Applications`,
            ]}
          />
          <main>
            <Banner title="CMO" fluid="true" image={imageBanner} />
            <div className="leadershipMemberSec">
              <Container>
                <div className="leadershipMemberContent">
                  <div className="leaderDtailSec">
                    <div className="leaderImgSec">
                      <Image src={dummy4}></Image>
                    </div>
                    <h4>Kim, CMO</h4>
                    <h6>The Problem</h6>
                    <ul>
                      <li>
                        I don’t have data across all customer channels to
                        determine buying trends.
                      </li>
                      <li>
                        Reporting is limited to single systems and improving
                        loyalty is difficult.
                      </li>
                      <li>
                        Negative reviews are piling up because of poor system
                        communication.
                      </li>
                      <li>
                        Clients are leaving for more tech-savvy competition and
                        new customer acquisition is slowing.
                      </li>
                    </ul>
                    <div
                      className={
                        this.state.isOpened1
                          ? 'isContent hidedContent'
                          : 'isContent'
                      }
                    >
                      <p>
                        As CMO, my role is to bring in as many opportunities as
                        I can through as many channels as can be leveraged.
                        Traditionally, we have divided our sales goals into four
                        categories: new and existing clients in our B2B
                        division, and new and existing in our B2C division, all
                        with distinct marketing strategies. Today we are
                        experimenting with a fifth division: social media. Our
                        competitors are using Facebook and Instagram to drive
                        sales, and we have recently implemented a project to
                        sell items on Facebook as well which represents our
                        largest social media market.
                      </p>
                      <p>
                        The problem I encounter the most is lack of visibility
                        across these channels into customer buying trends. Yes,
                        we are struggling with data and inventory issues as
                        well: since our Facebook sales feed opened, we’ve
                        oversold items several times because we have too many
                        manual inventory management processes. This lead to very
                        late shipping dates and negative reviews, and those make
                        each of my next sales more difficult. But most
                        critically, I need a 360° view of the client and access
                        to their entire buying cycle from every possible angle
                        in order to keep up with my competitors, who are
                        certainly outpacing us in that category. For example, it
                        wasn’t possible to launch automated email marketing
                        campaigns based on a complete purchase history; we had
                        an integration to the website sales history, but
                        couldn’t pull in-store purchase from the ERP. The
                        customer experience was suffering for our existing
                        clients.
                      </p>
                      <p>
                        It was worse in new client acquisition. We were
                        attempting to leverage Marketo and a new Account-Based
                        Marketing tool, but the integration roadmap was longer
                        and more expensive than the implementation of the
                        products themselves, still only gave me partial data,
                        and a LinkedIn integration seemed impossible. I was
                        going to overpay and get less than what I needed. Our
                        Salesforce integration to our ERP is terrible, and the
                        cost of adding new products on the Salesforce side is
                        skyrocketing. They approached us with their Mulesoft
                        integration suite and it’s so far out of budget I can’t
                        even consider it. Our CFO was tightening budgets
                        everywhere due to tech spend bloat, but I felt like that
                        was exactly the wrong strategy. But every day we were
                        losing opportunities and I was powerless to improve my
                        visibility.
                      </p>
                      <p>
                        The one thing our CFO and I did agree on is that neither
                        one of us had the data we needed to excel at our roles.
                        Every new system added, every new solution implemented
                        to augment sales cadence, customer outreach, or new
                        channel sales made us just a little more blind. There
                        was no report that could tell me everything a customer
                        purchased or a way to use that information to improve
                        their loyalty. Manual inventory processes created silos
                        in every division and complicated access for each
                        channel, and it made merchandising more complicated than
                        it already was. We were frozen and simply put, we were
                        guessing everywhere.
                      </p>
                      <p>
                        I was struggling to tell a content and PR story about a
                        company that cares so much about its customers while it
                        increasingly failed to meet their expectations, and was
                        getting worse rather than better. I knew that if we
                        didn’t make a move quickly, we were going to lose
                        customers at an accelerated rate. Frustrations across
                        our 5 channels led to negative reviews, and new client
                        acquisition was slowing. At this trajectory, I couldn’t
                        stretch what positivity we had to cover the growing
                        negativity, and there was no plan to fix it or
                        foreseeable future to wrap PR around. The very last
                        story you want to tell as CMO is “I’m sorry.”{' '}
                      </p>
                    </div>
                    <button
                      className={
                        this.state.isOpened1
                          ? 'btn btn-alert'
                          : 'd-none btn btn-alert'
                      }
                      onClick={() => {
                        this.toggleBox(0)
                      }}
                    >
                      Read more
                    </button>
                    <h6>The Solution</h6>
                    <ul>
                      <li>
                        All data in one place means a 360° view of the customer
                        I need to make decisions.
                      </li>
                      <li>
                        Clean data into Marketo means holiday campaigns and
                        retargets are successful.
                      </li>
                      <li>
                        A new application that gives customers more visibility
                        into their history, loyalty, and other promotions mean
                        better customer experience.
                      </li>
                      <li>
                        The kind of positive PR story I have always wanted to
                        tell, with the positive reviews to back it.
                      </li>
                    </ul>
                    <div
                      className={
                        this.state.isOpened2
                          ? 'isContent hidedContent'
                          : 'isContent'
                      }
                    >
                      <p>
                        Then our CFO brought in a new CIO and with him came
                        iPaaS.com. I am not a technologist, so I didn’t fully
                        understand how adding yet another tech solution wasn’t
                        going to just complicate my life more, but I was willing
                        to try anything. And within weeks I could see how this
                        new integration platform was going to completely change
                        how we did business.
                      </p>
                      <p>
                        The integrations came one at a time; they removed the
                        point-to-point scripts and starting running them all
                        directly into the iPaaS, which meant that it housed all
                        our data in one place. Finally! No more inventory
                        nightmares between channel, and complete visibility to
                        customer buying patterns. Now I could get clean data
                        into Marketo and launch a holiday marketing campaign and
                        make adjustments before the big one in December with
                        confidence we could deliver.{' '}
                      </p>
                      <p>
                        I’d been discussing a new mobile application with our
                        retail operations director that our B2B and B2C clients
                        could access, and this had been a pipe dream until now.
                        But with iPaaS.com we are now confidently evaluating
                        application partners that will open up unprecedented
                        access and features, such as client visibility to their
                        own purchase history for reordering, writing product
                        reviews, managing loyalty, and even the ability to track
                        and return shipments. This is the kind of impressive
                        tool that can organize informed action across
                        departments which wasn’t a remote possibility before
                        iPaaS.com. It’s the same suite of apps, and the same
                        people - the same us - but the outcomes have changed.
                        Now I can once again tell an honest story of innovation
                        and industry leadership.
                      </p>
                    </div>
                    <button
                      className={
                        this.state.isOpened2
                          ? 'btn btn-alert'
                          : 'd-none btn btn-alert'
                      }
                      onClick={() => {
                        this.toggleBox(1)
                      }}
                    >
                      Read more
                    </button>
                    <div className="leaderTagLineSp">
                      <div className="leaderTagLineHolder">
                        <div className="leaderTagLineSec">
                          <p>
                            At this trajectory, I couldn’t stretch what
                            positivity we had to cover the growing negativity,
                            and there was no plan to wrap PR around.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
            <div className="leadershipBanner">
              <Image className="w-100" src={banner1}></Image>
            </div>
            <div className="leadershipCalloutSec">
              <div className="customerSec secPad litBg">
                <Container>
                  <h2 className="genHeading">
                    But it’s not just about one department...keep reading!
                  </h2>
                  <Row>
                    <GenCol
                      image={dummy1}
                      title="Retail Operations"
                      content="Now that I can enact state-of-the-industry retail strategies, we can tell the kind of story that is a dream come true for marketing."
                      button="Read More"
                      link="/why-ipaas/coo"
                    ></GenCol>
                    <GenCol
                      image={dummy2}
                      title="CFO"
                      content="Once we solved the dataflow issues, I could then believe the CMO vision was achievable.  Budgets open up for predictable growth."
                      button="Read More"
                      link="/why-ipaas/cfo"
                    ></GenCol>
                    <GenCol
                      image={dummy3}
                      title="CIO"
                      content="Marketing and sales suffer as much as any other department when they don’t have the data they need. iPaaS and I were happy to help."
                      button="Read More"
                      link="/why-ipaas/cio"
                    ></GenCol>
                  </Row>
                </Container>
              </div>
            </div>

            <GetStarted />
          </main>
        </Layout>
      </>
    )
  }
}

export default App
