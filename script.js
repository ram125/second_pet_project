
let the_button = [];
let poping_button = [];

let current = [false, false, false];
let previous = [false, false, false];

let somefunc = (poping_button, the_button, i) => {
	current[i] = true;
};

let secsomefunc = (poping_button, i) => {
	current[i] = false;
};

function func(i){
	the_button[i] = document.getElementById("container_"+i);
	poping_button[i] = document.getElementsByClassName("poping_button_"+i)
	the_button[i].addEventListener('mouseover', () => {
		somefunc(poping_button[i], the_button[i], i);
	});

	the_button[i].addEventListener('mouseout', () => {
		secsomefunc(poping_button[i], i)
	})
	setInterval(() => {
		if(current[i] != previous){
			if(current[i] == true){
				let counter = 0;
				let timerId = setInterval(() => {
					if(counter<poping_button[i].length){
						poping_button[i][counter].classList.remove("unactive");
						poping_button[i][counter].classList.add("active");
						counter++;
						if(current[i] == false){
							for(b = 0; b<3; b++){
								poping_button[i][b].classList.remove("active");
								poping_button[i][b].classList.add("unactive");
							}
						}
					}else{
						clearInterval(timerId);
					}
				}, 40);
				previous[i] = true;
			}else{
				for(b = 0; b<3; b++){
					poping_button[i][b].classList.remove("active");
					poping_button[i][b].classList.add("unactive");
				}
				previous[i] = false;
			}
		}
	}, 100);
};

for(let k=0; k<15; k++){
	func(k)
}