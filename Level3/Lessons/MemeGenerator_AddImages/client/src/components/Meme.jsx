import React from "react";
//import MemesData from "../components/MemesData";

export default function Meme() {
    //const [memeImage, setMemeImage] = React.useState('http://i.imgflip.com/1bij.jpg')

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => { 
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
    }))

    }   

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className="meme-form">
                <input 
                    type="text" 
                    placeholder="Top Text"
                    className="top-text"
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                    style={{fontSize: '16px', fontWeight:'bold', paddingLeft: '10px'}}
                />
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    className="bottom-text"
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                    style={{fontSize: '16px', fontWeight:'bold', paddingLeft: '10px'}}
                />
                <button className="meme-button"
                onClick={getMemeImage}>Get A New Meme Image. 🖼</button>
            </div>
            <div className="meme">
                <div className="imgTextCont">
                    <img src={meme.randomImage} className="meme-image" />
                    <div className="meme--text">
                        <h2 className='top meme-text'>{meme.topText}</h2>
                        <h2 className='bottom meme-text'>{meme.bottomText}</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}