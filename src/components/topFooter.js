import React from 'react'
import { connect } from "react-redux";
import { Container } from "reactstrap";


//בתוכ הסוגריים של הפונקציה מקבלים את הפרופס
function TopFooter(props) {
  return (
      <footer className="footer" data-background-color="black" style={{
        // bottom: 0,
        // position: "fixed", width: "100%", padding: 0
        // ,zIndex: 2237
      }}>
        <Container>
          <nav>
            <ul style={{ lineHeight: 1.4 }}>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=nuk-pro-react-footer-black"
                  target="_blank"
                >
                  Creative Tim
                  </a>
            </li>
            <li>
              <a
                href="http://presentation.creative-tim.com?ref=nuk-pro-react-footer-black"
                target="_blank"
              >
                About Us
                  </a>
            </li>
            <li>
              <a
                href="http://blog.creative-tim.com?ref=nuk-pro-react-footer-black"
                target="_blank"
              >
                Blog
                  </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright" style={{ lineHeight: 1.4 }}>
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.invisionapp.com?ref=creativetim"
            target="_blank"
          >
            Invision
              </a>
              . Coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=nuk-pro-react-footer-black"
            target="_blank"
          >
            Creative Tim
              </a>
              .
            </div>
      </Container>
    </footer>
  )
}
const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(TopFooter);



