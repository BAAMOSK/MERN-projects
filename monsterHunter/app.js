new Vue ({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            let damage = this.calcDamage(2, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: `You hit monster for ${damage}.`
            });
            
            if(this.checkWin()) {
                return;
            }
            this.monsterAttack();
        },
        special: function() {
            let damage = this.calcDamage(12, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: `BAM! You slice the beast for ${damage} damage!`
            })
            if(this.checkWin()) {
                return;
            }
            this.monsterAttack();
        },
        heal: function() {
            if(this.playerHealth <= 90) {
                this.playerHealth += 10;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Curaga! You heal for 10.'
                })
            } else {
                this.playerHealth = 100;
                this.turns.unshift({
                    isPlayer: true,
                    text: `Full recharge`
                })
            }
            this.monsterAttack();
        },
        run: function() {
            this.gameIsRunning = false;
            this.turns = [];
        },
        calcDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        monsterAttack: function() {
            let damage = this.calcDamage(3, 15);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: `Monster slaps you for ${damage} damage!`
            });

            this.checkWin();
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                if (confirm('You won! Play New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                    this.turns = [];
                }
                return true;
            } else if (this.playerHealth <= 0) {
                this.playerHealth = 0;
                if (confirm('You lost! Rematch?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                    this.turns = [];
                }
                return true;
            }
            return false;
        }
    }
});
