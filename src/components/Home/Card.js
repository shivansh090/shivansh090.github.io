import React from 'react';
import styled from 'styled-components';
import codeimg from '../../Assets/code.svg'
import jsimg from '../../Assets/js.svg'
import writeimg from '../../Assets/write.svg'
const Card = () => {
  return (
    <Item >
        
    <div className='card'>
        <div className='cards-icon'>
            <img className='cardimg'src={codeimg} alt='codeimg'/>
        </div>
        <h3>MERN Developer</h3>
        <p>Empowered to craft end-to-end digital experiences as a versatile full-stack developer.</p>
    </div>
    <div className='card'>
        <div className='cards-icon'>
            <img className='cardimg' src={jsimg} alt='jsimg'/>
        </div>
        <h3>Javascript</h3>
        <p>Passionate about unleashing the full potential of web development through the expressive and dynamic nature of JavaScript.</p>
    </div>
    <div className='card'>
        <div className='cards-icon'>
            <img className='cardimg' src={writeimg} alt='writeimg'/>
        </div>
        <h3>Creative Coding</h3>
        <p>I love creative coding because I do both coding & designing. making beautiful art with code is very satisfying to me.</p>
    </div>
    
    </Item>
  )
}


const Item = styled.div`
color: white;
display: flex;
flex-wrap: wrap;
justify-content: space-around;

.card{
    margin: 10px;
    flex: 1 1 200px;
    min-width: 215px;
    max-width: 300px;
    height: 326px;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background-color: rgb(73 45 108 / 46%);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
    border-radius: 10px;
    h3{
        font-family: Montserrat, sans-serif;
        font-weight: normal;
    }
    p{
        font-size: 16px;
        margin: 0px;
        line-height: 150%;
        font-family: Montserrat, sans-serif;
        color: #f8f9fabd;
    }
}
.cards-icon{
    margin-bottom: 15px;
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(134deg, rgb(106, 152, 240) 0%, rgb(73, 97, 220) 99%);
    color: rgb(248, 248, 248);
}
.cardimg{
    height: 50px;
}
`;

export default Card