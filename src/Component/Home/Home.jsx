import { Nav } from "./Nav";
import styles from "./Home.module.css";
import { Product } from "./Product";

function Home() {
  return (
    <div className={styles.header}>
      <div className={styles.background}></div>
      <Nav />
      <div className={styles.afterNav}>
        <div>
          <h1>Everything you need for nonprofit fundraising success.</h1>
          <p>
            Mightycause is a modern, all-in-one platform for nonprofit fundraising, donor
            management, marketing, peer-to-peer fundraising and more.
          </p>
          <div className={styles.getDemo}>Get A Demo</div>
        </div>
      </div>
      <div className={styles.middle}>
        <div>
          <h2>Modern fundraising online is all about building relationships.</h2>
          <p>
            It's time to start thinking beyond basic transaction processing like PayPal. Mightycause
            helps you develop lasting supporter relationships while saving money.
          </p>
        </div>
        <div className={styles.middleImage}>
          <img
            _ngcontent-clientapp-c244=""
            alt="Mightycause products"
            applazyload=""
            url="https://imagecdn.mightycause.com/e6d34664-fde7-49dd-ad30-f807e8449450/"
            src="https://imagecdn.mightycause.com/e6d34664-fde7-49dd-ad30-f807e8449450/-/format/auto/-/progressive/yes/-/stretch/off/-/quality/smart/-/resize/926x/"
          ></img>
        </div>

        <Product />
      </div>
    </div>
  );
}
export { Home };
