import React from "react";

function Footer() {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start gap-[15px] py-[20px]">
      <p className="hidden sm:block">© 2023</p>
      <p>Twitter</p>
      <p>Linkedin</p>
      <p>Email</p>
      <p>RSS feed</p>
      <p>Add to Feedly</p>
      <p className="sm:hidden block mt-[10px]">© 2023</p>
    </div>
  );
}

export default Footer;
