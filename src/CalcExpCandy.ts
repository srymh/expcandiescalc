import Params from "./Params";
import CandyParams from "./CandyParams";

// 【TypeScript】 Object[key]() （ブラケット記法）で関数呼び出ししたら Element implicitly has an &#39;any&#39; type でハマった話 - Qiita https://qiita.com/Nossa/items/e01d0bce67b760c0bcb9
interface IExpCandies {
  [key: string]: number;
  XS: number;
  S: number;
  M: number;
  L: number;
  XL: number;
}

interface IDiviedResult {
  [key: string]: number;
  count: number;
  residual: number;
}

interface IResults {
  [key: string]: number;
  XS: number;
  S: number;
  M: number;
  L: number;
  XL: number;
  residual: number;
}

const ExpCandies: IExpCandies = {
  XS: 100,
  S: 800,
  M: 3000,
  L: 10000,
  XL: 30000
};

export default class CalcExpCandy {
  exp: number;
  params: CandyParams;
  results: IResults = {
    XS: 0,
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    residual: 0
  };
  constructor(exp: number, params: CandyParams) {
    this.exp = exp;
    this.params = params;
  }
  public execute() {
    // Object.keys(ExpCandies).forEach(candy => {
    //   const result = this.diviedBy(this.exp, candy);
    //   console.log(
    //     `けいけんアメ${candy.toString()}を<< ${
    //       result.count
    //     } >>回使うと残り経験値が<< ${result.residual} >>です。`
    //   );
    // });

    let result = this.diviedBy(this.exp, "XL");
    this.results.XL = result.count;
    this.results.residual = result.residual;
    result = this.diviedBy(this.results.residual, "L");
    this.results.L = result.count;
    this.results.residual = result.residual;
    result = this.diviedBy(this.results.residual, "M");
    this.results.M = result.count;
    this.results.residual = result.residual;
    result = this.diviedBy(this.results.residual, "S");
    this.results.S = result.count;
    this.results.residual = result.residual;
    result = this.diviedBy(this.results.residual, "XS");
    this.results.XS = result.count;
    this.results.residual = result.residual;
    // console.log(this.results);
    return this.results;
  }

  private diviedBy(exp: number, candy: string): IDiviedResult {
    const { limit, use } = this.params;
    if (!use[candy]) {
      return {
        count: 0,
        residual: exp
      };
    }
    let count = Math.floor(exp / ExpCandies[candy]);
    count = count <= limit[candy] ? count : limit[candy];
    const residual = exp - ExpCandies[candy] * count;
    return {
      count,
      residual
    };
  }
}
