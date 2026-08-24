# 服务器部署

1. 将 `official.lingshu.site` 的 DNS A/AAAA 记录指向服务器。
2. 在项目根目录创建 `.env`，设置强随机值：`POSTGRES_PASSWORD=...`。
3. 将有效证书保存为 `deploy/certs/fullchain.pem` 与 `deploy/certs/privkey.pem`。
4. 执行 `docker compose up -d --build`。迁移服务会先创建/更新数据库结构，再启动应用。
5. 检查 `https://official.lingshu.site/api/health` 返回 `{"status":"ok"}`。

仅对公网开放 TCP 80/443；不要开放 3000 或 5432。生产环境应由证书自动续期工具管理证书，并配置异地加密数据库备份、日志轮转和可用性监控。
