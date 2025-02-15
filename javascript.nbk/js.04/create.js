"use strict";

async function loadData() {
    try {
        const response = await fetch("data.json");
        const data = await response.json();
        //配列に変換

        // async awaitで非同期で持ってくる
        // async functionの中でawaitを使うと、値が返るまでそこで処理をストップし、同期処理っぽく書くことができる
        // fetchを使ってリクエストを送る

        if (!response) {
            throw new Error(
                "Network response was not ok " + response.statusText
            );
        }

        // 読み込みが成功した場合の処理
        console.log(data);

        // データをテーブルに表示する
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = "";
        data.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.color}</td>
                <td>${item.form}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        // 読み込みに失敗した場合の処理
        console.error("An error occurred while fetching the data:", error);
    }
}

// ボタンがクリックされたときにloadDataを実行
document.getElementById("btn").addEventListener("click", loadData);

// fetchはPromiseベースのAPIで、非同期リクエストを行います。
// response.okでレスポンスが成功したかどうかをチェックします。
// response.json()でレスポンスをJSONとしてパースします。
// タイムアウトを設定するためには、Promise.raceを使って、一定時間後にリジェクトするPromiseを組み合わせます。
// jQueryを使わずにJavaScriptだけで同様の機能を実装することができます。

const btn = document.getElementById("js-btn");
