/*
* A self-invoking function which checks if the document status is 'loading'
* If is ISN'T, it will immediately proceed, as it assumes loading has completed
* If it is still loading, attaches an event listener for the 'DOMContentLoaded' event
*/

(function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
})(fired);

function fired() {
	// do stuff
}