# ToDoアプリ（React + PHP + JSON）

## 概要
ReactとPHPで作るシンプルなToDoアプリ。データはJSONファイルに保存。

## 環境構築
1. Node.jsとnpmをインストール
2. `npm install` → 依存インストール
3. `npm run dev` → 開発サーバー起動
4. XAMPPのhtdocsに`api`フォルダ配置、PHPファイルと`data/todos.json`を設置
5. PHPサーバー起動（Apache）

## 使い方
- `http://localhost:5173`にアクセス
- タスクを入力し「追加」ボタンをクリック

## API
- GET `/api/get_todos.php` → ToDo一覧取得
- POST `/api/add_todo.php` → 新規ToDo追加（JSON形式：`{"task": "買い物"}`）

## 注意事項
- CORS対策済み
- JSONファイル書き込み権限を確認してください

