import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import axios from 'axios';
import Papa from 'papaparse';
import file from '../games.csv'

class Dashboard extends Component{
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        //this.getData = this.getData.bind(this);
    }

    componentWillMount() {
       //let file = new File(["games"],'../games.csv')
       var dataCSV = [];

        Papa.parse(file,{
            download: true,
            complete:results=>{
                //this.setState({data:results.data})
                for(let i = 1;i<results.data.length;i++){
                    dataCSV.push({
                        "Rank": results.data[i][0],
                        "Name": results.data[i][1],
                        "Platform": results.data[i][2],
                        "Year": results.data[i][3],
                        "Genre": results.data[i][4],
                        "Publisher": results.data[i][5],
                        "Global_Sales": results.data[i][6],
                    })
                }
                localStorage.setItem("file",JSON.stringify(dataCSV));
            }
        })
    }

    render(){
        let games = JSON.parse(localStorage.getItem("file")).map(game=>{
            return <div className="card" style={{color:'white',backgroundColor:'black',marginBottom: '45px'}} key={game["Rank"]}>
            <div className="card-body">
              <h5 className="card-title"><Link to={{
                  pathname: '/details',
                  state:{
                    name: game["Name"],
                    Platform: game["Platform"],
                    Year: game["Year"],
                    Genre: game["Genre"],
                    Sales: game["Global_Sales"]
                  }
              }} className="card-title">{game["Name"]}</Link></h5>
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
export default Dashboard;

