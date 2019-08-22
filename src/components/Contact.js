import React from 'react';

function Contact(){
    return(
      <div id="section3" className="contact-area section-padding" >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <div className="section-header">
                <h2>Contact us</h2>
                <p>Feel free to contact us</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="single-form">
                <form>
                  <div className="form-group">
                    <label for="exampleInputName"></label>
                    <input type="text" className="form-control" id="exampleInputName"  placeholder="Name"></input>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1"></label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-gropu">
                    <label for="exampleFormControlTextarea1"></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">Tell us</textarea>
                  </div>
                  <br/>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card card-primary">
                <div>
                  <img className="img-fluid rounded" src='https://maps.googleapis.com/maps/api/staticmap?center=19.369606,-99.161142&zoom=17&size=400x350&maptype=roadmap&markers=19.369606,-99.161142&key=AIzaSyACpFN6K6LnmuXQfe-tDBr1jK5oJO3VfjU%20&scale=2'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Contact;