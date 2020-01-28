import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { addACar } from '../../actions/actionTypes.js'; 
import axios from 'axios';


class QuoteGenerator extends Component {
    constructor(props) {
        super(props);
        this.handleChangeDocs = this.handleChangeDocs.bind(this);
        this.handleChangeDocs2 = this.handleChangeDocs2.bind(this);
        this.handleSubmitMake = this.handleSubmitMake.bind(this);
        this.letterTranslator = this.letterTranslator.bind(this);
        this.categoryMuxer = this.categoryMuxer.bind(this);
        this.state = {
            makes: [
                {"make": "Acura"},
                {"make": "Alfa Romeo"},
                {"make": "Aston Martin"},
                {"make": "Audi"},
                {"make": "Bentley"},
                {"make": "BMW"},
                {"make": "Bugatti"},
                {"make": "Buick"},
                {"make": "Cadillac"},
                {"make": "Chevrolet"},
                {"make": "Chrysler"},
                {"make": "Daewoo"},
                {"make": "Dodge"},
                {"make": "Factory Five"},
                {"make": "Ferrari"},
                {"make": "Fiat"},
                {"make": "Fisker"},
                {"make": "Ford"},
                {"make": "Genesis"},
                {"make": "Geo"},
                {"make": "GMC"},
                {"make": "Honda"},
                {"make": "Hummer"},
                {"make": "Hyundai"},
                {"make": "Infiniti"},
                {"make": "Isuzu"},
                {"make": "Jaguar"},
                {"make": "Jeep"},
                {"make": "Kia"},
                {"make": "Koenigsegg"},
                {"make": "Lamborghini"},
                {"make": "Land Rover"},
                {"make": "Lexus"},
                {"make": "Lincoln"},
                {"make": "Lotus"},
                {"make": "Maserati"},
                {"make": "Maybach"},
                {"make": "Mazda"},
                {"make": "McLaren"},
                {"make": "Mercedes-Benz"},
                {"make": "Mercury"},
                {"make": "MINI"},
                {"make": "Mitsubishi"},
                {"make": "Morgan"},
                {"make": "Mosler",},
                {"make": "Nissan"},
                {"make": "Noble"},
                {"make": "Oldsmobile"},
                {"make": "Plymouth"},
                {"make": "Pontiac"},
                {"make": "Porsche"},
                {"make": "Rolls-Royce"},
                {"make": "Rossion"},
                {"make": "Ruf"},
                {"make": "Saab"},
                {"make": "Saleen"},
                {"make": "Saturn"},
                {"make": "Scion"},
                {"make": "Shelby"},
                {"make": "Smart"},
                {"make": "Spyker"},
                {"make": "Subaru"},
                {"make": "Suzuki"},
                {"make": "Tesla"},
                {"make": "Toyota"},
                {"make": "TVR"},
                {"make": "Vector"},
                {"make": "Volkswagen"},
                {"make": "Volvo"},
              ],
            models:[],
            isGettingMakes:'',
            selectedMake:'',
            selectedModel: '',
            pricingInfo: '',
        }
    }

    letterTranslator = (letter) => {
        if(letter==='S'){
            return 'Small'
        } if(letter==='M'){
            return 'Medium'
        } if(letter==='L'){
            return 'Large'
        } if(letter==='E'){
            return 'Very Large & Special Handling'
        } else {
            return "Letter Decryption Error"
        }
    }

    categoryMuxer = (category) => {
        if(category==='SEDAN'){
            return 'Sedan'
        } if(category==='COUPE'){
            return 'Coupe'
        } if(category==='SUV'){
            return 'Sport Utility'
        } if(category==='TRUCK'){
            return 'Truck'
        } if(category==='EXOTIC'){
            return 'Exotic'
        } if(category==='MINIVAN'){
            return 'Minivan'
        } else {
            return 'Category Muxing Error'
        }
    }

