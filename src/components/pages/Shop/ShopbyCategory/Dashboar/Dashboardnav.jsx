import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


const Dashboardnav = () => {
  const { t } = useTranslation();
  // const [movies,setMovies] = useContext(MovieContext)
  return (
    <>
    <div className="dashboard">
        <div className="container">
        <button> <Link className='dashbtn' to='/add'>{t("language.dashboard.Dashboard")}</Link></button>
        </div>
    </div>
    </>
  )
}




export default Dashboardnav