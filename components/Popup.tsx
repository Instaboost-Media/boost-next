// @ts-nocheck
import React from 'react';

const Popup = ({openPopup, handlePopup}) => {
  return (
    <div onClick={handlePopup} className={`z-50 fixed w-full h-full left-0 top-0 bg-black bg-opacity-75 flex justify-center items-center overflow-auto ${openPopup ? "" : "pointer-events-none opacity-0"}`}>
      <div className='w-[650px] h-[740px] relative'>
      <iframe
        src="https://link.instaboostinc.com/widget/form/MjufEOKIcIATadF1aq20"
        className='w-full h-full rounded-md absolute' 
        id="inline-MjufEOKIcIATadF1aq20" 
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Boost Brands Form"
        data-height="884"
        data-layout-iframe-id="inline-MjufEOKIcIATadF1aq20"
        data-form-id="MjufEOKIcIATadF1aq20"
        title="Boost Brands Form"
            >
      </iframe>
      <script src="https://link.instaboostinc.com/js/form_embed.js" async></script>
      </div>
    </div>
  );
};

export default Popup;
