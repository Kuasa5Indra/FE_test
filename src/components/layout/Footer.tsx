const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 absolute bottom-0">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - KarirKu </p>
            </aside>
        </footer>
    );
}

export default Footer;