declare const window: typeof globalThis & {
  Tmapv2: any;
};

export const mapPopUp = (props) => {
  const TInfoWindow = new window.Tmapv2.InfoWindow({
    position: props.position,
    content: `
    <div style=' display: flex; flex-direction: column; position: relative; width: 200px; height: 100px; padding: 20px 10px 10px; box-shadow: 0px 1px 2px rgba(60, 64, 67, 0.3),0px 2px 6px 2px rgba(60, 64, 67, 0.15); border-radius: 10px; background-color: white;'>
        <img src='/delete.webp' id='deleteImg' style=' position: absolute; width: 15px; height: 15px; top: 3px; right: 3px; cursor: pointer;'>
        <div style=' display: flex; flex-direction: row;'>
          <div style=' display: flex; flex-direction: row; justify-content: center; align-items: center; width: 45px; height: 45px; margin-right: 10px;'>
            <img src='/defaultFood.webp' style='width: 100%; height: 100%; object-fit: contain'/>
          </div>
          <div>
            <div style='font-weight: 600; font-size: 12px; margin-bottom: 2px'>
            <!-- data.result.lowerBizName -->
            </div>
            <div style='font-weight: 500; font-size: 10px; color: #999999'>
              <!-- data.result.lowerBizName -->
            </div>
          </div>
        </div>
        <div style='width: 75%; margin-top: 5px; font-weight: 500; font-size: 10px'>
          <!-- data.result.newAddressList.newAddress[0].fullAddressRoad -->
        </div>
        <button style=' position: absolute; width: 45px; height: 20px; bottom: 10px; right: 6px; background: #fbb240; border-radius: 5px; border: none; font-weight: 500; font-size: 10px; color: #ffffff; cursor: pointer;'>
          예약
        </button>
      </div>
      `,
    border: "0",
    background: "false",
    type: 2,
    map: props.map,
  });
  props.setInfoWindow((prev) => [...prev, TInfoWindow]);

  const img = document.querySelectorAll("#deleteImg");
  img[img.length - 1].addEventListener("click", () => {
    TInfoWindow.setVisible(false);
  });
};
