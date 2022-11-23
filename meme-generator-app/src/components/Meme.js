import React from 'react'
import memesData from "../memesData"
export default function Meme() {

    const [img, setImg] = React.useState('https://i.imgflip.com/30b1gx.jpg')
    const [meme, setMeme] = React.useState({
        topText: 'Top Text',
        bottomText: 'Bottom text',
        randomImage: 'https://i.imgflip.com/30b1gx.jpg'
    })
    const [allMemesImg, setAllImg] = React.useState(memesData)
    function changeImg() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        console.log(img)
        return <img src={img}></img>
    }
    return (
        <div className="forms">
            <div className="input--forms">
                <input></input>
                <input></input>
            </div>

            <button onClick={changeImg} className="get--img">Get a new image 🖼</button>
            <img src={meme.randomImage} className='meme--img'></img>
        </div>
        
    )
}