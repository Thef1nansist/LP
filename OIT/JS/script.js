function getRand(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function task1() {
	function Group(n, spec, amount) {
		this.n = n;
		this.spec = spec;
		this.amount = amount;

		this.add_stud = function add(k) {
			this.amount += k;
			console.log('%c[added ' + k + ' students]' + '%c students ' + this.amount, 'color:green;', 'color:black;');
		}

		this.sub_stud = function sub(k) {
			this.amount -= k;
			console.log('%c[expelled ' + k + ' students]' + '%c students ' + this.amount, 'color:red;', 'color:black;');
		}
	}

	let groups = [new Group(4, 'ПОИТ', 28), new Group(5, 'ПОИТ', 29), new Group(6, 'ПОИТ', 30), new Group(7, 'Не ПОИТ', 16)]

	groups.forEach(g => {
		console.log('Group ' + g.n + ': students ' + g.amount);
		g.add_stud(Math.floor(getRand(g.amount) / 4));
		g.sub_stud(getRand(g.amount));
		document.write('Группа №' + g.n + ', кол-во студентов: ' + g.amount + '<br>');
		console.log('Type of Group is ' + typeof(g));
		console.log('Properties:');
		for (property in g) {
			console.log('Type of ' + property + ' is ' + typeof(g[property]));
		}
	});

}

function task2() {
	let COST = 5;
	let MAX_GAIN = 20;

	let d = new Date();

	function Boozer(name, nickname, age, greeting, money = 0) {
		this.name = name;
		this.nickname = nickname;
		this.age = age;
		this.greeting = greeting;
		this.money = money;
		this.health = 100;

		this.getMoney = () => {
			console.log('[' + this.name + ' is begging for money]');
			let gain = getRand(MAX_GAIN);
			this.money += gain;
			console.log('[' + this.name + ' earned] ' + gain + ' rub');
			if (gain === 0)
				this.say('Vot nevezuha');
			else if (gain < COST)
				this.say('Chert, na buhlo ne hvatit!');
			else if (gain >= COST && gain < Math.floor(MAX_GAIN / 2))
				this.say('Norm, poidu buhnu');
			else if (gain >= Math.floor(MAX_GAIN / 2) && gain < MAX_GAIN)
				this.say('Podnyal babla');
			else if (gain === MAX_GAIN)
				this.say('Elki-palki, da ya bogat!');

			this.getDrunk();
		}

		this.getStatus = () => {
			console.log(`[boozer status] Name: ${this.name}, Second name: ${this.nickname}, Age: ${this.age}, Money: ${this.money}, Health: ${this.health}%`);
		}
		this.say = (msg) => {
			console.log('[' + this.name + ' says] ' + msg);
		}

		this.sayHi = () => {
			this.say(`${this.greeting} ya ${this.name} ${this.nickname}, ${d.getFullYear() - this.age} goda rozhdeniya`)
		}

		this.getDrunk = () => {
			if (this.money >= COST) {
				console.log('[' + this.name + ' drinks] ');
				this.money -= COST;
				this.health -= getRand(COST);
				this.say('Vot eto zhituha v nature');
				this.getStatus();
			} else {
				console.log('[' + this.name + ' is upset] ');
				this.say('Nado eshe babla');
				this.getMoney();
			}

		}
	}

	let animals = [
		new Boozer('Vasya', 'Smeliy', 42, 'Zdarova, bandit,'),
		new Boozer('Inokentiy', 'Pavlovich', 69, 'Dobriy vecher,'),
		new Boozer('Serega', 'Shpon', 28, 'Che-kavo,')
	];

	Boozer.prototype.job = 'unemployed';
	animals.forEach(person => {
		person.sayHi();
		person.getMoney();
		console.log('[' + person.name + '\'s job] ' + person.job);
	});

	Boozer.prototype.checkIn = function(property) {
		console.log('Check if ' + this.name + ' has ' + property + ':', (property.toString() in this) ? 'yes' : 'no');
	}

	animals[0].checkIn('job');
	animals[0].checkIn('future');

	// animals.forEach((p) => {
	// 	console.log('Type of Boozer is ' + typeof(p));
	// 	console.log('Properties:');
	// 	for (property in p) {
	// 		console.log('Type of ' + property + ' is ' + typeof(p[property]));
	// 	}
	// })
}

function task3() {
	function displayArr(array) {
		console.log('Array:');
		array.forEach((el, i) => console.log(i + ': ' + el));
		console.log('Length: ' + array.length);
	}

	let expressions = new Array();
	expressions[0] = 6 * Math.pow(Math.PI, 2) + 3 * Math.exp(8);
	expressions[1] = 2 * Math.cos(4) + Math.cos(12) + 8 * Math.exp(3);
	expressions[2] = 3 * Math.sin(9) + Math.log(5) + Math.sqrt(3);
	expressions[3] = 2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12);

	displayArr(expressions);
	delete expressions[3];
	displayArr(expressions);

	let index = 1;
	console.log('Check if array has ' + (index + 1) + '-nd element: ', index in expressions);
	console.log(expressions[index]);

	console.log('Check if expressions array is instanceof Array:', expressions instanceof Array);
	console.log('Check if expressions array is instanceof String:', expressions instanceof String);
	console.log('Check if expressions array is instanceof Object:', expressions instanceof Object);

	function return5() {
		return 5;
	}

	console.log(typeof(return5), typeof(return5()));
}