    basicPrice(info){
        const { category, size } = info
        // console.log('basic', category, size)
        if(category === 'SEDAN' && size === 'S'){
            return '$13.00'
        } if(category === 'SEDAN' && size === 'M'){
            return '$26.00'
        } if(category === 'SEDAN' && size === 'L'){
            return '$39.00'
        } if(category === 'SEDAN' && size === 'E'){
            return '$52.00'
        } if(category === 'COUPE' && size === 'S'){
            return '$12.00'
        } if(category === 'COUPE' && size === 'M'){
            return '$24.00'
        } if(category === 'COUPE' && size === 'L'){
            return '$36.00'
        } if(category === 'COUPE' && size === 'E'){
            return '$48.00'
        } if(category === 'SUV' && size === 'S'){
            return '$14.00'
        } if(category === 'SUV' && size === 'M'){
            return '$28.00'
        } if(category === 'SUV' && size === 'L'){
            return '$42.00'
        } if(category === 'SUV' && size === 'E'){
            return '$56.00'
        } if(category === 'TRUCK' && size === 'S'){
            return '$16.00'
        } if(category === 'TRUCK' && size === 'M'){
            return '$32.00'
        } if(category === 'TRUCK' && size === 'L'){
            return '$48.00'
        } if(category === 'TRUCK' && size === 'E'){
            return '$64.00'
        } if(category === 'EXOTIC' && size === 'S'){
            return '$25.00'
        } if(category === 'EXOTIC' && size === 'M'){
            return '$50.00'
        } if(category === 'EXOTIC' && size === 'L'){
            return '$75.00'
        } if(category === 'EXOTIC' && size === 'E'){
            return '$100.00'
        } if(category === 'MINIVAN' && size === 'S'){
            return '$15.00'
        } if(category === 'MINIVAN' && size === 'M'){
            return '$30.00'
        } if(category === 'MINIVAN' && size === 'L'){
            return '$45.00'
        } if(category === 'MINIVAN' && size === 'E'){
            return '$60.00'
        } else {
            return "Error Calculating Basic Tier Price"
        } 
    }

    premiumPrice(info){
        const { category, size } = info
        // console.log('basic', category, size)
        if(category === 'SEDAN' && size === 'S'){
            return '$18.00'
        } if(category === 'SEDAN' && size === 'M'){
            return '$31.00'
        } if(category === 'SEDAN' && size === 'L'){
            return '$44.00'
        } if(category === 'SEDAN' && size === 'E'){
            return '$57.00'
        } if(category === 'COUPE' && size === 'S'){
            return '$17.00'
        } if(category === 'COUPE' && size === 'M'){
            return '$29.00'
        } if(category === 'COUPE' && size === 'L'){
            return '$41.00'
        } if(category === 'COUPE' && size === 'E'){
            return '$53.00'
        } if(category === 'SUV' && size === 'S'){
            return '$19.00'
        } if(category === 'SUV' && size === 'M'){
            return '$33.00'
        } if(category === 'SUV' && size === 'L'){
            return '$47.00'
        } if(category === 'SUV' && size === 'E'){
            return '$61.00'
        } if(category === 'TRUCK' && size === 'S'){
            return '$21.00'
        } if(category === 'TRUCK' && size === 'M'){
            return '$37.00'
        } if(category === 'TRUCK' && size === 'L'){
            return '$53.00'
        } if(category === 'TRUCK' && size === 'E'){
            return '$69.00'
        } if(category === 'EXOTIC' && size === 'S'){
            return '$30.00'
        } if(category === 'EXOTIC' && size === 'M'){
            return '$55.00'
        } if(category === 'EXOTIC' && size === 'L'){
            return '$80.00'
        } if(category === 'EXOTIC' && size === 'E'){
            return '$105.00'
        } if(category === 'MINIVAN' && size === 'S'){
            return '$20.00'
        } if(category === 'MINIVAN' && size === 'M'){
            return '$35.00'
        } if(category === 'MINIVAN' && size === 'L'){
            return '$50.00'
        } if(category === 'MINIVAN' && size === 'E'){
            return '$65.00'
        } else {
            return "Error Calculating Premium Tier Price"
        } 
    }

    supremePrice(info){
        const { category, size } = info
        // console.log('basic', category, size)
        if(category === 'SEDAN' && size === 'S'){
            return '$28.00'
        } if(category === 'SEDAN' && size === 'M'){
            return '$41.00'
        } if(category === 'SEDAN' && size === 'L'){
            return '$54.00'
        } if(category === 'SEDAN' && size === 'E'){
            return '$67.00'
        } if(category === 'COUPE' && size === 'S'){
            return '$27.00'
        } if(category === 'COUPE' && size === 'M'){
            return '$39.00'
        } if(category === 'COUPE' && size === 'L'){
            return '$51.00'
        } if(category === 'COUPE' && size === 'E'){
            return '$63.00'
        } if(category === 'SUV' && size === 'S'){
            return '$29.00'
        } if(category === 'SUV' && size === 'M'){
            return '$43.00'
        } if(category === 'SUV' && size === 'L'){
            return '$57.00'
        } if(category === 'SUV' && size === 'E'){
            return '$71.00'
        } if(category === 'TRUCK' && size === 'S'){
            return '$31.00'
        } if(category === 'TRUCK' && size === 'M'){
            return '$47.00'
        } if(category === 'TRUCK' && size === 'L'){
            return '$63.00'
        } if(category === 'TRUCK' && size === 'E'){
            return '$79.00'
        } if(category === 'EXOTIC' && size === 'S'){
            return '$40.00'
        } if(category === 'EXOTIC' && size === 'M'){
            return '$65.00'
        } if(category === 'EXOTIC' && size === 'L'){
            return '$90.00'
        } if(category === 'EXOTIC' && size === 'E'){
            return '$115.00'
        } if(category === 'MINIVAN' && size === 'S'){
            return '$30.00'
        } if(category === 'MINIVAN' && size === 'M'){
            return '$45.00'
        } if(category === 'MINIVAN' && size === 'L'){
            return '$60.00'
        } if(category === 'MINIVAN' && size === 'E'){
            return '$75.00'
        } else {
            return "Error Calculating Supreme Tier Price"
        } 
    }

