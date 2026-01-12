import React from 'react';
import { Link } from 'react-router-dom';

const DashboardIcons = () => {
    return  (
        <>
            <div
                className="container-fluid py-5"
                style={{
                    backgroundImage: "url('src/assets/images/bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "100vh",
                }}>
                    <div className='container'>
                    <h2 className="text-center mb-4 fw-semibold">Applications</h2><br></br>
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 g-5">

<div className="col">
    <div className="icon-card">
        <div className="icon-img">A</div>
        <div className="icon-title">Bidding</div>
    </div>
</div>

<div className="col">
    <div className="icon-card">
        <div className="icon-img">K</div>
        <div className="icon-title">CRM</div>
    </div>
</div>

<div className="col">
    <div className="icon-card">
        <div className="icon-img">S</div>
        <div className="icon-title">Retail</div>
    </div>
</div>

<div className="col">
    <div className="icon-card">
        <div className="icon-img">C</div>
        <div className="icon-title">Projects</div>
    </div>
</div>

<div className="col">
    <div className="icon-card">
        <div className="icon-img">St</div>
        <div className="icon-title">Purchase</div>
    </div>
</div>

<div className="col">
    <div className="icon-card">
        <div className="icon-img">Su</div>
        <div className="icon-title">Production</div>
    </div>
</div>
<div className="col">
    <div className="icon-card">
        <div className="icon-img">Su</div>
        <div className="icon-title">Books</div>
    </div>
</div>
<div className="col">
    <div className="icon-card">
        <div className="icon-img">Su</div>
        <div className="icon-title">Field Service</div>
    </div>
</div>
<div className="col">
<Link to="/login" className="text-decoration-none text-dark">  <div className="icon-card">
        <div className="icon-img">Su</div>
        <div className="icon-title">Peoples (HR)</div>
    </div>
    </Link>
</div>
<div className="col">
<Link to="/login" className="text-decoration-none text-dark">
    <div className="icon-card">
        <div className="icon-img">TS</div>
        <div className="icon-title">My Space</div>
    </div>
</Link>
</div>

</div>
                    </div>
            
              
            </div>
        </>
    );
}

export default DashboardIcons;
