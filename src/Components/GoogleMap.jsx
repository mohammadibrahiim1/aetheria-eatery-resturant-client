import React, { useEffect } from "react";

const GoogleMap =  () => {



  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    const lat = 24.0183920094;
    const lon = 90.4189347302;
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });

  return (
    <div>
      <iframe id="iframeId" height="500px" width="100%"></iframe>
    </div>
  );
};
export default GoogleMap;
