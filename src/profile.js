import axios from 'axios'
import React,{Component} from 'react'


class Profile extends Component {
    constructor() {
        super()
        this.state = { 
            picture:'',
            fullname: '',
            username: '',
            location:'',
            EmailAdress:''
            
    
         }
    }
    componentDidMount  = () =>{
        axios.get("http://api.github.com/users/" + this.props.Username + "?client_id=6911d4269bc4f6ddf233&client_secret=3feaf5064fe244b800c467ac21dbe4c9b111a85a&sort=created")
        .then((response) => {
          
    
            this.setState({
                picture: response.data.avatar_url,
                fullname: response.data.name,
                username: response.data.login,
                location: response.data.location,
                EmailAdress: response.data.email
              
            })
            
         console.log(response.data.avatar_url);
        })
    }
    render(){
    return(
        <div className="row">
             <div className="col-lg-12">
              <div className="card mb-4">
                  <div className="card-body text-center">
                    <img src={this.state.picture} alt="avatar" className="rounded-circle img-fluid" style={{width: '150px',}}/>
                    <h5 className="my-3">{this.state.fullname}</h5>
                    <p className="text-muted mb-1">username:{this.state.username}</p>
                    <p className="text-muted mb-1">email:{this.state.email}</p>
                    <p className="text-muted mb-4">{this.state.location}</p>
                   
                  </div>
                </div>
          
         
          </div>
        </div>
      
            
            ) ;
          }
        
}


    




















   
   


  export default Profile;


