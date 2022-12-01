// importing bootstrap styles
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';
import InputField from '../components/default/input';

import styles from "../components/styles/glassmorphism.module.scss";

export default function Home() {
  return (
    <div className="">
      <img className="position-absolute w-100 h-100" src="/images/login-bg.png" style={{ objectFit: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }} />

      <div className='position-absolute w-100 h-100 ' style={{ display: "grid", placeItems: "center" }}>
        <Card body className={styles.glassmorphism} style={{ color: "white", width: "40%", padding: "30px 0 30px 0" }}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div>
              <img src="/images/feelinpinas-logo.png" />
            </div>
            <span className="fs-4 fw-bold p-3"> ADMIN LOGIN </span>

            <InputField suffixIcon={faUser} placeholder="Enter email..." width="70%" />
            <InputField suffixIcon={faLock} type="password" placeholder="Enter password..." width="70%" />

            <button className="btn px-3 py-2 m-3" style={{backgroundColor: "yellow"}}> LOGIN </button>
          </div>
        </Card>
      </div>
    </div>
  );
}