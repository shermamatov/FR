export default function VideoForm({video, setVideo}) {
    return (
        <div className="reviewsWritePopup_bottom">
            <h1 className="reviewsWritePopup_bottom_title">upload video</h1>
            <div className="reviewsWritePopup_bottom_img">
            <input type="file" onChange={e =>{
          setVideo(e.target.files[0])
        }} />
        {
          video.name
          ? <>
           <button
           onClick={()=>{
            setVideo('')
           }}
           className="reviewsWritePopup_bottom_btn">X</button>
         <img src="/reviews-video-img.jpg" alt="" />

          </>
          : ''
        }

            </div>

        </div>
    );
}
