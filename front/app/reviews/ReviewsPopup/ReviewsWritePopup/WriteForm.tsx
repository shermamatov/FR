const WriteForm = ({ review_text, setReview_text }: any) => {
    return (
        <div className="reviewsWritePopup_bottom">
            <h1 className="reviewsWritePopup_bottom_title">Your Review</h1>
            <textarea
                onChange={(e) => setReview_text(e.target.value)}
                value={review_text}
                placeholder="Write review"
                className="reviewsWritePopup_bottom_textarea"
            ></textarea>
        </div>
    );
};

export default WriteForm;
