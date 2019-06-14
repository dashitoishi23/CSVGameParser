import React, { Component } from 'react'

export default class Details extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="container">
                    <div className="card" style={{color:'white',backgroundColor:'black',marginBottom: '45px'}}>
            <div className="card-body">
              <h5 className="card-title">Name: {this.props.location.state.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Platform:{this.props.location.state.Platform}</h6>
              <p className="card-text">Released in : {this.props.location.state.Year}</p>
              <p className="card-text">Genre : {this.props.location.state.Genre}</p>
              <p className="card-text">Sale Figures : {this.props.location.state.Sales}</p>
            </div>
          </div>
                    </div>
                </div>
            </div>

        )
    }
}
