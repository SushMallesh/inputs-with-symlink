import './index.css'

const UserData = (props) =>{

    const {userInfo} = props 
    const {username,password,workType,gender,languagesSelected} = JSON.parse(userInfo) 


    return <div>
            <h1>username: {username}</h1>
            <h1>password: {password}</h1>
            <h1>work type: {workType}</h1>
            <h1>Gender: {gender}</h1>
            <h1>languages Known: {languagesSelected}</h1>
       </div>
   
}

export default UserData