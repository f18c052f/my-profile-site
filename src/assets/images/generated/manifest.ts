// このファイルは scripts/optimize-images.mjs が生成します。手で編集しないでください。
// 再生成: pnpm images:build

import ajisai_640_webp from './ajisai-640.webp';
import ajisai_1280_webp from './ajisai-1280.webp';
import ajisai_1920_webp from './ajisai-1920.webp';
import ajisai_1280_jpg from './ajisai-1280.jpg';
import amsterdam_640_webp from './amsterdam-640.webp';
import amsterdam_1280_webp from './amsterdam-1280.webp';
import amsterdam_1920_webp from './amsterdam-1920.webp';
import amsterdam_1280_jpg from './amsterdam-1280.jpg';
import desk_640_webp from './desk-640.webp';
import desk_1280_webp from './desk-1280.webp';
import desk_1920_webp from './desk-1920.webp';
import desk_1280_jpg from './desk-1280.jpg';
import hikari_640_webp from './hikari-640.webp';
import hikari_1280_webp from './hikari-1280.webp';
import hikari_1920_webp from './hikari-1920.webp';
import hikari_1280_jpg from './hikari-1280.jpg';
import kiritori_640_webp from './kiritori-640.webp';
import kiritori_1280_webp from './kiritori-1280.webp';
import kiritori_1920_webp from './kiritori-1920.webp';
import kiritori_1280_jpg from './kiritori-1280.jpg';
import portrait_640_webp from './portrait-640.webp';
import portrait_1280_webp from './portrait-1280.webp';
import portrait_1920_webp from './portrait-1920.webp';
import portrait_1280_jpg from './portrait-1280.jpg';
import ramune_640_webp from './ramune-640.webp';
import ramune_1280_webp from './ramune-1280.webp';
import ramune_1920_webp from './ramune-1920.webp';
import ramune_1280_jpg from './ramune-1280.jpg';
import redsun_640_webp from './redsun-640.webp';
import redsun_1280_webp from './redsun-1280.webp';
import redsun_1920_webp from './redsun-1920.webp';
import redsun_1280_jpg from './redsun-1280.jpg';
import sakura_640_webp from './sakura-640.webp';
import sakura_1280_webp from './sakura-1280.webp';
import sakura_1920_webp from './sakura-1920.webp';
import sakura_1280_jpg from './sakura-1280.jpg';
import sunset_640_webp from './sunset-640.webp';
import sunset_1280_webp from './sunset-1280.webp';
import sunset_1920_webp from './sunset-1920.webp';
import sunset_1280_jpg from './sunset-1280.jpg';
import yurameki_640_webp from './yurameki-640.webp';
import yurameki_1280_webp from './yurameki-1280.webp';
import yurameki_1920_webp from './yurameki-1920.webp';
import yurameki_1280_jpg from './yurameki-1280.jpg';

export type GeneratedImage = {
  /** srcSet が使えない場合に表示する JPEG */
  src: string;
  srcSet: string;
  /** 元画像の実寸。width/height を出すことでレイアウトシフトを防ぐ */
  width: number;
  height: number;
  /** 読み込み前に表示する極小のぼかし画像 */
  blurDataURL: string;
};

