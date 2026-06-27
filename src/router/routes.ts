import Frame6528 from "@/views/Frame6528";
import Frame63357 from "@/views/Frame63357";
import Frame63372 from "@/views/Frame63372";
import Frame1019 from "@/views/Frame1019";

export const routes = [{
          path: "/frame6528",
          component: Frame6528,
          guid: "65:28",
        },
{
          path: "/frame63357",
          component: Frame63357,
          guid: "63:357",
        },
{
          path: "/frame63372",
          component: Frame63372,
          guid: "63:372",
        },
{
          path: "/",
          component: Frame1019,
          guid: "10:19",
        }];


export const guidPathMap = new Map(
  routes.map((item) => [item.guid, item.path])
);
export const pathGuidMap = new Map(
  routes.map((item) => [item.path, item.guid])
);

export const getPathByGuid = (guid: string) => {
  return guidPathMap.get(guid) || "";
};

export const getGuidByPath = (path: string) => {
  return pathGuidMap.get(path) || "";
};
