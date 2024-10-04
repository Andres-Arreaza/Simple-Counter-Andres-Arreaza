import React from "react";

const Footer = () => {
    return (
      <footer style={{marginTop: '453px', color: '#fff', width: '100%'}}>
        <div className="container-fluid bg-dark p-3 text-center">
          <div className="row">
            <div className="col-lg-12">
              <p>
                &copy; 2024 {" "}
                <a href="https://github.com/Andres-Arreaza" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Andrés Arreaza</a>{". "}
                Made at {" "}
                <a href="https://www.4geeksacademy.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>4GeeksAcademy</a>{". "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;