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

          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
          <link rel="stylesheet" href="./../static/CSS/style.css" />
          {/* <link rel="shortcut icon" href="./../../static/CSS/style.css" /> */}
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
          ></link>
          <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
            integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
            crossorigin="anonymous"
          ></script>
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
              <div>
                <link
                  rel="stylesheet"
                  href="https://unpkg.com/swiper/css/swiper.css"
                />
                <link
                  rel="stylesheet"
                  href="https://unpkg.com/swiper/css/swiper.min.css"
                />
              </div>
            </div>
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
