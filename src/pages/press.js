import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'
import Post from '../components/post'
import { Container, Row, Image } from 'react-bootstrap'
import { globalHistory } from '@reach/router'
import { Link } from 'gatsby'
import SVGLoader from '../components/loader'
const CMS_API_URL = process.env.CMS_API_URL
const CMS_URL = process.env.CMS_URL
const GATSBY_APP_URL = process.env.GATSBY_APP_URL
const urljoin = require('url-join')

class App extends Component {
  state = {
    CMS_URL: CMS_URL,
    press_posts: [],
    press_categories: [],
    page_url: urljoin(GATSBY_APP_URL, '/press'),
    // press_post: [],
    press_post: [
      {
        title: ['Loading...'],
        created: '',
        changed: '',
        field_cover: '',
        press_summary: '',
        body: '',
      },
    ],

    press_id: null,
    last_press_id: null,
    is_single_press: false,
    press_body_content: null,
    a_href: null,
    press_title: 'Press',
    page_data: {
      metatag: { value: { title: null, description: null, abstract: null } },
      field_banner: [{ url: null }],
      title: [{ value: null }],
      body: [
        {
          value: null,
          format: null,
          processed: null,
          summary: null,
          summary_processed: null,
        },
      ],
      field_two_columns_description: [
        {
          value: null,
          format: null,
          processed: null,
          summary: null,
          summary_processed: null,
        },
      ],
      field_two_columns_title_descript: [
        {
          value: null,
          format: null,
          processed: null,
          summary: null,
          summary_processed: null,
        },
      ],
      page_body_content: null,
    },
  }

  componentDidUpdate() {
    const URL_PATH = globalHistory.location
    const a_href_local = URL_PATH.href

    // console.log(a_href_local);

    if (this.state.a_href != a_href_local) {
      const url_segs = URL_PATH.pathname.split('/')
      const press_id = url_segs[2]
      const press_term = url_segs[1]

      if (
        press_id == null ||
        press_id == '' ||
        typeof press_id === 'undefined' ||
        press_id == 'category'
      ) {
        if (press_id == 'category') {
          const term_id = URL_PATH.search.replace('?id=', '')
          if (term_id >= 1) {
            axios
              .get(
                CMS_API_URL + 'v1/press/press_posts_by_taxonomy?tid=' + term_id
              )
              .then(res => {
                const press_posts = res.data
                this.setState({ press_posts })
              })
              .catch(error => {
                console.log(error.response)
              })
          }
        } else {
          const page_seg_one = url_segs[1]
          const page_seg_two = url_segs[2]
          var page_url_to_call
          if (typeof page_seg_two !== 'undefined' && page_seg_two.length >= 1) {
            page_url_to_call = '/' + page_seg_one + '/' + page_seg_two
          } else {
            page_url_to_call = '/' + page_seg_one
          }

          axios
            .get(
              CMS_API_URL +
                'v1/pages/get_page_by_url?pageurl=' +
                page_url_to_call
            )
            .then(res => {
              const page_data = res.data[0]
              this.setState({ page_data })
              if (
                typeof page_data !== 'undefined' &&
                typeof page_data.body[0].processed !== 'undefined'
              ) {
                const page_body_content = page_data.body[0].processed.replace(
                  /src="\//g,
                  `src="${CMS_URL}/`
                )
                this.setState({ page_body_content })
              }
            })
            .catch(error => {
              // console.log(error.response)
            })

          axios
            .get(CMS_API_URL + 'v1/press/press_releases')
            .then(res => {
              const press_posts = res.data
              this.setState({ press_posts })
            })
            .catch(error => {
              console.log(error.response)
            })
        }
      } else {
        if (this.state.last_press_id != press_id) {
          this.setState({ last_press_id: press_id })
          this.setState({ press_id: press_id })

          axios
            .get(
              CMS_API_URL +
                'v1/press/single_by_url_alias_with_all_data?alias=/' +
                press_term +
                '/' +
                press_id
            )
            .then(res => {
              const press_post = res.data[0]
              if (
                typeof press_post !== 'undefined' &&
                typeof press_post.body[0].processed !== 'undefined'
              ) {
                const press_body_content = press_post.body[0].processed.replace(
                  /src="\//g,
                  `src="${CMS_URL}/`
                )
                this.setState({ press_body_content })
              } else {
                const press_body_content = press_post.body[0].processed
                this.setState({ press_body_content })
              }

              this.setState({ press_post })
            })
            .catch(error => {
              console.log(error.response)
            })

          axios
            .get(CMS_API_URL + 'v1/taxonomy/get_all')
            .then(res => {
              const press_categories = res.data
              this.setState({ press_categories })
            })
            .catch(error => {
              console.log(error.response)
            })
        }
      }

      this.setState({ a_href: a_href_local })
    } else {
      setTimeout(function() {
        var press_posts_loader = document.getElementsByClassName(
          'PressPostsLoader'
        )[0]
        if (typeof press_posts_loader !== 'undefined') {
          press_posts_loader.style.display = 'none'
        }

        var single_press_loader = document.getElementsByClassName(
          'SinglePressLoader'
        )[0]
        if (typeof single_press_loader !== 'undefined') {
          single_press_loader.style.display = 'none'
        }
      }, 100)
    }
  }