    handleChangeClassic = (evt) => {
        evt.preventDefault()
        // console.log('handleChangeClassic'+ evt.target.value)
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }

    handleChangeDocs(evt){
        this.setState({
            selectedMake: evt.target.value,
        })
    }

    handleChangeDocs2(evt){
        this.setState({
            selectedModel: evt.target.value,
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        const { id, carId, color, licensePlate } = this.state

        this.props.addACar(id, carId, color, licensePlate)
            .then(() => {
                alert('successfully added car')
            })
            .catch((err) => { console.error(err) })
    }

    handleSubmitMake = (evt) => {
        evt.preventDefault()
        // console.log('this.state.selectedMake', this.state.selectedMake)
        // alert(this.state.selectedMake)
        axios.post('https://pt6-wowo.herokuapp.com/carsPG/models', {make:`${this.state.selectedMake}`})
        .then(res =>{
            // console.log('res.data', res.data)
            if(res.data.length===1){
                // console.log('res.data.length = 1', res.data[0].model)
                this.setState({models:res.data})
                this.setState({selectedModel:res.data[0].model})
                this.setState({selectedMake:res.data[0].make})
            } else {
                this.setState({models: res.data})
            }
            // console.log('this.state.models', this.state.models)
        })
        .catch(err => console.log(err))
    }

    handleSubmitModel = (evt) => {
        evt.preventDefault()
        // alert(this.state.selectedModel)
        axios.post('https://pt6-wowo.herokuapp.com/carsPG/getCarId', {make:`${this.state.selectedMake}`, model:`${this.state.selectedModel}`})
        .then(res =>{
            // console.log('res.data', res.data)
            this.setState({pricingInfo: res.data})
            // console.log('this.state.models', this.state.models)
        })
        .catch(err => console.log(err))
    }

    // componentDidMount(){
        
    // }

    render() {
        // const { makes, models } = this.state
        // const { isLoading, } = this.props
        return (
            <div>
                <h3>Get a Quote:</h3>
                <form onSubmit={this.handleSubmitMake}>
                    <label>
                        Pick the Make of Your Car:
                        <select value={this.state.selectedMake} onChange={this.handleChangeDocs}>
                            {this.state.makes.map((make) => {
                                return (<option value={make.make} key={make.make}>{make.make}</option>)
                            })}
                        </select>
                    </label>
                    <button onClick={this.handleSubmitMake}>Get Models for make</button>
                </form>
                {(this.state.models.length !== 0) ? 
                    <form onSubmit={this.handleSubmitModel}>
                        <label>
                            Pick the Model of Your Car:
                            <select value={this.state.selectedModel} onChange={this.handleChangeDocs2}>
                                {this.state.models.map((model) => {
                                return (<option value={model.model} carid={model.carId} key={model.model}>{model.model}</option>)
                                })}
                            </select>
                        </label>
                        <button onClick={this.handleSubmitModel}>Get Pricing</button>
                    </form>
                : <p>Select a Make</p>
                }
                {(this.state.pricingInfo !=='') ? 
                    <div>
                        <h3><strong>{this.state.pricingInfo.make} <br /> {this.state.pricingInfo.model}</strong></h3>
                        <p><strong>Vehicle Type:</strong> {this.categoryMuxer(this.state.pricingInfo.category)} <br /> <strong>Size Category:</strong> {this.letterTranslator(this.state.pricingInfo.size)}</p>
                        <h4>
                            <strong>Basic Wash:</strong> {this.basicPrice(this.state.pricingInfo)}
                            <br />
                            <strong>Premium Wash:</strong> {this.premiumPrice(this.state.pricingInfo)}
                            <br />
                            <strong>Supreme Wash:</strong> {this.supremePrice(this.state.pricingInfo)}
                        </h4>

                    </div>
                : <p></p>
                }
                    
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};
  
const mapDispatchToProps = {
};
  
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(QuoteGenerator)
);