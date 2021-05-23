import React from 'react';
function Popup ({selected, closePopup}) {
    return(
        <section className="popup">
            <div className="content">
                <h2>{selected.Title} <span>({selected.Year})  </span></h2>
                <p className="relase">Released: {selected.Released}</p>

                <p className="rating">Rating: {selected.imdbRating}</p>

                <div className="plot">
                    <img src={selected.Poster} />
                    <p>{selected.Plot}</p>
                    </div>


              
                <p className="Actors">Actors:{selected.Actors}</p>
                <p className="Director">Director:{selected.Director}</p>
                <p className="Awards">Awards:{selected.Awards}</p>
                <p className="runtime">Runtime: {selected.Runtime}</p>
                <p className="response">Response:{selected.Response}</p>
                <p className="rate">Rated: {selected.Rated}</p>

                <p className="type">Type:{selected.Type}</p>


                <p className="writer">Writer: {selected.Writer}</p>
                <p className="production">Production:{selected.Production}</p>
                <p className="boxofc">BoxOffice:{selected.BoxOffice}</p>

                <p className="imdbvotes">Votes: {selected.imdbVotes}</p>


                <p className="Country">Country:{selected.Country}</p>
                <p className="Language">Language:{selected.Language}</p>
                <p className="Genre">Genre:{selected.Genre}</p>
                <br/>
             <button className="close" onClick={closePopup}>Close</button>
                
            </div>
        </section>
    );
}
export default Popup;