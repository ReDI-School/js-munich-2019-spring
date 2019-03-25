let myTv = {
  volume: 8,
  increaseVolume: function() {
    if (this.volume < 10) {
      this.volume = this.volume + 1;
    }
  },
  decreaseVolume: function() {
    if (this.volume > 0) {
      this.volume = this.volume - 1;
    }
  },

  channels: ["Derpy TV", "VacayLive"],
  channel: 1,
  increaseChannel: function() {
    this.channel = this.channel + 1;

    if (this.channel === this.channels.length) {
      this.channel = 0;
    }
  },
  decreaseChannel: function() {
    this.channel = this.channel - 1;

    if (this.channel === -1) {
      this.channel = this.channels.length - 1;
    }
  },

  addChannel: function(channelName) {
    this.channels.push(channelName);
  },
  getChannelCount: function() {
    return this.channels.length;
  },
  getChannel: function() {
    return this.channels[this.channel];
  },
}

// Test it out!
alert(myTv.volume);
myTv.increaseVolume();
myTv.increaseVolume();
myTv.increaseVolume();
alert(myTv.volume);

alert(myTv.getChannelCount());
alert(myTv.channel);
alert(myTv.getChannel());
myTv.increaseChannel();
alert(myTv.channel);
alert(myTv.getChannel());
myTv.addChannel("lol");
alert(myTv.getChannelCount());
myTv.decreaseChannel();
alert(myTv.channel);
alert(myTv.getChannel());
