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
            title="COO/Director of Retail Operations"
            description="iPaaS for CIO, COO, CFO, and Retail Manager Roles"
            keywords={[
              `iPaaS`,
              `Integration Platform`,
              `Enterprise`,
              `Enterprise Applications`,
            ]}
          />
          <main>
            <Banner title="COO" fluid="true" image={imageBanner} />
            <div className="leadershipMemberSec">
              <Container>
                <div className="leadershipMemberContent">
                  <div className="leaderDtailSec">
                    <div className="leaderImgSec">
                      <Image src={dummy1}></Image>
                    </div>
                    <h4>Brook, Director of Retail Operations</h4>
                    <h6>The Problem</h6>
                    <ul>
                      <li>
                        I am consumed with broken technology problems instead of
                        my job.
                      </li>
                      <li>
                        I cannot deliver an integrated tech buying experience.
                      </li>
                      <li>
                        My staff is “doing” tech or managing third party tech.
                      </li>
                      <li>
                        Instead of positive reviews, my customers complain that
                        “gift cards don’t work online, loyalty balances don’t’
                        match, and where can I see my purchase history on
                        demand?.
                      </li>
                      <li>I am worried: “what is going to break next?”</li>
                    </ul>

                    <div
                      className={
                        this.state.isOpened1
                          ? 'isContent hidedContent'
                          : 'isContent'
                      }
                    >
                      <p>
                        I’m responsible for merchandising, marketing and demand
                        generation, inventory supply and control, Funds
                        Reconciliation, and most importantly, customer
                        experience. I’ve helped the company leap from regional
                        to national B2B order fulfilment, added a new B2C
                        ecommerce site, and now brick-and-mortar stores are on
                        the horizon. While normally I would be thrilled to add a
                        new business model, I am terrified because if we add one
                        more impossible-to-integrate technology to this
                        ecosystem, I am afraid we will collapse. I am a
                        retail-operations expert, not a technology manager, but
                        that is what I have essentially become.{' '}
                      </p>
                      <p>
                        Amazon and other heavyweights push the bar up
                        constantly, and customers expect ever-evolving
                        tech-enabled buying experiences like: In-store pickup,
                        online returns, omni-channel purchase visibility, and on
                        and on. Unfortunately, every time I find what looks to
                        be the perfect addition - like a loyalty app - to
                        address the market issue, it turns out to be more effort
                        to manage the hopeful benefit. I think I do everything
                        right, including making sure it has an API that can be
                        integrated, but inevitably we cause an integration
                        problem I can’t solve, or it works only until we upgrade
                        something else, so now I just worry about what is going
                        to break next.
                      </p>
                      <p>
                        The ecommerce site interfaces with our ERP, but no SaaS
                        POS option fits because the ERP is old and has API
                        limits. We will probably launch the pilot unintegrated
                        which will cause my team more manual processes. The
                        logistics company we outsource to manages most of the
                        fulfilment of orders except for the ecommerce site,
                        which partially worked for 4 months, but a recent
                        upgrade broke the ERP integration and inventory is now
                        "temporarily" managed separately between B2B and B2C in
                        separate systems. It was recommended by a vendor to run
                        an export into excel, make manual changes, and import
                        into the other. I don’t even know which one of our
                        vendors to call half the time, and they just blame each
                        other or give me advice I have no idea how to evaluate
                        objectively. Rather than making improvements like
                        omni-channel gift, loyalty, returns, and other services
                        my customers have come to expect, I chase tech problems
                        around all day, and am losing customers. I know what
                        this environment should look like, but I can’t make it
                        work the way I want, and I feel like I am letting down
                        my CFO, who just sees rising costs and diminishing
                        sales.
                      </p>
                      <p>
                        If we couldn’t solve these problems, ultimately I was
                        going to be blamed for failing the organization, even
                        though they really weren’t issues I had the power or
                        skills to solve.. If the company had chosen to continue
                        to select me as the solution for these problems, any
                        budget needed to provide technology outcomes would have
                        been immediately redirected to unskilled manpower and
                        eventually the company would have rejected me, my team,
                        and those technologies without learning anything.{' '}
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
                      <li>Tech that works so I can do my job.</li>
                      <li>
                        Confidence I can add new tech without slowing me down.
                      </li>
                      <li>
                        Restored trust between departments and alignment on
                        future retail strategies.
                      </li>
                      <li>
                        BOPIS, BORIS, and Ship-to-store are now standard and in
                        line with customer expectation.
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
                        With all these issues, our CFO brought on a CIO to clear
                        up the confusion, and he went to work immediately with a
                        product called iPaaS.com, which is an integration
                        platform for retail systems.
                      </p>
                      <p>
                        The platform was easy for non-tech types to set up. All
                        the time, effort and energy spent maintaining the
                        systems that were crashing became opportunity for adding
                        new tech we needed. Underperforming legacy systems were
                        replaced without downtime one-by-one, pre-integrated
                        point-of-sale offered advanced features and was flexible
                        for future expansion, but installed with the simplicity
                        of plug-and-play. The first two stores launched on-time.
                        I was able to use a managed integration services partner
                        (MISP) to add an across-channel loyalty program I’d
                        wanted for years and didn’t even think possible, along
                        with omni-channel gift cards. Oh, and
                        buy-online-pick-up-in-store? Return-to-store? They were
                        easy, and customers finally got access to their
                        cross-channel order history for easy review and reorder.{' '}
                      </p>
                      <p>
                        The employee that was importing and exporting data
                        between monitoring integrations is now designing a
                        mobile app for our B2B customers I’d always wanted but
                        never had the ability to focus on. I plan to extend that
                        to B2C consumers next year. Essentially, I am back to
                        doing what I do best: installing strategies to improve
                        our performance, enhance customer experience, and stay
                        ahead of the competition. The CFO and I are back in
                        alignment, and we are excited for the next fiscal year.
                        iPaaS.com let me do my job again.
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
                            The company would have rejected me, my team, and
                            those technologies without learning anything.
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
                      image={dummy2}
                      title="CFO"
                      content="I am not a merchandising or product expert, I just know what it takes to keep us financially sound.  Now I only have to worry about our future."
                      button="Read More"
                      link="/why-ipaas/cfo"
                    ></GenCol>
                    <GenCol
                      image={dummy4}
                      title="CMO"
                      content="Retail operations ultimately defines what our customers think about us.  When that is a series of 5-star reviews, I can launch us to the next level."
                      button="Read More"
                      link="/why-ipaas/cmo"
                    ></GenCol>
                    <GenCol
                      image={dummy3}
                      title="CIO"
                      content="Operations has the most to gain in the day-to-day from iPaaS. Digital transformation starts when the ops team is out of technology completely. "
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
