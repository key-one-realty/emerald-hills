import React from 'react'
import ReactPlayer from 'react-player/youtube'

const VideoComponent = ({ setShowVideo, modalRef, modalContainerRef }) => {
  return (
    <div className='modal-container' ref={modalContainerRef}>
    <div className='modal'  ref={modalRef}>
      <div className='modal-header'>
        {/* <div className='title'>Video</div> */}
        <button className='close-button' onClick={() => setShowVideo(false)}>
          <i className='text-white pb-2'>Close</i>
        </button>
      </div>
      <div className='modal-body'>
        <ReactPlayer url='https://youtu.be/wcdGI7rqf4Y' width={'100%'}/>
      </div>
    </div>
    </div>
  )
}

export default VideoComponent;