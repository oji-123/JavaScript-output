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

  // !!2月15日の学習

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

  // !!2月16日の学習

  // in演算子 オブジェクトや配列に指定したものが存在するかどうかを真偽値で返す
  let point = {x: 1, y: 2};
  console.log("x" in point);
  console.log("toString" in point); //オブジェクトはtoStringメソッドを持つため、trueに

  let data = [6,7,8];
  console.log("0" in data);
  console.log(1 in data);
  console.log(3 in data);

  // 算術演算を伴う代入演算子は値の副作用が伴う場合、同じ処理をしているように見えても異なる結果を返すことがある。
  i = 0;
  console.log(data[i++]);
  console.log(data[i++]);
  console.log(data[i++]);
  console.log(data[i++]);
  
  data = [6,7,8];
  i = 0;
  console.log(data[i]);
  data[i++] *= 2;
  console.log(data[0]);

  data = [6,7,8];
  i = 0;
  console.log(data[i]);
  data[i++] = data[i++] * 2;
  console.log(data[0]);

  // ?: 条件演算子 オペランドが３つ必要。if文の省略にも使える。
  // 第一オペランドを評価し、trueの場合は第二オペランドを、falseの場合は第三オペランドを返す。

  let username;
  let greeting = "Hello" + (username ? username : "there" );
  console.log(greeting);

  username = "test";
  greeting = "Hello" + (username ? username : "there" );
  console.log(greeting);

  //typeof演算子 データの型を表す文字列を返す。
  // testは未定義のundefinedなので、文字列"undefined"を返す。
  let test;
  console.log(typeof test);

  // delete演算子 オブジェクトのプロパティや配列の要素を削除する
  let box = {x: 1, y: 2};
  console.log("x" in box);
  delete box.x;
  console.log("x" in box);

  // 2月17日学習分

  // if文 usernameがnull、undefined,NaNの場合に名前をつける文
  // 単行オペランドに対して!演算子を使うと、null、undefined,NaNの場合trueを返す。

  if (!username) {
    username = "John";
    console.log(username);
  } else {
    console.log(username);
  }

  // if文を書く際の注意点
  // JSのif文はインデントで文を判断せず、ifの入れ子の文を書くと、elseは直近のifに対して動作する。
  i = j = 1;
  k = 2;
  if (i === j)
    if (j === k)
      console.log("i equals k");
  else
    console.log("i doesn't equal j");

  // 以上のコードを作成者の意図に沿って書くのであれば、{}を用いて次のようにする必要がある。
  i = j = 1;
  k = 2;
  if (i === j){
    if (j === k)
      console.log("i equals k");
  } else {
    console.log("i doesn't equal j");
  }

  // switch分
  // breakを省略をすることも可能で、省略が必要になることも稀にある。
  // caseは処理の開始点を決めているだけなので、breakがない場合はそれ以下の文も実行されることになる。

  let n = 0;
  switch(n){
    case 1:
      // 処理１
      break
    case 2:
      // 処理２
      break
    default:
      // caseに全て合致しない時の処理
      break
  }

  // do/while文
  // 処理を実行させ、while文でループを回す。While文の処理と判定処理の順序を逆にする。
  // while文と大きく異なるのは,doが必要で、最後には;(セミコロン)が必要。
  // また、一番最初の処理は必ず行われる。

  do {
    console.log(n);
    n++;
    // 処理を記述
  }
  while ( n < 3 );//条件式

  // 2月18日学習分

  // for/of文
  data = [1,2,3,4,5,6,7,8,9];
  let sum = 0;

  for (let element of data){
    sum += element;
  }
  console.log(sum);

  // for/of文はオブジェクトに対してそのまま使うことはできない。(TypeErrorに)
  // 使う場合は
  o = {x: 1, y: 2, z: 3};
  let keys = ""
  for(let k of Object.keys(o)){
    keys += k;
  }
  console.log(keys);
  // また、ここで用いているObject.keys()メソッドはオブジェクトのキーを配列として返すことができるので、
  // for/ofメソッドを用いることが可能

  // Object.entries()メソッドはオブジェクトのキーと値を配列に入れ、プロパティの数だけ配列の中に用意する。
  console.log(Object.entries(o));

  // for/of文は文字列に対して使うことも可能
  // 何の文字がどれだけあるかカウント
  let frequency = {};
  for(let letter of "mississippi"){
    if (frequency[letter]) {
      frequency[letter]++;
    } else {
      frequency[letter] = 1;
    }
  }
  console.log(frequency);

  // for/in文
  // for/of文はオブジェクトにそのまま使用することができないが、for/in文はオブジェクトに対してそのまま使うことができる。
  o = {x: 1, y: 2, z: 3};
  for(let i in o){
    console.log(o[i]);
  }

  // continueの使い方。下記の場合は、データがない時は処理を飛ばして次のループへ行くようにできる。
  sum = 0
  data = [1,2,3,4,,,7,8,9];
  for(let i = 0; i < data.length; i++) {
    if(!data[i]) continue;
    sum += data[i];
  }
  console.log(sum);

  
  



}

window.addEventListener("load", practice);