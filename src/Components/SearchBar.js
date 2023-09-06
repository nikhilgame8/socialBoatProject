import React from 'react'

const SearchBar = ({ searchVideo, handleSearchByEnter, setSearchVideo, handleSearch }) => {
    return (
        <div className='search-div'>
            <div className='search-container'>
                <input type='search' className='search-input' value={searchVideo} onKeyDown={handleSearchByEnter} onChange={(e) => setSearchVideo(e.target.value)} placeholder='Search your video' />
                <button type='button' className='search-button' onClick={() => handleSearch(searchVideo, 10)}>Search</button>
            </div>
        </div>
    )
}

export default SearchBar