export const images = {
  ajisai: {
    src: ajisai_1280_jpg,
    srcSet: `${ajisai_640_webp} 640w, ${ajisai_1280_webp} 1280w, ${ajisai_1920_webp} 1920w`,
    width: 5472,
    height: 3648,
    blurDataURL: 'data:image/webp;base64,UklGRsAAAABXRUJQVlA4ILQAAAAwBQCdASoUAA0APu1iqU2ppaOiMAgBMB2JbACdMoRwIsBxf+mZgV4Q0/ZGl9ErSKgnQAD+H0ZL3IQgmC942dfq2WTLhExvZqX+aQReik1+cW7x0ileWHicmBDMO3I9stD2yLEbONAvtyKPYp2sCufGf6bXjfK5DYembry+rR0QgwcW3fOoqiReZHg41Rw3FkDcbf50Hw3Zczy16hffzs0K/1N8UJmKGuOdMCS/t4S7ebOWAAA=',
  },
  amsterdam: {
    src: amsterdam_1280_jpg,
    srcSet: `${amsterdam_640_webp} 640w, ${amsterdam_1280_webp} 1280w, ${amsterdam_1920_webp} 1920w`,
    width: 2048,
    height: 1363,
    blurDataURL: 'data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAADQAwCdASoUAA0APu1iqU2ppaOiMAgBMB2JYwC7ABexwkzx2Vo/INgA/u/XkKnfsnRMeMnCsIrUWcrvVnDmMtsZvEmvP3xjxV5oDH8Gmkk+Kv+ED5+o/PMmtOrIbT5s2v1ZZR5GxVhODl3oDA/puAPKKAvYwUAnXdAAAA==',
  },
  desk: {
    src: desk_1280_jpg,
    srcSet: `${desk_640_webp} 640w, ${desk_1280_webp} 1280w, ${desk_1920_webp} 1920w`,
    width: 5585,
    height: 3719,
    blurDataURL: 'data:image/webp;base64,UklGRooAAABXRUJQVlA4IH4AAABQBACdASoUAA0APu1iqU2ppaQiMAgBMB2JZQCdG1/tv8B4/r711WTXW3UAAP4+BWm0/yrCj/LCpCYN/GG7BWb1mwXknbkTuss5vLLCcdfD3qO0O1gsQPF8waFzZDaFEdiI9nroWbFhm87JYb0QGwIxOwXmnYSJVObaakggAAA=',
  },
  hikari: {
    src: hikari_1280_jpg,
    srcSet: `${hikari_640_webp} 640w, ${hikari_1280_webp} 1280w, ${hikari_1920_webp} 1920w`,
    width: 5472,
    height: 3648,
    blurDataURL: 'data:image/webp;base64,UklGRrYAAABXRUJQVlA4IKoAAADQBACdASoUAA0APu1iqU2ppaOiMAgBMB2JbACdH8GJgWP+BnewImO4Xn1fe8dNAAD+bERwHkareDOtxFNuxWZ4Dwk51x1xGWfTnXDwqNgao35cbAkpRU38jYozSvmpb8Co63s+uB4KEP7aqPl8N12H5QABhSu8jzR/HyTc/vLUYe/nEkkZYQmwEIYHnoovy+lbOM3USi6FyOWRaXrRqX9f1A0eEVGjwIAAAA==',
  },
  kiritori: {
    src: kiritori_1280_jpg,
    srcSet: `${kiritori_640_webp} 640w, ${kiritori_1280_webp} 1280w, ${kiritori_1920_webp} 1920w`,
    width: 5472,
    height: 3648,
    blurDataURL: 'data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAAAQBACdASoUAA0APu1iqU2ppaOiMAgBMB2JagCdACK5ps46St8D8kVH4AD9pfxY8FARtfBIgP/Xoe1Qfe6d+aZfbuEo6gyQ79RL0TxdDuuwai1liiI3wgKG1kwDccnMaxhTTRWMjXP3X8DQn0FwXn5MEkalOmVd9ADtl2ZSBipauEBq6QgAAA==',
  },
  portrait: {
    src: portrait_1280_jpg,
    srcSet: `${portrait_640_webp} 640w, ${portrait_1280_webp} 1280w, ${portrait_1920_webp} 1920w`,
    width: 3648,
    height: 5472,
    blurDataURL: 'data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAAAQBQCdASoUAB4APuVgo02pJaMiMAwBIByJZQDKACHhbZslOK94/gjvxRwNpmG/HS0AAP7tTU8ZbZVdcDdbw7VxmsOn/x1oV7hSV6bRW9qZnRaP2cXtSTab9VrU8ltnlQaqYyxIOaiC7/DidGYBd58XbDKd1IgdBp4fUFfwg62gNlBvCQIAAA==',
  },
  ramune: {
    src: ramune_1280_jpg,
    srcSet: `${ramune_640_webp} 640w, ${ramune_1280_webp} 1280w, ${ramune_1920_webp} 1920w`,
    width: 5472,
    height: 3648,
    blurDataURL: 'data:image/webp;base64,UklGRogAAABXRUJQVlA4IHwAAADQAwCdASoUAA0APu1iqU2ppaQiMAgBMB2JagC1IUAAiTwdw1Bm0OgA/t7scgpW5MCyrmWAdlxDrDXkReaBhoRCDxzCMMZ5Acs9xQqmVIYuQE9qdAQc7zwxg0/so+MTTYEiIkk6uNXoUgLW/UDIFywdJVVIayxVceucgAAA',
  },
  redsun: {
    src: redsun_1280_jpg,
    srcSet: `${redsun_640_webp} 640w, ${redsun_1280_webp} 1280w, ${redsun_1920_webp} 1920w`,
    width: 5472,
    height: 3648,
    blurDataURL: 'data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAAAwBACdASoUAA0APu1kqU2ppaOiMAgBMB2JYgCsGuAAWaHZVEm1Sc7Na+AA/uQOtWU2oV16/dx2ivB35JOtX5JEl/WfEHa8GGWRAwCCySzgM92ImJSv91uph8S1YnAG3AA=',
  },
  sakura: {
    src: sakura_1280_jpg,
    srcSet: `${sakura_640_webp} 640w, ${sakura_1280_webp} 1280w, ${sakura_1920_webp} 1920w`,
    width: 6000,
    height: 4000,
    blurDataURL: 'data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAADwAwCdASoUAA0APu1iqU2ppaOiMAgBMB2JZQCsABSqazaLCWEl7RKAAPk7FSRfIABD33PbIH3harGzj52Xn7GY3lRFl9ErkfwJopX4/pLTKFqyjqVPUihILWe3t1TJ3dNHHK8z1I0417Q3pupQMxLhw8aRVaOUt3auAA==',
  },
  sunset: {
    src: sunset_1280_jpg,
    srcSet: `${sunset_640_webp} 640w, ${sunset_1280_webp} 1280w, ${sunset_1920_webp} 1920w`,
    width: 5472,
    height: 3648,
    blurDataURL: 'data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADwAwCdASoUAA0APu1iqU2ppaOiMAgBMB2JYwCdACPblD2wV5AnRtowAP1wEYWsSzmB98nnWlRmp187oCYKkeoVz5o8Pk2MDUALDbfo1zkeZl0NZHxMt4q+nQBXjxB3iCI7hn++cAA=',
  },
  yurameki: {
    src: yurameki_1280_jpg,
    srcSet: `${yurameki_640_webp} 640w, ${yurameki_1280_webp} 1280w, ${yurameki_1920_webp} 1920w`,
    width: 5472,
    height: 3648,
    blurDataURL: 'data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAADQAwCdASoUAA0APu1iqk2ppaQiMAgBMB2JZwAAUoWH0f8q0rO/zygA/gStY5v9TCS2HTPXZ+on5iNblrKghvY9SWCTJ6E/Jf+UWbqRqfe0K6ayL6YQ1NDmMUNrzFscv4BC358tzA9kY4AA',
  },
} satisfies Record<string, GeneratedImage>;
