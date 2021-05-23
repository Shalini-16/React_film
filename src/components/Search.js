import React from 'react';
function Search ({ handleInput, search, btn}) {


    return(
        <>
        <section className="searchbox-wrap">
            <input type="text" placeholder="Search a movie"
             className="searchbox" 
             onChange={handleInput}
              onKeyPress={search} />
              <br/>

        </section>
        </>
    );
}
export default Search;

/*
import React from 'react';
function Popup ({selected, closePopup}) {
    return(
        <section className="popup">
            <div className="content">
                <h2>{selected.Title} <span>({selected.Year})  </span></h2>
                <p className="relase">Released: {selected.Released}</p>

                <p className="rating">Rating: {selected.imdbRating}</p>
                <p className="rate">Rated: {selected.Rated}</p>

              
                <p className="Actors">Actors:{selected.Actors}</p>
                <p className="Director">Director:{selected.Director}</p>
                <p className="Awards">Awards:{selected.Awards}</p>
                <p className="runtime">Runtime: {selected.Runtime}</p>
                <p className="writer">Writer: {selected.Writer}</p>
                <p className="production">Production:{selected.Production}</p>
                <p className="imdbvotes">Votes: {selected.imdbVotes}</p>


                <p className="Country">Country:{selected.Country}</p>
                <p className="Language">Language:{selected.Language}</p>
                <p className="Genre">Genre:{selected.Genre}</p>
         

              
             
                <div className="plot">
                    <img src={selected.Poster} />
                    <p>{selected.Plot}</p>
                    </div>
                    <button className="close" onClick={closePopup}>Close</button>
                
            </div>
        </section>
    );
}
export default Popup;
*/
/*import React from 'react';
function Search ({ handleInput, search }) {
    
    return(
        <>
        <section className="searchbox-wrap">
            <input type="text" placeholder="Search a movie"
             className="searchbox" 
             onChange={handleInput}
              onKeyPress={search} />
              <br/>
              <button className="btn">SEARCH</button>

        </section>
        </>
    );
}
export default Search;
*/