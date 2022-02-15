const practice = () => {
  // ！2月14日の学習

  // 文字列から数値への変換
  let number = Number("5");
  console.log(number);

  // 真偽値の文字列化
  number = false;
  console.log(number);
  console.log(number.toString());


  // toFixedメソッド数値の文字列化と()で指定した桁数の分小数点を残す
  let num = 123.4567;
  console.log(num.toFixed(10));
  console.log(num.toExponential(3));
  console.log(num.toPrecision(3));

  // 配列の文字列化
  console.log([1, 2, 3].toString());

  let day = new Date(2015, 0, 1);
  console.log(day);

  // 内部表現（1970年1月1日からの経過時間を何ミリ秒で表す）
  // valueOfメソッドはオブジェクトを基本形に直す役割
  console.log(day.valueOf());

  // これらはtoStringメソッドやvalueOfメソッドを用いて型変形がなされている。
  console.log(Number([]));
  console.log(Number([99]));

  // 変数の定義のみ行った場合、未定義でundefinedとなる。
  let i;
  console.log(i);
  i = 100;
  console.log(i);

  // 変数はカンマで区切って定義が可能。定数は初期値の設定が必須。
  let num1 = 1, num2 = 2;
  console.log(num1);
  console.log(num2);
  // const NUM1; これはエラーに。

  // constの定数名は大文字にするのが一般的
  const NUM3 = 3;
  console.log(NUM3);

  // 

  // 分割代入
  let [x1, x2] = [2, 3];
  console.log([x1, x2]);
  console.log(x1);
  [x1, x2] = [x1 + 1, x2 + 1];
  console.log([x1, x2]);
  [x1, x2] = [x2, x1];
  console.log([x1, x2]);

  // 分割代入を使ったfor文
  let o = {y1: 2, y2: 3}
  for (const [name, value] of Object.entries(o)) {
    console.log(name, value);
  }

  // 分割代入は左辺、右辺の変数の数が会う必要はない。
  let [z1, z2] = [1];
  console.log([z1, z2]);
  [z1, z2] = [1,2,3,4];
  console.log([z1, z2]);
  [,z1,,z2] = [1,2,3,4];
  console.log([z1, z2]);

  // また、余った文の数を一つの変数にまとめて代入も可能。 ...(変数名）で記述した変数名に入る。
  [z1, ...z2] = [1,2,3,4];
  console.log([z1, z2]);
  console.log(z2);

  // 分割代入のメリットは必ず配列で準備しなくても良いという点。ループ文で回して代入なども行うことが可能。
  let [first, ...rest] = "Hello";
  console.log(first);
  console.log(rest);

  // プロパティのアクセス式
  let t = {x: 1,y:{z: 2}};
  console.log(t.x);
  console.log(t["x"]);

  // アクセス式の「.」の前に?をつけることでエラーを回避ができる。
  // ?.の後は?.の左側にある式がnullやundefinedの場合は即座に式全体がundefinedに変わる。
  let g = {a: null}
  console.log(g.a?.b);

  // 条件付き呼び出し式の使い方。
  // 使わない、従来のやり方。
  function square1 (x, log) {
    if (log) {
      log(x);
    }
    return x * x;
  }
  // 条件付き呼び出し式を使う。
  function square2 (x, log){
    log?.(x);
    return x * x;
  }

  

}

window.addEventListener("load", practice);