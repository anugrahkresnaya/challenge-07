import styles from './Footer.module.css';

const Footer = () => {
  return(
    <footer>
      <div className={`container-md d-flex justify-content-between ${styles.footerContainer}`}>
        <div className={styles.addresInfo}>
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className={styles.navigation}>
          <ul className="list-unstyled">
            <li><a href="#our-services" class="text-decoration-none text-reset">Our Services</a></li>
            <li><a href="#why-us" class="text-decoration-none text-reset">Why Us</a></li>
            <li><a href="#testimonial" class="text-decoration-none text-reset">Testimonial</a></li>
            <li><a href="#faq" class="text-decoration-none text-reset">FAQ</a></li>
          </ul>
        </div>
        <div class={styles.socialMedia}>
          <p>Connect with us</p>
          <span><img src={require("../../assets/images/icon_facebook.png")} alt="facebook icon" /></span>
          <span><img src={require("../../assets/images/icon_instagram.png")} alt="instagram icon" /></span>
          <span><img src={require("../../assets/images/icon_twitter.png")} alt="twitter icon" /></span>
          <span><img src={require("../../assets/images/icon_mail.png")} alt="mail icon" /></span>
          <span><img src={require("../../assets/images/icon_twitch.png")} alt="twitch icon" /></span>
        </div>
        <div class={styles.copyright}>
          <p>Copyright Binar 2022</p>
          <a href="/">
            <div class={styles.logoFooter}></div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;