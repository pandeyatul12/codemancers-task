import React from 'react'

function Card() {
    function handleClick(){
        
    }

  return (
    <div className='card-container'>
        <div className='card-nav'>
            <div className='card-nav-element ele1'>
                Compose Post
            </div>
            <div className='card-nav-element ele22'>
                Photo/Video Album
            </div>
            <div className='card-nav-element ele33'>
                Live Video
            </div>    
        </div>
        <div className='card-body'>

        </div>
        <div className='card-tools'>
            <button className='tag-btn btn' >Tag friends</button>
            <button className='check-in-btn btn' >Check in</button>
            <button className='Gif-btn btn' onClick={handleClick}>Gif</button>
            <button className='Tag Event-btn btn' >Tag Event</button>
        </div>
        <div className='card-footer'>
            <button className='only-me-btn'>Only me </button>
            <button className='post-btn' >Post</button>

        </div>
        </div>
  )
}

export default Card