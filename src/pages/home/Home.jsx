import HeaderComponent from "../../components/header/HeaderComponent";
import Footer from "../../components/footer/Footer";
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div>
      <HeaderComponent />
      <main>
        <section className={`container-md ${styles.ourSection} offset`} id="our-services">
          <div className="row">
            <div className={`col-lg ${styles.rightImg}`}>
              <img src={require("../../assets/images/img_service.png")} alt="service" />
            </div>
            <div className="col-lg">
              <div className={styles.desc}>
                <h1>Best Car Rental for any kind of trip in <br />Bekasi!</h1>
                <p>
                  Sewa mobil di Bekasi bersama Binar Car Rental jaminan harga lebih <br />murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
                  <br />pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                </p>
                <ul className="list-unstyled">
                  <li><img src={require('../../assets/images/check.png')} alt="check" />Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                  <li><img src={require('../../assets/images/check.png')} alt="check" />Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                  <li><img src={require('../../assets/images/check.png')} alt="check" />Sewa Mobil Jangka Panjang Bulanan</li>
                  <li><img src={require('../../assets/images/check.png')} alt="check" />Gratis Antar - Jemput Mobil di Bandara</li>
                  <li><img src={require('../../assets/images/check.png')} alt="check" />Layanan Airport Transfer / Drop In Out</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={`container-md ${styles.whyUs} offset`} id="why-us">
          <h1>Why Us?</h1>
          <p id="text-center">Mengapa harus pilih Binar Car Rental?</p>
          <div className="row">
            <div className="col-md">
              <div className="card">
                <div className={styles.cardBody}>
                  <img src={require("../../assets/images/thumbs_up.png")} alt="icon complete" />
                  <h5 className="card-title">Mobil lengkap</h5>
                  <p className="card-text">Tersedia banyak pilihan mobil, <br />kondisi masih baru, bersih dan <br />terawat</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card">
                <div className={styles.cardBody}>
                  <img src={require("../../assets/images/icon_price.png")} alt="icon price" />
                  <h5 className="card-title">Harga Murah</h5>
                  <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan <br />rental mobil lain</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card">
                <div className={styles.cardBody}>
                  <img src={require("../../assets/images/icon_24hrs.png")} alt="icon hour" />
                  <h5 className="card-title">Layanan 24 jam</h5>
                  <p className="card-text">Siap melayani kebutuhan Anda <br />selama 24 jam nonstop. Kami juga <br />tersedia di akhir minggu</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card">
                <div className={styles.cardBody}>
                  <img src={require("../../assets/images/icon_professional.png")} alt="icon professional" />
                  <h5 className="card-title">Sopir Profesional</h5>
                  <p className="card-text">Sopir yang profesional, <br />berpengalaman, jujur, ramah dan <br />selalu tepat waktu</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-md testimonial-section offset" id="testimonial">
          <div className={styles.testimonialHeader}>
            <h1>Testimonial</h1>
            <p>Berbagai review positif dari para pelanggan kami</p>
          </div>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className={`carousel-item active ${styles.carouselItem}`}>
                <div className={`card ${styles.carousel1}`}>
                  <div>
                    <div className={`${styles.imageDesc} d-flex justify-content-between`} id="img-responsive">
                      <div className={styles.imageTestimonial}>
                        <img src={require("../../assets/images/img_photo.png")} alt="testimonial" />
                      </div>
                      <div className={styles.descTestimonial}>
                        <img src={require("../../assets/images/Rate.png")} alt="rate stars" />
                        <p className={styles.statementTestimonial}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                        <p className={styles.name}>John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`carousel-item ${styles.carouselItem}`}>
                <div className={`card ${styles.carousel1}`}>
                  <div>
                    <div className={`${styles.imageDesc} d-flex justify-content-between`} id="img-responsive">
                      <div className={styles.imageTestimonial}>
                        <img src={require("../../assets/images/img_photo_(1).png")} alt="testimonial" />
                      </div>
                      <div className={styles.descTestimonial}>
                        <img src={require("../../assets/images/Rate.png")} alt="rate stars" />
                        <p className={styles.statementTestimonial}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                        <p className={styles.name}>John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`carousel-item ${styles.carouselItem}`}>
                <div className={`card ${styles.carousel1}`}>
                  <div>
                    <div className={`${styles.imageDesc} d-flex justify-content-between`} id="img-responsive">
                      <div className={styles.imageTestimonial}>
                        <img src={require("../../assets/images/img_photo_(1).png")} alt="testimonial" />
                      </div>
                      <div className={styles.descTestimonial}>
                        <img src={require("../../assets/images/Rate.png")} alt="rate stars" />
                        <p className={styles.statementTestimonial}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                        <p className={styles.name}>John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-center">
              <button className={styles.prevButton} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <img src={require("../../assets/images/Left_button.png")} alt="left button" />
              </button>
              <button className={styles.nextButton} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <img src={require("../../assets/images/Right_button.png")} alt="right button" />
              </button>
            </div>
          </div>
        </section>
        <section className={`container-md ${styles.gettingStarted}`}>
          <div className={styles.ctaBanner}>
            <h1>Sewa Mobil di Bekasi Sekarang</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="http://0.0.0.0:8000/cars">
              <button className="btn" id={styles.btnGreen}>Mulai Sewa Mobil</button>
            </a>
          </div>
        </section>
        <section className={`container-md ${styles.faqSection} d-flex justify-content-between ${styles.offset}`} id="faq">
          <div className={styles.faqDesc}>
            <h1>Frequently Asked Question</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="faq-questions">
            <div className={`accordion ${styles.accordions}`} id="accordionExample">
              <div className={`accordion-item ${styles.accordionItem}`}>
                <h2 className="accordion-header" id="headingOne">
                  <button className={`accordion-button ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className={`accordion-body ${styles.accordionBody}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
              <div className={`accordion-item ${styles.accordionItem}`}>
                <h2 className="accordion-header" id="headingTwo">
                  <button className={`accordion-button collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className={`accordion-body ${styles.accordionBody}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
              <div className={`accordion-item ${styles.accordionItem}`}>
                <h2 className="accordion-header" id="headingThree">
                  <button className={`accordion-button collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className={`accordion-body ${styles.accordionBody}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
              <div className={`accordion-item ${styles.accordionItem}`}>
                <h2 className="accordion-header" id="headingFour">
                  <button className={`accordion-button collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className={`accordion-body ${styles.accordionBody}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
              <div className={`accordion-item ${styles.accordionItem}`}>
                <h2 className="accordion-header" id="headingFive">
                  <button className={`accordion-button collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Bagaimana jika terjadi kecelakaan?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div class={`accordion-body ${styles.accordionBody}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
