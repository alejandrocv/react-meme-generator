import React from 'react';
import React, { Component } from 'react';
import Header from './Components/Header';

export default class MemeGenerator extends Component {

  constructor() {
    super();

    this.state = {
      top: "",
      bottom: "",
      Img: "https://i.imgflip.com/1g8my4.jpg",

      memelist: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(res => {
        const { memes } = res.data

        this.setState(() => ({ memelist: memes }));

        console.log(memelist)

      })
  }

  handleChange(event) {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()

    const randNum = Math.floor(Math.random() * this.state.memelist.length)

    const Img = this.state.memelist[randNum].url
    this.setState({
      Img: Img
    })
  }



  render() {

    return (
      <div className="container" style={{ padding: 16 }}>
        <Header title="MemeGenerator" />

        <div className="meme-form" >
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-sm ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Top"
                  name="top"
                  value={this.state.top}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bottom"
                  value={this.state.bottom}
                  name="bottom"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-sm">
                <button className="btn btn-primary">Change Image</button>
              </div>

            </div>

          </form>
        </div>
        <div className="text-center image-text">
          <img src={this.state.Img} alt="" className="img-fluid " />
          <h2 className="top"> {this.state.top}</h2>
          <h2 className="bottom"> {this.state.bottom}</h2>
        </div>
      </div>
    );
  }
}
