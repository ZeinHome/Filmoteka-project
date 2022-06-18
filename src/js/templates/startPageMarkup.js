
export function markupGallery(results) {
    	return results.map(({ id, imagePoster, original_title, releaseYear, fullGenresNames }) => {	
    
        return `<li  class="movie-card-item">
    				<div class="movie-poster__container">
    					<img src="${imagePoster}" alt="poster" class="imagePoster" data-id="${id}"/>
						<div class="btn-box gallery">
							<button class="btn-watche gallery-btn" data-id="${id}" data-target="watched">add to <br class="transfer" />Watched</button>
							<button class="btn-queue gallery-btn" data-id="${id}" data-target="queue">add to queue</button>
				  		</div> 
    				</div>
    				<div class="movie-card-item__info">
    					<h2 class="movie-card-item__title" data-id="${id}">${original_title}</h2>
    					<p class="movie-card-item__text">${fullGenresNames} | ${releaseYear} </p>
    				</div>
						
    			</li>`;
        })
    	.join(''); 
    }