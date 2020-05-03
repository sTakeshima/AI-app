import { Action, Module, Mutation, VuexModule } from "@/node_modules/vuex-module-decorators";
import { InputValue, Result, WineAttribute } from "@/models";
import axios, { AxiosResponse } from "axios";//エンドポイント/api.preditにPOSTリクエスト

export interface AppState {
  title: string//ページのタイトル
  wineAttributes: WineAttribute[]//ワインの属性値
  result: Result//予測結果
}

@Module({ stateFactory: true, name: "app", namespaced: true })
export default class App extends VuexModule implements AppState {
  public title: string = '';
  public wineAttributes: WineAttribute[] = [];
  public result: Result = { value: 0, comment: '', status: false};

  //Stateを変更したい処理がある場合はMutationに処理を記載する
  //ページ上部に表示されるタイトルを設定する
  @Mutation
  public SET_TITLE(title: string): void {
    this.title = title
  }

  //ワインの属性のマスタデータを設定する
  @Mutation
  public SET_WINE_ATTR(wineAttributes: WineAttribute[]): void {
    this.wineAttributes = wineAttributes;
  }

  //ワインの属性値に対して値を入力する
  @Mutation
  public SET_WINE_VALUE(payload: {id: number, value: number}): void {
    this.wineAttributes[payload.id - 1].value = payload.value
  }

  //入力値、予測結果をすべてクリアする
  @Mutation
  public CLEAR(): void {
    this.wineAttributes = this.wineAttributes.map((w): WineAttribute => {
      delete w.value;
      return w;
    });
    this.result = { value: 0, comment: '', status: false};
  }

  @Mutation
  public SET_RESULT({value, status}): void {
    this.result.value = value;
    this.result.status = status;
  }

  //Actionは非同期処理(APIリクエストなど)で利用する。
  //取得した値は直接Stateを更新せずにMutationsを通してStateを更新するようにする。
  @Action({})
  public async POST_WINE_VALUE(): Promise<void> {
    const inputValues = this.wineAttributes.map((attr): InputValue =>
      ({id: attr.id, value: attr.value})
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //const res: AxiosResponse<Result> = await axios.post('/api/predict', inputValues);
    //テスト用
    const res = {
      data: {
        status:true,
        value: 33
      }
    }

    if (res.data.status) {
      this.context.commit("SET_RESULT", res.data);
    }
  }
  //バリデーションのため、入力値がすべて入力されているかどうかを確認するGetter
  public get IsAllValueSet(): (() => boolean) {
    return (): boolean => {
      return this.wineAttributes.every((attr): boolean => {
        return 'value' in attr && attr.value != 0
      });
    }
  }
}
