import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            regName: '',
            regEmail: '',
            regPassword: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({ regEmail: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ regPassword: event.target.value })
    }
    onNameChange = (event) => {
        this.setState({ regName: event.target.value })
    }
    onSubmitRegister = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.regEmail,
                password: this.state.regPassword,
                name: this.state.regName
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
    }
    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" >
                <main className="pa4 black-80">
                    <form action="sign-up_submit" method="get" accept-charset="utf-8">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mt3">Register</legend>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" htmlFor="name">Name</label>
                                <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name" id="name" />
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                                <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address" id="email-address" />
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                                <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent" type="password" name="password" id="password" />
                            </div>
                        </fieldset>
                        <div className="mt3"><input onClick={this.onSubmitRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 mb4 pointer" type="submit" value="Register" /></div>
                    </form>
                </main>
            </article>
        );
    }

}

export default Register;