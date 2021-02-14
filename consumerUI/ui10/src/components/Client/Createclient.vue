
<template>
	<div class="signup-form">
    <form >
		<h2>Realproperty</h2>
		<p class="hint-text">Create your account. It's free and only takes a minute.</p>
        <div class="form-group">
			<input type="text" class="form-control" name="first_name" placeholder="First Name" v-model="client.f_name" />	
        </div>
		<div class="form-group">
		<input type="text" class="form-control" name="last_name" placeholder="Last Name" v-model="client.l_name"/>
		</div>
        <div class="form-group">
        <input type="email" class="form-control" name="email" placeholder="Email" v-model="client.email"/>
        </div>
		<div class="form-group">
         <input type="text" class="form-control" name="contact" placeholder="contact"  v-model="client.contact"/>
        </div>
        <div class="form-group">
        <input type="text" class="form-control" name="city" placeholder="NANYUKI"  v-model="client.city"/>
        </div>
         <div class="form-group">
                            <label class="control-label col-sm-offset-2 col-sm-2" for="company">gender</label>
                            <div class="col-sm-6 col-md-4">
                             <select id="gender" class="form-control" v-model="client.gender">
                             <option>Male</option>
                             <option>Female</option>
                             
        </select> 
      </div>
    </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="password" v-model="client.pwd"/>
        </div>        
        <div class="form-group">
			<label class="form-check-label"><input type="checkbox"> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block" @click="saveApplicant" >Register Now</button>
        </div>
    </form>
	<div class="text-center">Already have an account? <a href="#">Sign in</a></div>
</div>
</template>
<script>
import clientDataservice from '../../services/clientDataservice';
export default {
    name:'client-new',
    data () {
    return {
      client: {
        id: null,
        f_name: '',
        l_name: '',
        email: '',
        gender:'',
        contact: '',
        city:'',
        pwd:''
      }
    }
  },
  
   methods: {
    saveclient() {
      var data = {
        f_name:this.client.f_name,
		l_name:this.client.l_name,
        email:this.client.email,
        gender:this.client.gender,
        contact:this.client.contact,
        city:this.client.city,
		pwd:this.client.password
      };
      clientDataservice.createTenant(data)
        .then(response => {
          this.client.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
	},
    newclient() {
      this.submitted = false;
      this.applicant = {};
    }
  }
}

</script>
<style>
body {
	color: #fff;
	background: #63738a;
	font-family: 'Roboto', sans-serif;
}
.form-control {
	height: 40px;
	box-shadow: none;
	color: #969fa4;
}
.form-control:focus {
	border-color: #5cb85c;
}
.form-control, .btn {        
	border-radius: 3px;
}
.signup-form {
	width: 450px;
	margin: 0 auto;
	padding: 30px 0;
font-size: 15px;
}
.signup-form h2 {
	color: #636363;
	margin: 0 0 15px;
	position: relative;
	text-align: center;
}
.signup-form h2:before, .signup-form h2:after {
	content: "";
	height: 2px;
	width: 30%;
	background: #d4d4d4;
	position: absolute;
	top: 50%;
	z-index: 2;
}	
.signup-form h2:before {
	left: 0;
}
.signup-form h2:after {
	right: 0;
}
.signup-form .hint-text {
	color: #999;
	margin-bottom: 30px;
	text-align: center;
}
.signup-form form {
	color: #999;
	border-radius: 3px;
	margin-bottom: 15px;
	background: #f2f3f7;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
	padding: 30px;
}
.signup-form .form-group {
	margin-bottom: 20px;
}
.signup-form input[type="checkbox"] {
	margin-top: 3px;
}
.signup-form .btn {        
	font-size: 16px;
	font-weight: bold;		
	min-width: 140px;
	outline: none !important;
}
.signup-form .row div:first-child {
	padding-right: 10px;
}
.signup-form .row div:last-child {
	padding-left: 10px;
}    	
.signup-form a {
	color: #fff;
	text-decoration: underline;
}
.signup-form a:hover {
	text-decoration: none;
}
.signup-form form a {
	color: #5cb85c;
	text-decoration: none;
}	
.signup-form form a:hover {
	text-decoration: underline;
	color:#5cb85c
}  
</style>




