/*
Human
==========
- name: string
- gender: string
- weight: number
==========
+ say(string): void
+ eat(Apple): void
+ checkWeight(): number
+ getName(): string
+ getWeight(): number
+ getGender(): string
+ checkAppleWeight(Apple): number

Apple
==========
- weight: number // 10 (default weight)
==========
+ decrease(weight: number): void
+ isEmpty(): boolean
+ getWeight(): number
*/

class Human {
	constructor(name, gender, weight) {
		this.name = name;
		this.gender = gender;
		this.weight = weight;
	}
	say(message) {
		console.log(message);
	}
	eat(apple) {
		if (apple.getWeight() > 0) {
			// Only eat if the apple has weight left
			this.weight += 1; // Human gains 1 unit of weight
			apple.decrease(); // Apple loses 1 unit of weight
		} else {
			console.log("No more apple to eat!");
		}
	}
	checkWeight() {
		return this.weight;
	}
	getName() {
		return this.name;
	}
	getWeight() {
		return this.weight;
	}
	getGender() {
		return this.gender;
	}
	checkAppleWeight() {
		return Apple.weight;
	}
}

class Apple {
	constructor(weight = 10) {
		this.weight = weight;
	}
	decrease() {
		if (this.weight > 0) {
			this.weight -= 1; // Reduce apple's weight by 1 unit
		}
	}
	isEmpty() {
		return this.weight <= 0;
	}
	getWeight() {
		return this.weight;
	}
}

let adam = new Human("Adam", "Male", 70);
let eva = new Human("Eva", "Female", 55);
let apple = new Apple();
adam.eat(apple);
eva.eat(apple);
console.log(adam.checkWeight()); // 71
console.log(eva.checkWeight()); // 56
console.log(apple.getWeight()); // 8
