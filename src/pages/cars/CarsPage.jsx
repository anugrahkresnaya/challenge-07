import HeaderComponent from '../../components/header/HeaderComponent';
import Footer from '../../components/footer/Footer';
import styles from './CarsPage.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const CarsPage = () => {
  const [carData, setCarData] = useState([]);
  const [dateInput, setDateInput] = useState('');
  const [timeInput, setTimeInput] = useState('');
  const [seatInput, setSeatInput] = useState('');

  useEffect(() => {
    const getCarsData = async () => {
      await axios
        .get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
        .then(res => {
          setCarData(res.data)
        })
        .catch(err => console.log(err));
    }

    getCarsData()

    const handleFilterCar = (e) => {
      console.log(dateInput, timeInput, seatInput);
  
      const filterSeat = carData.filter(item => item.capacity >= seatInput);
      console.log(filterSeat);
      return filterSeat;
    };

    handleFilterCar()
  }, [carData, dateInput, seatInput, timeInput])

  // const getCarsData = async (e) => {
  //   e.preventDefault();
  //   await axios
  //     .get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
  //     .then(res => {
  //       setCarData(res.data)
  //       console.log(res.data)
  //     })
  //     .catch(err => console.log(err));
  // }

  const renderCar = carData.map(car => {
    return(
      <div className={`col-lg-4 card ${styles.cardContainer}`} key={car.id}>
        <img src={require("../../assets/images/car_image.png")} alt={car.manufacture} className={styles.carCardImage} />
        <p className={styles.fontCard}>{car.manufacture} {car.model}</p>
        <h4 className={styles.fontPrice}>Rp {car.rentPerDay} / hari</h4>
        <p className={styles.fontCard}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className={styles.fontCard}><img src={require("../../assets/images/fi_users.png")} alt="" />{car.capacity} orang</p>
        <p className={styles.fontCard}><img src={require("../../assets/images/fi_settings.png")} alt="" />{car.transmission}</p>
        <p className={styles.fontCard}><img src={require("../../assets/images/fi_calendar.png")} alt="" />tahun {car.year}</p>
        <button type="button" className="btn pilih-btn">Pilih Mobil</button>
      </div>
    );
  });

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
                  <select 
                    className={`form-select ${styles.formSelect}`} 
                    id="form-style" 
                  >
                    <option hidden>Pilih Tipe Driver</option>
                    <option>Dengan Sopir</option>
                    <option>Tanpa Sopir (Lepas Kunci)</option>
                  </select>
                </div>
              </div>
              <div className={`col ${styles.colMarginResponsive} ${styles.col}`}>
                <p>Tanggal</p>
                <div className="input-group">
                  <input 
                    type="date" 
                    className={`form-control ${styles.formControl}`} 
                    id="filter-by-date" 
                    onChange={(e) => setDateInput(e.target.value)}
                  />
                </div>
              </div>
              <div className={`col ${styles.colMarginResponsive} ${styles.col}`}>
                <p>Waktu Jemput/Ambil</p>
                <div className="input-group">
                  <input 
                    type="time" 
                    className={`form-control ${styles.formControl}`} 
                    id="filter-by-time" 
                    onChange={(e) => setTimeInput(e.target.value)} 
                  />
                </div>
              </div>
              <div className={`col ${styles.colMarginResponsive} ${styles.col}`}>
                <p>Jumlah Penumpang (optional)</p>
                <input 
                  type="text" 
                  className={`form-control ${styles.formControl}`} 
                  id="filter-by-seats" 
                  placeholder="Jumlah Penumpang"
                  value={seatInput}
                  onChange={(e) => setSeatInput(e.target.value)}
                />
              </div>
              <div className={`col ${styles.colMarginResponsive} ${styles.col}`}>
                <button 
                  type="submit"
                  className="btn"
                  id={styles.searchFilter}
                  onClick={() => {}}
                >
                  Cari Mobil
                </button>
              </div>
            </div>
          </form>
        </section>
        <section className="container mt-4">
          <div className="row gap-4" id={styles.carsContainer}>
            {renderCar}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CarsPage;