import Params from "./Params";
import ResultWriter from "./ResultWriter";
import CalcExpCandy from "./CalcExpCandy";

export default class Calc {
  params: Params;
  constructor(params: Params) {
    this.params = params;
  }
  public execute() {
    const { level, formula, nowExp, candyParams } = this.params;
    const targetExp = formula(level);
    const residualExp = targetExp - nowExp;

    const calcExpCandy = new CalcExpCandy(residualExp, candyParams);
    const candyCount = calcExpCandy.execute();

    let text = `Lv${level} 時の経験値は ${targetExp.toString()} です。
    現在の経験値は ${nowExp} なので必要な経験値は残り ${residualExp} です。
    けいけんアメの使用回数は
    けいけんアメXLを ${candyCount.XL} 回
    けいけんアメL を ${candyCount.L} 回
    けいけんアメM を ${candyCount.M} 回
    けいけんアメS を ${candyCount.S} 回
    けいけんアメXSを ${candyCount.XS} 回で、
    余りの経験値は ${candyCount.residual} です。
    `;
    ResultWriter.addNewLine(text);
  }
}
