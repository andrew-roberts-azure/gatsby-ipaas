import React, { Component } from 'react'
import Layout from '../../components/layout'
import { Container, Row, Image } from 'react-bootstrap'
import SEO from '../../components/seo'
import imageBanner from '../../assets/images/company/banner.jpg'
import { Link } from 'gatsby'
import postImg_1 from '../../assets/images/blog/image25.jpg'
import postImg_2 from '../../assets/images/blog/image28.jpg'

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO
            title="Blog detail"
            keywords={[
              `iPaaS`,
              `Integration Platform`,
              `Enterprise`,
              `Enterprise Applications`,
            ]}
          />
          <main>
            <div className="blogDetail">
              <Container>
                <div className="blogDetailRow">
                  <div className="blogDetailInnerContent">
                    <div className="blogDetailInnerCaption">
                      <span className="date">Sep-10-2019</span>
                      <h2>What defines the CIO, and what makes a good one?</h2>
                    </div>
                    <div className="imageWrap">
                      <Image src={postImg_1}></Image>
                    </div>
                    <p>
                      The rise of the Chief Information Officer, or CIO, along
                      with other hyper-modern C-suite roles like Chief Digital
                      Officer, or Chief Data Officer, represents a tectonic
                      shift in the business leadership landscape, particularly
                      in retail when monolithic forces like Walmart and Amazon
                      monopolize industry growth and customer expectations force
                      digital transformation on businesses that otherwise might
                      not be ready for it.
                    </p>
                    <p>
                      What is the role of the modern CIO exactly? Tarun
                      Inuganti, Partner, CIO Practice with Korn/Ferry
                      International Consulting notes that "The ideal CIO is the
                      one who can bridge the gap between business and
                      technology. He provides value to the enterprise by helping
                      it harness its fullest potential using technology. He must
                      communicate the technology vision constantly to the entire
                      value supply chain of the enterprise."{' '}
                    </p>
                    <p>
                      This is no small feat. Retailers competing with massive
                      national chains face a minefield of challenges in keeping
                      up with the service levels customers have come to expect:
                      omni-channel buying experiences including loyalty and gift
                      cards/registries, pick-up or return anywhere, product
                      reviews and comparisons, and targeted outreach.
                      Accomplishing these outcomes is a weighty task inside an
                      organization with limited resources, older technologies
                      that remain difficult to replace, and unconnected systems
                      that prohibit omni-channel experiences.{' '}
                    </p>
                    <p>
                      The modern CIO, as a result, has a set of challenges that
                      span the entire organization. They must solve the digital
                      transformation problem across multiple departments,
                      complex business goals, and existing and potential new
                      technology solutions within the constraints of budget
                      while aligning executive and departmental leadership
                      around disruptive change.
                    </p>
                    <div className="imageWrap">
                      <img src={postImg_2} />
                    </div>
                    <p>
                      A recent Forbes article - "How The CIO Role Must Change
                      Due To Digital Transformation" – notes two key digital
                      threats to the role:
                    </p>
                    <ul>
                      <li>
                        {' '}
                        Recognition that digital transformation now makes
                        technology THE business, rather than technology
                        supporting the business; therefore, IT and CIO roles are
                        much more vital to growth in sales.
                      </li>
                      <li>
                        Competing through new digital models and digital
                        platforms, focusing on redefining the customer
                        experience and employee experience to create and deliver
                        new value.
                      </li>
                    </ul>
                    <p>
                      Because digital transformation is the number one priority
                      of the CIO, it’s important that they are equipped with the
                      tools and partnerships that enable an agile approach to
                      quickly and economically move as quickly as possible into
                      the most modern technology ecosystem. The key metrics
                      driving the effectiveness of that ecosystem include:
                    </p>
                    <ul>
                      <li>
                        Access to cross-referenceable data across all tech
                        platforms and ownership for each point of integration.
                      </li>
                      <li>
                        {' '}
                        The ability to upgrade, replace, or hot-swap technology
                        that is no longer serving business outcomes or
                        decreasing visibility across the organization
                      </li>
                      <li>
                        The removal of dependencies on third-party technology
                        service providers for critical data-driven outcomes or
                        integration integrity
                      </li>
                      <li>
                        A clear path toward aligning strategic, financial, and
                        operational goals under a technology ecosystem that
                        works toward rather than against executive objectives
                      </li>
                    </ul>
                    <p>
                      Without the tools required to achieve these and other
                      goals, digital transformation remains an expensive, uphill
                      technology battle waged both internally and externally,
                      that render the CIO’s KPI’s costly and combative. But when
                      CIO has a clear path to make decisions strategically
                      rather than reactively, digital transformation can become
                      part of the company culture and a cross-departmental
                      rallying cry for all future objectives.
                    </p>
                  </div>
                  <div className="archivMenu d-none d-md-block">
                    <div className="archivMenuInner">
                      <h5>Categories</h5>
                      <ul>
                        <li>
                          <a>CIO Resources</a>{' '}
                        </li>
                        <li>
                          <a>Tech Resources</a>{' '}
                        </li>
                        <li>
                          <a>Community</a>{' '}
                        </li>
                        <li>
                          <a>News</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <Link to='/blog' className="btn btn-danger mt-4">Back to blog</Link> */}
              </Container>
            </div>
          </main>
        </Layout>
      </>
    )
  }
}

export default App
