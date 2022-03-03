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

  // 2月19日学習分
  
  // オブジェクトの性質
  // 変数xがオブジェクトの参照をしているときに、let y = x;を実行すると、
  // yにはxが代入されるのではなく、xが参照しているオブジェクトを（yが)参照するという挙動になる。
  // オブジェクトのコピーが代入されるわけではない。
  // なので、下記の変数subはmainを代入しているようなコードになっているが、
  // 厳密にはsubは{x: 1, y: 2}というオブジェクトを参照しており、
  // 変数subを使って値を操作すると、変数mainの値にも変化が起きる。

  let main = {x: 1, y: 2};
  let sub = main;
  console.log(main);
  console.log(sub);
  sub.x = 5;
  console.log(main);
  console.log(sub);

  // 2月20日学習分

  // newを使ったオブジェクト生成
  let ob = new Object(); // 空のオブジェクト
  console.log(ob);
  let a = new Array(); // 空の配列
  console.log(a);
  let d = new Date(); // 現在時刻のDateオブジェクト
  console.log(d);
  let r = new Map(); // マップオブジェクト
  console.log(r);

  // 2月21日学習分

  // Object.create()メソッド
  // オブジェクトの生成が行えるメソッド

  let o1 = Object.create({x: 1, y: 2});
  console.log(o1);
  console.log(o1.x + o1.y);

  // オブジェクトの継承
  // 下記では、o3というオブジェクトはo2のオブジェクトを継承している。
  // また、オブジェクト自体はそれぞれprototypeというのを継承しており、
  // o3はo2というオブジェクトと、Object.prototypeから継承をする。
  
  let o2 = Object.create({x: 1});
  let o3 = Object.create(o);
  o3.y = 2
  o3.prototype = 10;
  console.log(o3.x);
  console.log(o3.y);
  console.log(o3.prototype);

  // 継承はされていても、継承先(ここではc)から継承元(ここではunit)にアクセスし、
  // 変更しても、継承元の値を変更することはできない。

  let unit = {r: 1}
  let c = Object.create(unit);
  c.x = 1, c.y = 2;
  console.log(c.r);
  c.r = 5;
  console.log(c.r);
  console.log(unit.r);
  
  // プロパティのアクセスエラー
  // 基本的に未定義のプロパティに対して参照を行なってもエラーは吐かない。

  let i1 = {};
  console.log(i1.x); // undefined
  // ただし、undefinedのものに対してプロパティを読み出すとエラーが発生する。
  // console.log(i1.x.length); この文はエラーに。

  // 2月22日学習分

  // hasOwnProperty()メソッド
  // あるオブジェクトが指定したプロパティを持つかどうか判別するためのメソッド

  let h = {x: 1, y: 2};
  console.log(h.hasOwnProperty("x"));
  console.log(h.hasOwnProperty("z"));
  console.log(h.hasOwnProperty("toString"));

  // 2月24日学習分

  // Object.assign()メソッド
  // オブジェクトの上書き、追加が行うことのできるメソッド

  o1 = {x: 1};
  o2 = {x: 2, y: 3};
  Object.assign(o1, o2);
  console.log(o1);
  // 上記のように行うと、元のデータは上書きされる。
  // 同一のキーがあり、上書きしたくないときは、

  o1 = {x: 1};
  o2 = {x: 2, y: 3};
  o1 = Object.assign({}, o2, o1);
  console.log(o1);

  // スプレッド演算子（構文）
  // オブジェクトの中でのみ使える演算子で、オブジェクトを他のオブジェクトの中にコピーすることができる。
  // スプレッド演算子は反復可能なオブジェクトに対してのみ扱うことができる。

  o1 = {x: 1};
  o2 = {y: 1, z: 2};
  o3 = {...o1, ...o2, a: 10};
  console.log(o3);

  // ゲッター関数とセッター関数
  // ゲッター関数は、引数を持たず、通常のプロパティのようにアクセスができる
  // また、「＝」を使って記述すると、セッター関数が呼び出され、代入される（引数が必要
  // さらに、ここで注目するのは、オブジェクトのプロパティとしてgetとsetが定義されていること

  let user = {
    firstName: "John",
    lastName: "Doe",
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
      [this.firstName, this.lastName] = value.split(" ");
    },
  };

  user.fullName = "Kit Harington";
  console.log(user.fullName);

  // 2月25日学習分

  // 配列の定義について
  // 配列の中身は空にすることができる

  k = [1, ,3];
  console.log(k);
  console.log(k[1]);

  // また、下記の場合
  k = [ , , ];
  console.log(k.length); // => 2
  // 最後のカンマは無視されるので、lengthメソッドを使うと、長さは２になる

  // Arrayコンストラクタ
  a = new Array(); // 空の配列の生成
  console.log(a);

  a = new Array(10); // 配列の要素が10ある空の配列
  console.log(a);

  a = new Array(1, 2, 3); // 複数記述すると、それらが要素として存在する配列に。
  console.log(a);

  // Array.of()関数
  // Arrayコンストラクタと似ているが、異なる挙動をするのは、一つだけ引数を与えたとき

  a = Array.of(10); // これは、10という要素を持った配列になる。
  console.log(a);

  // Array.form()関数
  // スプレッド演算子と似た挙動を行う

  a = new Array(1, 2, 3);
  console.log(a);

  b = Array.from(a);
  console.log(b.length);

  // インデックス番号以外での配列の要素の定義
  // 配列はオブジェクトのようなものでもあるため、インデックス番号以外で要素を定義すると、
  // プロパティを定義したように動作する。また、lengthメソッドには影響しない

  a[1.23] = true
  console.log(a);
  console.log(a.length);

  // lengthメソッドは長さを配列の長さを返すメソッドだが、
  // これを使って要素の削除なども行うことができる

  a = new Array(1, 2, 3);
  a.length = 2;
  console.log(a);
  // 要素数を増やすこともできるが、疎な配列となる

  a.length = 5;
  console.log(a); // インデックス番号3~5は空の配列に

  // 2月28日学習分

  // push()メソッドでの要素の追加
  // 末尾に要素を加える
  a = [];
  a.push("zero");
  console.log(a);
  a.push("one", "tow");
  console.log(a);

  // deleteメソッド
  a = [1,2,3];
  delete a[2]; // インデックス番号が２のものを削除
  console.log(a);
  console.log(a.length); // 配列の長さは３のまま

  // forEachメソッド
  // 引数は３つ指定することができる
  // 第一引数に関数、第二引数がインデックス、第三引数は配列自身
  // forEach関数では、通常のループ文のようにbreakに該当するものはなく、
  // 全ての配列要素を渡すまで終了できない

  data = [1,2,3,4,5];
  sum = 0
  data.forEach(value => {sum += value; });
  console.log(sum);

  data.forEach(function(v, i, a) {a[i] = v + 1});
  console.log(data);

  // 3月1日学習分

  // mapメソッド
  // 配列の一つ一つの要素に対して処理を行い、新しい配列を返す
  // 元の配列を操作はしない

  a = [1, 2, 3];
  b = a.map(x => x*x);
  console.log(b);
  console.log(a);

  // filterメソッド
  // 引数は２つ与えることができる
  // 第一引数は配列のそれぞれの中身の値、第二引数はインデックス番号を与える

  a = [1, 2, 3, 4, 5];
  console.log(a.filter(x => x < 3));
  console.log(a.filter((x,i) => i % 2 === 0 ));

  // find()メソッドとfindIndex()メソッド
  // これらのメソッドはfilterメソッドと似た挙動を示す
  // ただし、一つ該当する要素のみを返す

  a = [1, 2, 3, 4, 5];
  console.log(a.find(x => x === 2)); // => 2 要素の値が2と等しくなる要素の値を返す
  console.log(a.findIndex(x => x >= 3)); // => 2 要素の値が３以上になるのはインデックス番号を返す
  
  // every()メソッド
  // 配列に対して全ての真偽値がtrueであれば、trueを返す。それ以外はfalse

  console.log(a.every(x => x < 10)); // => true
  console.log(a.every(x => x < 3)); // => false

  // some()メソッド
  // 配列に対して一つでも条件にtrueを返す要素が有る場合はtrueを返す

  console.log(a.some(x => x === 5)); // => true
  console.log(a.some(x => x === 10)); // => false

  // flat()メソッド
  // 配列の展開を行う

  console.log([1, [2, 3]].flat()); // => [1, 2, 3]
  console.log([1, [2, [3, 4]]].flat()); // => [1, 2,[3, 4]]
  console.log([1, [2, [3, 4]]].flat(2)); // => [1, 2, 3, 4] 引数は何回展開を行うかを指定できる

  // 3月2日学習分

  // sliceメソッド
  // 配列の指定した範囲を切り取る

  a = [1,2,3,4,5];
  console.log(a.slice(3)); // => [4,5];
  console.log(a.slice(1,-2)); // => [2,3];

  // spliceメソッド()
  // 配列を切り取り、元の配列も編集を行うメソッド

  a = [1,2,3,4,5];
  console.log(a.splice(3)); // => [4,5]が返り値に。
  console.log(a); // => [1,2,3]元の配列aは切り取られる

  a = [1,2,3,4,5];
  a.splice(2,0,"a","b");
  console.log(a);

  // また、第二引数を指定することで切り取る数を指定することができ、
  // それ以降の要素を配列に加える
  a = [1,2,3,4,5];
  console.log(a.splice(2,2,"a","b"));
  console.log(a);

  // fill()メソッド
  // 指定した範囲の配列要素を変更することができる

  console.log(a = new Array(5));
  console.log(a.fill(0)); // => [0,0,0,0,0]
  console.log(a.fill(8,2,-1)); // => [0,0,8,8,0]

  //copyWithinメソッド()
  // 元の配列が変更される
  // 配列の中身を指定した要素にコピーすることができる

  a = [1,2,3,4,5];
  console.log(a.copyWithin(2));
  console.log(a);

  a = [1,2,3,4,5];
  console.log(a.copyWithin(0,-2));

  // 3月3日学習分

  // indexOf()メソッドとlastIndexOf()メソッド
  // 配列の中の要素を検索することができる
  // indexOf()メソッドは配列の先頭から検索し、lastIndexOf()メソッドは逆になる

  a = [0,1,2,1,0];
  console.log(a.indexOf(1));
  console.log(a.lastIndexOf(1));
  console.log(a.indexOf(3)); // => -1 見つからない時は-1を返り値とする

  // includes()メソッド
  // 配列の中に指定した要素が含まれているかどうかを真偽値によって返す

  a = [1,true,"10"];
  console.log(a.includes(true));
  console.log(a.includes(10));

  // sort()メソッド
  // 引数を指定しない場合はアルファベット順にソートする

  a = ["banana", "cherry", "apple"];
  console.log(a.sort());

  a = [1111,222,33,4];
  a.sort(function(a,b){
    return a - b ; // 数値順に並び替え 
  })
  console.log(a);

  // reverse()メソッド
  // 配列の順序を反転させるメソッド

  a = [1111,222,33,4];
  console.log(a.reverse());
  
  

}

window.addEventListener("load", practice);