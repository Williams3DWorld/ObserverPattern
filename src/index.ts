// Subject interface
interface Subject {
    registerObserver(o: Observer);
    removeObserver(o: Observer);
    notifyObservers();
}

// Observer interface
interface Observer {
    update(score: ScoreData);
}

// A type for storing score data
interface ScoreData {
    player_1: number;
    player_2: number;
}

// Main subject
class Scoreboard implements Subject {
    private scoreData: ScoreData;
    private observers: Observer[] = [];

    setScore(score: ScoreData) {
        console.log(`Scoreboard: The score now is: ${score.player_1}.${score.player_2}`);
        this.scoreData = score;
        this.notifyObservers();
    }

    registerObserver(o: Observer) {
        this.observers.push(o);
    }

    removeObserver(o: Observer) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }

    notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this.scoreData);
        }
    }
}

// First observer
class Display implements Observer {
    private subject: Subject;

    constructor(scoreboard: Subject) {
        this.subject = scoreboard;
        scoreboard.registerObserver(this);
    }

    public update(score: ScoreData) {
        console.log("Display: Scoreboard display needs updating..");
        // Logic would go here
    }
}

// Second observer
class GameState implements Observer {
    private subject: Subject;

    constructor(scoreboard: Subject) {
        this.subject = scoreboard;
        scoreboard.registerObserver(this);
    }

    public update(score: ScoreData) {
        if (score.player_1 < score.player_2) {
            console.log("GameState: Player 2 wins!");
            // Logic
        }
        else {
            console.log("GameState: Player 1 wins!");
            // Logic
        }
    }
}

let scoreborad = new Scoreboard();  // Subject

let userScore = new Display(scoreborad);  // Push back observer 1 to subject observer list
let gameState = new GameState(scoreborad);  // Push back observer 2 to subject observer list


scoreborad.setScore({ player_1: 2, player_2: 3 });
scoreborad.setScore({ player_1: 5, player_2: 1 });