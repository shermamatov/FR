import './ReviewsFilterPopup.scss'

const ReviewsFilterPopup = ({showFilterPopup}) => {
    return (
        <div className={
            showFilterPopup
            ? 'reviewsFilterPopup reviewsFilterPopup-show'
            : 'reviewsFilterPopup'
            }>
           <div className="reviewsFilterPopup_block">
            <h3 className="reviewsFilterPopup_block_title">By year</h3>
            <input type="number" className="reviewsFilterPopup_block_input" />
            <label className='reviewsFilterPopup_block_item'>
                <input type="checkbox" />
                2010
            </label>
            <label className='reviewsFilterPopup_block_item'>
                <input type="checkbox" />
                2011
            </label>
            <label className='reviewsFilterPopup_block_item'>
                <input type="checkbox" />
                2012
            </label>
            <label className='reviewsFilterPopup_block_item'>
                <input type="checkbox" />
                2013
            </label>
            <label className='reviewsFilterPopup_block_item'>
                <input type="checkbox" />
                2014
            </label>
            <a href="" className="reviewsFilterPopup_block_link">more</a>
           </div>

           <div className="reviewsFilterPopup_block">
            <h3 className="reviewsFilterPopup_block_title">By services</h3>
            <label className='reviewsFilterPopup_block_item'>
                <input type="checkbox" />
                Repairing
            </label>
            <label className='reviewsFilterPopup_block_item'>
                <input type="checkbox" />
                Cooling
            </label>
            <label className='reviewsFilterPopup_block_item'>
                <input type="checkbox" />
                Mini split
            </label>
            <label className='reviewsFilterPopup_block_item'>
                <input type="checkbox" />
                Heating
            </label>
            <label className='reviewsFilterPopup_block_item'>
                <input type="checkbox" />
                Commercial
            </label>
           </div>
           <div className="reviewsFilterPopup_block">
            <h3 className="reviewsFilterPopup_block_title">By stars</h3>
            <label className='reviewsFilterPopup_block_item'>
                <input type="checkbox" /> 5
            </label>
            <label className='reviewsFilterPopup_block_item'>
                <input type="checkbox" /> 4
            </label>
            <label className='reviewsFilterPopup_block_item'>
                <input type="checkbox" /> 3
            </label>
            <label className='reviewsFilterPopup_block_item'>
                <input type="checkbox" /> 2
            </label>
            <label className='reviewsFilterPopup_block_item'>
                <input type="checkbox" /> 1
            </label>

            <button className="reviewsFilterPopup_block_btn">save</button>
           </div>
        </div>
    );
}

export default ReviewsFilterPopup;
