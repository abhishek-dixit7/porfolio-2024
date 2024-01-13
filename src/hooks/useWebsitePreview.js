import { useEffect, useRef } from 'react';
import { browserless } from '../constants/constants';
import axios from 'axios';

const useWebsitePreview = url => {
  const previewRef = useRef(null);

  useEffect(() => {
    const capturePreview = async () => {
      try {
        const request = {
          url: url,
          options: {
            fullPage: true,
            type: 'jpeg',
            quality: 75,
          },
        };
        const response = await axios.post(
          `${browserless.url}?token=${browserless.apiKey}`,
          request,
          {
            headers: {
              'Cache-Control': 'no-cache',
              'Content-Type': 'application/json',
            },
            responseType: 'arraybuffer',
          },
        );

        const binaryData = new Uint8Array(response.data);
        const base64Image = btoa(String.fromCharCode.apply(null, binaryData));
        localStorage.setItem(url, `data:image/jpeg;base64,${base64Image}`);

        previewRef.current.src = `data:image/jpeg;base64,${base64Image}`;
      } catch (error) {
        console.error('Error capturing screenshot:', error.message);
      }
    };
    if (!localStorage.getItem(url)) capturePreview();
    else previewRef.current.src = localStorage.getItem(url);
  }, [url]);

  return previewRef;
};

export default useWebsitePreview;
