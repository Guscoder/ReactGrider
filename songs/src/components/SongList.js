import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                            >
                                Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return <div className="divided ui list">{this.renderList()}</div>;
    }
}

// connect to provider which connects to data in Redux Store
const mapStateToProps = (state) => {
    return { songs: state.songs }; // this object shows up as props inside our component
}

export default connect(mapStateToProps, { selectSong })(SongList);