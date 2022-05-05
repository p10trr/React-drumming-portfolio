import React, {useState, useEffect} from 'react';


export default function Contact({closeModal, socialMedia}) {

  const initialValues = {name: '', phone: '', email: '', subject: '', message: ''};
  const [focusActive, setFocusActive] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const toggleFocus = () => {
    setFocusActive(!focusActive)
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]: value });  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  })

  const validate = (values) => {
    const errors = {};
    const regex = /^\S+@\S+\.\S+$/;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format!";
    }
    if (!values.message) {
      errors.message = "Your message is blank!";
    }
    return errors;
  };
  
  return (
    <div className='contact-modal'>
      {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='message-success'><p>Message sent!</p><button onClick={() => closeModal(false)}>OK</button></div>) : null}
       <h5>Get in touch</h5> 
       {socialMedia}
       <section className="contact-wrap">
         <span className='close-btn' onClick={() => closeModal(false)} >&times;</span>
  <form action="" onSubmit={handleSubmit} className="contact-form">
    <div className="contact-col">
      <div className="input-block">
        <label for="" className={focusActive ? "input-active" : ""}>Name(s)</label>
        <input type="text" name="name" value={formValues.name} className="form-control" onFocus={toggleFocus} onBlur={toggleFocus} onChange={handleChange}/>
        <p className='error-msg'>{formErrors.name}</p>
      </div>
     
    </div>
    <div className="contact-col">
      <div className="input-block">
        <label for="" className={focusActive ? "input-active" : ""}>Phone</label>
        <input type="text" name="phone" value={formValues.phone} className="form-control" onFocus={toggleFocus} onBlur={toggleFocus} onChange={handleChange} />
      </div>
    </div>
    <div className="contact-col">
      <div class="input-block">
        <label for="" className={focusActive ? "input-active" : ""}>Email</label>
        <input type="email" name="email" value={formValues.email} className="form-control" onFocus={toggleFocus} onBlur={toggleFocus} onChange={handleChange}/>
        <p className='error-msg'>{formErrors.email}</p>
      </div>
      
    </div>
    <div className="contact-col">
      <div className="input-block">
        <label for="" className={focusActive ? "input-active" : ""}>Message Subject</label>
        <input type="text" name="subject" value={formValues.subject} className="form-control" onFocus={toggleFocus} onBlur={toggleFocus} onChange={handleChange}/>
      </div>
    </div>
    <div className="contact-col">
      <div className="input-block textarea">
        <label for="" className={focusActive ? "input-active" : ""}>Drop your message here</label>
        <textarea type="text" name="message" value={formValues.message} className="form-control" onFocus={toggleFocus} onBlur={toggleFocus} onChange={handleChange}></textarea>
        <p className='error-msg'>{formErrors.message}</p>
      </div>
      
    </div>
    <div class="contact-col">
      <button class="square-button">Send</button>
    </div>
  </form>
</section>

    </div>
  )
}
