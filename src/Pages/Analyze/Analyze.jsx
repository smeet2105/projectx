import React, {Component, useState, useEffect} from 'react'
import {TextField, Grid, Typography, Button} from '@material-ui/core'
import axios from 'axios';
import Main from './Main'
import './Analyze.css'
import PeopleImage from './People.jpeg'

/*

function Analyze() {

    const [visible, setVisible] = useState(false)
    const [analyzeData, setAnalyzeData] = useState("")

    const postData = async () => {
        const response = await axios.post("http://localhost:3000/analyze", analyzeData)
                                    .catch(err => console.log("Error: " + err))
    }

            //useEffect(() => {
            //    axios.post('http://localhost:3000/analyze', {analyzeData})
            //    .then(res => console.log(res.analyzeData))
            //   .catch(err => console.log(err))
            //}, [analyzeData])

    const triggerResults = () => {
        if(analyzeData.length > 10){ 
            postData();
            setVisible(true)
            
        }
        else{
            alert("Insufficient number of words. Your speech should have a word count of minimum 100 words.")
        }   
    }  

    const submitHandler = e => {
        e.preventDefault();
        postData();
    }

    return (
        <div>
            <div className="analyze-container" >
                    <Grid container>
                        <Grid item sm={4} xs={12} >
                            <div style={{paddingTop:"30%"}} >
                                <Typography style={{paddingTop:"30px", letterSpacing:"5px", fontSize:"2rem", marginBottom:"40px"}} >
                                    ENTER   YOUR SPEECH
                                </Typography>
                                <form className="root" noValidate autoComplete="off" onSubmit={submitHandler} >
                                    <TextField 
                                        id="filled" 
                                        value={analyzeData} 
                                        onChange={event=>{setAnalyzeData(event.target.value) 
                                            console.log(analyzeData)}} 
                                        variant="filled"  
                                        placeholder="Minimum wordcount 100"

                                    />
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        size="large" 
                                        style={{ margin:"10px"} }
                                        onClick={triggerResults}
                                        >
                                            Let's Go   
                                    </Button>
                                </form> 
                            </div>
                        </Grid>
                        <Grid item sm={8} xs={12} >
                            <img src={PeopleImage}  style={{width:"100%"}} />
                        </Grid>
                    </Grid>
                </div>
                <div style={{width:"100%", position:'relative', alignItems:'center', display:'flex', justifyContent:'space-evenly'}}>
                    <Grid container>
                        <Grid item xs={false} sm={1} />
                        <Grid item xs={12} sm={10}  >
                            
                                { visible ? <Main  /> : null}
                            
                        </Grid>
                        <Grid item xs={false} sm={1} />
                    </Grid> 
                </div>
        </div>
    )
}
export default Analyze

*/


class Analyze extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            visible: false,
            Text: true,
            analyzeData:"",
            
        }
    }
    
    handleAnalyzeData = (event) => {
        this.setState({
            analyzeData: event.target.value,
        })
    }

    triggerResults = () => {
        if(this.state.analyzeData.length > 10){
            this.setState({
                visible:true
            }) 
        }
        else{
            alert("Insufficient number of words. Your speech should have a word count of minimum 100 words.")
        }   
    }     
    
    submitHandler = e => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => console.log(response))
        .catch(err => console.log('Error: ' + err))
    }

    render(){
        return (
            <div>
                <div className="analyze-container" >
                    <Grid container>
                        <Grid item sm={4} xs={12} >
                            <div style={{paddingTop:"30%"}} >
                            <Typography style={{paddingTop:"30px", letterSpacing:"5px", fontSize:"2rem", marginBottom:"40px"}} >
                                ENTER   YOUR SPEECH
                            </Typography>
                            <form className="root" noValidate autoComplete="off" onSubmit={this.submitHandler}   >
                                <TextField 
                                    id="filled" 
                                    value={this.state.analyzeData} 
                                    onChange={this.handleAnalyzeData} 
                                    variant="filled"  
                                    placeholder="Minimum wordcount 100"
                                />
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    size="large" 
                                    style={{ margin:"10px"} }
                                    onClick={this.triggerResults}
                                    >
                                        Let's Go   
                                </Button>
                            </form> 
                            </div>
                        </Grid>
                        <Grid item sm={8} xs={12} >
                            <img src={PeopleImage}  style={{width:"100%"}} />
                        </Grid>
                    </Grid>
                </div>
                <div style={{width:"100%", position:'relative', alignItems:'center', display:'flex', justifyContent:'space-evenly'}}>
                    <Grid container>
                        <Grid item xs={false} sm={1} />
                        <Grid item xs={12} sm={10}  >
                            
                                { this.state.visible ? <Main data={{}} /> : null}
                            
                        </Grid>
                        <Grid item xs={false} sm={1} />
                    </Grid> 
                </div>
    
            </div>
        )
    }
}

export default Analyze;
