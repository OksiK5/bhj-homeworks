(() => {
	let playing = true,
		activeHole = 1,
		score = 0,
		misses = 0;

	const stop = () => playing = false,
		getHole = index => document.getElementById(`hole${index}`),
		deactivateHole = index => getHole(index).className = 'hole',
		activateHole = index => getHole(index).className = 'hole hole_has-mole',
		next = () => setTimeout(() => {
			if (!playing) {
				return;
			}
			deactivateHole(activeHole);
			activeHole = Math.floor(1 + Math.random() * 9);
			activateHole(activeHole);
			next();
		}, 800);

	const moleClickHandler = (event) => {
		if (event.target.classList.contains('hole_has-mole')) {
			score++;
			document.getElementById('dead').textContent = score;
			if (score === 10) {
				stop();
				alert('Вы победили!');
				score = 0;
				misses = 0;
				document.getElementById('dead').textContent = score;
				document.getElementById('lost').textContent = misses;
			}
		} else {
			misses++;
			document.getElementById('lost').textContent = misses;
			if (misses === 5) {
				stop();
				alert('Вы проиграли!');
				// Обнуляем статистику
				score = 0;
				misses = 0;
				document.getElementById('dead').textContent = score;
				document.getElementById('lost').textContent = misses;
			}
		}
	};

	next();

	const holes = document.querySelectorAll('.hole');
	holes.forEach((hole) => {
		hole.addEventListener('click', moleClickHandler);
	});
})();