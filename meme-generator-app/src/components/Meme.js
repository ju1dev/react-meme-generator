import React from 'react'
export default function Meme() {

    const [img, setImg] = React.useState('https://i.imgflip.com/30b1gx.jpg')
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/30b1gx.jpg'
    })
    
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
        console.log('effect ran')
    }, [meme.randomImage])

    function changeImg() {
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        console.log(img)
        return <img src={img}></img>

    }


    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }
    return (
        <div className="forms">
            <div className="input--forms">
                <input
                type='text'
                name='topText'
                value={meme.topText}
                onChange={handleChange}
                />
                <input
                type='text'
                name='bottomText'
                value={meme.bottomText}
                onChange={handleChange}
                />
            </div>
        
            <button onClick={changeImg} className="get--img">Get a new image 🖼</button>
            <div className='meme'><img src={meme.randomImage} className='meme--img'></img>
            <h2 className='meme--text top'>{meme.topText}</h2>
            <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </div>
        )
        }
