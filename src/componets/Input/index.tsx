import React, {useEffect} from 'react'
import cat from '../../Images/cat.jpg'

interface IProps{
   title: string
}

const MyInput: React.FC<IProps> = (props) =>{

    useEffect(() =>{
        console.log(props.title)
    });
    return (<div>MyInput
        <img src={cat}/>
    </div>)
}

export default MyInput;