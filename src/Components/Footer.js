
import styles from './Footer.css';

function Footer() {
  return (
    <div className={styles.footer_basic}>
        <footer>
            <div className={styles.social}><a href="https://github.com/christophbrgr"><i class="icon ion-social-github-outline"></i></a><a href="https://www.linkedin.com/in/bergerchri/"><i class="icon ion-social-linkedin-outline"></i></a><a href="https://scholar.google.com/citations?user=lsSXPIIAAAAJ&amp;hl=en"><i class="icon ion-social-google-outline"></i></a><a href="http://campar.in.tum.de/Main/ChristophBerger"><i class="icon ion-ios-briefcase-outline"></i></a><a href="https://twitter.com/berger_ca"><i class="icon ion-social-twitter-outline"></i></a>
            </div><small class="d-flex d-lg-flex justify-content-center justify-content-lg-center">Mail: c.berger [at] tum [dot] de</small>
            <ul class="list-inline"></ul>
            <p class="copyright">Christoph Berger © 2021</p>
        </footer>
    </div>
  );
}

export default Footer;
