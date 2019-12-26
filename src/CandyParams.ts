interface IUse {
  [key: string]: boolean;
  XS: boolean;
  S: boolean;
  M: boolean;
  L: boolean;
  XL: boolean;
}

interface ILimit {
  [key: string]: number;
  XS: number;
  S: number;
  M: number;
  L: number;
  XL: number;
}

export default class CandyParams {
  // useXS: boolean = true;
  // useS: boolean = true;
  // useM: boolean = true;
  // useL: boolean = true;
  // useXL: boolean = true;
  // limitXS: number = Number.MAX_VALUE;
  // limitS: number = Number.MAX_VALUE;
  // limitM: number = Number.MAX_VALUE;
  // limitL: number = Number.MAX_VALUE;
  // limitXL: number = Number.MAX_VALUE;
  use: IUse = {
    XS: true,
    S: true,
    M: true,
    L: true,
    XL: true
  };
  limit: ILimit = {
    XS: Number.MAX_VALUE,
    S: Number.MAX_VALUE,
    M: Number.MAX_VALUE,
    L: Number.MAX_VALUE,
    XL: Number.MAX_VALUE
  };
  hasError: boolean = false;
  errorMessage: string = "";

  setUseParams(obj: {
    useXS: boolean;
    useS: boolean;
    useM: boolean;
    useL: boolean;
    useXL: boolean;
  }) {
    // this.useXS = obj.useXS;
    // this.useS = obj.useS;
    // this.useM = obj.useM;
    // this.useL = obj.useL;
    // this.useXL = obj.useXL;
    this.use.XS = obj.useXS;
    this.use.S = obj.useS;
    this.use.M = obj.useM;
    this.use.L = obj.useL;
    this.use.XL = obj.useXL;
  }

  setLimitParams(obj: {
    limitXS: number;
    limitS: number;
    limitM: number;
    limitL: number;
    limitXL: number;
  }) {
    // this.limitXS = obj.limitXS;
    // this.limitS = obj.limitS;
    // this.limitM = obj.limitM;
    // this.limitL = obj.limitL;
    // this.limitXL = obj.limitXL;
    this.limit.XS = obj.limitXS;
    this.limit.S = obj.limitS;
    this.limit.M = obj.limitM;
    this.limit.L = obj.limitL;
    this.limit.XL = obj.limitXL;
  }
}
