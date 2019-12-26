// TypeScript チュートリアル - Qiita https://qiita.com/EBIHARA_kenji/items/31b7c1c62426bdabd263
// typescriptのimport/export - Qiita https://qiita.com/you21979@github/items/dbca8ee32ace4227d8d0
import Params from "./Params";
import ResultWriter from "./ResultWriter";
import Calc from "./Calc";
import ExperienceFormula from "./ExperienceFormula";
import CandyParams from "./CandyParams";

function getCandyParams() {
  // c++ とかならここで new はおかしいが...
  const candyParams = new CandyParams();

  let inputUse: {
    useXS: boolean;
    useS: boolean;
    useM: boolean;
    useL: boolean;
    useXL: boolean;
  } = {
    useXS: true,
    useS: true,
    useM: true,
    useL: true,
    useXL: true
  };
  inputUse.useXS = (<HTMLInputElement>(
    document.getElementById("use-exp-candy-xs")
  )).checked;
  inputUse.useS = (<HTMLInputElement>(
    document.getElementById("use-exp-candy-s")
  )).checked;
  inputUse.useM = (<HTMLInputElement>(
    document.getElementById("use-exp-candy-m")
  )).checked;
  inputUse.useL = (<HTMLInputElement>(
    document.getElementById("use-exp-candy-l")
  )).checked;
  inputUse.useXL = (<HTMLInputElement>(
    document.getElementById("use-exp-candy-xl")
  )).checked;

  let inputLimit: {
    limitXS: number;
    limitS: number;
    limitM: number;
    limitL: number;
    limitXL: number;
  } = {
    limitXS: Number.MAX_VALUE,
    limitS: Number.MAX_VALUE,
    limitM: Number.MAX_VALUE,
    limitL: Number.MAX_VALUE,
    limitXL: Number.MAX_VALUE
  };

  try {
    inputLimit.limitXS =
      parseInt(
        (<HTMLInputElement>document.getElementById("limit-exp-candy-xs")).value,
        10
      ) || Number.MAX_VALUE;

    inputLimit.limitS =
      parseInt(
        (<HTMLInputElement>document.getElementById("limit-exp-candy-s")).value,
        10
      ) || Number.MAX_VALUE;
    inputLimit.limitM =
      parseInt(
        (<HTMLInputElement>document.getElementById("limit-exp-candy-m")).value,
        10
      ) || Number.MAX_VALUE;
    inputLimit.limitL =
      parseInt(
        (<HTMLInputElement>document.getElementById("limit-exp-candy-l")).value,
        10
      ) || Number.MAX_VALUE;
    inputLimit.limitXL =
      parseInt(
        (<HTMLInputElement>document.getElementById("limit-exp-candy-xl")).value,
        10
      ) || Number.MAX_VALUE;
    if (
      inputLimit.limitXS < 0 ||
      inputLimit.limitS < 0 ||
      inputLimit.limitM < 0 ||
      inputLimit.limitL < 0 ||
      inputLimit.limitXL < 0
    ) {
      throw "上限の値が正しくありません";
    }
  } catch (error) {
    candyParams.hasError = true;
    candyParams.errorMessage = error;
  }

  candyParams.setUseParams(inputUse);
  candyParams.setLimitParams(inputLimit);
  return candyParams;
}

function onClickCalc(e: MouseEvent) {
  e.preventDefault();
  // TypeScriptで document.getElementById(&quot;hoge&quot;).value をすると出るThe property ‘hoge&#39; does not exist on value of type &#39;HTMLElement&#39; というエラーを解消する - Qiita https://qiita.com/Sekky0905/items/a88721f2af41050c93f2
  const inputLevel =
    (<HTMLInputElement>document.getElementById("inputLevel")).value || "50";
  const inputGroup =
    (<HTMLInputElement>document.getElementById("inputGroup")).value || "0";
  const inputNowExp =
    (<HTMLInputElement>document.getElementById("inputNowExp")).value || "0";

  let level: number;
  let group: number;
  let nowExp: number;
  let candyParams: CandyParams;
  try {
    level = parseInt(inputLevel, 10);
    group = parseInt(inputGroup, 10);
    nowExp = parseInt(inputNowExp, 10);
    candyParams = getCandyParams();
    if (level < 0 || level > 100) {
      throw "レベルの値が正しくありません";
    }
    if (nowExp < 0 || nowExp > ExperienceFormula.fluctuating(100)) {
      throw "現在の経験値の値が正しくありません";
    }
    if (candyParams.hasError) {
      throw candyParams.errorMessage;
    }
  } catch (error) {
    ResultWriter.addNewLine(`入力ミスがあります\r\n${error}`);
    return;
  }

  const params = new Params(level, group, nowExp, candyParams);
  const calc = new Calc(params);
  // console.dir(params);
  calc.execute();
}

const calcButton = document.getElementById("calc") as HTMLButtonElement;
calcButton.onclick = onClickCalc;

// const ExperienceGroup = [
//   "Erratic", // "60",
//   "Fast", //"80",
//   "MediumFast", //"100",
//   "MediumSlow", //"105",
//   "Slow", //"125",
//   "Fluctuating" //"164"
// ];
// const ExperienceFormulaTable = {
//   Erratic: ExperienceFormula.erratic,
//   Fast: ExperienceFormula.fast,
//   MediumFast: ExperienceFormula.mediumFast,
//   MediumSlow: ExperienceFormula.mediumSlow,
//   Slow: ExperienceFormula.slow,
//   Fluctuating: ExperienceFormula.fluctuating
// };
