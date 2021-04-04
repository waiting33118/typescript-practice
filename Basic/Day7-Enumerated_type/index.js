"use strict";
/*列舉（enumerate）*/
// 它是一連串東西的集合
// 這些東西同時具備主觀上強烈的共通性（Similarity）以及獨有特質（Uniqueness）
// 重點 1. 列舉的意義 Enumerated Type
/*
  1.若有一系列的資料集合 S：
  S 是集合 —— 數學意義上具有確定性、互異性以及無序性。
  互異性：元素互不重複
  無序性：元素沒有排列順序
  確定性：家庭可以用集合表示為有生兒子，有生女兒，亦或者兩性都可能有生又或者是頂客族（根本不生），
        我們確定只會有四種狀況，但不會生出 1/2 個女兒或 3.1415926 個兒子

  2.由於每筆屬於 S 的資料具有互異性，換句話說，集合裡的元素本身就具備獨有特質

  3.若這些互異性的元素（或者是資料），對人的主觀來說擁有強烈共通特質的話（比如顏色有紅、黃、藍、綠等顏色，都是指顏色本身），
    則我們稱此集合的資料具有主觀上強烈的共通性（主觀感覺上，沒有資料共通性的集合，
    比如：假日會做的事情，每個人基本上會不一樣，集合起來也會天差地遠，範疇過廣，主觀感覺上相關性就比較差；
    又或者是故意把所有雜項塞在一起，其主觀感覺上的關聯性就比較微弱）

  簡而言之，就是一種數學意義上的集合結合主觀認為具備強烈共通特質
*/
/*列舉 V.S. 陣列 */
// 陣列就違反數學意義上集合的性質：互異性
// 因此遇到元素可能重複的案例，不能用列舉，選擇陣列比較適合
/*列舉 V.S. 元組*/
// 元組則違反了集合的定義裡所謂的無序性
// 元組裡的值必須在一定排列下才會顯得有意義
// 重點 2. 實務上應用列舉的時機
/*
  單純已經符合使用列舉的標準：
    資料互不重複，符合資料獨有性
    資料排序上沒太大意義，符合資料無序性

  實務上使用列舉的時機，除了符合標準外，其資料形式沒有這些狀況：
    自組型擴張：資料可以運用原本的資料組合進行擴充（檔案權限可分：讀取、寫入以及執行，但是這三種模式可以擴張成共 8 種情形）
    應用型擴張：資料在未來的變動機率大，進行擴充性的機會也相對就高（車站站線有很大機率會擴建，造成資料可被列舉種類擴大）
 */
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
    WeekDay[WeekDay["Monday"] = 1] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
    WeekDay[WeekDay["Friday"] = 5] = "Friday";
    WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
})(WeekDay || (WeekDay = {}));
let weekDayOfBirthday = WeekDay.Wednesday;
