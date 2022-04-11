import React from "react"
import "./homepage.css"
import JobRatings from './JobRatings.png';
import JobVacancies from './JobVacancies.png';
import JobVacanciesBar from './JobVacanciesBar.png';
import Experience from './Experience.png';


const Homepage = ({setLoginUser}) => {
    const data = [
        { Title: "Financial Markets-Senior Analyst-KYC", Company: 'eClerx', Rating: "3.6" },
        { Title: "Senior Data Analyst - Workforce Management Planning", Company: 'idfc first bank', Rating: "3.9" },
        { Title: "Data Analyst", Company: 'Bauer Corporate Services Pvt Ltd', Rating: "3.6" },
        { Title: "Data Quality Business Analyst", Company: 'BNP Paribas', Rating: "3.9" },
        { Title: "MIS/ Data Analyst", Company: 'Reach Local Services Pvt Ltd.', Rating: "3.1" }
      ]
      
    return (
        <div className="homepage">
            <h1  class="order-header">All-at-One Job Portal</h1>
            <h2  class="order-header">Job openings</h2>
            <table>

                <tr>
                    <th>Title</th>
                    <th>Company</th>
                    <th>Rating</th>
                </tr>
                {data.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.Title}</td>
                        <td>{val.Company}</td>
                        <td>{val.Rating}</td>
                    </tr>
                )
                })}
            </table>
            <div className="visual">
                <img src={JobRatings} />
                
                <img src={Experience} />
                <img src={JobVacanciesBar} />
                <img src={JobVacancies} />
            </div>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage
