import HeaderComponent from '../../components/header/HeaderComponent';
import Footer from '../../components/footer/Footer';
import styles from './CarsPage.module.css';

const CarsPage = () => {
  return(
    <>
      <HeaderComponent />
      <main>
        <section className={`container ${styles.filterCar}`}>
          <form>
            <div className="row">
              <div className={`col ${styles.colMargin} ${styles.col}`}>
                <p>Tipe Driver</p>
                <div className="input-group">
                  <select className={`form-select ${styles.formSelect}`} id="form-style">
                    <option hidden>Pilih Tipe Driver</option>
                    <option>Dengan Sopir</option>
                    <option>Tanpa Sopir (Lepas Kunci)</option>
                  </select>
                </div>
              </div>
              <div className={`col ${styles.colMarginResponsive} ${styles.col}`}>
                <p>Tanggal</p>
                <div className="input-group">
                  <input type="date" className={`form-control ${styles.formControl}`} id="filter-by-date" />
                </div>
              </div>
              <div className={`col ${styles.colMarginResponsive} ${styles.col}`}>
                <p>Waktu Jemput/Ambil</p>
                <div className="input-group">
                  <input type="time" className={`form-control ${styles.formControl}`} id="filter-by-time" />
                </div>
              </div>
              <div className={`col ${styles.colMarginResponsive} ${styles.col}`}>
                <p>Jumlah Penumpang (optional)</p>
                <input type="text" className={`form-control ${styles.formControl}`} id="filter-by-seats" placeholder="Jumlah Penumpang" />
              </div>
              <div className={`col ${styles.colMarginResponsive} ${styles.col}`}>
                <button type="button" className="btn" id={styles.searchFilter}>Cari Mobil</button>
              </div>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CarsPage;