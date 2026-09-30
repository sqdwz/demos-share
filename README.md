# Demos & Share

网页演示与分享页收录仓库。

## 结构

- `demos/index.json`：演示目录
- `demos/<slug>/`：每个演示页的静态文件

## 发布约定

以后新增分享页时，默认按以下流程发布：

1. 将网页文件写入 `demos/<slug>/`。
2. 在 `demos/index.json` 注册项目。
3. 至少填写 `slug`、`title`、`description`、`url`、`repository`、`tags`、`status`、`created_at`。
4. `created_at` 使用 `YYYY-MM-DD` 格式，避免聚合站显示“日期待补充”。
5. 更新目录根字段 `updated_at`。
6. 提交到 `main` 后由现有 GitHub Pages / 聚合信息平台链路自动更新。

示例：

```json
{
  "slug": "example-tool",
  "title": "示例工具",
  "description": "一句话说明工具用途。",
  "url": "https://sqdwz.github.io/demos-share/demos/example-tool/",
  "repository": "https://github.com/sqdwz/demos-share/tree/main/demos/example-tool",
  "tags": ["工具"],
  "status": "public",
  "created_at": "2026-09-30"
}
```

> 不确定历史项目创建日期时不要猜测，可暂时不补；新项目从发布时开始完整登记。
