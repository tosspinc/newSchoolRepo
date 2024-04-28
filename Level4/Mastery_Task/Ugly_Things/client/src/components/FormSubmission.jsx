import React, { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function FormSubmission() {
  const submitHandle = useContext(ThemeContext).addUglyThing;

  const [imgUrl, setImgUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const imgUrl = formData.get('img_url');
    const title = formData.get('img_title');
    const description = formData.get('img_desc');

    submitHandle(imgUrl, title, description);

    setImgUrl('');
    setTitle('');
    setDescription('');
    setFormSubmitted(true);
  };

  return (
    <>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <input
            type='url'
            name='img_url'
            className='img_url'
            placeholder='Ugly Image URL'
            value={imgUrl}
            required
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <input
            type='text'
            name='img_title'
            className='img_title'
            placeholder='Name the Image'
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type='textarea'
            name='img_desc'
            className='img_desc'
            placeholder='Describe the image'
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
          <input type='submit' name='img_submit' className='img_submit' value='Submit Your Image' />
        </form>
      </div>
      {formSubmitted && (
        <div className='form-submitted'>
          <p>Thank you for your submission!</p>
          <a href='/history'>View Submission History</a>
        </div>
      )}
    </>
  );
}