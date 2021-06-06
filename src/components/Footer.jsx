import React from "react";

var curYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <p>@react{curYear}</p>
    </footer>
  );
}
