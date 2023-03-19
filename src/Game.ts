import Pet from "./Class/Pet";
import PetInterface from "./Types/PetInterface";
import readline from "readline";
import * as fs from "fs";
import frames from "./Art/frames";
import expresion from "./Constants/enums"
interface savedTamogotchi {
    pets: PetInterface[];
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


let ENVIRONMENT = process.env.NODE_ENV;
const jsonserver = "localhost:5000";
let activeTamogotchi: PetInterface;
let savedTamogotchi: savedTamogotchi;

export default function runGame() {
    console.clear();
    rl.write('\u001B[?25l'); // hides cursor
    rl.write("Welcome to the Tamogotchi game!\n");
    try {
        savedTamogotchi = JSON.parse(fs.readFileSync("../state.json", "utf8"));
    } catch (err: any) {
        throw new Error(err);
    }
    // console.log(savedTamogotchi)
    if (savedTamogotchi?.pets.length > 0) {
        selectTamogotchi(savedTamogotchi?.pets);
    }

    // console.log(savedTamogotchi)
    // console.log(ENVIRONMENT)
    // switch (ENVIRONMENT) {
    //     case 'development':
    //         try {

    //             fetch(`${jsonserver}/pets`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 savedTamogotchi = data?.pets
    //                 if (savedTamogotchi.length > 0) {
    //                     selectTamogotchi()
    //                 } else {
    //                     createTamogotchi()
    //                 }
    //             })
    //         } catch (err:any) {
    //             gameError(err)
    //         }
    //         break;
    //     default:
    //         break;
    // }
}
function createNewTamogotchi() {
    console.log("createTamo function");
    activeTamogotchi = new Pet();
}

function selectTamogotchi(pets: PetInterface[]) {
    // console.log("selectTamo function")
    // rl.write("Saved Tamogotchis detected.!");
    // create list of saved tamogotchis
    rl.question(
        `Saved Tamogotchi Available.
    ${pets.map((element: PetInterface, index: number) => {
        return `\n${index + 1}. ${element?.name}`;
    })}\n\nChoose your tamogotchi:`,
        (input) => {
            const selection = parseInt(input) - 1;
            if (
                selection >= 0 &&
                selection < pets.length &&
                pets[selection].id !== undefined
            ) {
                activeTamogotchi = new Pet(
                    pets[selection].name,
                    pets[selection].happiness,
                    pets[selection].hunger,
                    pets[selection].id
                );
                console.log(`\n${pets[selection].name} selected!`);
                activeTamogotchi = new Pet();
                continueGame(function () {
                    mainGame();
                });
            } else if (isNaN(selection)) {
                console.log(`\n Try entering a number.`);
                continueGame(function () {
                    selectTamogotchi(pets);
                });
            } else {
                console.log(
                    `\n${selection + 1} isn't an available option my dude.`
                );
                continueGame(function () {
                    selectTamogotchi(pets);
                });
            }
        }
    );
}

function nameTamogotchi() {
    rl.question("What do you want to call your new pet?", (input) => {
        try {
            switch (input) {
                case input:
                    activeTamogotchi.name = input;
                    rl.write(
                        `OK! Tamogotchi is now named ${activeTamogotchi.name}`
                    );
                    break;
                default:
                    rl.write("OK! No name has been set.");
                    break;
            }
        } catch {}
    });
}

function mainGame() {
    setInterval(drawFrames, 3000);
    
}

// draw the face
let frame: string;
function drawFrames() {
    switch (activeTamogotchi.happiness) {
        case expresion.HAPPY:
            let frameSet = frames.happy
            frame = frameSet[Math.floor(Math.random() * frameSet.length)];
            break;
        default:
            frame = "nothing to display"
            break;
        }
        console.clear();
        console.log(frame)
    
}

function options() {
    let options = `Options:
1. Stats
2. Feed
3. Play
4. Exit

Choose an option:
`;
    rl.question(options, (input) => {
        try {
            switch (input) {
                case "1":
                    // this.stats()
                    break;
                case "2":
                    // this.feed()
                    break;
                case "3":
                    // this.play()
                    break;
                case "4":
                    // this.exit()
                    break;
            }
        } catch (err: any) {
            // this.error(err);
        }
    });
}

function continueGame(func: any) {
    console.log("Press any key to continue...");
    const wasRaw = process.stdin.isRaw;
    process.stdin.setRawMode(true);
    const onData = () => {
        process.stdin.setRawMode(wasRaw);
        process.stdin.removeListener("data", onData);
        console.clear();
        rl.write(null, { ctrl: true, name: "u" }); // delete  the 'any key' entered
        func();
    };
    process.stdin.on("data", onData);
}

function gameError(err: any) {
    rl.write(err);
    rl.write("Exiting Program");
    exit();
}

function exit() {
    rl.write('\u001B[?25h'); // show cursor 
    rl.close();
}
