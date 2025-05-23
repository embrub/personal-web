//INCLUDE SIDEBAR
const sb = document.getElementById("sidebar");
sb.innerHTML +=
    `
        <a href="/index.html"><img src="/images/icon.png" class="icon" alt=""></a>
    <br>
    <a href="/index.html#artblog-start">
        <div class="dropdown">
            <div class="side-btn">
                &raquo; ARTBLOG
            </div>
            <nav aria-label="artblog-contents" class="dropdown-content">
                <a href="/2024/dec-feb25/index.html">&rsaquo; Dec-Mar</a>
                <a href="/2024/july-aug/index.html">&rsaquo; July-Nov</a>
                <a href="/2024/may-july/index.html">&rsaquo; May-July</a>
                <a href="/2024/jan-apr/index.html">&rsaquo; Jan-Apr</a>
                <a href="/2023/oct-dec/index.html">&rsaquo; Oct-Dec</a>
                <a href="/2023/aug-sept/index.html">&rsaquo; Aug/Sept</a>
                <a href="/2023/june-july/index.html">&rsaquo; June/July</a>
                <a href="/2023/apr-may/index.html">&rsaquo; Apr/May</a>
                <a href="/2023/traditional/index.html">&rsaquo; Trad Art</a>
            </nav>
        </div>
    </a>

    <a href="/ocs/index.html">
        <div class="side-btn"> &raquo; OCs</div>
    </a>
    <a href="/journal/index.html">
        <div class="side-btn"> &raquo; JOURNAL</div>
    </a>

    <a href="/about/index.html">
        <div class="dropdown">
            <div class="side-btn">
                &raquo; ABOUT
            </div>
            <nav aria-label="about-contents" class="dropdown-content">
            <a href="/about/myself.html">&rsaquo; about me</a>
            <a href="/about/sitemap.html">&rsaquo; sitemap</a>
            <a href="/about/updates.html">&rsaquo; updates</a>
            </nav>
        </div>
    </a>

    <a href="/favorites/index.html">
        <div class="side-btn"> &raquo; FAVORITES </div>
    </a>
    <a class="toggle">
        <div class="side-btn theme"> &raquo; SWAP THEME</div>
    </a>
    <a href="/guestbook.html"><small>guestbook</small></a>

    <noscript style="width: 170px">
        <a href="/index.html">HOME</a> |
        <a href="/info/index.html#">SITEMAP</a>
        <p>site relies on javascript to load the full sidebar & navigate through gallery pages.</p>
        <p>enable js for a more complete experience :,D</p>
    </noscript>
      `;

//COLLAPSABLE SIDEBAR
function responsive() {
    if (sb.style.display === "inline-flex") {
        sb.style.display = "none";
    } else {
        sb.style.display = "inline-flex";
    }
}

//CHECK FOR DARK MODE
const toggle = document.querySelector('.toggle');
const html = document.querySelector('html');
let theme = localStorage.getItem('theme') ?? 'system';
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('theme') == 'dark') {
        document.querySelector('.icon').src = '/images/icon2.png';
        document.querySelector('html').toggleAttribute('data-dark-mode');
    } else if (theme == 'light') {
        document.querySelector('.icon').src = '/images/icon.png';
        html.removeAttribute('data-dark-mode');
    }
});

//DARK MODE TOGGLE  
toggle.addEventListener('click', () => {
    const icon = document.querySelector('.icon');

    if (theme == 'light') {
        theme = 'dark';
        icon.src = '/images/icon2.png';
        html.toggleAttribute('data-dark-mode', true);
    } else {
        theme = 'light';
        icon.src = '/images/icon.png';
        html.removeAttribute('data-dark-mode');
    }
    localStorage.setItem('theme', theme);

    document.body.style.transition = 'background 0.5s';
    console.log("Theme set to:", theme);
});

//personal note: if this stops working again, turn "inline-flex" back to "flex" & stopHide("media") into a diff var
//if it still doesnt well idfk does it look like i know what im doing