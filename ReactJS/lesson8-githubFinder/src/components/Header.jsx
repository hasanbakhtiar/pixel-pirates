import { FaGithub } from "react-icons/fa6";


const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <a title="Github" target="_blank" className="navbar-brand" href="https://github.com"><FaGithub /> Github Finder</a>
                        </div>

                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header