<script>
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.5s ease";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1500); // durasi loading (1.5 detik)
});
</script>

<script>
    const text = "";
    let i = 0;
    const speed = 100;

    function typeEffect() {
        if (i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, speed);
        } else {
            document.querySelector(".cursor").style.display = "none";
        }
    }

    window.onload = typeEffect;
</script>

<script>
    const text = "Programmer","Codinger","Modder";
    let i = 0;
    const speed = 100;

    function typeEffect() {
        if (i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, speed);
        } else {
            document.querySelector(".cursor").style.display = "none";
        }
    }

    window.onload = typeEffect;
</script>

<script>
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.5s ease";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1500); // durasi loading (1.5 detik)
});
</script>