  componentDidMount() {
    const URL_PATH = globalHistory.location
    const url_segs = URL_PATH.pathname.split('/')
    const press_id = url_segs[2]
    const press_term = url_segs[1]
    const last_press_id = this.state.last_press_id

    if (press_id == null || press_id == '' || press_id == 'category') {
      if (press_id == 'category') {
        const page_seg_one = url_segs[1]
        const page_seg_two = url_segs[2]
        var page_url_to_call

        page_url_to_call = '/' + page_seg_one

        axios
          .get(
            CMS_API_URL + 'v1/pages/get_page_by_url?pageurl=' + page_url_to_call
          )
          .then(res => {
            const page_data = res.data[0]
            this.setState({ page_data })
            if (
              typeof page_data !== 'undefined' &&
              typeof page_data.body[0].processed !== 'undefined'
            ) {
              const page_body_content = page_data.body[0].processed.replace(
                /src="\//g,
                `src="${CMS_URL}/`
              )
              this.setState({ page_body_content })
            }
          })
          .catch(error => {
            // console.log(error.response)
          })

        const press_category = url_segs[3]

        axios
          .get(CMS_API_URL + 'v1/taxonomy/get_all?talias=/' + press_category)
          .then(res => {
            const taxonomy_data = res.data
            // this.setState({press_posts});
          })
          .catch(error => {
            console.log(error.response)
          })
        const term_id = URL_PATH.search.replace('?id=', '')
        if (term_id >= 1) {
          axios
            .get(
              CMS_API_URL + 'v1/press/press_posts_by_taxonomy?tid=' + term_id
            )
            .then(res => {
              const press_posts = res.data
              this.setState({ press_posts })
            })
            .catch(error => {
              console.log(error.response)
            })
        }
      } else {
        const page_seg_one = url_segs[1]
        const page_seg_two = url_segs[2]
        var page_url_to_call
        if (typeof page_seg_two !== 'undefined' && page_seg_two.length >= 1) {
          page_url_to_call = '/' + page_seg_one + '/' + page_seg_two
        } else {
          page_url_to_call = '/' + page_seg_one
        }

        axios
          .get(
            CMS_API_URL + 'v1/pages/get_page_by_url?pageurl=' + page_url_to_call
          )
          .then(res => {
            const page_data = res.data[0]
            this.setState({ page_data })
            if (
              typeof page_data !== 'undefined' &&
              typeof page_data.body[0].processed !== 'undefined'
            ) {
              const page_body_content = page_data.body[0].processed.replace(
                /src="\//g,
                `src="${CMS_URL}/`
              )
              this.setState({ page_body_content })
            }
          })
          .catch(error => {
            // console.log(error.response)
          })

        axios
          .get(CMS_API_URL + 'v1/press/press_releases')
          .then(res => {
            const press_posts = res.data
            this.setState({ press_posts })
          })
          .catch(error => {
            console.log(error.response)
          })
      }
    } else {
      this.setState({ press_id: press_id })
      axios
        .get(
          CMS_API_URL +
            'v1/press/single_by_url_alias_with_all_data?alias=/' +
            press_term +
            '/' +
            press_id
        )
        .then(res => {
          const press_post = res.data[0]
          this.setState({ press_post })

          if (
            typeof press_post !== 'undefined' &&
            typeof press_post.body.value !== 'undefined'
          ) {
            const press_body_content = press_post.body.value.replace(
              /src="\//g,
              `src="${CMS_URL}/`
            )
            this.setState({ press_body_content })
          } else {
            const press_body_content = press_post.body.value
            this.setState({ press_body_content })
          }
        })
        .catch(error => {
          console.log(error.response)
        })

      axios
        .get(CMS_API_URL + 'v1/taxonomy/get_all')
        .then(res => {
          const press_categories = res.data
          this.setState({ press_categories })
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  }

  render() {
    const URL_PATH = globalHistory.location
    const url_segs = URL_PATH.pathname.split('/')
    const press_id = url_segs[2]
    const full_month_names = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const short_month_names = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]

    if (press_id == null || press_id == '' || typeof press_id === 'undefined') {
      const current_url = globalHistory.location.href

      return (
        <>
          <Layout>
            <SEO
              url={current_url}
              title={this.state.page_data.metatag.value.title}
              image={this.state.page_data.field_banner[0].url}
              description={this.state.page_data.metatag.value.description}
            />
            <main>
              <Banner
                title={this.state.page_data.title[0].value}
                fluid="true"
                image={this.state.page_data.field_banner[0].url}
              />
              <div className="postHolder">
                <Container>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.page_body_content,
                    }}
                  />
                  <SVGLoader loaderClass="PressPostsLoader" />
                  <Row>
                    {this.state.press_posts.map(press_posts => (
                      <Post
                        xs={12}
                        md={6}
                        lg={4}
                        image={this.state.CMS_URL + press_posts.field_cover}
                        link={press_posts.url_alias}
                        title={press_posts.title}
                        content={press_posts.press_summary}
                        date={press_posts.created}
                      ></Post>
                    ))}
                  </Row>
                </Container>
              </div>
            </main>
          </Layout>
        </>
      )
    } else if (this.state.press_post.hasOwnProperty('title')) {
      const created_date = new Date(this.state.press_post.created[0].value)
      const formated_date =
        short_month_names[created_date.getMonth()] +
        '-' +
        created_date.getDate() +
        '-' +
        created_date.getFullYear()
      const current_url = globalHistory.location.href
      return (
        <>
          <Layout>
            <SEO
              url={current_url}
              title={this.state.press_post.metatag.value.title}
              image={this.state.press_post.field_cover[0].url}
              description={this.state.page_data.metatag.value.description}
            />
            <main>
              <div className="pressDetail">
                <Container>
                  <SVGLoader loaderClass="SinglePressLoader" />
                  <div className="pressDetailRow">
                    <div className="pressDetailInnerContent">
                      <div className="pressDetailInnerCaption">
                        <span className="date">{formated_date}</span>
                        <h2>{this.state.press_post.title[0].value}</h2>
                      </div>
                      <div className="imageWrap">
                        <Image
                          src={this.state.press_post.field_cover[0].url}
                        ></Image>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: this.state.press_body_content,
                        }}
                      />
                    </div>
                  </div>
                  {/* <Link to='/press' className="btn btn-danger mt-4">Back to press</Link> */}
                </Container>
              </div>
            </main>
          </Layout>
        </>
      )
    } else {
      const current_url = globalHistory.location.href
      return (
        <Layout>
          <SEO
            url={current_url}
            title={this.state.page_data.metatag.value.title}
            image={this.state.page_data.field_banner[0].url}
            description={this.state.page_data.metatag.value.description}
          />
          <main>
            <Banner
              title={this.state.page_data.title[0].value}
              fluid="true"
              image={this.state.page_data.field_banner[0].url}
            />
          </main>
        </Layout>
      )
    }
  }
}

export default App
