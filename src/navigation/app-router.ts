export const APP_ROUTER: IAPP_ROUTER = {
  SCREEN: {
    characterList: {
      path: 'characterlist',
      label: 'screen:characterlist',
    },
    comicBookList: {
      path: 'comicbooklist',
      label: 'screen:comicbooklist',
    },
    characterDetail: {
      path: 'characterDetail',
      label: 'screen:characterDetail',
    },
    comicBookDetail: {
      path: 'comicBookDetail',
      label: 'screen:characterDetail',
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
    comicBookList: IAPPRouterItem;
    characterDetail: IAPPRouterItem;
    comicBookDetail: IAPPRouterItem;
  };
}
