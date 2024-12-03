// Footer.tsx

import "./Footer.css";
interface FooterProps {
    darkMode: boolean;
}

function Footer({darkMode} : FooterProps) {
    return (
        <footer className={darkMode ? "footer dark-footer" : "footer light-footer"}>
            <p>Be the first to know</p>
            <p>Get notified about the upcoming sessions, news, articles, jobs, and open-source projects.</p>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
            <div className="footer-links">
                <a href="#">Contact us</a>
                <a href="#">Open source projects</a>
                <a href="#">Social Accounts</a>
                <a href="#">Sponsor</a>
                <a href="#">FAQs</a>
            </div>
            <p className="footer-credits">
                Made by Mahmoud, Kevin && Aishwarya.
            </p>
        </footer>
    );
}

export default Footer;
