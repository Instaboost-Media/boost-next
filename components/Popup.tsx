// @ts-nocheck
import React from 'react';

const Popup = () => {
  return (
    <div className='fixed w-full h-full bg-red-500 top-0 left-0'>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/LJcgb0F8SD4REqocrLYw"
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
        id="inline-LJcgb0F8SD4REqocrLYw"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="test"
        data-height="584"
        data-layout-iframe-id="inline-LJcgb0F8SD4REqocrLYw"
        data-form-id="LJcgb0F8SD4REqocrLYw"
        title="test"
      >
      </iframe>
      <script src="https://link.msgsndr.com/js/form_embed.js"></script>
    </div>
  );
};

export default Popup;
