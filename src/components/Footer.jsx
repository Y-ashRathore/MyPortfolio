import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <a href="https://github.com/Y-ashRathore"><i class="fab fa-github footer-logo"></i></a>
            <a href="https://www.instagram.com/ya.sh.r/"><i class="fab fa-instagram footer-logo"></i></a>
            <a href="https://www.linkedin.com/in/yash-vardhan-singh-rathore/"><i class="fab fa-linkedin footer-logo"></i></a>
            <p>Copyright ⓒ {year} Yash Rathore</p>
        </footer>
    );
}

export default Footer;
