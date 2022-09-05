import { RV_API } from "../constants/constants.js";

  export const requestRV = async () => {
    const response = await fetch(RV_API);
    const resultList = await response.json();
    return resultList;
  };

  export const filterData = (search, listRV) => {
    if (listRV.data !== undefined) {

      const result = listRV.data.filter((elData) => {

        const vehicleType = elData.attributes.display_vehicle_type.toLowerCase();

        if (vehicleType.includes(search.toLowerCase())) {
          return elData;
        }
        if (elData.attributes.name.toLowerCase().includes(search.toLowerCase())) {
          return elData;
        }
      })
      return result;
    }
  }