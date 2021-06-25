import React,{Component} from 'react'; 
import emailjs from 'emailjs-com';
 const SERVICE_ID= process.env.REACT_APP_SERVICE_ID;
 const TEMPLATE_ID= process.env.REACT_APP_TEMPLATE_ID;
 const USER_ID= process.env.REACT_APP_USER_ID;

class ContactForm extends Component{

    constructor(){
        super();
        this.state={ email:'',name:'',subject:'',message:'',email_err:'',name_err:'',subject_err:'',message_err:'',return_msg:'',flag : false }

         this.handleChangeEmail = this.handleChangeEmail.bind(this);
         this.handleChangeName = this.handleChangeName.bind(this);
         this.handleChangeSubject = this.handleChangeSubject.bind(this);
         this.handleChangeMessage = this.handleChangeMessage.bind(this);
         this.handleSubmit1 = this.handleSubmit1.bind(this);
    }

    handleChangeEmail(e){
        this.setState({email:  e.target.value});
        var EmailReg =  /(\w+)\s(\w+)/;
        if(e.target.value === '') 
          this.setState({email_err: 'Required Field'});
        else if(EmailReg.test(e.target.value)) 
          this.setState({email_err: ''});
        else 
          this.setState({email_err: 'Enter Valid Email'});
      }

      handleChangeName(e){
        this.setState({name:  e.target.value});
          if(e.target.value === '') 
            this.setState({name_err: 'Required Field'});
          else 
            this.setState({name_err: ''});
      }
      handleChangeSubject(e){
        this.setState({subject:  e.target.value});
          if(e.target.value === '') 
            this.setState({subject_err: 'Required Field'});
          else 
            this.setState({subject_err: ''});
      }
      handleChangeMessage(e){
        this.setState({message:  e.target.value});
          if(e.target.message === '') 
            this.setState({message_err: 'Required Field'});
          else 
            this.setState({message_err: ''});
      }

      sendEmail(e){
        e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, "#contactForm", USER_ID)
      .then((result) => {
          console.log("yesyy", result.text);
          window.location.reload()
      }, (error) => {
          console.log("noo", error.text);
          console.log(SERVICE_ID)
          console.log(TEMPLATE_ID)
          console.log(USER_ID)
          window.location.reload()
      });
     
      }



      handleSubmit1(e)
      {
          if(this.state.name === '') 
              this.setState({name_err: 'Required Field'});
             
          if(this.state.email === '')
              this.setState({email_err: 'Required Field'});
          if(this.state.subject === '')
             this.setState({subject_err: 'Required Field'});
         if(this.state.message === '')
             this.setState({message_err: 'Required Field'});

             if(this.state.name === '' || this.state.email === '' || this.state.subject === '' || this.state.message === '')
             {
                this.setState({return_msg: 'Fill All First', flag: true });
             }
             else
             {
                this.setState({return_msg: 'Success.', flag: true});
                this.sendEmail(e)
               
             }
      }
    render(){

    return(
  
            <div className="contact-form">
              <div id="message">
                  {this.state.flag ? 
                        <div className="alert alert-success">
                        <strong>{this.state.return_msg}</strong>
                        </div>
                    : null}
              </div> 
              <form method="post" id="contactForm" onSubmit={this.handleSubmit1}>
                  <div className="row">
                  <div className="col-md-6 col-sm-12">
                      <div className="input-group"> 
                          <input type="text" id="name"  value={this.state.name} name="from_name" onChange={this.handleChangeName} className="form-control" placeholder="Full Name:" /> 
                          <span id="err">{this.state.name_err}</span>
                      </div>
                      <div className="input-group"> 
                          <input type="text" className="form-control" value={this.state.email}name="from_email" onChange={this.handleChangeEmail} id="email" placeholder="Email:" />
                          <span id="err">{this.state.email_err}</span>
                      </div>                            
                      <div className="input-group"> 
                          <input type="text" id="tel" value={this.state.subject} name="from_phone"  onChange={this.handleChangeSubject} className="form-control" placeholder="Number:" />
                          <span id="err">{this.state.subject_err}</span>
                      </div> 
                  </div> 
                  <div className="form-group col-md-6 col-sm-12">
                      <div className="input-group input_group_full_width"> 
                          <textarea name="comments" id="message"  value={this.state.message} name= "message" onChange={this.handleChangeMessage} rows="6" className="form-control" placeholder="Message"></textarea>
                          <span id="err">{this.state.message_err}</span>
                      </div> 
                  </div> 
                  <div className="col-sm-12">
                    <button type="button" name="send" onClick={this.handleSubmit1} className="submit-button btn btn-chos" >Send Message</button>
                    <div id="simple-msg"></div>
                  </div>
   
              </div> 
              </form> 
            </div> 

        )

    }
}

 
export default ContactForm;