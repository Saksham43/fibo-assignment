import workout from "../assets/workout.png";
import book from "../assets/book.png";
import walk from "../assets/walk.png";
import sleep from "../assets/sleep.png";
import water from "../assets/water.png";


export var check = [1,1,1,1,0];

export const tasks = [
    {
        icon: workout,
        desc: "Workout for 20 mins",
        checkbox: check[0],
        color: "#9E4CB8",
    },
    {
        icon: book,
        desc: "Read book for 15 mins",
        checkbox: check[1],
        color: "#D15439",
    },
    {
        icon: walk,
        desc: "30 mins walk",
        checkbox: check[2],
        color: "#81B47D",
    },
    {
        icon: sleep,
        desc: "Sleep at 11 sharp",
        checkbox: check[3],
        color: "#63A7A7",
    },
    {
        icon: water,
        desc: "Drink 3L water",
        checkbox: check[4],
        color: "#5A92CB",
    },
]