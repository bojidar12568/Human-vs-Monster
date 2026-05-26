const attackBtn = document.getElementById('attack');
const healBtn = document.getElementById('heal');
const heavyAttackBtn = document.getElementById('heavy-attack');
const warrior = document.getElementById('warriorBar');
const enemy = document.getElementById('enemyBar');
const newGameBtn = document.getElementById('new-game');

class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
 }
}
new Character('Warrior', 100);
new Character('Enemy', 100);
warrior.health = 100;
enemy.health = 100;

class attacks {
  constructor(attack, heavyAttack, heal) {
    this.attack = attack;
    this.heavyAttack = heavyAttack;
    this.heal = heal;
  }
}

class Warrior extends Character {
  constructor(name, health) {
    super(name, health);
  }
    static attack() {
    return Math.floor(Math.random() * 10) + 1;
    }
    static heavyAttack() {
    return Math.floor(Math.random() * 20) + 1;
    }
    static heal() {
    return Math.floor(Math.random() * 15) + 1;
    }  

}

class Enemy extends Character {
  constructor(name, health) {
    super(name, health);
  }
    static attack() {
    return Math.floor(Math.random() * 10) + 1;
    }
    static heavyAttack() {
    return Math.floor(Math.random() * 20) + 1;
    }
     
  
}


attackBtn.addEventListener('click', () => {
  const damage = Warrior.attack();
  enemy.health -= damage;
  warrior.health -= Enemy.attack();
  warrior.style.width = `${warrior.health}%`;
    enemy.style.width = `${enemy.health}%`;
    if (enemy.health <= 0) {
    alert('Enemy is defeated!');
    enemy.health = 0;
    enemy.style.width = `${enemy.health}%`;
    }
        if (warrior.health <= 0) {  
    alert('Warrior is defeated!');
    warrior.health = 0;
    warrior.style.width = `${warrior.health}%`;
    }
});

healBtn.addEventListener('click', () => {
  const healAmount = Warrior.heal();
  warrior.health += healAmount;
  warrior.style.width = `${warrior.health}%`;   
    if (warrior.health > 100 || warrior.health === 100) {
    alert('Health is full');
        warrior.health = 100;
        warrior.style.width = `${warrior.health}%`;
    }
});
heavyAttackBtn.addEventListener('click', () => {
  const damage = Warrior.heavyAttack();
  enemy.health -= damage;
  enemy.style.width = `${enemy.health}%`;
  warrior.health -= Enemy.attack();
  warrior.style.width = `${warrior.health}%`;
      if (enemy.health <= 0) {
    alert('Enemy is defeated!');
    enemy.health = 0;
    enemy.style.width = `${enemy.health}%`;
     
    }
        if (warrior.health <= 0) {  
    alert('Warrior is defeated!');
    warrior.health = 0;
    warrior.style.width = `${warrior.health}%`;
    }
});

newGameBtn.addEventListener('click', () => {
  warrior.health = 100;
  enemy.health = 100;
  warrior.style.width = `${warrior.health}%`;
  enemy.style.width = `${enemy.health}%`;
  alert('New Game Started!');
});

