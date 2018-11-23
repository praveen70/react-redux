import React, { Component } from 'react';
import { connect } from 'react-redux';
import Googlemap from '../components/googlMaps';
 class Weatherlist extends React.Component{
    
    componentDidMount(){

        console.log("i am data for world==>>>>>",this.props.weather)
    }

    renderWeather(cityData){
        console.log(temps)
        // const temps = cityData.list.map(weather =>weather.mian.temp);
        

        return(
            <tr>
                <td>{temps}</td>
            </tr>
        )
    }
    render() {
        return (
             <table className='table table-hover'>
                 <thead>
                     <tr>
                         <th>
                             city
                         </th>
                         <th>
                             Temprature
                         </th>
                         <th>
                             Pressure
                         </th>
                         <th>
                             Humidity
                         </th>
                     </tr>
                 </thead>
                 <tbody>
                     {/* {this.props.weather.map(this.renderWeather)} */}
                 </tbody>
             </table>
        );
    }
}

function mapStateToProps({weather}){
    return { weather};
}


export default connect(mapStateToProps)(Weatherlist);