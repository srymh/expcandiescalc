// 計算式参考サイト
// 経験値タイプ - ポケモンWiki
// https://wiki.xn--rckteqa2e.com/wiki/%E7%B5%8C%E9%A8%93%E5%80%A4%E3%82%BF%E3%82%A4%E3%83%97
// Experience - Bulbapedia, the community-driven Pokémon encyclopedia
// https://bulbapedia.bulbagarden.net/wiki/Experience

export default class ExperienceFormula {
  static erratic(level: number) {
    let exp = 0;
    if (level <= 50) {
      exp = (Math.pow(level, 3) * (100 - level)) / 50;
    } else if (level > 50 && level <= 68) {
      exp = (Math.pow(level, 3) * (150 - level)) / 100;
    } else if (level > 68 && level <= 98) {
      exp = (Math.pow(level, 3) * ((1911 - 10 * level) / 3)) / 500;
    } else if (level > 98 && level <= 100) {
      exp = (Math.pow(level, 3) * (160 - level)) / 10;
    }
    return Math.floor(exp);
  }
  static fast(level: number) {
    let exp = 0;
    exp = (4 * Math.pow(level, 3)) / 5;
    return Math.floor(exp);
  }
  static mediumFast(level: number) {
    let exp = 0;
    exp = Math.pow(level, 3);
    return Math.floor(exp);
  }
  static mediumSlow(level: number) {
    let exp = 0;
    exp =
      (6 * Math.pow(level, 3)) / 5 -
      15 * Math.pow(level, 2) +
      100 * level -
      140;
    return Math.floor(exp);
  }
  static slow(level: number) {
    let exp = 0;
    exp = (5 * Math.pow(level, 3)) / 4;
    return Math.floor(exp);
  }
  static fluctuating(level: number) {
    let exp = 0;
    if (level <= 15) {
      exp = Math.pow(level, 3) * (((level + 1) / 3 + 24) / 50);
    } else if (level > 15 && level <= 36) {
      exp = Math.pow(level, 3) * ((level + 14) / 50);
    } else if (level > 36 && level <= 100) {
      exp = Math.pow(level, 3) * ((level / 2 + 32) / 50);
    }
    return Math.floor(exp);
  }
}
