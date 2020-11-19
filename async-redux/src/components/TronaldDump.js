import React from 'react';
import { connect } from 'react-redux';

const TronaldDump = (props) => {
    return (
        <div className="dump-list">
            {
                /*
                pseudo-code
                
                isFetching? showFetching message (not tronaldList)
                ifError ? showError message (not tronaldList)
                if not fetching or error? show tronaldList
                */
               props.isFetching ? (
                   <div>***FETCHING DATA***</div>
               ) : props.error ? (
                   <div style={{ color: 'red' }}>{props.error}</div>
               ) : (
                   props.tronaldList.map((comment) => {
                       return <div className="dump-comment">{comment.value}</div>;
                   })
               )
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.is_fetching,
        tronaldList: state.tronaldList,
        error: state.error
    };
};

export default connect(mapStateToProps, {})(TronaldDump);