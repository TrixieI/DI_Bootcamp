class Video {
  constructor(title, uploader, time, watch) {
    this.videoTitle = title;
    this.videoUploader = uploader;
    this.videoTime = time;
    this.watch = function (movie) {
      console.log(
        `${this.videoUploader} watched all ${this.videoTime} of ${this.videoTitle}`
      );
      return movie;
    };
  }
}

let jaws = new Video("Jaws", "Andrew", "1 hour and 20 minutes");

jaws.watch();

let spiderman = new Video(
  "Spiderman: Home Coming",
  "David",
  "1 hour and 30 minutes"
);

spiderman.watch();
