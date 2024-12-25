'use client'
import Image from 'next/image';
import React from 'react';


function Notification() {

  return (
    <div className=" fixed bottom-2 right-0  justify-center bg-gray-100 rounded-full  mt-5 z-30">
      <a href="https://bit.ly/49QTWCo">
      <Image src='/png-clipart-whatsapp-computer-ic.png' alt="App Logo" className="" width={50} height={100} priority  />
      </a>
     
    </div>
  );
}

export default Notification