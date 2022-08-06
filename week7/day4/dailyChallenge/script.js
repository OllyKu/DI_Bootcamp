// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// 1.Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// 2.Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// 3.Instantiate a new Video instance and call the watch() method.
// 4.Instantiate a second Video instance with different values.
// 5.Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// 6.Bonus: Loop through the array to instantiate those instances.

class  Video{
    constructor(title, uploader, time ){
        this.title = title
        this.uploader = uploader
        this.time = time
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}
const video1 = new Video('Peaky Blinders', 'Olga', 1200);
video1.watch()

const video2 = new Video('Black Mirror', 'Olga', 3400)
video2.watch()

let videos = [new Video("video1", "Olga", 100),
              new Video("video2", "Vlad", 200),
              new Video("video3", "Elena", 300),
              new Video("video4", "Ziv", 400),
              new Video("video5", "Dan", 500),
];

let loop = videos.map(([title, uploader, time]) => new Video(title, uploader, time) )
console.log(loop)