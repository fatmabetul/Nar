function start_anim() {

	//function to get the array of random integers
	//N is the size of the array
	function getRandomArray(N) {
		var a = new Array(N);
		var MAX_INT = 4294967295;

		for(var i=0; i<N; i++) {
			a[i] = Math.floor(Math.random()*MAX_INT);
		}

		return a;
	}

	var canvas = document.getElementById("cvs");
	var c = canvas.getContext("2d");
}
