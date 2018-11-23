import React, { Component } from 'react';

class Googlemap extends Component {
    componentDidMount(){
        new Googlemap.maps.Map(this.refs.map, {
            zomm:12,
            center:{
                lat:this.props.lat,
                lng:this.props.lon
            }
        });
    }
    render(){
        return(
            <div ref='map' />
        );
    }

}

export default Googlemap;