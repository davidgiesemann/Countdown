# Countdown

    <div id="countdown"></div>
    
    <div id="formattedCountdown">
        <span class="days"></span>&nbsp;:::&nbsp;
        <span class="hours"></span>&nbsp;:::&nbsp;
        <span class="minutes"></span>&nbsp;:::&nbsp;
        <span class="seconds"></span>
    </div>
    
    <script src="dist/Countdown.min.js"></script>
    <script>
        new Countdown(document.getElementById('countdown'), {
            from: Date.now() / 1000,
            to: (Date.now() / 1000) + (10)
        });
    
        new Countdown(document.getElementById('formattedCountdown'), {
            from: Date.now() / 1000,
            to: (Date.now() / 1000) + (60 * 60 * 24)
        });
    </script>
