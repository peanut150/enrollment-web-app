import logoUni from "./logoUni.png";
import "./dashboard.css";

export default function Dashboard() {
    return (
        <section className='hero'>

            <img src={logoUni} alt="logoUni" className="logoUni"/>

            <h1 style={{fontSize: '50px', fontWeight: 'bold', marginTop: '-9vh'}}>Welcome, Admin!</h1>

            <div>
            <button className="studentEnrollButton">View Student Enrollment</button>
            </div>
            <div>
            <button className="enrollButton">Enroll A Student</button>
            </div>

        </section>
    )
}
