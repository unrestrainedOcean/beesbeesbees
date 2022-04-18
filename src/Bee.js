var Bee = function() {
  // Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = new Grub; // give us our Grub obj

// our protype contructor is looking at grub
Bee.prototype.constructor = Bee;
// NOW our protype contructor is looking at Bee



