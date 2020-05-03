import { ActionTree, Store } from "vuex";
import { initialiseStores } from '@/utils/store-accessor';
import { AppState } from '@/store/app';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initializer = (store: Store<any>): void => initialiseStores(store);
export const plugins = [initializer];
export * from '@/utils/store-accessor';

export interface RootState {
  appState: AppState
}

export const actions: ActionTree<AppState, RootState> = {
  async nuxtServerInit({ commit }): Promise<void> {
    //テスト用
    const res = {
      wine_attributes: [
        {
          "id": 1,
          "japanese_title": "酒石酸濃度",
          "english_title": "fixed acidity",
          "step": 0.01,
          "max_value": 1,
          "min_value": 0
        },
        {
          "id": 1,
          "japanese_title": "酒石酸濃度",
          "english_title": "fixed acidity",
          "step": 0.01,
          "max_value": 1,
          "min_value": 0
        },
        {
          "id": 1,
          "japanese_title": "酒石酸濃度",
          "english_title": "fixed acidity",
          "step": 0.01,
          "max_value": 1,
          "min_value": 0
        }
      ]
    }
    //const res = await this.$axios.$get('/api/wine_attributes');
    if (res.wine_attributes) {
      commit('app/SET_WINE_ATTR', res.wine_attributes);
    }
  }
};
