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
            title="CFO"
            description="iPaaS for CIO, COO, CFO, and Retail Manager Roles"
            keywords={[
              `iPaaS`,
              `Integration Platform`,
              `Enterprise`,
              `Enterprise Applications`,
            ]}
          />
          <main>
            <Banner title="CFO" fluid="true" image={imageBanner} />
            <div className="leadershipMemberSec">
              <Container>
                <div className="leadershipMemberContent">
                  <div className="leaderDtailSec">
                    <div className="leaderImgSec">
                      <Image src={dummy2}></Image>
                    </div>
                    <h4>Pat, CFO</h4>
                    <h6>The Problem</h6>
                    <ul>
                      <li>
                        Tech vendor costs have increased over 3x in the last 2
                        years and we don’t know why.
                      </li>
                      <li>
                        We are losing revenue to data-informed competition.
                      </li>
                      <li>
                        Trust breakdowns exist from opinion informed decisions
                        between internal staff.
                      </li>
                      <li>
                        Sometimes senior leadership cannot align in decisions of
                        priority.
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
                        As I see it, my job is to assess risks for the business
                        as it navigates through the waters of retail
                        competition, creating methods and targets to measure
                        predictability, protect and increase profitability, and
                        project our financial moves in three-month, six-month,
                        and annual strategies. Coming into this position, I was
                        confident and I had this down to a science, I expected
                        to hit every goal, and was optimistic for our future.
                      </p>
                      <p>
                        In that time, I’ve worked in lock-step with our Retail
                        Operations Manager to compete for market share
                        implementing new technologies to create a compelling
                        customer buying experience, a new website that expanded
                        our exclusively B2B phone order model to include B2B
                        customer portals and now a B2C site selling direct to
                        consumer, and now we have a vision for adding
                        destination brick-and-mortar stores.
                      </p>
                      <p>
                        Each of these was meant to expand our reach and
                        profitability, but the reality is that technology costs
                        and complications have put me in a state of doubt as to
                        whether we can be profitable with this strategy. We
                        can’t handle what we have. Non-technical staff and 3rd
                        parties are leading technology decisions and their
                        biases are nickeling and diming us to death, and a lack
                        of strong across-system data makes decisions seem like
                        guesses. I don’t like guessing.
                      </p>
                      <p>
                        After a surge of strong tech moves, including a new ERP,
                        3PL agreements, and EDI, the maintenance of these
                        half-implemented technologies began adding exponential
                        costs and effort we never expected. Trying to manage all
                        these systems while our Operations Manager attempted to
                        add omni-channel loyalty and giftcards and other
                        industry-standard features our competition already had,
                        became a nightmare. We were paying uncapped scopes to
                        multiple third-party vendors and still not getting
                        access to the data I needed to make good decisions about
                        our spend. It was common to coordinate 3 or more vendors
                        on a single call to diagnose the source of a problem and
                        sometimes learned the issue was "outside the scope" by
                        all parties - which means technology solutions were
                        delegated back to us, the least prepared group to solve
                        it. I had no visibility across systems, so I was reading
                        and cross-referencing reports from multiple systems that
                        had me buried in minutia rather than being able to make
                        any strategic choices to grow the business.
                      </p>
                      <p>
                        The worst part was that I was losing trust with our
                        Operations Manager, who had been instrumental in helping
                        get us to where we were, but now seemed to just add fuel
                        to an ever-growing fire of tech solutions that weren’t
                        working together and just meant more money to third
                        party vendors and a greater reliance on more third
                        parties.{' '}
                      </p>
                      <p>
                        If something didn’t change, my role was going to cease
                        to be that of funding forward vision, and rather one of
                        cutting loses, reducing spend, and preparing the company
                        for transition to private equity under new management
                        who already had these problems worked out. Or at best,
                        we might regress back to the declining margins of B2B
                        just to buy a little more time.{' '}
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
                      <li>Get Control of 3rd party vendor spend.</li>
                      <li>Make decisions based on data rather than opinion.</li>
                      <li>
                        Trust that retail operations can achieve on measured
                        growth initiatives.
                      </li>
                      <li>
                        Trust that retail operations can restore predictability.
                      </li>
                      <li>
                        I’m back to making decisions on our growth, not slowing
                        our eventual demise.
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
                        We decided it was time to make a leap and hire a CIO,
                        Mr. Disruptive as he’s now known. He looked at the mess
                        of third-party service costs, integration nightmares,
                        and incompatible technologies and said, "We’re changing
                        all of this, or it's not going to work."
                      </p>
                      <p>
                        I trusted him. He shared his experience which help me
                        find resolve in that what we were going through is
                        normal and is called Digital Transformation. Our growth
                        initiatives had naturally moved into something he called
                        a Distributed Technology Architecture.
                      </p>
                      <p>
                        He brought in iPaaS.com, an integration platform as a
                        service. It was a new concept to me, but our problems
                        started to dissolve one after another. For starters,
                        because it is a multi-tenant cloud platform, we were
                        able to leverage other companies integration standards
                        and investments rather than using our own.
                        Point-to-point integration promises attempted by our API
                        enabled application providers and third parties had
                        become such a cost-prohibitive barrier, we didn’t know
                        there was another way until we saw it ourselves. Instead
                        of transferring data from system to system, which makes
                        all systems prone the moment any change is made to any
                        of the connected systems like an upgrade and since no
                        one party was responsible for the integration space,
                        that left a gap of responsibility whom nobody took
                        ownership for. Now data all goes into iPaaS.com. Instead
                        of paying ten service partners to argue over all the
                        problems I previously described, we have technology
                        monitoring not only the traffic in and out of each
                        source application, but also standards on how systems
                        are related to one another, which means we are free to
                        assess each new project without the massive overhead in
                        considering impacts to each previously connected systems
                        and their 3rd parties. He called this “End to End
                        ownership of Data” and this is the game changer that
                        only iPaaS.com can deliver. Instead of being trapped by
                        the old systems that had handcuffed us with a web of
                        messy integrations, we could change them out anytime we
                        wanted without risk of downtime.
                      </p>
                      <p>
                        Now rather than throwing money at tech issues and
                        working from a place of confusion with our Operations
                        Manager, I am back to doing what I am supposed to do,
                        which is to make real decisions about how to grow the
                        company. iPaaS.com provided a way to manage the bloated
                        vendor costs with a budgeted Managed Services for
                        Integration and Costs have not only gone down
                        significantly, the money we would have to paid out in
                        development services became a reasonable monthly outflow
                        so we could manage the fees with cash flow, rather than
                        capital outlay.
                      </p>
                      <p>
                        Mr. Disruptive has TV’s on the wall that change colors
                        when applications are at risk, and let’s us know that it
                        has already alerted the origin third party application
                        delegate. Revenue is increasing due to the improved
                        customer experience. And the new initiatives the Ops
                        Manager can now implement, like a customer facing App
                        and omni-channel customer experience, are easy and
                        managed with a network of resources trained to meet our
                        stated outcomes. The future is bright again.
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
                            At best, we might regress back to the declining
                            margins of B2B just to buy a little more time.{' '}
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
                      content="I knew what we had to do to keep up with the retail industry giants; now the CFO and I can agree AND we can afford the kind of innovations I need."
                      button="Read More"
                      link="/why-ipaas/coo"
                    ></GenCol>
                    <GenCol
                      image={dummy4}
                      title="CMO"
                      content="We all serve the bottom line, me as much as anyone. But when my story is in lock-step with bottom-line vision, the top line can soar."
                      button="Read More"
                      link="/why-ipaas/cmo"
                    ></GenCol>
                    <GenCol
                      image={dummy3}
                      title="CIO"
                      content="The CFO is at first the hardest, and finally the easiest to convince that iPaaS will cost you less and earn you more."
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
