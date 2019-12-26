import ExperienceFormula from "./ExperienceFormula";
import CandyParams from "./CandyParams";

const ExperienceFormulaTable = [
  ExperienceFormula.erratic,
  ExperienceFormula.fast,
  ExperienceFormula.mediumFast,
  ExperienceFormula.mediumSlow,
  ExperienceFormula.slow,
  ExperienceFormula.fluctuating
];

enum ExperienceGroup {
  Erratic = 0, // "60",
  Fast, //"80",
  MediumFast, //"100",
  MediumSlow, //"105",
  Slow, //"125",
  Fluctuating //"164"
}

export default class Params {
  level: number;
  groupID: number;
  nowExp: number;
  expGroup: ExperienceGroup;
  candyParams: CandyParams;
  formula: (level: number) => number;
  constructor(level: number, group: number, nowExp: number, candyParams: CandyParams) {
    this.level = level;
    this.groupID = group;
    this.nowExp = nowExp;
    this.expGroup = <ExperienceGroup>this.groupID;
    this.candyParams = candyParams;
    this.formula = ExperienceFormulaTable[this.expGroup];
  }
}
