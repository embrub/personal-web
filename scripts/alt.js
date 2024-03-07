
//INCLUDE SIDEBAR
const sb = document.getElementById("sidebar");
sb.innerHTML +=
    `
    <a href="../index.html"><img src="../images/icon.png" class="icon" alt=""></a>
    <p>SACHERSKETCHBOOK<br>HELL YA</p>
    <!-- <a href="index.html">
                <div class="side-btn"> &raquo; HOME</div>
            </a> -->
    <a href="../2023/index.html">
        <div class="dropdown">
            <div class="side-btn">
                &raquo; ARTBLOG
            </div>
            <nav aria-label="artblog-contents" class="dropdown-content">
                <a href="../2023/oct-dec.html">&rsaquo; Oct-Dec</a>
                <a href="../2023/aug-sept.html">&rsaquo; Aug/Sept</a>
                <a href="../2023/june-july.html">&rsaquo; June/July</a>
                <a href="../2023/apr-may.html">&rsaquo; Apr/May</a>
                <a href="../2023/traditional.html">&rsaquo; Trad Art</a>
                <a href="../2023/doodles.html">&rsaquo; Doodles</a>
            </nav>
        </div>
    </a>
    <a href="../journal/index.html">
        <div class="side-btn"> &raquo; JOURNAL</div>
    </a>
    <a href="../favorites/index.html">
        <div class="side-btn"> &raquo; FAVORITES </div>
    </a>
    <a href="../sequential.html">
        <div class="side-btn"> &raquo; SQNTL</div>
    </a>
    <a href="../info/index.html">
        <div class="side-btn"> &raquo; INFO</div>
    </a>
    <!-- <a href="../info/index.html">
        <div class="dropdown">
            <div class="side-btn">
                &raquo; INFO
            </div>
            <nav aria-label="info-contents" class="dropdown-content">
                <a href="2023/oct-dec/index.html">&rsaquo; Abt me</a>
                <a href="2023/june-july.html">&rsaquo; Sitemap</a>
                <a href="2023/apr-may.html">&rsaquo; Abt art</a>
                <a href="2023/doodles.html">&rsaquo; Links</a>
            </nav>
        </div>
    </a> -->
    <a class="toggle">
        <div class="side-btn theme"> &raquo; SWAP THEME</div>
    </a>
      `;