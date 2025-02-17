import React from "react";

import call_icon from "../../assets/images/logo/telephone-call.png";

function CallIcon() {
  return (
    <div>
      <a href="tel:+919961487219" className="fixed bottom-5 right-7">
        <img src={call_icon} alt="call" width="57" />
      </a>
    </div>
  );
}

export default CallIcon;
