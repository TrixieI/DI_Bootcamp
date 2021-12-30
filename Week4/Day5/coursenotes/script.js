// class TV {
//   constructor(brand, channel = 1, volume = 50) {
//     this.tvBrand = brand;
//     this.tvChannel = channel;
//     this.tvVolume = volume;
//   }

//   increaseVolume() {
//     this.tvVolume += 1;
//   }
//   decreaseVolume() {
//     this.tvVolume -= 1;
//   }
// }

// let lgTV = new TV("LG");

// class SmartTV extends TV {
//   constructor(brand, channel = 1, volume = 50) {
//     super(brand, channel, volume);
//     this.netflix = true;
//   }
//   increaseVolume() {
//     this.tvVolume += 10;
//   }
//   decreaseVolume() {
//     this.tvVolume -= 10;
//   }
// }

// let smartLG = new SmartTV("Smart LG TV");

// class NewTV {
//   constructor(brand = "SONY", channel = 1, volume = 50) {
//     this.brand = brand;
//     this.channel = channel;
//     this.volume = volume;
//   }
//   increaseVolume() {
//     this.volume += 10
//       ? this.volume < 100 && this.volume >= 0
//       : console.log("Volume at 100");
//   }
//   decreaseVolume() {
//     this.volume -= 10
//       ? this.volume >= 0 && this.volume <= 100
//       : console.log("Volume at 0");
//   }
// }

// let sonyTV = new NewTV();
