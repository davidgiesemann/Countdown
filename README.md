# Countdown

    <div id="countdown"></div>
    
    <script src="dist/Countdown.min.js"></script>
    <script>
        new Countdown(document.getElementById('countdown'), {
            from: Date.now() / 1000,
            to: (Date.now() / 1000) + (10)
        });
    </script>
