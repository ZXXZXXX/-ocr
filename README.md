# ocr识别测试阶段

做一个web界面，界面中是表格，每一行都是每次的识别记录。右上角是一个按钮“新建识别”，点击后用户可以打开一个抽屉页，在里面上传图片到送货单、出货传票两个板块，随后点击“开始ocr识别”，点击后，抽屉页关闭，变成右下角的一个状态小弹窗，展示识别进度（可以关闭，不会终止识别过程），同时表格里最上方也会新增该条记录，并显示当前识别进度，识别完成后也会出现识别置信度评分。识别完成后，用户可以查看识别结果，若该次识别置信度低于80，会把置信度低的文字部分用标识标记出来，方便用户人工核验，且允许用户在右边文字框内手动更改识别结果。更改完成后，用户可以将识别结果用json的形式下载下来。

这是算法提给我的背景跟需求，我是产品。我需要输出界面

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://ocr-oasis.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/362b6064-14ad-405b-b067-1a5429d04428).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
