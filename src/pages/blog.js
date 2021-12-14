import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'
import Post from '../components/post'
import SVGLoader from '../components/loader'
import imageBanner from '../assets/images/Blog_Header.jpg'
import { Container, Row, Image } from 'react-bootstrap'
import { globalHistory } from '@reach/router'
import { Link } from 'gatsby'
const CMS_API_URL = process.env.CMS_API_URL
const CMS_URL = process.env.CMS_URL
const GATSBY_APP_URL = process.env.GATSBY_APP_URL
const urljoin = require('url-join')

class App extends Component {
  state = {
    CMS_URL: CMS_URL,
    blog_posts: [],
    blog_categories: [],
    page_url: urljoin(GATSBY_APP_URL, '/blog'),
    // blog_post: [],
    blog_post: [
      {
        title: ['Loading...'],
        created: '',
        changed: '',
        field_cover: '',
        blog_summary: '',
        body: '',
      },
    ],

    blog_id: null,
    last_blog_id: null,
    is_single_blog: false,
    blog_body_content: null,
    a_href: null,
    blog_title: 'Blog',
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

    if (this.state.a_href != a_href_local) {
      const url_segs = URL_PATH.pathname.split('/')
      const blog_id = url_segs[2]
      const blog_term = url_segs[1]

      if (
        blog_id == null ||
        blog_id == '' ||
        typeof blog_id === 'undefined' ||
        blog_id == 'category'
      ) {
        if (blog_id == 'category') {
          const term_id = URL_PATH.search.replace('?id=', '')
          if (term_id >= 1) {
            var blog_posts_loader = document.getElementsByClassName(
              'BlogPostsLoader'
            )[0]
            if (typeof blog_posts_loader !== 'undefined') {
              blog_posts_loader.style.display = 'block'
            }

            axios
              .get(
                CMS_API_URL + 'v1/blog/blog_posts_by_taxonomy?tid=' + term_id
              )
              .then(res => {
                const blog_posts = res.data
                this.setState({ blog_posts })
                setTimeout(function() {
                  var blog_posts_loader = document.getElementsByClassName(
                    'BlogPostsLoader'
                  )[0]
                  if (typeof blog_posts_loader !== 'undefined') {
                    blog_posts_loader.style.display = 'none'
                  }
                }, 500)
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

          var blog_single_post_loader = document.getElementsByClassName(
            'BlogSinglePostLoader'
          )[0]
          if (typeof blog_single_post_loader !== 'undefined') {
            blog_single_post_loader.style.display = 'block'
          }

          var blog_posts_loader = document.getElementsByClassName(
            'BlogPostsLoader'
          )[0]
          if (typeof blog_posts_loader !== 'undefined') {
            blog_posts_loader.style.display = 'block'
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
            .get(CMS_API_URL + 'v1/blog/blog_posts')
            .then(res => {
              const blog_posts = res.data
              this.setState({ blog_posts })
              setTimeout(function() {
                var blog_posts_loader = document.getElementsByClassName(
                  'BlogPostsLoader'
                )[0]
                if (typeof blog_posts_loader !== 'undefined') {
                  blog_posts_loader.style.display = 'none'
                }
              }, 500)
            })
            .catch(error => {
              console.log(error.response)
            })
        }
      } else {
        if (this.state.last_blog_id != blog_id) {
          this.setState({ last_blog_id: blog_id })
          this.setState({ blog_id: blog_id })
          setTimeout(function() {
            var blog_single_post_loader = document.getElementsByClassName(
              'BlogSinglePostLoader'
            )[0]
            if (typeof blog_single_post_loader !== 'undefined') {
              blog_single_post_loader.style.display = 'none'
            }
          }, 500)

          axios
            .get(
              CMS_API_URL +
                'v1/blog/single_by_url_alias_with_all_data?alias=/' +
                blog_term +
                '/' +
                blog_id
            )
            .then(res => {
              const blog_post = res.data[0]
              if (typeof blog_single_post_loader !== 'undefined') {
                blog_single_post_loader.style.display = 'none'
              }
              if (
                typeof blog_post !== 'undefined' &&
                typeof blog_post.body[0].processed !== 'undefined'
              ) {
                const blog_body_content = blog_post.body[0].processed.replace(
                  /src="\//g,
                  `src="${CMS_URL}/`
                )
                this.setState({ blog_body_content })
              } else {
                const blog_body_content = blog_post.body[0].processed
                this.setState({ blog_body_content })
              }

              this.setState({ blog_post })

              setTimeout(function() {
                var blog_single_post_loader = document.getElementsByClassName(
                  'BlogSinglePostLoader'
                )[0]
                if (typeof blog_single_post_loader !== 'undefined') {
                  blog_single_post_loader.style.display = 'none'
                }
              }, 500)
            })
            .catch(error => {
              console.log(error.response)
            })

          var blog_categories_loader = document.getElementsByClassName(
            'BlogCategoriesLoader'
          )[0]
          if (typeof blog_categories_loader !== 'undefined') {
            blog_categories_loader.style.display = 'block'
          }

          axios
            .get(CMS_API_URL + 'v1/taxonomy/get_all')
            .then(res => {
              const blog_categories = res.data
              this.setState({ blog_categories })
              setTimeout(function() {
                var blog_categories_loader = document.getElementsByClassName(
                  'BlogCategoriesLoader'
                )[0]
                if (typeof blog_categories_loader !== 'undefined') {
                  blog_categories_loader.style.display = 'none'
                }
              }, 500)
            })
            .catch(error => {
              console.log(error.response)
            })
        }
      }

      this.setState({ a_href: a_href_local })
    } else {
      setTimeout(function() {
        var blog_single_post_loader = document.getElementsByClassName(
          'BlogSinglePostLoader'
        )[0]
        if (typeof blog_single_post_loader !== 'undefined') {
          blog_single_post_loader.style.display = 'none'
        }

        var blog_categories_loader = document.getElementsByClassName(
          'BlogCategoriesLoader'
        )[0]
        if (typeof blog_categories_loader !== 'undefined') {
          blog_categories_loader.style.display = 'none'
        }
      }, 100)
    }
  }

  componentDidMount() {
    const URL_PATH = globalHistory.location
    const url_segs = URL_PATH.pathname.split('/')
    const blog_id = url_segs[2]
    const blog_term = url_segs[1]
    const last_blog_id = this.state.last_blog_id

    if (blog_id == null || blog_id == '' || blog_id == 'category') {
      if (blog_id == 'category') {
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

        const blog_category = url_segs[3]
        var blog_categories_loader = document.getElementsByClassName(
          'BlogCategoriesLoader'
        )[0]
        if (typeof blog_categories_loader !== 'undefined') {
          blog_categories_loader.style.display = 'block'
        }

        axios
          .get(CMS_API_URL + 'v1/taxonomy/get_all?talias=/' + blog_category)
          .then(res => {
            const taxonomy_data = res.data
            // this.setState({blog_posts});
            setTimeout(function() {
              var blog_categories_loader = document.getElementsByClassName(
                'BlogCategoriesLoader'
              )[0]
              if (typeof blog_categories_loader !== 'undefined') {
                blog_categories_loader.style.display = 'none'
              }
            }, 500)
          })
          .catch(error => {
            console.log(error.response)
          })
        const term_id = URL_PATH.search.replace('?id=', '')
        if (term_id >= 1) {
          var blog_posts_loader = document.getElementsByClassName(
            'BlogPostsLoader'
          )[0]
          if (typeof blog_posts_loader !== 'undefined') {
            blog_posts_loader.style.display = 'block'
          }

          axios
            .get(CMS_API_URL + 'v1/blog/blog_posts_by_taxonomy?tid=' + term_id)
            .then(res => {
              const blog_posts = res.data
              this.setState({ blog_posts })
              setTimeout(function() {
                var blog_posts_loader = document.getElementsByClassName(
                  'BlogPostsLoader'
                )[0]
                if (typeof blog_posts_loader !== 'undefined') {
                  blog_posts_loader.style.display = 'none'
                }
              }, 500)
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

        var blog_posts_loader = document.getElementsByClassName(
          'BlogPostsLoader'
        )[0]
        if (typeof blog_posts_loader !== 'undefined') {
          blog_posts_loader.style.display = 'block'
        }

        axios
          .get(CMS_API_URL + 'v1/blog/blog_posts')
          .then(res => {
            const blog_posts = res.data
            this.setState({ blog_posts })
            setTimeout(function() {
              var blog_posts_loader = document.getElementsByClassName(
                'BlogPostsLoader'
              )[0]
              if (typeof blog_posts_loader !== 'undefined') {
                blog_posts_loader.style.display = 'none'
              }
            }, 500)
          })
          .catch(error => {
            console.log(error.response)
          })
      }
    } else {
      this.setState({ blog_id: blog_id })

      var blog_single_post_loader = document.getElementsByClassName(
        'BlogSinglePostLoader'
      )[0]
      if (typeof blog_single_post_loader !== 'undefined') {
        blog_single_post_loader.style.display = 'block'
      }

      axios
        .get(
          CMS_API_URL +
            'v1/blog/single_by_url_alias_with_all_data?alias=/' +
            blog_term +
            '/' +
            blog_id
        )
        .then(res => {
          const blog_post = res.data[0]
          this.setState({ blog_post })

          setTimeout(function() {
            var blog_single_post_loader = document.getElementsByClassName(
              'BlogSinglePostLoader'
            )[0]
            if (typeof blog_single_post_loader !== 'undefined') {
              blog_single_post_loader.style.display = 'none'
            }
          }, 500)

          if (
            typeof blog_post !== 'undefined' &&
            typeof blog_post.body.value !== 'undefined'
          ) {
            const blog_body_content = blog_post.body.value.replace(
              /src="\//g,
              `src="${CMS_URL}/`
            )
            this.setState({ blog_body_content })
          } else {
            const blog_body_content = blog_post.body.value
            this.setState({ blog_body_content })
          }
        })
        .catch(error => {
          console.log(error.response)
        })

      var blog_categories_loader = document.getElementsByClassName(
        'BlogCategoriesLoader'
      )[0]
      if (typeof blog_categories_loader !== 'undefined') {
        blog_categories_loader.style.display = 'block'
      }

      axios
        .get(CMS_API_URL + 'v1/taxonomy/get_all')
        .then(res => {
          const blog_categories = res.data
          this.setState({ blog_categories })
          setTimeout(function() {
            var blog_categories_loader = document.getElementsByClassName(
              'BlogCategoriesLoader'
            )[0]
            if (typeof blog_categories_loader !== 'undefined') {
              blog_categories_loader.style.display = 'none'
            }
          }, 500)
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  }

  render() {
    const URL_PATH = globalHistory.location
    const url_segs = URL_PATH.pathname.split('/')
    const blog_id = url_segs[2]
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

    if (
      blog_id == null ||
      blog_id == '' ||
      typeof blog_id === 'undefined' ||
      blog_id == 'category'
    ) {
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
                  <Row>
                    <SVGLoader loaderClass="BlogPostsLoader" />
                    {this.state.blog_posts.map(blog_posts => (
                      <Post
                        xs={12}
                        md={6}
                        lg={4}
                        image={this.state.CMS_URL + blog_posts.field_cover}
                        link={blog_posts.url_alias}
                        title={blog_posts.title}
                        content={blog_posts.blog_summary}
                        date={blog_posts.created}
                      ></Post>
                    ))}
                  </Row>
                </Container>
              </div>
            </main>
          </Layout>
        </>
      )
    } else if (this.state.blog_post.hasOwnProperty('title')) {
      const created_date = new Date(this.state.blog_post.created[0].value)
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
              title={this.state.blog_post.metatag.value.title}
              image={this.state.blog_post.field_cover[0].url}
              description={this.state.page_data.metatag.value.description}
            />
            <main>
              <div className="blogDetail">
                <Container>
                  <div className="blogDetailRow">
                    <div className="blogDetailInnerContent">
                      <div className="blogDetailInnerCaption">
                        <span className="date">{formated_date}</span>
                        <h2>{this.state.blog_post.title[0].value}</h2>
                      </div>
                      <SVGLoader loaderClass="BlogSinglePostLoader" />
                      <div className="imageWrap">
                        <Image
                          src={this.state.blog_post.field_cover[0].url}
                        ></Image>
                      </div>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: this.state.blog_body_content,
                        }}
                      />
                    </div>
                    <div className="archivMenu d-none d-md-block">
                      <div className="archivMenuInner">
                        <h5>Categories</h5>
                        <ul>
                          <SVGLoader loaderClass="BlogCategoriesLoader" />
                          {/* {this.state.blog_categories.map(blog_categories => <li><a href={'/blog/category'+blog_categories.path[0].alias}>{blog_categories.name[0].value}</a></li> )} */}
                          {this.state.blog_categories.map(blog_categories => (
                            <li>
                              <Link
                                to={
                                  '/blog/category' +
                                  blog_categories.path[0].alias +
                                  '?id=' +
                                  blog_categories.tid[0].value
                                }
                              >
                                {blog_categories.name[0].value}
                              </Link>
                            </li>
                          ))}
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
