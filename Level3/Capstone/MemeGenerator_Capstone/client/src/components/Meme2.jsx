import React, {useState} from "react"

export default function Meme2(){

    const initialMemeState = {
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    };

    const [meme, setMeme] = useState(initialMemeState);
    const [savedMemes, setSavedMemes] = useState([]);
    const [selectedMemeIndex, setSelectedMemeIndex] = useState(null);

    async function getMemeImage() {
        try {
            console.log("get")
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            const randomNumber = Math.floor(Math.random() * data.data.memes.length);
            const randomMeme = data.data.memes[randomNumber];
            setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: randomMeme.url
            }));
        } catch (error) {
            console.error('Error fetching meme: ', error);
        }
    }   

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    function handleSubmit(event){
        event.preventDefault()
        setSavedMemes(prevSavedMemes => {
            if (selectedMemeIndex !== null) {
                const updatedMemes = [...prevSavedMemes];
                updatedMemes[selectedMemeIndex] = meme; // Replace the edited meme
                return updatedMemes;
            } else {
                return [
                    ...prevSavedMemes,
                    meme,
                ];
            }
        });
        setMeme(initialMemeState); // Reset the meme state to clear textboxes
        setSelectedMemeIndex(null); // Reset the selected meme index
    }

    function editSavedMeme(index) {
        setSelectedMemeIndex(index);
        const selectedMeme = savedMemes[index];
        setMeme({
            topText: selectedMeme.topText,
            bottomText: selectedMeme.bottomText,
            randomImage: selectedMeme.randomImage
        });
    }

    function deleteSavedMeme(index) {
        const updatedMemes = [...savedMemes]
        updatedMemes.splice(index, 1)
        setSavedMemes(updatedMemes)
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input name="topText" value={meme.topText} onChange={handleChange} />
                <input name="bottomText" value={meme.bottomText} onChange={handleChange} />
                <button>Add Meme</button>
            </form>
            <button onClick={getMemeImage}>
                Get A New Meme. 
            </button>

            <div style={{backgroundImage: `url(${meme.randomImage})`, height: "670px", width: "565px"}}>
                <h1>{meme.topText}</h1>
                <h1>{meme.bottomText}</h1>
            </div>

            <div className="saved-memes-container">
                <h1>Saved Memes</h1>
                <ul>
                    {savedMemes.map((savedMeme, index) => (
                        <li key={index}>    
                            <div style={{backgroundImage: `url(${savedMeme.randomImage})`, height: "300px", width: "300px"}}>
                                <button className="edit-meme-button" onClick={() => editSavedMeme(index)}>Edit Meme</button>
                                <button className="delete-saved-meme-button" onClick={() => deleteSavedMeme(index)}>Delete Meme</button>
                                <h1>{savedMeme.topText}</h1>
                                <h1>{savedMeme.bottomText}</h1>
                            </div>
                        </li>
                    ))}
                </ul>        
            </div>
        </main>
    )
}