// @ts-nocheck
"use client"
import React from 'react';
import Image from 'next/image';
import Script from 'next/script';

const PopupMobile = ({handlePopup, openPopup}) => {
  return (
    <div onClick={handlePopup} className={`z-40 fixed w-full h-full left-0 top-0 bg-black bg-opacity-75 flex justify-center items-center overflow-auto ${openPopup ? "" : "pointer-events-none opacity-0"}`}>
      <div className='w-full top-10 md:w-[650px] h-[1200px] absolute md:top-20'>
      <button type="button" className='absolute left-7 top-7 z-50'>
        <Image
              src="/xmark-solid.svg"
              width={500}
              height={500}
              alt="instaboost logo"
              className="object-cover w-4 pointer-events-none"
            />
      </button>
      <iframe
        src="https://link.instaboostinc.com/widget/form/4wDit6iV5Sl1xT7QpZOZ"
        style={{width: "100%", height: "1155px"}}
        id="inline-4wDit6iV5Sl1xT7QpZOZ" 
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Boost Brands Form - Mobile"
        data-height="890"
        data-layout-iframe-id="inline-4wDit6iV5Sl1xT7QpZOZ"
        data-form-id="4wDit6iV5Sl1xT7QpZOZ"
        title="Boost Brands Form - Mobile"
            >
      </iframe>
      <Script src="https://link.instaboostinc.com/js/form_embed.js" async></Script>


      </div>
    </div>
  );
};

export default PopupMobile;