# Deploy Ô Dù Đại Phát lên Vercel

## Trạng thái package manager

Project hiện đang dùng npm để deploy trên Vercel.

- Không dùng pnpm trong cấu hình hiện tại.
- `package.json` không có `packageManager`.
- Không có `pnpm-lock.yaml`.
- Không có `package-lock.json` trong source hiện tại vì môi trường kiểm tra trước đó bị timeout khi chạy `npm install`; không tạo lockfile thủ công.

## Cấu hình Vercel khuyến nghị

- Framework preset: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: để mặc định, Next.js/Vercel tự xử lý `.next`
- Node.js version: 20.x, đã khai báo trong `package.json` qua `engines.node`

Không cần cấu hình `vercel.json` nếu dùng preset Next.js mặc định.

## Cách test local

Chạy lần lượt:

```bash
npm install
npm run typecheck
npm run build
npm run start
```

## Lưu ý quan trọng

- Chỉ commit `package-lock.json` nếu file này được tạo thật bởi `npm install` thành công.
- Không tạo `package-lock.json` thủ công.
- Không thêm lại `packageManager: pnpm@...` nếu không dùng pnpm và không có `pnpm-lock.yaml`.
- Không commit `node_modules`, `.next`, file zip cũ hoặc cache build.

## Thông tin thương hiệu

- Website chính: https://odudaiphat.com
- Website phụ: https://odungoaitroi.com
- Số điện thoại/Zalo: 0349596898
