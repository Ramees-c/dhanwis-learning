import React from 'react'

import whatsapp_icon from "../../assets/images/logo/whatsapp_logo.png"

function WhatsappIcon() {
  return (
    <div>
        <a href=""
        className='fixed bottom-20 right-3'
        >
            <img src={whatsapp_icon} alt="whatsapp" width="90" />
        </a>
    </div>
  )
}

export default WhatsappIcon