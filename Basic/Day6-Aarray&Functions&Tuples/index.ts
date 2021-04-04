/*函式不需要積極對參數註記的情形*/

// 回呼函式 Callback Functions

let numbers = [1, 2, 3, 4, 5, 6]
let mappedNumbers = numbers.map(num => num * 2)

// params會自動推定型別，因為可以從numbers中推定出來



// 重點 1. 函式的參數不需被註記的情況
/*
  1.回呼函數在某些情況下不需對輸入參數部分進行註記，
    原因是藉由泛用型別 Generics 的機制，
    我們可以設計出讓 TypeScript 能夠藉由泛用型別參數所獲取的外部型別資訊，
    提前預知到未來的程式碼執行的狀況下，對於各種變數、函式的輸入輸出、
    類別屬性與方法的型別等等 ... 的型別推論。

  2.型別化名（Type Alias）的運用在大部分的狀況下也可以取代積極註記的必要性
*/


/*元組的定義與型別推論 */

// 重點 2. 元組值指派行為
/*
  當元組值被直接指派到變數時，必進行積極型別註記
  而被指派元組型別的變數也必需進行積極註記
  綜合以上觀點，只要遇到元組必須要進行註記行為
*/

let ACar = ['BMW', 'motor', 'silver', new Date(2019, 2, 17)]
let BCar = ['Nissan', 'motor', 'silver', new Date(2019, 3, 17)]
let CCar = ['Toyota', 'motor', 'black', new Date(2019, 2, 5)]

let BMW: [string, string, string, Date] = ['BMW', 'motor', 'silver', new Date(2019, 2, 17)]
let NISSAN: [string, string, string, Date] = ['Nissan', 'motor', 'silver', new Date(2019, 3, 17)]
let TOYOTA: [string, string, string, Date] = ['Toyota', 'motor', 'black', new Date(2019, 2, 5)]

/*型別化名（Type Alias）*/

// type <custom-type-name> = <your-type>;

type Vehicle = [string, string, string, Date]

let BMW1: Vehicle = ['BMW', 'motor', 'silver', new Date(2019, 2, 17)]
let NISSAN1 = <Vehicle>['Nissan', 'motor', 'silver', new Date(2019, 3, 17)]
let TOYOTA1 = ['Toyota', 'motor', 'black', new Date(2019, 2, 5)] as Vehicle

// 重點 3. 陣列與元組的差異
/*
  型別陣列裡，只要裡面的元素之型別為此陣列規定的範疇內(比如說 (number | string)[] 只能存取數字跟字串）
  ，除了沒有限定元素的數量外，順序也不限定；元組型別則是除了元素的個數必須固定外，
  格式必須完全吻合，因此裡面元素型別的順序也是固定。
*/

let BMW3 = {
  brand: 'BMW',
  type: 'motor',
  color: 'black',
  manufactureDate: new Date(2019, 3, 19)
}