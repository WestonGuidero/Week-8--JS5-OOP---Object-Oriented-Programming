// Army and Monsters in those Armies
class Monster {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
    
    describe() {
        return `${this.name} is a ${this.type}`;
      }
    }
    class Army {
    constructor(name) {
    this.name = name;
    this.monster = [];
    }
    
    addMonster(monster) {
    if (monster instanceof Monster) {
    this.monster.push(monster);
    } else {
    throw new Error(`You can only add an instance of Monster. 
    argument is not a Monster: ${monster}`);
    }
    }
    
    describe() {
        return `${this.name} has ${this.monster.length} monster.`;
      }
    }
    class Menu { // what drives the application and our choices
    constructor() {
    this.Army = [];
    this.selectedArmy = null; // manage one Army at a time
    }
    
    start() { // entry point to application
    let selection = this.showMainMenuOptions(); 
    while (selection != 0) {
    switch(selection) {
    case '1' :
    this.createArmy();
    break;
    case '2' :
    this.viewArmy();
    break;
    case '3' :
    this.deleteArmy();
    break;
    case '4' :
    this.displayArmy();
    break;
    default:
    selection = 0;
    }
    selection = this.showMainMenuOptions();
    }
    alert('Goodbye!');
    }
    
    
    showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create a new Army
    2) view a Army
    3) delete a Army
    4) display all Army
    `);
    }
    
    showArmyMenuOptions(ArmyInfo) {
    return prompt(`
    0) back
    1) add a new Monster
    2) delete a Monster
    -----------------
    ${ArmyInfo}
    `);
    }
    
    displayArmy() {
    let ArmyString = '';
    for (let i = 0; i < this.Army.length; i++) {
    ArmyString += i+ ') ' + this.Army[i].name + '\n';
    }
    alert(ArmyString);
    }
    
    createArmy() {
    let name = prompt('Enter name for new Army: ');
    this.Army.push(new Army(name));
    }
    
    viewArmy() {
    let index = prompt("Enter the index of the Army that you want to view:");
    if (index > -1 && index < this.Army.length) {
    this.selectedArmy = this.Army[index];
    let description = 'Army Name: ' + this.selectedArmy.name + '\n';
    description += ' ' + this.selectedArmy.describe() + '\n ';
    for (let i = 0; i < this.selectedArmy.monster.length; i++) {
    // description += i + ') ' + this.selectedArmy.Monsters[i].name + ' - '
    // + this.selectedArmy.monster[i].type + '\n';
    description += i + ') ' + this.selectedArmy.monster[i].describe() + '\n';
    }
    let selection1 = this.showArmyMenuOptions(description);
    switch (selection1) {
    case '1' :
    this.createMonster();
    break;
    case '2' :
    this.deleteMonster();
    }
    } // validate user input
    }
    
    deleteArmy() {
    let index = prompt('Enter the index of the Army that you wish to delete: ');
    if (index > -1 && index < this.Army.length) {
    this.Army.splice(index,1);
    }
    }
    
    
    createMonster() {
    let name = prompt('Enter name for new Monster: ');
    let type = prompt('Enter type for new Monster: ');
    //this.selectedArmy.Monsters.push(new Monster(name, type));
    this.selectedArmy.addMonster(new Monster(name,type));
    }
    
    deleteMonster() {
    let index = prompt('Enter the index of the monster that you wish to delete: ');
    if (index > -1 && index < this.selectedArmy.monster.length) { this.selectedArmy.Monster.splice(index,1);
    }
    }
    }
    let menu = new Menu();
    menu.start();