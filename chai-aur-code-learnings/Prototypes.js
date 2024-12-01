const myString = 'omkar   ';
// console.log(myString.length);

String.prototype.trueLength = function () {
	return this.trim().length;
};

// console.log(myString.trueLength());

// access trueLength as property
// 1.
String.prototype.__defineGetter__('trueLength', function () {
	return this.trim().length;
});
// 2.
Object.defineProperty(String.prototype, 'trueLength2', {
	get: function () {
		return this.trim().length;
	},
});

// adding toCapitalCase() method
String.prototype.toCapitalCase = function () {
	return this.split('')[0].toUpperCase() + this.slice(1);
};

String.prototype.__defineGetter__('tocapitalcase', function () {
	return this.split('')[0].toUpperCase() + this.slice(1);
});

Object.defineProperty(String.prototype, 'toCapitalcase', {
	get: function () {
		return this.split('')[0].toUpperCase() + this.slice(1);
	},
});

// console.log(myString.toCapitalCase())
// console.log(myString.toCapitalcase, '==myString.toUppercase==');
console.log(myString.tocapitalcase, '==my==');
