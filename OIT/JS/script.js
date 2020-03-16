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
			console.log('%c[Добавлено ' + k + ' студентов]' + '%c студентов ' + this.amount, 'color:green;', 'color:black;');
		}

		this.sub_stud = function sub(k) {
			this.amount -= k;
			console.log('%c[На тот свет ' + k + ' Студентов]' + '%c Студентов ' + this.amount, 'color:red;', 'color:black;');
		}
	}

	let groups = [new Group(4, 'ПОИТ', 28), new Group(5, 'ПОИТ', 29), new Group(6, 'ПОИТ', 30), new Group(7, 'Не ПОИТ', 16)]

	groups.forEach(g => {
		console.log('Группа ' + g.n + ': студентов ' + g.amount);
		g.add_stud(Math.floor(getRand(g.amount) / 4));
		g.sub_stud(getRand(g.amount));
		document.write('Группа №' + g.n + ', кол-во студентов: ' + g.amount + '<br>');
		console.log('Type of Group is ' + typeof(g));
		console.log('Свойства:');
		for (property in g) {
			console.log('Тип ' + property + ' это ' + typeof(g[property]));
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
			console.log('[' + this.name + 'Нужны деньги!]');
			let gain = getRand(MAX_GAIN);
			this.money += gain;
			console.log('[' + this.name + ' получил] ' + gain + ' lol');
			if (gain === 0)
				this.say('Не повезло');
			else if (gain < COST)
				this.say('Не смогу купить книгу');
			else if (gain >= COST && gain < Math.floor(MAX_GAIN / 2))
				this.say('Могу купить книгу');
			else if (gain >= Math.floor(MAX_GAIN / 2) && gain < MAX_GAIN)
				this.say('Получил деньги');
			else if (gain === MAX_GAIN)
				this.say('Ура,премия');

			this.getDrunk();
		}

		this.getStatus = () => {
			console.log(`[status] Имя: ${this.name}, Фамилия: ${this.nickname}, Возраст: ${this.age}, Деньги: ${this.money}, Здоровье: ${this.health}%`);
		}
		this.say = (msg) => {
			console.log('[' + this.name + ' сказал] ' + msg);
		}

		this.sayHi = () => {
			this.say(`${this.greeting} я ${this.name} ${this.nickname}, ${d.getFullYear() - this.age} года рождения`)
		}

		this.getDrunk = () => {
			if (this.money >= COST) {
				console.log('[' + this.name + ' книги] ');
				this.money -= COST;
				this.health -= getRand(COST);
				this.say('Мне нравиться');
				this.getStatus();
			} else {
				console.log('[' + this.name + ' эта приключение] ');
				this.say('Нужны ещё деньги');
				this.getMoney();
			}

		}
	}

	let animals = [
		new Boozer('Иван', 'Иванов', 42, 'Здравствуйте, господа,'),
		new Boozer('Владислав', 'Юрьевич', 69, 'Добрый день,'),
		new Boozer('Сергеев', 'Шарик', 28, 'Приветики')
	];

	Boozer.prototype.job = 'Не будет денег';
	animals.forEach(person => {
		person.sayHi();
		person.getMoney();
		console.log('[' + person.name + '\'s Работа] ' + person.job);
	});

	Boozer.prototype.checkIn = function(property) {
		console.log('Проверить если ' + this.name + ' has ' + property + ':', (property.toString() in this) ? 'yes' : 'no');
	}

	animals[0].checkIn('Работа');
	animals[0].checkIn('Будущее');

}

function task3() {
	function displayArr(array) {
		console.log('Массив:');
		array.forEach((el, i) => console.log(i + ': ' + el));
		console.log('Длинна: ' + array.length);
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

	console.log(typeof(return5),typeof(return5()));
}