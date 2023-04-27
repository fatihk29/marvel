export const APP_ROUTER: IAPP_ROUTER = {
  SCREEN: {
    characterlist: {
      path: 'characterlist',
      label: 'screen:characterlist',
    },
    comicbooklist: {
      path: 'comicbooklist',
      label: 'screen:comicbooklist',
    },
  },
};

export interface IAPPRouterItem {
  path: string;
  label: string;
}

interface IAPP_ROUTER {
  SCREEN: {
    characterlist: IAPPRouterItem;
    comicbooklist: IAPPRouterItem;
  };
}
