import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <div>
        <Navbar/>
       <div className="container">
        <div className="row" style={{marginTop:'80px'}}>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <b>
                <div className="row g-3" style={{ color: 'rgb(60,144,255)' }} >
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1>CONTACT US</h1>
                    </div>

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder='Enter Name' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" placeholder='Enter Email' />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Subject</label>
                        <input type="text" className="form-control" placeholder='Enter Subject' />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Message</label>
                        <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
                </b>
            </div>
        </div>
        <br /><br />
        <div className="row g-3">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div class="card p-0">
                                        <div class="card-body p-0">
                                            <img src="https://www.flydenver.com/app/uploads/2023/09/Customer-Service-01-min.jpg" alt="" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
                                        </div>
                                        </div>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <h1 style={{ color: 'rgb(60,144,255)' }}>Our Customer Service Agents are ready to assist you,all the time(24*7).</h1>
                <h5>
                <p>When you connect with our agents, you will know you are in good hands. They are knowledgeable about medical field and the products and services CMC has to offer and can help you with appointments,and any other assistance.</p>
                <p><font style={{ color: 'rgb(60,144,255)' }}>Text or Video Chat:</font> (720) 902-9381</p>
                <p><font style={{ color: 'rgb(60,144,255)' }}>Call:</font> (720) 730-IFLY (4359)</p>
                <p><font style={{ color: 'rgb(60,144,255)' }}>Email:</font> info@skylift.com</p>
                <p><button className="btn btn-primary">Call</button></p>
                </h5>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
