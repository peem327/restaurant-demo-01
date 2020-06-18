import React, { Component } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Header from "./Header";
import Category from "./Category";
import Recipes from "./Recipes";
import Social from "./Social";
import Footer from "./Footer";

class Layout extends Component {
  render() {
    const { title = "อาหารสไตล์ ไทย" } = this.props;
    return (
      <div>
        <Head>
          <title>{title} </title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="./../static/CSS/style.css" />
          {/* <link rel="shortcut icon" href="./../../static/CSS/style.css" /> */}
          <div>
            {/* Font Awesome */}
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            />
            {/* Google Fonts */}
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            {/* Bootstrap core CSS */}
            <link
              href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
              rel="stylesheet"
            />
            {/* Material Design Bootstrap */}
            <link
              href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.0/css/mdb.min.css"
              rel="stylesheet"
            />
            {/* JQuery */}
            <script
              type="text/javascript"
              src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
            ></script>
            {/* Bootstrap tooltips */}
            <script
              type="text/javascript"
              src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"
            ></script>
            {/* Bootstrap core JavaScript */}
            <script
              type="text/javascript"
              src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"
            ></script>
            {/* MDB core JavaScript */}
            <script
              type="text/javascript"
              src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.0/js/mdb.min.js"
            ></script>
            {/* swiper */}
            <link
              rel="stylesheet"
              href="https://unpkg.com/swiper/css/swiper.css"
            />
            <link
              rel="stylesheet"
              href="https://unpkg.com/swiper/css/swiper.min.css"
            />
          </div>
        </Head>
        <Navbar />
        <Header />
        <Category />
        <Recipes />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default Layout;
