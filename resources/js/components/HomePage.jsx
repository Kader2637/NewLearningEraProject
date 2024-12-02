import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* Banner Area */}
      <section
        className="banner-area-two banner-bg-two tg-motion-effects"
        data-background="assets/img/banner/banner_bg02.png"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6">
              <div className="banner__content-two">
                <h3 className="title" data-aos="fade-right" data-aos-delay="400">
                  Learning is
                  <span className="position-relative">
                    <svg
                      x="0px"
                      y="0px"
                      preserveAspectRatio="none"
                      viewBox="0 0 209 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565"
                        fill="currentcolor"
                      />
                    </svg>
                    What You
                  </span>
                  Make of it. Make it Yours at SkillGro.
                </h3>
                <div
                  className="banner__btn-two"
                  data-aos="fade-right"
                  data-aos-delay="600"
                >
                  <a href="contact.html" className="btn arrow-btn">
                    Start Free Trial{" "}
                    <img
                      src="assets/img/icons/right_arrow.svg"
                      alt="Right arrow icon"
                      className="injectable"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=b2Az7_lLh3g"
                    className="play-btn popup-video"
                  >
                    <i className="fas fa-play"></i> Watch Our <br /> Class Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-8">
              <div className="banner__images-two tg-svg">
                <img
                  src="assets/img/banner/h2_banner_img.png"
                  alt="Banner"
                  className="main-img"
                />
                <div
                  className="shape big-shape"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <img
                    src="assets/img/banner/h2_banner_shape01.svg"
                    alt="Shape decoration"
                    className="injectable tg-motion-effects1"
                  />
                </div>
                <span
                  className="svg-icon"
                  id="banner-svg"
                  data-svg-icon="assets/img/banner/h2_banner_shape02.svg"
                ></span>
                <div
                  className="about__enrolled"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <p className="title">
                    <span>36K+</span> Enrolled Students
                  </p>
                  <img src="assets/img/others/student_grp.png" alt="Group of students" />
                </div>
                <div
                  className="banner__student"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <img
                      src="assets/img/banner/h2_banner_icon.svg"
                      alt="Student icon"
                      className="injectable"
                    />
                  </div>
                  <div className="content">
                    <span>Total Students</span>
                    <h4 className="title">15K</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/img/banner/h2_banner_shape03.svg"
          alt="Decorative shape"
          className="line-shape-two"
          data-aos="fade-right"
          data-aos-delay="1600"
        />
      </section>

      <section className="features__area-two section-pt-120 section-pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section__title text-center mb-40">
                <span className="sub-title">Our Top Features</span>
                <h2 className="title">Achieve Your Goal With SkillGrow</h2>
                <p>
                  when an unknown printer took a galley of type and scrambled make <br /> specimen book has survived not only five centuries
                </p>
              </div>
            </div>
          </div>
          <div className="features__item-wrap">
            <div className="row justify-content-center">
              {['Expert Tutors', 'Effective Courses', 'Earn Certificate'].map((feature, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="features__item-two">
                    <div className="features__content-two">
                      <div className="content-top">
                        <div className="features__icon-two">
                          <img 
                            src={`assets/img/icons/h2_features_icon0${index + 1}.svg`} 
                            alt={`${feature} icon`} 
                            className="injectable" 
                          />
                        </div>
                        <h2 className="title">{feature}</h2>
                      </div>
                      <p>when an unknown printer took a galley of type and scrambled makes.</p>
                    </div>
                    <div className="features__item-shape">
                      <img src="assets/img/others/features_item_shape.svg" alt="Shape decoration" className="injectable" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-area-two tg-motion-effects section-pb-120">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="faq__img-wrap tg-svg">
                <div className="faq__img faq__img-two">
                  <img src="assets/img/others/faq_img.png" alt="FAQ visual" />
                  <div className="shape-one">
                    <img
                      src="assets/img/others/faq_shape01.svg"
                      className="injectable tg-motion-effects4"
                      alt="Shape decoration"
                    />
                  </div>
                  <div className="shape-two">
                    <span
                      className="svg-icon"
                      id="faq-two-svg"
                      data-svg-icon="assets/img/others/faq_shape02.svg"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about__content">
                <div className="section__title">
                  <span className="sub-title">Get More About Us</span>
                  <h2 className="title">
                    Thousand Of Top
                    <span className="position-relative">
                      <svg
                        x="0px"
                        y="0px"
                        preserveAspectRatio="none"
                        viewBox="0 0 209 59"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565"
                          fill="currentcolor"
                        />
                      </svg>
                      Courses
                    </span>
                    Now in One Place
                  </h2>
                </div>
                <p className="desc">
                  Groove’s intuitive shared inbox makes it easy for team members to organize, prioritize, and manage their work.
                  In this episode of the Smashing Pod, we’re talking about Web Platform Baseline.
                </p>
                <ul className="about__info-list list-wrap">
                  <li className="about__info-list-item">
                    <i className="flaticon-angle-right"></i>
                    <p className="content">The Most World Class Instructors</p>
                  </li>
                  <li className="about__info-list-item">
                    <i className="flaticon-angle-right"></i>
                    <p className="content">Access Your Class anywhere</p>
                  </li>
                  <li className="about__info-list-item">
                    <i className="flaticon-angle-right"></i>
                    <p className="content">Flexible Course Plan</p>
                  </li>
                </ul>
                <div className="tg-button-wrap">
                  <a href="about-us.html" className="btn arrow-btn">
                    Start Free Trial{" "}
                    <img
                      src="assets/img/icons/right_arrow.svg"
                      alt="Right arrow icon"
                      className="injectable"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="courses-area section-py-110" data-background="assets/img/bg/courses_bg.jpg">
            <div class="container">
                <div class="section__title-wrap">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-8">
                            <div class="section__title text-center mb-40">
                                <span class="sub-title">Top Class Courses</span>
                                <h2 class="title">Explore Our World's Best Courses</h2>
                                <p class="desc">When known printer took a galley of type scrambl edmake</p>
                            </div>
                            <div class="courses__nav">
                                <ul class="nav nav-tabs" id="courseTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all-tab-pane" type="button"
                                            role="tab" aria-controls="all-tab-pane" aria-selected="true">
                                            All Courses
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="design-tab" data-bs-toggle="tab" data-bs-target="#design-tab-pane" type="button"
                                            role="tab" aria-controls="design-tab-pane" aria-selected="false">
                                            Design
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="business-tab" data-bs-toggle="tab" data-bs-target="#business-tab-pane" type="button"
                                            role="tab" aria-controls="business-tab-pane" aria-selected="false">
                                            Business
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="development-tab" data-bs-toggle="tab" data-bs-target="#development-tab-pane" type="button"
                                            role="tab" aria-controls="development-tab-pane" aria-selected="false">
                                            Development
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="courseTabContent">
                    <div class="tab-pane fade show active" id="all-tab-pane" role="tabpanel" aria-labelledby="all-tab" tabindex="0">
                        <div class="swiper courses-swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb01.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Development</a>
                                                </li>
                                                <li class="price"><del>$29.00</del>$9.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">Learning JavaScript With Imagination</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author001.png" alt="img"/>David Millar</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.8 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>05</li>
                                                <li><i class="flaticon-clock"></i>11h 20m</li>
                                                <li><i class="flaticon-mortarboard"></i>22</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb02.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Design</a>
                                                </li>
                                                <li class="price"><del>$20.00</del>$10.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">The Complete Graphic Design for Beginners</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author002.png" alt="img"/>Wilson</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.5 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>60</li>
                                                <li><i class="flaticon-clock"></i>70h 45m</li>
                                                <li><i class="flaticon-mortarboard"></i>202</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb03.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Data Science</a>
                                                </li>
                                                <li class="price">$20.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">Learning JavaScript With Imagination</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author003.png" alt="img"/>Warren</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.8 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>08</li>
                                                <li><i class="flaticon-clock"></i>18h 20m</li>
                                                <li><i class="flaticon-mortarboard"></i>66</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb04.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Business</a>
                                                </li>
                                                <li class="price"><del>$20.00</del>$15.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">Financial Analyst Training & Investing Course</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author004.png" alt="img"/>Robert Fox</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.2 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>05</li>
                                                <li><i class="flaticon-clock"></i>11h 20m</li>
                                                <li><i class="flaticon-mortarboard"></i>22</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb05.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Mathematic</a>
                                                </li>
                                                <li class="price"><del>$29.00</del>$9.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">Learning JavaScript With Imagination</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author002.png" alt="img"/>Hawkins</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.7 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>10</li>
                                                <li><i class="flaticon-clock"></i>13h 10m</li>
                                                <li><i class="flaticon-mortarboard"></i>99</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="design-tab-pane" role="tabpanel" aria-labelledby="design-tab" tabindex="0">
                        <div class="swiper courses-swiper-active">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb02.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Design</a>
                                                </li>
                                                <li class="price"><del>$20.00</del>$10.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">The Complete Graphic Design for Beginners</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author002.png" alt="img"/>Wilson</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.5 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>60</li>
                                                <li><i class="flaticon-clock"></i>70h 45m</li>
                                                <li><i class="flaticon-mortarboard"></i>202</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb01.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Development</a>
                                                </li>
                                                <li class="price"><del>$29.00</del>$9.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">Learning JavaScript With Imagination</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author001.png" alt="img"/>David Millar</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.8 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>05</li>
                                                <li><i class="flaticon-clock"></i>11h 20m</li>
                                                <li><i class="flaticon-mortarboard"></i>22</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb03.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Data Science</a>
                                                </li>
                                                <li class="price">$20.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">Learning JavaScript With Imagination</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author003.png" alt="img"/>Warren</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.8 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>08</li>
                                                <li><i class="flaticon-clock"></i>18h 20m</li>
                                                <li><i class="flaticon-mortarboard"></i>66</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb04.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Business</a>
                                                </li>
                                                <li class="price"><del>$20.00</del>$15.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">Financial Analyst Training & Investing Course</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author004.png" alt="img"/>Robert Fox</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.2 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>05</li>
                                                <li><i class="flaticon-clock"></i>11h 20m</li>
                                                <li><i class="flaticon-mortarboard"></i>22</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb05.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Mathematic</a>
                                                </li>
                                                <li class="price"><del>$29.00</del>$9.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">Learning JavaScript With Imagination</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author002.png" alt="img"/>Hawkins</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.7 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>10</li>
                                                <li><i class="flaticon-clock"></i>13h 10m</li>
                                                <li><i class="flaticon-mortarboard"></i>99</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="business-tab-pane" role="tabpanel" aria-labelledby="business-tab" tabindex="0">
                        <div class="swiper courses-swiper-active">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb03.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Data Science</a>
                                                </li>
                                                <li class="price">$20.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">Learning JavaScript With Imagination</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author003.png" alt="img"/>Warren</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.8 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>08</li>
                                                <li><i class="flaticon-clock"></i>18h 20m</li>
                                                <li><i class="flaticon-mortarboard"></i>66</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb01.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Development</a>
                                                </li>
                                                <li class="price"><del>$29.00</del>$9.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">Learning JavaScript With Imagination</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author001.png" alt="img"/>David Millar</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.8 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>05</li>
                                                <li><i class="flaticon-clock"></i>11h 20m</li>
                                                <li><i class="flaticon-mortarboard"></i>22</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb02.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Design</a>
                                                </li>
                                                <li class="price"><del>$20.00</del>$10.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">The Complete Graphic Design for Beginners</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author002.png" alt="img"/>Wilson</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.5 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>60</li>
                                                <li><i class="flaticon-clock"></i>70h 45m</li>
                                                <li><i class="flaticon-mortarboard"></i>202</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb04.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Business</a>
                                                </li>
                                                <li class="price"><del>$20.00</del>$15.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">Financial Analyst Training & Investing Course</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author004.png" alt="img"/>Robert Fox</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.2 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>05</li>
                                                <li><i class="flaticon-clock"></i>11h 20m</li>
                                                <li><i class="flaticon-mortarboard"></i>22</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb05.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Mathematic</a>
                                                </li>
                                                <li class="price"><del>$29.00</del>$9.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">Learning JavaScript With Imagination</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author002.png" alt="img"/>Hawkins</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.7 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>10</li>
                                                <li><i class="flaticon-clock"></i>13h 10m</li>
                                                <li><i class="flaticon-mortarboard"></i>99</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="development-tab-pane" role="tabpanel" aria-labelledby="development-tab" tabindex="0">
                        <div class="swiper courses-swiper-active">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb04.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Business</a>
                                                </li>
                                                <li class="price"><del>$20.00</del>$15.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">Financial Analyst Training & Investing Course</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author004.png" alt="img"/>Robert Fox</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.2 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>05</li>
                                                <li><i class="flaticon-clock"></i>11h 20m</li>
                                                <li><i class="flaticon-mortarboard"></i>22</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb01.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Development</a>
                                                </li>
                                                <li class="price"><del>$29.00</del>$9.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">Learning JavaScript With Imagination</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author001.png" alt="img"/>David Millar</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.8 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>05</li>
                                                <li><i class="flaticon-clock"></i>11h 20m</li>
                                                <li><i class="flaticon-mortarboard"></i>22</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb02.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Design</a>
                                                </li>
                                                <li class="price"><del>$20.00</del>$10.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">The Complete Graphic Design for Beginners</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author002.png" alt="img"/>Wilson</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.5 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>60</li>
                                                <li><i class="flaticon-clock"></i>70h 45m</li>
                                                <li><i class="flaticon-mortarboard"></i>202</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb03.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Data Science</a>
                                                </li>
                                                <li class="price">$20.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">Learning JavaScript With Imagination</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author003.png" alt="img"/>Warren</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.8 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>08</li>
                                                <li><i class="flaticon-clock"></i>18h 20m</li>
                                                <li><i class="flaticon-mortarboard"></i>66</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="courses__item courses__item-two shine__animate-item">
                                        <div class="courses__item-thumb courses__item-thumb-two">
                                            <a href="course-details.html" class="shine__animate-link">
                                                <img src="assets/img/courses/course_thumb05.jpg" alt="img"/>
                                            </a>
                                        </div>
                                        <div class="courses__item-content courses__item-content-two">
                                            <ul class="courses__item-meta list-wrap">
                                                <li class="courses__item-tag">
                                                    <a href="course.html">Mathematic</a>
                                                </li>
                                                <li class="price"><del>$29.00</del>$9.00</li>
                                            </ul>
                                            <h5 class="title"><a href="course-details.html">Learning JavaScript With Imagination</a></h5>
                                            <div class="courses__item-content-bottom">
                                                <div class="author-two">
                                                    <a href="instructor-details.html"><img src="assets/img/courses/course_author002.png" alt="img"/>Hawkins</a>
                                                </div>
                                                <div class="avg-rating">
                                                    <i class="fas fa-star"></i> (4.7 Reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courses__item-bottom-two">
                                            <ul class="list-wrap">
                                                <li><i class="flaticon-book"></i>10</li>
                                                <li><i class="flaticon-clock"></i>13h 10m</li>
                                                <li><i class="flaticon-mortarboard"></i>99</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="all-courses-btn ">
                    <div class="tg-button-wrap justify-content-center">
                        <a href="courses.html" class="btn arrow-btn">See All Courses <img src="assets/img/icons/right_arrow.svg" alt="img" class="injectable"/></a>
                    </div>
                </div>
            </div>
        </section>
        <section class="work__area section-py-100"  >
            <div class="all-courses-btn mt-90">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-6 col-md-9">
                        <div class="about__images work__images">
                            <img src="assets/img/others/about_img.png" alt="img" class="main-img"/>
                            <img src="assets/img/others/about_shape.svg" alt="img" class="shape alltuchtopdown"/>
                            <a href="https://www.youtube.com/watch?v=b2Az7_lLh3g" class="popup-video">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="28" viewBox="0 0 22 28" fill="none">
                                    <path d="M0.19043 26.3132V1.69421C0.190288 1.40603 0.245303 1.12259 0.350273 0.870694C0.455242 0.6188 0.606687 0.406797 0.79027 0.254768C0.973854 0.10274 1.1835 0.0157243 1.39936 0.00193865C1.61521 -0.011847 1.83014 0.0480663 2.02378 0.176003L20.4856 12.3292C20.6973 12.4694 20.8754 12.6856 20.9999 12.9535C21.1245 13.2214 21.1904 13.5304 21.1904 13.8456C21.1904 14.1608 21.1245 14.4697 20.9999 14.7376C20.8754 15.0055 20.6973 15.2217 20.4856 15.3619L2.02378 27.824C1.83056 27.9517 1.61615 28.0116 1.40076 27.9981C1.18536 27.9847 0.97607 27.8983 0.792638 27.7472C0.609205 27.596 0.457661 27.385 0.352299 27.1342C0.246938 26.8833 0.191236 26.6008 0.19043 26.3132Z" fill="currentcolor" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="work__content">
                            <div class="section__title mb-20">
                                <span class="sub-title">Free Workshop</span>
                                <h2 class="title">Join Our Free Workshops</h2>
                            </div>
                            <p>Edhen an unknown printer took a galley of type and scrambled it to make a type specimen bookas survived not only five centuries.Edhen an unknown printer took a galley of type and scrambled.</p>
                            <div class="work__list-wrap">
                                <div class="work__list-box">
                                    <div class="work__list-box-top">
                                        <div class="icon">
                                            <i class="flaticon-profit"></i>
                                        </div>
                                        <h4 class="title">Smooth Virtual Live Classes</h4>
                                    </div>
                                    <p>Edhen an unknown printer Rtook galley of type scrambled.</p>
                                </div>
                                <div class="work__list-box">
                                    <div class="work__list-box-top">
                                        <div class="icon">
                                            <i class="flaticon-mortarboard"></i>
                                        </div>
                                        <h4 class="title">99% Graduation Complete</h4>
                                    </div>
                                    <p>Edhen an unknown printer Rtook galley of type scrambled.</p>
                                </div>
                            </div>
                            <div class="tg-button-wrap">
                                <a href="contact.html" class="btn arrow-btn">Quick Join Now <img src="assets/img/icons/right_arrow.svg" alt="img" class="injectable"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="fact__area-two">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="fact__inner-wrap-two">
                            <div class="section__title white-title mb-30">
                                <h2 class="title">Thousands of
                                    <span class="position-relative">
                                        <svg x="0px" y="0px" preserveAspectRatio="none" viewBox="0 0 209 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565" fill="currentcolor" />
                                        </svg>
                                        courses
                                    </span>
                                authored by industry experts</h2>
                            </div>
                            <div class="fact__item-wrap">
                                <div class="fact__item">
                                    <h2 class="count"><span class="odometer" data-count="45"></span>K+</h2>
                                    <p>Active Students</p>
                                </div>
                                <div class="fact__item">
                                    <h2 class="count"><span class="odometer" data-count="328"></span>+</h2>
                                    <p>Best Instructors</p>
                                </div>
                            </div>
                            <div class="fact__img-wrap tg-svg">
                                <img src="assets/img/others/fact_img.png" alt="img"/>
                                <div class="shape-one">
                                    <img src="assets/img/others/fact_shape01.svg" alt="img" class="injectable"/>
                                </div>
                                <div class="shape-two">
                                    <span class="svg-icon" id="fact-btn" data-svg-icon="assets/img/others/fact_shape02.svg"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </section>
        <section class="instructor__area-three instructor__bg" data-background="assets/img/bg/instructor_bg.jpg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8">
                        <div class="section__title text-center mb-40">
                            <span class="sub-title">Skilled Introduce</span>
                            <h2 class="title">Our Top Class & Professional Instructors in One Place</h2>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-8">
                        <div class="swiper-container instructor-active">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="instructor__item-three">
                                        <div class="instructor__thumb-three">
                                            <img src="assets/img/instructor/h2_instructor01.png" alt="img"/>
                                            <div class="shape-one">
                                                <img src="assets/img/instructor/h2_instructor_img_shape01.svg" alt="img" class="injectable"/>
                                            </div>
                                        </div>
                                        <div class="instructor__content-three">
                                            <div class="ratting-wrap">
                                                <div class="ratting">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span>(4.8 Ratings)</span>
                                            </div>
                                            <h2 class="title">Olivia Mia</h2>
                                            <span class="designation">Web Design</span>
                                            <p>SkillGro The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                            <div class="instructor__social">
                                                <ul class="list-wrap">
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-whatsapp"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="tg-button-wrap">
                                                <a href="instructor-details.html" class="btn arrow-btn">Join My Class <img src="assets/img/icons/right_arrow.svg" alt="img" class="injectable"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="instructor__item-three">
                                        <div class="instructor__thumb-three">
                                            <img src="assets/img/instructor/h2_instructor02.png" alt="img"/>
                                            <div class="shape-one">
                                                <img src="assets/img/instructor/h2_instructor_img_shape01.svg" alt="img" class="injectable"/>
                                            </div>
                                        </div>
                                        <div class="instructor__content-three">
                                            <div class="ratting-wrap">
                                                <div class="ratting">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span>(4.8 Ratings)</span>
                                            </div>
                                            <h2 class="title">William Hope</h2>
                                            <span class="designation">Digital Marketing</span>
                                            <p>SkillGro The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                            <div class="instructor__social">
                                                <ul class="list-wrap">
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-whatsapp"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="tg-button-wrap">
                                                <a href="instructor-details.html" class="btn arrow-btn">Join My Class <img src="assets/img/icons/right_arrow.svg" alt="img" class="injectable"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="instructor__item-three">
                                        <div class="instructor__thumb-three">
                                            <img src="assets/img/instructor/h2_instructor03.png" alt="img"/>
                                            <div class="shape-one">
                                                <img src="assets/img/instructor/h2_instructor_img_shape01.svg" alt="img" class="injectable"/>
                                            </div>
                                        </div>
                                        <div class="instructor__content-three">
                                            <div class="ratting-wrap">
                                                <div class="ratting">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span>(4.8 Ratings)</span>
                                            </div>
                                            <h2 class="title">Sophia Ava</h2>
                                            <span class="designation">Web Development</span>
                                            <p>SkillGro The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                            <div class="instructor__social">
                                                <ul class="list-wrap">
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-whatsapp"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="tg-button-wrap">
                                                <a href="instructor-details.html" class="btn arrow-btn">Join My Class <img src="assets/img/icons/right_arrow.svg" alt="img" class="injectable"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="instructor__item-three">
                                        <div class="instructor__thumb-three">
                                            <img src="assets/img/instructor/h2_instructor04.png" alt="img"/>
                                            <div class="shape-one">
                                                <img src="assets/img/instructor/h2_instructor_img_shape01.svg" alt="img" class="injectable"/>
                                            </div>
                                        </div>
                                        <div class="instructor__content-three">
                                            <div class="ratting-wrap">
                                                <div class="ratting">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span>(4.8 Ratings)</span>
                                            </div>
                                            <h2 class="title">Mark Jukarberg</h2>
                                            <span class="designation">UX Design Lead</span>
                                            <p>SkillGro The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                            <div class="instructor__social">
                                                <ul class="list-wrap">
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-whatsapp"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="tg-button-wrap">
                                                <a href="instructor-details.html" class="btn arrow-btn">Join My Class <img src="assets/img/icons/right_arrow.svg" alt="img" class="injectable"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="instructor__item-three">
                                        <div class="instructor__thumb-three">
                                            <img src="assets/img/instructor/h2_instructor05.png" alt="img"/>
                                            <div class="shape-one">
                                                <img src="assets/img/instructor/h2_instructor_img_shape01.svg" alt="img" class="injectable"/>
                                            </div>
                                        </div>
                                        <div class="instructor__content-three">
                                            <div class="ratting-wrap">
                                                <div class="ratting">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span>(4.8 Ratings)</span>
                                            </div>
                                            <h2 class="title">David Millar</h2>
                                            <span class="designation">UX/UI Design</span>
                                            <p>SkillGro The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                            <div class="instructor__social">
                                                <ul class="list-wrap">
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-whatsapp"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="tg-button-wrap">
                                                <a href="instructor-details.html" class="btn arrow-btn">Join My Class <img src="assets/img/icons/right_arrow.svg" alt="img" class="injectable"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="instructor__item-three">
                                        <div class="instructor__thumb-three">
                                            <img src="assets/img/instructor/h2_instructor04.png" alt="img"/>
                                            <div class="shape-one">
                                                <img src="assets/img/instructor/h2_instructor_img_shape01.svg" alt="img" class="injectable"/>
                                            </div>
                                        </div>
                                        <div class="instructor__content-three">
                                            <div class="ratting-wrap">
                                                <div class="ratting">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span>(4.8 Ratings)</span>
                                            </div>
                                            <h2 class="title">Mark Jukarberg</h2>
                                            <span class="designation">UX Design Lead</span>
                                            <p>SkillGro The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                            <div class="instructor__social">
                                                <ul class="list-wrap">
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-whatsapp"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="tg-button-wrap">
                                                <a href="instructor-details.html" class="btn arrow-btn">Join My Class <img src="assets/img/icons/right_arrow.svg" alt="img" class="injectable"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="instructor__item-three">
                                        <div class="instructor__thumb-three">
                                            <img src="assets/img/instructor/h2_instructor03.png" alt="img"/>
                                            <div class="shape-one">
                                                <img src="assets/img/instructor/h2_instructor_img_shape01.svg" alt="img" class="injectable"/>
                                            </div>
                                        </div>
                                        <div class="instructor__content-three">
                                            <div class="ratting-wrap">
                                                <div class="ratting">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span>(4.8 Ratings)</span>
                                            </div>
                                            <h2 class="title">Olivia Mia</h2>
                                            <span class="designation">Web Design</span>
                                            <p>SkillGro The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                                            </p>
                                            <div class="instructor__social">
                                                <ul class="list-wrap">
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-whatsapp"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="tg-button-wrap">
                                                <a href="instructor-details.html" class="btn arrow-btn">Join My Class <img src="assets/img/icons/right_arrow.svg" alt="img" class="injectable"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-9">
                        <div class="instructor-slider-dot">
                            <div class="swiper instructor-nav">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <button><img src="assets/img/instructor/instructor_nav01.png" alt="img"/></button>
                                    </div>
                                    <div class="swiper-slide">
                                        <button><img src="assets/img/instructor/instructor_nav02.png" alt="img"/></button>
                                    </div>
                                    <div class="swiper-slide">
                                        <button><img src="assets/img/instructor/instructor_nav03.png" alt="img"/></button>
                                    </div>
                                    <div class="swiper-slide">
                                        <button><img src="assets/img/instructor/instructor_nav04.png" alt="img"/></button>
                                    </div>
                                    <div class="swiper-slide">
                                        <button><img src="assets/img/instructor/h2_instructor05.png" alt="img"/></button>
                                    </div>
                                    <div class="swiper-slide">
                                        <button><img src="assets/img/instructor/instructor_nav04.png" alt="img"/></button>
                                    </div>
                                    <div class="swiper-slide">
                                        <button><img src="assets/img/instructor/instructor_nav03.png" alt="img"/></button>
                                    </div>
                                </div>
                            </div>
                            <div class="instructor__nav-two">
                                <div class="instructor-button-prev"><i class="flaticon-arrow-right"></i></div>
                                <div class="instructor-button-next"><i class="flaticon-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="instructor__shape">
                <img src="assets/img/instructor/h2_instructor_shape.png" alt="img" class="alltuchtopdown"/>
            </div>
        </section>
        <section className="newsletter__area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="newsletter__img-wrap">
                            <img src="assets/img/others/newsletter_img.png" alt="Newsletter" />
                            <img 
                                src="assets/img/others/newsletter_shape01.png" 
                                alt="Shape 1" 
                                data-aos="fade-up" 
                                data-aos-delay="400" 
                            />
                            <img 
                                src="assets/img/others/newsletter_shape02.png" 
                                alt="Shape 2" 
                                className="alltuchtopdown" 
                            />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="newsletter__content">
                            <h2 className="title">
                                Want to stay <span>informed</span> about <br /> 
                                new <span>courses & study?</span>
                            </h2>
                            <div className="newsletter__form">
                                <form action="#">
                                    <input 
                                        type="email" 
                                        placeholder="Type your e-mail" 
                                        aria-label="Email Address" 
                                    />
                                    <button type="submit" className="btn">
                                        Subscribe Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="newsletter__shape">
                <img 
                    src="assets/img/others/newsletter_shape03.png" 
                    alt="Shape 3" 
                    data-aos="fade-left" 
                    data-aos-delay="400" 
                />
            </div>
        </section>

        <section class="event__area section-pt-120 section-pb-90">
            <div class="container">
                <div class="event__inner-wrap">
                    <div class="row">
                        <div class="col-30">
                            <div class="event__content">
                                <div class="section__title mb-20">
                                    <span class="sub-title">Upcoming Events</span>
                                    <h2 class="title">Join Our Community And Make it Bigger</h2>
                                </div>
                                <p>Edhen an unknown printer took a galley acrambled make a type specimen bookas centuries.Edhen anderely unknown printer took a galley.</p>
                                <div class="tg-button-wrap">
                                    <a href="events.html" class="btn arrow-btn">See All Events <img src="assets/img/icons/right_arrow.svg" alt="img" class="injectable"/></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-70">
                            <div class="event__item-wrap">
                                <div class="row justify-content-center">
                                    <div class="col-lg-4 col-md-6">
                                        <div class="event__item shine__animate-item">
                                            <div class="event__item-thumb">
                                                <a href="events-details.html" class="shine__animate-link"><img src="assets/img/events/event_thumb01.jpg" alt="img"/></a>
                                            </div>
                                            <div class="event__item-content">
                                                <span class="date">25 June, 2024</span>
                                                <h2 class="title"><a href="events-details.html">The Accessible Target Sizes Cheatsheet</a></h2>
                                                <a href="https://maps.google.com/maps" class="location" target="_blank"><i class="flaticon-map"></i>United Kingdom</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="event__item shine__animate-item">
                                            <div class="event__item-thumb">
                                                <a href="events-details.html" class="shine__animate-link"><img src="assets/img/events/event_thumb02.jpg" alt="img"/></a>
                                            </div>
                                            <div class="event__item-content">
                                                <span class="date">25 June, 2024</span>
                                                <h2 class="title"><a href="events-details.html">Exactly How Technology Can Make Reading</a></h2>
                                                <a href="https://maps.google.com/maps" class="location" target="_blank"><i class="flaticon-map"></i>Tokyo Japan</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="event__item shine__animate-item">
                                            <div class="event__item-thumb">
                                                <a href="events-details.html" class="shine__animate-link"><img src="assets/img/events/event_thumb03.jpg" alt="img"/></a>
                                            </div>
                                            <div class="event__item-content">
                                                <span class="date">25 June, 2024</span>
                                                <h2 class="title"><a href="events-details.html">Aewe Creating Futures Through Technology</a></h2>
                                                <a href="https://maps.google.com/maps" class="location" target="_blank"><i class="flaticon-map"></i>New Work</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="event__shape">
                <img src="assets/img/events/event_shape.png" alt="img" class="alltuchtopdown"/>
            </div>
        </section>
        <section class="blog__post-area blog__post-area-two">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section__title text-center mb-40">
                            <span class="sub-title">News & Blogs</span>
                            <h2 class="title">Our Latest News Feed</h2>
                            <p>when known printer took a galley of type scrambl edmake</p>
                        </div>
                    </div>
                </div>
                <div class="row gutter-20">
                    <div class="col-xl-3 col-md-6">
                        <div class="blog__post-item shine__animate-item">
                            <div class="blog__post-thumb">
                                <a href="blog-details.html" class="shine__animate-link"><img src="assets/img/blog/blog_post01.jpg" alt="img"/></a>
                                <a href="blog.html" class="post-tag">Marketing</a>
                            </div>
                            <div class="blog__post-content">
                                <div class="blog__post-meta">
                                    <ul class="list-wrap">
                                        <li><i class="flaticon-calendar"></i>20 July, 2024</li>
                                        <li><i class="flaticon-user-1"></i>by <a href="blog-details.html">Admin</a></li>
                                    </ul>
                                </div>
                                <h4 class="title"><a href="blog-details.html">How To Become idiculously Self-Aware In 20 Minutes</a></h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="blog__post-item shine__animate-item">
                            <div class="blog__post-thumb">
                                <a href="blog-details.html" class="shine__animate-link"><img src="assets/img/blog/blog_post02.jpg" alt="img"/></a>
                                <a href="blog.html" class="post-tag">Students</a>
                            </div>
                            <div class="blog__post-content">
                                <div class="blog__post-meta">
                                    <ul class="list-wrap">
                                        <li><i class="flaticon-calendar"></i>20 July, 2024</li>
                                        <li><i class="flaticon-user-1"></i>by <a href="blog-details.html">Admin</a></li>
                                    </ul>
                                </div>
                                <h4 class="title"><a href="blog-details.html">Get Started With UI Design With Tips To Speed</a></h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="blog__post-item shine__animate-item">
                            <div class="blog__post-thumb">
                                <a href="blog-details.html" class="shine__animate-link"><img src="assets/img/blog/blog_post03.jpg" alt="img"/></a>
                                <a href="blog.html" class="post-tag">Science</a>
                            </div>
                            <div class="blog__post-content">
                                <div class="blog__post-meta">
                                    <ul class="list-wrap">
                                        <li><i class="flaticon-calendar"></i>20 July, 2024</li>
                                        <li><i class="flaticon-user-1"></i>by <a href="blog-details.html">Admin</a></li>
                                    </ul>
                                </div>
                                <h4 class="title"><a href="blog-details.html">Make Your Own Expanding Contracting Content</a></h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="blog__post-item shine__animate-item">
                            <div class="blog__post-thumb">
                                <a href="blog-details.html" class="shine__animate-link"><img src="assets/img/blog/blog_post04.jpg" alt="img"/></a>
                                <a href="blog.html" class="post-tag">Agency</a>
                            </div>
                            <div class="blog__post-content">
                                <div class="blog__post-meta">
                                    <ul class="list-wrap">
                                        <li><i class="flaticon-calendar"></i>20 July, 2024</li>
                                        <li><i class="flaticon-user-1"></i>by <a href="blog-details.html">Admin</a></li>
                                    </ul>
                                </div>
                                <h4 class="title"><a href="blog-details.html">What we are capable to usually discovered</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="instructor__area-four">
            <div class="container">
                <div class="instructor__item-wrap-two">
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="instructor__item-two tg-svg">
                                <div class="instructor__thumb-two">
                                    <img src="assets/img/instructor/instructor_two01.png" alt="img"/>
                                    <div class="shape-one">
                                        <img src="assets/img/instructor/instructor_shape01.svg" alt="img" class="injectable"/>
                                    </div>
                                    <div class="shape-two">
                                        <span class="svg-icon" id="instructor-svg" data-svg-icon="assets/img/instructor/instructor_shape02.svg"></span>
                                    </div>
                                </div>
                                <div class="instructor__content-two">
                                    <h3 class="title"><a href="contact.html">Become a Instructor</a></h3>
                                    <p>To take a trivial example, which of us undertakes physical exercise yes is this happen here.</p>
                                    <div class="tg-button-wrap">
                                        <a href="contact.html" class="btn arrow-btn">Apply Now <img src="assets/img/icons/right_arrow.svg" alt="img"  class="injectable"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="instructor__item-two tg-svg">
                                <div class="instructor__thumb-two">
                                    <img src="assets/img/instructor/instructor_two02.png" alt="img"/>
                                    <div class="shape-one">
                                        <img src="assets/img/instructor/instructor_shape01.svg" alt="img" class="injectable"/>
                                    </div>
                                    <div class="shape-two">
                                        <span class="svg-icon" id="instructor-svg-two" data-svg-icon="assets/img/instructor/instructor_shape02.svg"></span>
                                    </div>
                                </div>
                                <div class="instructor__content-two">
                                    <h3 class="title"><a href="contact.html">Become a Student</a></h3>
                                    <p>Join millions of people from around the world learning together. Online learning.</p>
                                    <div class="tg-button-wrap">
                                        <a href="contact.html" class="btn arrow-btn">Apply Now <img src="assets/img/icons/right_arrow.svg" alt="img" class="injectable"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="footer__area footer__area-two">
        <div class="footer__top">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="footer__widget">
                            <div class="logo mb-35">
                                <a href="index-2.html"><img src="assets/img/logo/secondary_logo.svg" alt="img"/></a>
                            </div>
                            <div class="footer__content">
                                <p>when an unknown printer took galley of type and scrambled it to make pspecimen bookt has.</p>
                                <ul class="list-wrap">
                                    <li>463 7th Ave, NY 10018, USA</li>
                                    <li>+123 88 9900 456</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div class="footer__widget">
                            <h4 class="footer__widget-title">Useful Links</h4>
                            <div class="footer__link">
                                <ul class="list-wrap">
                                    <li><a href="events-details.html">Our values</a></li>
                                    <li><a href="events-details.html">Our advisory board</a></li>
                                    <li><a href="events-details.html">Our partners</a></li>
                                    <li><a href="events-details.html">Become a partner</a></li>
                                    <li><a href="events-details.html">Work at Future Learn</a></li>
                                    <li><a href="events-details.html">Quizlet Plus</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div class="footer__widget">
                            <h4 class="footer__widget-title">Our Company</h4>
                            <div class="footer__link">
                                <ul class="list-wrap">
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="instructor-details.html">Become Teacher</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="instructor-details.html">Instructor</a></li>
                                    <li><a href="events-details.html">Events</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="footer__widget">
                            <h4 class="footer__widget-title">Get In Touch</h4>
                            <div class="footer__contact-content">
                                <p>when an unknown printer took <br /> galley type and scrambled</p>
                                <ul class="list-wrap footer__social">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="assets/img/icons/facebook.svg" alt="img" class="injectable"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="assets/img/icons/twitter.svg" alt="img" class="injectable"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="assets/img/icons/whatsapp.svg" alt="img" class="injectable"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="assets/img/icons/instagram.svg" alt="img" class="injectable"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="assets/img/icons/youtube.svg" alt="img" class="injectable"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="app-download">
                                <a href="#"><img src="assets/img/others/google-play.svg" alt="img"/></a>
                                <a href="#"><img src="assets/img/others/apple-store.svg" alt="img"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-7">
                        <div class="copy-right-text">
                            <p>© 2010-2024 skillgro.com. All rights reserved.</p>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="footer__bottom-menu">
                            <ul class="list-wrap">
                                <li><a href="contact.html">Term of Use</a></li>
                                <li><a href="contact.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
};

export default HomePage;