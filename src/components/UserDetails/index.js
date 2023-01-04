
import {Component} from 'react'
import UserData from '../UserData'

import genderList from '../gender.json'
import languagesList from '../languages.json'
import workTypesList from '../worktypes.json'


import './index.css'


class UserDetails extends Component{

    // state={workTypesList:[],username:'',password:'',workType:'',gender:'',languageKnown:'',languagesSelected:[],userDetails:{},isSubmitted:false}
    state={username:'',password:'',workType:'',gender:'',languageKnown:'',languagesSelected:[],userDetails:{},isSubmitted:false}


    onSubmitUserDetails = (event)=>{
        event.preventDefault()

        const {username,password,gender,workType,languagesSelected} = this.state
        
         const userInfo = {
            username,
            password,
            gender,
            workType,
            languagesSelected:languagesSelected.join(" ")

        }

    this.setState({userDetails:JSON.stringify(userInfo),isSubmitted:true})

    

    }

    onChangeUserName = (event) =>{
        this.setState({username:event.target.value})
    }

    onChangeUserPassword = (event) =>{
        this.setState({password:event.target.value})
    }

    onChangeWorkType = (event) =>{
        this.setState({workType:event.target.value})
    }

    onSelectGender = (event) =>{

        this.setState({gender:event.target.value})
    }

    onChangeLanguage = (event) =>{
        this.setState(prev => ({languagesSelected:[...prev.languagesSelected,event.target.value]}))
    }

    // onReadFile =(event) =>{
       
    //     let file = event.target.files[0]
        
    //     let reader = new FileReader()
    //     reader.readAsText(file)

    
    //     reader.onloadend = () =>{
    //         this.setState({workTypesList:JSON.parse(reader.result)})
    //     }
       
    // }

    renderUserInputs = () =>{
        const {username,password} = this.state
    
   
        return (
            <form className="inputs-container" onSubmit={this.onSubmitUserDetails}>
                <h1>User details</h1>
                <div>
                    <label className="text-label" htmlFor="username">Username</label>
                    <input value={username} onChange={this.onChangeUserName} className="text-input" id="username" placeholder="Enter your name" type="text"/>
                    <label className="text-label"  htmlFor="password">Pasword</label>
                    <input value={password} onChange={this.onChangeUserPassword} className="text-input" id="password" placeholder="Enter your password" type="password"/>
                    
                
                </div>
                <h1>Work Type</h1>
                {/* <input onChange={(event)=>{this.onReadFile(event)}} accept=".json" name="file" type="file"/> */}
                <select defaultValue ='Full time' onChange={this.onChangeWorkType} className='text-input'>
                    {workTypesList.map(eachType =>
                        <option key={eachType.id} value={eachType.type} >{eachType.type}</option>)}
                </select>
                <h1>Gender</h1>
                <div className='labels-container'>
                    {genderList.map(eachItem => 
                    <div key={eachItem.id}>
                    <input onChange={this.onSelectGender} value={eachItem.gender} className="text-label"  id={eachItem.id} name="gender" type="radio"/>
                    <label htmlFor={eachItem.id}>{eachItem.gender}</label> 
                    </div>)
                    }

                </div>
                <h1>Languages</h1>
                <div className='labels-container'>
                    {languagesList.map(eachLanguage=> 
                        <div onChange={this.onChangeLanguage} key={eachLanguage.id}>
                            <input value={eachLanguage.language} className="text-label" id={eachLanguage.id} type="checkbox"/>
                            <label htmlFor={eachLanguage.id}>{eachLanguage.language}</label>
                        </div>)}
                    
                </div>
                <div className='button-container'>
                    <button type="submit">Submit</button>
                    <button type="button">Cancel</button>
                </div>
                </form>
        )
    }
    

    render(){
        
        const {userDetails,isSubmitted} = this.state

        return(
            <>
            <div className="app-container">

                {isSubmitted ? <UserData userInfo={userDetails}/>: this.renderUserInputs()}
                
            </div>

        </>
        

        )
    

    }
}

export default UserDetails
