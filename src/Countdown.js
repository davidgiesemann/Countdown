/**
 * (c) David Giesemann
 * info@david-giesemann.de
 */

function Countdown(element,settings){
    if(!element || !settings) return;

    var self = this,
        diff = settings.to - settings.from;

    function update(){
        if(diff >= 1) diff -= 1;

        ['days','hours','minutes','seconds'].forEach(function(part){
            var el = element.querySelector('.'+part);

            if(!el) el = element.appendChild(self.part(part));

            el.textContent = self[part](diff);
        })
    }

    setInterval(update,1000);
}

Countdown.prototype.part = function(name){
    var part = document.createElement('span');

    part.className = name;

    return part;
}

Countdown.prototype.days = function(seconds){
    return this.prependZero(Math.floor(seconds / 60 / 60 / 24) % 365)
}

Countdown.prototype.hours = function(seconds){
    return this.prependZero(Math.floor(seconds / 60 / 60) % 24)
}

Countdown.prototype.minutes = function(seconds){
    return this.prependZero(Math.floor(seconds / 60) % 60)
}

Countdown.prototype.seconds = function(seconds){
    return this.prependZero(Math.floor(seconds % 60))
}

Countdown.prototype.prependZero = function(number){
    if(number >= 10) return number;

    return '0' + number;
}
