import React from "react";
import SocialLinks from "../socialLinks";
import { TopNav } from "../navs";
import Footer from "../footer";
// import { initGA, logPageView } from "../../utils/analytics";

class Layout extends React.Component {
  // componentDidMount() {
  //   if (!window.GA_INITIALIZED) {
  //     initGA();
  //     window.GA_INITIALIZED = true;
  //   }
  //   logPageView();
  // }

  render() {
    return (
      <>
        <div className="root_wrapper container-fluid">
          <div className="">
            <TopNav />
          </div>
          <div className="main-display" style={{ minHeight: "60vh" }}>
            {this.props.children}
          </div>
          <Footer />
          <div className="social_links_container">
            <SocialLinks />
          </div>
        </div>
      </>
    );
  }
}

export default Layout;
