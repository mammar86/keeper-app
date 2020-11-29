import React, { useEffect, useState } from "react";

export function Footer() {
  return (
    <footer>
      <p>Copyright© Keeper {new Date().getFullYear()}</p>
    </footer>
  );
}
