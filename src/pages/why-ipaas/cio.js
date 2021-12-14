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
            title="CIO"
            description="iPaaS for CIO, COO, CFO, and Retail Manager Roles"
            keywords={[
              `iPaaS`,
              `Integration Platform`,
              `Enterprise`,
              `Enterprise Applications`,
            ]}
          />
          <main>
            <Banner title="CIO" fluid="true" image={imageBanner} />
            <div className="leadershipMemberSec">
              <Container>
                <div className="leadershipMemberContent">
                  <div className="leaderDtailSec">
                    <div className="leaderImgSec">
                      <Image src={dummy3}></Image>
                    </div>
                    <h4>Ajay, CIO</h4>
                    <h6>The Problem</h6>
                    <ul>
                      <li>
                        Technology is a mixed bag of on-premise and cloud
                        platforms.
                      </li>
                      <li>
                        Company-wide dependence on unintegrated or incompatible
                        technology.
                      </li>
                      <li>
                        Unidentified responsibility gaps between staff and 3rd
                        parties.
                      </li>
                      <li>
                        Unidentified gap between strategic initiatives and
                        application.
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
                        I was brought in recently to begin untangling a web of
                        old systems, processes, and dataflows to rebuild a
                        technology and information delivery ecosystem capable of
                        rivaling the competition. It’s a common problem for
                        retailers, and characterized by breakdowns in
                        communication and workflow at every level of the
                        business.
                      </p>
                      <p>
                        It’s not the first time I’ve waved the digital
                        transformation wand at a company, and I have a rubric:
                        end-to-end control of data, SaaS systems that don’t
                        bludgeon my budget with costly and relentless upgrades,
                        and iron-clad processes for managing technical talent
                        and standards for onboarding new technology. And a
                        technology platform that can make that happen; for me
                        that is iPaaS.com.
                      </p>
                      <p>
                        I knew what I was up against, and budgetary constraints
                        were only one small part. There was a trust breakdown
                        happening between the CFO and Director of Retail
                        Operations, and that’s not uncommon when technology
                        issues become larger than business concerns. The ancient
                        ERP system had to go, but I was up against Mrs. Afraid
                        of Change on the finance team, and her right-hand Mr.
                        Loves Excel. Every other system was dependent on this
                        nightmare point-to-point data workflow, and replacing it
                        meant breaking a dozen critical integration pieces that
                        would immediately halt progress. Rewriting them wouldn’t
                        break us out of the cycle, and I didn’t have the budget
                        or time to rework them all even if I wanted to.
                      </p>
                      <p>
                        Complicating my issue, the B2B and B2C teams were
                        working separately because of bad dataflow and broken
                        integrations, and growing less aligned on how to move
                        forward technologically. The legacy ERP had limits and
                        was impossible to integrate with any modern SaaS POS
                        without massive customizations, and even trying to would
                        just create more problems: the already unintegrated
                        ecommerce unit would have no direct integration to
                        support BOPIS or other key in-store KPIs like returns,
                        loyalty, giftcards, cross channel payments
                        reconciliation, amongst others.
                      </p>
                      <p>
                        Continuing to scale the company technology this way was
                        untenable and would ultimately bankrupt it. If there
                        wasn’t a change away from this broken web of
                        integrations and trust breakdowns across the
                        organization, the greatest contributors in respective
                        silos would slowly move on to other productive
                        opportunities while the organization continued a steady
                        decline into a single-channel entity, whichever of those
                        that remained standing at the end, and the brand would
                        be unsalvageable.
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
                        Decisions are made from data rather than opinions.
                      </li>
                      <li>
                        Add new technology with stated outcomes and timelines.
                      </li>
                      <li>
                        Restore condence to team with required dependence upon
                        tech.
                      </li>
                      <li>Increase adaptability with technology.</li>
                      <li>
                        Reduce costs from all digital transformation efforts.
                      </li>
                      <li>Enable other departments to operate effectively.</li>
                    </ul>
                    <div
                      className={
                        this.state.isOpened2
                          ? 'isContent hidedContent'
                          : 'isContent'
                      }
                    >
                      <p>
                        I had experience with iPaaS.com previously. Using the
                        built-in Reusable Connectors, I was able to quickly
                        migrate data from the old ERP to a new system. While
                        that implementation was in progress, I worked with my
                        Managed Integration Service Partner (MISP) to configure
                        Managed Data Relationships, Validation Rules, Filtering
                        Rules, Dependency Handlers, and skyhooks to trigger
                        multi-system syncs between iPaaS.com and our 3PL’s tech,
                        ecommerce, and upgraded EDI, a powerful lightweight POS,
                        and several other applications.
                      </p>
                      <p>
                        They managed vendor expectations for me, pushing my
                        goals, not theirs, which actually made everyone happy as
                        the success stories started to compound for every
                        vendor. When the new ERP was ready to go live, instead
                        of dozens of connecting points to write, I needed only
                        one. And I did it all at 50% less than the costs of the
                        alternative.
                      </p>
                      <p>
                        All the systems worked together, but more importantly,
                        the CFO and Operations Manager began working together on
                        business goals rather than technology issues. None of
                        this is difficult with the right technologies and
                        Managed Integration Service Partner (MISP), and
                        iPaaS.com to make it possible for them to do their jobs;
                        it had already made it easy for me to do mine.
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
                            The greatest contributors would slowly move on to
                            other productive opportunities while the
                            organization continued a steady decline.
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
                      content="My role is where the rubber meets the road; the CIO listened and understood my unique retail challenges to make my life easier."
                      button="Read More"
                      link="/why-ipaas/coo"
                    ></GenCol>
                    <GenCol
                      image={dummy2}
                      title="CFO"
                      content="Without the CIO role filled, I was looking at inevitable downsizing. He put me back into the driver’s seat and brought the team together."
                      button="Read More"
                      link="/why-ipaas/cfo"
                    ></GenCol>
                    <GenCol
                      image={dummy4}
                      title="CMO"
                      content="The CIO brought digital transformation, and once again I could tell a true PR story of innovation and happy customers."
                      button="Read More"
                      link="/why-ipaas/cmo"
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
