import React from "react";

const IframeComponent = () => {
  return (
    <div id="power-signature" className="w-screen"  style={{ height: `calc(100vh + 250px)` }}
>
      <iframe
        src={"https://dev.d2dpxqytji82wt.amplifyapp.com"}
        className="w-full h-full border-none"
        allowFullScreen
      />
    </div>
  );
};

export default IframeComponent;