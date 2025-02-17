import React from 'react'

import whatsapp_icon from "../../assets/images/logo/whatsapp_logo.png"

function WhatsappIcon() {
  return (
    <div>
        <a href="https://wa.me/+918086487219" target="_blank"
        className='fixed bottom-20 right-3'
        >
            <img src={whatsapp_icon} alt="whatsapp" width="90" />
        </a>
    </div>
  )
}

export default WhatsappIcon