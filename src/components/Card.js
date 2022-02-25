import React from 'react'
import Gif from './Gif'
import Modal from 'react-modal'

function Card() {
    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
    //ModalppElement('#codemancers-task');

    // function handleClick(){
        
    // }

    const customStyles = {
        content: {
          marginTop: '50%',
          left: '30%',
          width: '150px',
          height: 'auto',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

  return (
    <div className='card-container'>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <Gif />
      </Modal>
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
            <button className='Gif-btn btn' onClick={openModal}>Gif</button>
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