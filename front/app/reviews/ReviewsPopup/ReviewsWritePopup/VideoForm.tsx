import DownloadingIcon from "@mui/icons-material/Downloading";
export default function VideoForm({ video, setVideo }: any) {
  return (
    <div className="reviewsWritePopup_bottom">
      <h1 className="reviewsWritePopup_bottom_title">upload video</h1>
      <div className="reviewsWritePopup_bottom_img">
        {video?.name ? (
          <div className="mt-10 relative">
            <button
              onClick={() => {
                setVideo("");
              }}
              className="reviewsWritePopup_bottom_btn">
              &#10006;
            </button>
            {/* <img src="/reviews-video-img.jpg" alt="" /> */}
            <video width="400" controls>
              <source src={URL.createObjectURL(video)} />
            </video>
            <p>{video.name}</p>
          </div>
        ) : (
          <label htmlFor="fileUpload" className="add_file cursor-pointer">
            {/* upload video */}
            <DownloadingIcon fontSize="large" />
            <input
              type="file"
              id="fileUpload"
              className="fileUpload"
              accept="video/mp4,video/x-m4v,video/*"
              onChange={(e: any) => {
                setVideo(e.target.files[0]);
              }}
            />
          </label>
        )}
      </div>
    </div>
  );
}
