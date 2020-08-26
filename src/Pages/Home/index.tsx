import React from 'react'
import MyInput from '../../componets/Input';

interface IProps{

}

const HomePage: React.FC<IProps> = (props) =>{
return (<div onClick = {() => { alert();}} >
    <MyInput title="Test"/>
</div>)
}

export default HomePage;