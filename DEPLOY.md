# GitHub Pages デプロイ手順

## 1. リポジトリにプッシュ

まず、変更をGitHubにプッシュします：

```bash
git add .
git commit -m "GitHub Pagesデプロイ設定を追加"
git push origin main
```

## 2. GitHub Pagesの設定

### 方法1: GitHub Actionsを使用（推奨）

1. GitHubリポジトリのページを開く
2. **Settings** タブをクリック
3. 左サイドバーから **Pages** をクリック
4. **Source** セクションで：
   - **Deploy from a branch** を選択
   - **Branch** を `gh-pages` から **GitHub Actions** に変更
5. **Save** をクリック

### 方法2: ブランチからデプロイ（旧方式）

1. GitHubリポジトリのページを開く
2. **Settings** タブをクリック
3. 左サイドバーから **Pages** をクリック
4. **Source** セクションで：
   - **Deploy from a branch** を選択
   - **Branch** を `main` に設定
   - **Folder** を `/ (root)` に設定
5. **Save** をクリック

## 3. カスタムドメインの設定

### 3.1. GitHub側の設定

1. リポジトリの **Settings** > **Pages** に移動
2. **Custom domain** セクションに `profile.nanyanen.net` を入力
3. **Save** をクリック
4. **Enforce HTTPS** にチェックを入れる（推奨）

### 3.2. DNS設定（ドメインプロバイダー側）

ドメインプロバイダーのDNS設定で、以下のレコードを追加：

**Aレコード（IPv4）:**
```
Type: A
Name: @ (または profile)
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
TTL: 3600
```

または

**CNAMEレコード:**
```
Type: CNAME
Name: profile (または @)
Value: nanyanen87.github.io
TTL: 3600
```

**注意:** `@` レコードはルートドメイン用です。サブドメイン（`profile.nanyanen.net`）の場合は、`profile` をNameに設定します。

### 3.3. DNS設定の確認

DNS設定が反映されるまで数時間かかる場合があります。確認方法：

```bash
# Aレコードの場合
nslookup profile.nanyanen.net

# CNAMEレコードの場合
nslookup profile.nanyanen.net
```

## 4. デプロイの確認

### 4.1. GitHub Actionsの確認

1. リポジトリの **Actions** タブをクリック
2. 最新のワークフロー実行を確認
3. **Deploy to GitHub Pages** ジョブが成功していることを確認

### 4.2. サイトの確認

- GitHub Pages URL: `https://nanyanen87.github.io/personal-branding-site-test/`
- カスタムドメイン: `https://profile.nanyanen.net`

## 5. トラブルシューティング

### デプロイが失敗する場合

1. **Actions** タブでエラーログを確認
2. リントエラーがある場合は修正：
   ```bash
   npm run lint
   npm run lint:fix
   ```
3. ビルドエラーがある場合は確認：
   ```bash
   npm run build
   ```

### カスタムドメインが反映されない場合

1. DNS設定が正しいか確認（上記の3.2を参照）
2. DNSの反映に時間がかかる場合があります（最大48時間）
3. GitHubの **Settings** > **Pages** でカスタムドメインが正しく設定されているか確認
4. **Enforce HTTPS** を有効にすると、SSL証明書の設定に時間がかかる場合があります

### サイトが404エラーになる場合

1. `astro.config.mjs` の `site` と `base` 設定を確認
2. `public/CNAME` ファイルが正しく存在するか確認
3. GitHub Pagesの設定で正しいブランチ/フォルダが選択されているか確認

## 6. 今後の更新方法

mainブランチにプッシュすると、自動的にデプロイされます：

```bash
git add .
git commit -m "更新内容"
git push origin main
```

デプロイは数分で完了します。**Actions** タブで進行状況を確認できます。

