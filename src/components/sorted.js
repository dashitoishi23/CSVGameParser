import React, {Component} from 'react';


class Sorted extends Component{
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        //this.getData = this.getData.bind(this);
    }


    render(){
        let games = JSON.parse(localStorage.getItem("file")).sort((a,b)=>{
            return a["Year"] - b["Year"]
        }).map(game=>{
            return <div className="card" style={{color:'white',backgroundColor:'black',marginBottom: '45px'}} key={game["Rank"]}>
            <div className="card-body">
              <h5 className="card-title">Name:{game["Name"]}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Platform:{game["Platform"]}</h6>
              <p className="card-text">Released in : {game["Year"]}</p>
              <p className="card-text">Genre : {game["Genre"]}</p>
            </div>
          </div>
        })
        return(
            <div style={{backgroundColor:'blue'}}>
                <div className = "container">
                    <div className = "container">
                        {games}
                    </div>
                </div>
            </div>
        )
    }


}
export default Sorted;

