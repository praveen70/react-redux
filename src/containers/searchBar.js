import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class Searchbar extends Component{
    state={
        term:'',
    }
    onInputChange=event=>{
        const { name, value }= event.target;
        this.setState({[name]: value})
    }
    onFormSubmit=event=>{
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        console.log(this.props.fetchWeather(this.state.term))
        this.setState({term:''});
    }
    render(){
       
        return(
            <form className='input-group' onSubmit={event=>this.onFormSubmit(event)}>
                <input placeholder='Get a five-day forecast in your favourite cities' 
                    className='form-control'
                    value={this.state.term}
                    name='term'
                    onChange={event=>this.onInputChange(event)}
                />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather}, dispatch);
}

export default connect(null,mapDispatchToProps )(Searchbar);