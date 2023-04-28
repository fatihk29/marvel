export const APP_ROUTER: IAPP_ROUTER = {
  SCREEN: {
    characterList: {
      path: 'characterlist',
      label: 'screen:characterlist',
    },
    comicList: {
      path: 'comiclist',
      label: 'screen:comiclist',
    },
    characterDetail: {
      path: 'characterDetail',
      label: 'screen:characterDetail',
    },
    comicDetail: {
      path: 'comicDetail',
      label: 'screen:comicDetail',
    },
  },
};

export interface IAPPRouterItem {
  path: string;
  label: string;
}

interface IAPP_ROUTER {
  SCREEN: {
    characterList: IAPPRouterItem;
    comicList: IAPPRouterItem;
    characterDetail: IAPPRouterItem;
    comicDetail: IAPPRouterItem;
  };
}
