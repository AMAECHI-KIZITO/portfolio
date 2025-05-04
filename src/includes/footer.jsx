import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <hr/>
            <div className="row my-4 py-2">
                <div className = "col-12">
                    <p className="text-center">Copyright &copy; {new Date().getFullYear()}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;