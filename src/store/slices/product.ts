import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {
  getCharaterList,
  getCharaterById,
  getCharaterByIdWithComics,
  getComicList,
  getComicById,
  getComicByIdWithCharacters,
  getComicByIdWithCreators,
} from '../../services/productApi';

export interface Resource<T> {
  data: T | null | undefined;
  pending: boolean | null;
  err: string | null | undefined;
}

export function emptyResource<T>() {
  const resource: Resource<T> = {
    data: null,
    pending: null,
    err: null,
  };
  return resource;
}

interface IProduct {
  charaterList: Resource<any>;
  characterById: Resource<any>;
  charaterByIdWithComics: Resource<any>;
  comicList: Resource<any>;
  comicById: Resource<any>;
  comicByIdWithCharacters: Resource<any>;
  comicByIdWithCreators: Resource<any>;
}

const initialState: IProduct = {
  charaterList: emptyResource(),
  characterById: emptyResource(),
  charaterByIdWithComics: emptyResource(),
  comicList: emptyResource(),
  comicById: emptyResource(),
  comicByIdWithCharacters: emptyResource(),
  comicByIdWithCreators: emptyResource(),
};

const getCharaterListAT = createAsyncThunk('product/charList', async (_, thunkAPI) => {
  console.log('asd49 :>> ');
  try {
    const response = await getCharaterList();
    if (response) {
      console.log('response :>> ', response);
      return response;
    } else {
      return thunkAPI.rejectWithValue('no product data');
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const getCharaterByIdAT = createAsyncThunk('product/charid', async (load: string, thunkAPI) => {
  try {
    const response = await getCharaterById(load);
    if (response) {
      return response;
    } else {
      return thunkAPI.rejectWithValue('no product data');
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const getCharaterByIdWithComicsAT = createAsyncThunk(
  'product/charidWComic',
  async (load: string, thunkAPI) => {
    try {
      const response = await getCharaterByIdWithComics(load);
      if (response) {
        return response;
      } else {
        return thunkAPI.rejectWithValue('no product data');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const getComicListAT = createAsyncThunk('comicList', async (_, thunkAPI) => {
  try {
    const response = await getComicList();
    if (response) {
      return response;
    } else {
      return thunkAPI.rejectWithValue('no product data');
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const getComicByIdAT = createAsyncThunk('comicId', async (load: string, thunkAPI) => {
  try {
    const response = await getComicById(load);
    if (response) {
      return response;
    } else {
      return thunkAPI.rejectWithValue('no product data');
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const getComicByIdWithCharactersAT = createAsyncThunk(
  'comicIdWChar',
  async (load: string, thunkAPI) => {
    try {
      const response = await getComicByIdWithCharacters(load);
      if (response) {
        return response;
      } else {
        return thunkAPI.rejectWithValue('no product data');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const getComicByIdWithCreatorsAT = createAsyncThunk(
  'comicIdWCreators',
  async (load: string, thunkAPI) => {
    try {
      const response = await getComicByIdWithCreators(load);
      if (response) {
        return response;
      } else {
        return thunkAPI.rejectWithValue('no product data');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    console.log('asdasd155 :>> ');
    // charaterList start
    builder.addCase(getCharaterListAT.pending, (state, _) => {
      console.log('asd3 :>> ');
      state.charaterList.pending = true;
      state.charaterList.data = null;
      state.charaterList.err = null;
    });
    builder.addCase(getCharaterListAT.fulfilled, (state, action) => {
      console.log('asd3 :>> ');
      state.charaterList.data = action.payload;
      state.charaterList.err = null;
      state.charaterList.pending = false;
    });
    builder.addCase(getCharaterListAT.rejected, (state, action) => {
      console.log('asd3 :>> ');
      state.charaterList.err = action.error.message;
      state.charaterList.data = null;
      state.charaterList.pending = false;
    });
    // charaterList end
    // characterById start
    builder.addCase(getCharaterByIdAT.pending, (state, _) => {
      state.characterById.pending = true;
      state.characterById.data = null;
      state.characterById.err = null;
    });
    builder.addCase(getCharaterByIdAT.fulfilled, (state, action) => {
      state.characterById.data = action.payload;
      state.characterById.err = null;
      state.characterById.pending = false;
    });
    builder.addCase(getCharaterByIdAT.rejected, (state, action) => {
      state.characterById.err = action.error.message;
      state.characterById.data = null;
      state.characterById.pending = false;
    });
    // characterById end
    // charaterByIdWithComics start
    builder.addCase(getCharaterByIdWithComicsAT.pending, (state, _) => {
      state.charaterByIdWithComics.pending = true;
      state.charaterByIdWithComics.data = null;
      state.charaterByIdWithComics.err = null;
    });
    builder.addCase(getCharaterByIdWithComicsAT.fulfilled, (state, action) => {
      state.charaterByIdWithComics.data = action.payload;
      state.charaterByIdWithComics.err = null;
      state.charaterByIdWithComics.pending = false;
    });
    builder.addCase(getCharaterByIdWithComicsAT.rejected, (state, action) => {
      state.charaterByIdWithComics.err = action.error.message;
      state.charaterByIdWithComics.data = null;
      state.charaterByIdWithComics.pending = false;
    });
    // charaterByIdWithComics end
    // comicList start
    builder.addCase(getComicListAT.pending, (state, _) => {
      state.comicList.pending = true;
      state.comicList.data = null;
      state.comicList.err = null;
    });
    builder.addCase(getComicListAT.fulfilled, (state, action) => {
      state.comicList.data = action.payload;
      state.comicList.err = null;
      state.comicList.pending = false;
    });
    builder.addCase(getComicListAT.rejected, (state, action) => {
      state.comicList.err = action.error.message;
      state.comicList.data = null;
      state.comicList.pending = false;
    });
    // comicList end
    // comicById start
    ///
    builder.addCase(getComicByIdAT.pending, (state, _) => {
      state.comicById.pending = true;
      state.comicById.data = null;
      state.comicById.err = null;
    });
    builder.addCase(getComicByIdAT.fulfilled, (state, action) => {
      state.comicById.data = action.payload;
      state.comicById.err = null;
      state.comicById.pending = false;
    });
    builder.addCase(getComicByIdAT.rejected, (state, action) => {
      state.comicById.err = action.error.message;
      state.comicById.data = null;
      state.comicById.pending = false;
    });
    // comicById end
    // comicByIdWithCharacters start
    builder.addCase(getComicByIdWithCharactersAT.pending, (state, _) => {
      state.comicByIdWithCharacters.pending = true;
      state.comicByIdWithCharacters.data = null;
      state.comicByIdWithCharacters.err = null;
    });
    builder.addCase(getComicByIdWithCharactersAT.fulfilled, (state, action) => {
      state.comicByIdWithCharacters.data = action.payload;
      state.comicByIdWithCharacters.err = null;
      state.comicByIdWithCharacters.pending = false;
    });
    builder.addCase(getComicByIdWithCharactersAT.rejected, (state, action) => {
      state.comicByIdWithCharacters.err = action.error.message;
      state.comicByIdWithCharacters.data = null;
      state.comicByIdWithCharacters.pending = false;
    });
    // comicByIdWithCharacters end
    // comicByIdWithCreators start
    builder.addCase(getComicByIdWithCreatorsAT.pending, (state, _) => {
      state.comicByIdWithCreators.pending = true;
      state.comicByIdWithCreators.data = null;
      state.comicByIdWithCreators.err = null;
    });
    builder.addCase(getComicByIdWithCreatorsAT.fulfilled, (state, action) => {
      state.comicByIdWithCreators.data = action.payload;
      state.comicByIdWithCreators.err = null;
      state.comicByIdWithCreators.pending = false;
    });
    builder.addCase(getComicByIdWithCreatorsAT.rejected, (state, action) => {
      state.comicByIdWithCreators.err = action.error.message;
      state.comicByIdWithCreators.data = null;
      state.comicByIdWithCreators.pending = false;
    });
    // comicByIdWithCreators end
  },
});

export const productActions = {
  getCharaterListAT,
  getCharaterByIdAT,
  getCharaterByIdWithComicsAT,
  getComicListAT,
  getComicByIdAT,
  getComicByIdWithCharactersAT,
  getComicByIdWithCreatorsAT,
};

export const productsSelectors = {
  charaterList: (state: any) => state.product.charaterList,
  characterById: (state: any) => state.product.characterById,
  hotdeals: (state: any) => state.product.hotdeals,
  charaterByIdWithComics: (state: any) => state.product.charaterByIdWithComics,
  comicList: (state: any) => state.product.comicList,
  comicById: (state: any) => state.product.comicById,
  comicByIdWithCharacters: (state: any) => state.product.comicByIdWithCharacters,
  comicByIdWithCreators: (state: any) => state.product.comicByIdWithCreators,
};

export default productsSlice.reducer;
