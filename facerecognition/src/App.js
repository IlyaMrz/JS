import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Facerecognition from './Components/Facerecognition/Facerecognition';
import Particles from 'react-particles-js';
import { Component } from 'react';



const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  faceLocation = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box })
  }

  onInputChange = (event) => {
    console.log(event.target.value)
    this.setState({ input: event.target.value })
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    console.log('click');
      fetch('http://localhost:3000/imageurl', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              input: this.state.input
            })
          })
      .then(response => response.json())
      .then(response => {
      if (response) {
        fetch('http://localhost:3000/image', {
          method: 'put',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count }))
          })
          .catch(console.log)
      }
      this.displayFaceBox(this.faceLocation(response))
    })
      .catch(err => console.log(err));

  }

  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })

    }
    this.setState({ route: route });

  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Particles id='particle-canvas'
          params={particlesOptions}
        />
        <Logo />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'home' ?
          <div>
            <Rank name={this.state.user.name}
              entries={this.state.user.entries} />
            <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
            <Facerecognition box={box} imageUrl={imageUrl} />
          </div>
          : route === 'signin' ?
            <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            :
            <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        }
      </div>
    );
  }
}

export default App;
