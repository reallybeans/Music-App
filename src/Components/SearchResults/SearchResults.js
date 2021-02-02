import React from 'react';
import TrackList from '../TrackList/TrackList';
import "./SearchResults.css"; 
export class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <TrackList track={this.props.SearchResults} onAdd={this.props.onAdd} />
            </div>
        );
    }
}

export default SearchResults; 