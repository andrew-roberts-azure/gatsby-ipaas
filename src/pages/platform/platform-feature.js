import React, { Component } from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Banner from '../../components/banner'
import GetStarted from '../../components/getStarted'
import imageBanner from '../../assets/images/platformFeature/banner.jpg'
import sideThumb_1 from '../../assets/images/platformFeature/reporting.jpg'
import sideThumb_2 from '../../assets/images/platformFeature/dashboard.jpg'
import sideThumb_3 from '../../assets/images/platformFeature/staging.jpg'
import sideThumb_4 from '../../assets/images/platformFeature/private.jpg'
import sideThumb_5 from '../../assets/images/platformFeature/ftp.jpg'
import sideThumb_6 from '../../assets/images/platformFeature/schdule.jpg'
import sideThumb_7 from '../../assets/images/platformFeature/monitoring.jpg'
import SideBySide from '../../components/sideBySide'
import { Container, Row, Col, Image } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO
            title="Platform Features"
            description="We are setting the curve in the world of iPaaS with a visionary approach to your or your customers’ distributed architecture."
            image="https://ipaas.com/static/banner-22aca3648b6c9cb009aac62f4d7cee03.jpg"
            keywords={[
              `iPaaS`,
              `Integration Platform`,
              `Enterprise`,
              `Enterprise Applications`,
            ]}
          />
          <main>
            <Banner
              title="Integration Features"
              fluid="true"
              image={imageBanner}
            />
            <div className="whiIpaas openApi">
              <div className="simpleContent mb-5">
                <Container>
                  <div className="content text-center">
                    <h2>
                      Next Generation iPaaS Functionality <br />
                      and Performance Monitoring
                    </h2>
                    <p>
                      We are setting the curve in the world of iPaaS with a
                      visionary approach to your or your customers’ distributed
                      architecture.
                    </p>
                    <p>
                      We’ve built our platform with a user-first apporach
                      designed to give you or your MISP the kind of real-time
                      data around your systems’ communications previously
                      unheard of as part of our standard automation. Built-in
                      intelligence and dashboarding, along with intuitive
                      dynamic integrations that can be added in a modicum of the
                      time it took in the past, means you can make decisions
                      about what systems you use and how you use them with a
                      360° visibility you didn’t know possible.
                    </p>
                    <p>Learn more about iPaaS.com APIs in Developer Tools.</p>
                  </div>
                </Container>
              </div>
              <div className="sideBySide_Z whyipaasHolder">
                <div className="SideBySide">
                  <Container>
                    <div className="sideBysideContent">
                      <Row>
                        <Col xs={12} md={7}>
                          <div className="contentSection">
                            <h3>Advanced Reporting​</h3>
                            <p>
                              When every system stands alone, it is hard to
                              identify the source of common problems to your
                              technology ecosystem. That’s why iPaaS.com
                              provides performance reporting on all of your
                              integrated applications. You will be able to
                              compare the most active applications, the slowest
                              applications, applications that cause the most
                              errors, or have the greatest cost impact to your
                              network. You can even identify systems that leave
                              other systems in a prone state. This managed
                              services offering will aid you in keeping
                              distributed architecture operating at peak
                              performance.
                            </p>
                          </div>
                        </Col>
                        <Col xs={12} md={5}>
                          <div className="imageSection">
                            <Image src={sideThumb_1}></Image>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Container>
                </div>
                <div className="SideBySide">
                  <Container>
                    <div className="sideBysideContent">
                      <Row>
                        <Col xs={12} md={7}>
                          <div className="contentSection">
                            <h3>Dashboarding </h3>
                            <p>
                              Integrated Digital Signage by Google and
                              onwall.stream enables you to present real-time
                              content from iPaaS.com directly to a TV on your
                              wall. Imagine monitoring your integrations, volume
                              and statuses just like you do with Google
                              Analytics or your other managed services like
                              network equipment, servers, and workstations.
                            </p>
                          </div>
                        </Col>
                        <Col xs={12} md={5}>
                          <div className="imageSection">
                            <Image src={sideThumb_2}></Image>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Container>
                </div>
                <div className="SideBySide">
                  <Container>
                    <div className="sideBysideContent">
                      <Row>
                        <Col xs={12} md={7}>
                          <div className="contentSection">
                            <h3>Staging Environment Included</h3>
                            <p>
                              iPaaS.com offers private staging areas for testing
                              integrations or modified configurations. This is
                              very useful when preparing to replace an
                              application or when preparing for an upgrade.
                            </p>
                            <p>
                              With a few clicks, you can create a copy of your
                              production settings into a private staging
                              environment. Adjustment your settings and connect
                              to lab applications. Perform your testing until
                              ready to launch.
                            </p>
                            <p>
                              Switchover is easy. Just ask iPaaS.com to promote
                              your staged environment settings into production.
                            </p>
                          </div>
                        </Col>
                        <Col xs={12} md={5}>
                          <div className="imageSection">
                            <Image src={sideThumb_3}></Image>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Container>
                </div>
                <div className="SideBySide">
                  <Container>
                    <div className="sideBysideContent">
                      <Row>
                        <Col xs={12} md={7}>
                          <div className="contentSection">
                            <h3>Private and Dynamic Integrations</h3>
                            <p>
                              iPaaS.com provides a fully configurable ability to
                              create private access integrations from wtihin the
                              portal. All dynamic integration features comply
                              with iPaaS.com offerings as if they are natively
                              supported integrations.
                            </p>
                          </div>
                        </Col>
                        <Col xs={12} md={5}>
                          <div className="imageSection">
                            <Image src={sideThumb_4}></Image>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Container>
                </div>
                <div className="SideBySide">
                  <Container>
                    <div className="sideBysideContent">
                      <Row>
                        <Col xs={12} md={7}>
                          <div className="contentSection">
                            <h3>FTP Import and Export</h3>
                            <p>
                              Want your data in a custom formatted CSV, JSON,
                              XML? <br />
                              You want it delivered to your application server?{' '}
                              <br />
                              You want to stage data from a legacy system for
                              pickup by iPaaS.com?
                            </p>
                            <p>
                              No problem. iPaaS.com provides features to
                              configure Importing and Exporting of data on a
                              one-time or scheduled basis.
                            </p>
                          </div>
                        </Col>
                        <Col xs={12} md={5}>
                          <div className="imageSection">
                            <Image src={sideThumb_5}></Image>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Container>
                </div>
                <div className="SideBySide">
                  <Container>
                    <div className="sideBysideContent">
                      <Row>
                        <Col xs={12} md={7}>
                          <div className="contentSection">
                            <h3>Scheduled Tasks</h3>
                            <p>
                              A scheduling feature enables you to manage
                              activity by timeframes. You can FTP Import or
                              Export, or designate which timeframes are
                              acceptable to process API requests by application.
                            </p>
                          </div>
                        </Col>
                        <Col xs={12} md={5}>
                          <div className="imageSection">
                            <Image src={sideThumb_6}></Image>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Container>
                </div>
                <div className="SideBySide">
                  <Container>
                    <div className="sideBysideContent">
                      <Row>
                        <Col xs={12} md={7}>
                          <div className="contentSection">
                            <h3>Monitoring and Communications</h3>
                            <p>
                              Events such as Error can trigger escallations to
                              responsible parties alerting them to take action.
                              iPaaS.com enables you to receive those
                              communications directly or you may invite 3rd
                              party delegates (typically companies who you have
                              an SLA with for the product) to recieve
                              communications on your behalf.
                            </p>
                          </div>
                        </Col>
                        <Col xs={12} md={5}>
                          <div className="imageSection">
                            <Image src={sideThumb_7}></Image>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Container>
                </div>
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
