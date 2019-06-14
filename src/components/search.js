import React, { Component } from 'react'

export class Search extends Component {

    constructor(){
        super();
        this.state={
            query:"",
            data:{}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
        
    }
    onSubmit(e){
        e.preventDefault();
        
        let games = JSON.parse(localStorage.getItem("file"))
        console.log(games)
        for(let i = 1;i<games.length-1;i++){
            //console.log(game["Name"])
            if(games[i]["Name"]===this.state.query){
                console.log(games[i])
                this.setState({data:games[i]});
            }
        }

    }


    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Search what you want</label>
                        <input type="text" className="form-control" name="query" placeholder="Enter name to be searched" 
                        onChange = {this.onChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
</form> 
<div className="card" style={{color:'white',backgroundColor:'black',marginUp: '45px'}}>
            <div className="card-body">
              <h5 className="card-title">Name:{this.state.data["Name"]}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Platform:{this.state.data["Platform"]}</h6>
              <p className="card-text">Released in : {this.state.data["Year"]}</p>
              <p className="card-text">Genre : {this.state.data["Genre"]}</p>
            </div>
          </div>               
            </div>
        )
    }
}

export default Search
